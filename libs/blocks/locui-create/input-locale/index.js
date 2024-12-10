import { useState, useEffect } from '../../../deps/htm-preact.js';
import {
  nextStep,
  prevStep,
  locales,
  localeRegion,
  project,
  locSelected,
  setProject,
  setLocale,
  updateDraftProject,
} from '../store.js';
import { LOCALIZATION_TYPES } from '../utils/constant.js';

export default function useInputLocale() {
  const [selectedRegion, setSelectedRegion] = useState(
    locSelected.value?.selectedRegion || {},
  );
  const [selectedLocale, setSelectedLocale] = useState(
    locSelected.value?.selectedLocale || [],
  );
  const [activeLocales, setActiveLocales] = useState(
    locSelected.value?.activeLocales || {},
  );

  const [apiError, setApiError] = useState('');

  useEffect(() => {
    if (project.value.type === LOCALIZATION_TYPES.rollout
      || project.value.type === LOCALIZATION_TYPES.translation) {
      locales.value = locales.value.filter((locItem) => locItem.workflow !== 'Transcreation' && locItem.livecopies !== '');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project.value.type]);

  const findLanguageForLocale = (locale) => locales.value.find((lang) => lang.livecopies.split(',').includes(locale));

  const transformActiveLocales = () => {
    const groupedLocales = {};
    const languageCodes = {};
    Object.entries(activeLocales).forEach(([locale, language]) => {
      const langObj = findLanguageForLocale(locale);
      if (!langObj) return;

      if (!groupedLocales[language]) {
        groupedLocales[language] = [];
        languageCodes[language] = langObj.languagecode;
      }
      groupedLocales[language].push(locale);
    });
    return Object.entries(groupedLocales).map(([language, localeList]) => {
      const languageItem = {
        language,
        locales: project.value.type === LOCALIZATION_TYPES.translation ? [] : localeList,
        langCode: languageCodes[language],
      };
      return languageItem;
    });
  };

  const updateActiveLocales = (localesToUpdate, isDeselecting = false) => {
    setActiveLocales((prev) => {
      const updatedActiveLocales = { ...prev };
      localesToUpdate.forEach((locale) => {
        if (isDeselecting) {
          delete updatedActiveLocales[locale];
        } else {
          const language = findLanguageForLocale(locale);
          if (language) updatedActiveLocales[locale] = language.language;
        }
      });
      return updatedActiveLocales;
    });
  };

  const removeLocalesFromActive = (localesToRemove) => {
    setActiveLocales((prev) => {
      const updatedActiveLocales = { ...prev };
      localesToRemove.forEach((locale) => {
        delete updatedActiveLocales[locale];
      });
      return updatedActiveLocales;
    });
  };

  const selectRegion = (regionKey, regionCountryCodes) => {
    setSelectedRegion((prev) => ({
      ...prev,
      [regionKey]: regionCountryCodes.reduce((acc, locale) => {
        acc[locale] = true;
        return acc;
      }, {}),
    }));
    setSelectedLocale((prev) => [
      ...prev,
      ...regionCountryCodes.filter((code) => !prev.includes(code)),
    ]);
    updateActiveLocales(regionCountryCodes);
  };

  const deselectRegion = (regionKey, regionCountryCodes) => {
    setSelectedRegion((prev) => {
      const { [regionKey]: _, ...rest } = prev;
      return rest;
    });
    setSelectedLocale((prev) => prev.filter((locale) => !regionCountryCodes.includes(locale)));
    removeLocalesFromActive(regionCountryCodes);
  };

  const updateRegionStates = (localeList) => {
    const updatedRegionStates = {};
    localeRegion.value.forEach((region) => {
      const regionLocales = region.value.split(',');
      const isRegionActive = regionLocales.every((locale) => localeList.includes(locale));
      updatedRegionStates[region.key] = isRegionActive;
    });
    return updatedRegionStates;
  };

  const selectAll = () => {
    const allRegions = {};
    const allLocales = [];
    const allActiveLocales = {};

    localeRegion.value.forEach((region) => {
      const regionLocales = region.value.split(',');
      allRegions[region.key] = regionLocales.reduce((acc, locale) => {
        acc[locale] = true;
        return acc;
      }, {});
      allLocales.push(...regionLocales);
    });

    locales.value.forEach((lang) => {
      lang.livecopies.split(',').forEach((locale) => {
        allActiveLocales[locale] = lang.language;
      });
    });

    setSelectedRegion(allRegions);
    setSelectedLocale(allLocales);
    setActiveLocales(allActiveLocales);
  };

  useEffect(() => {
    setSelectedRegion((prevState) => ({
      ...prevState,
      ...updateRegionStates(selectedLocale),
    }));
  }, [selectedLocale]);

  const errorPresent = () => Object.keys(activeLocales).length > 0;

  const prefillActionAndWorkflow = (languages) => {
    const storedLanguages = project.value?.languages ?? [];
    if (storedLanguages.length < 1) {
      return languages.map((lang) => ({ ...lang, action: project.value.type === LOCALIZATION_TYPES.translation ? 'Translate' : 'Rollout', workflow: '' }));
    }
    let iteratorIndex = 0;
    const prefilledLanguages = [];

    while (iteratorIndex < languages.length) {
      const { action, workflow } = storedLanguages[iteratorIndex] ?? {};
      const prefillLanguage = {
        ...languages[iteratorIndex],
        action,
        workflow: workflow || '',
      };
      if (!action) {
        prefillLanguage.action = project.value.type === LOCALIZATION_TYPES.translation ? 'Translate' : 'Rollout';
      }
      prefilledLanguages.push(prefillLanguage);
      iteratorIndex += 1;
    }
    return prefilledLanguages;
  };

  const handleNext = async () => {
    if (!errorPresent()) return;
    const sortedLanguages = transformActiveLocales().sort((a, b) => a.language - b.language);
    setProject({ languages: prefillActionAndWorkflow(sortedLanguages) });
    setLocale({ selectedRegion, selectedLocale, activeLocales });

    const error = await updateDraftProject();
    if (error) {
      setApiError(error);
    } else {
      nextStep();
    }
  };

  const handleBack = () => {
    setLocale({ selectedRegion, selectedLocale, activeLocales });
    prevStep();
  };

  const resetSelection = () => {
    setSelectedRegion({});
    setSelectedLocale([]);
    setActiveLocales({});
  };

  const toggleRegion = (region) => {
    const regionCountryCodes = region.value.split(',');
    if (selectedRegion[region.key]) {
      deselectRegion(region.key, regionCountryCodes);
    } else {
      selectRegion(region.key, regionCountryCodes);
    }
  };

  const selectLanguage = (lang) => {
    const languageCodes = lang.livecopies.split(',');
    const isDeselecting = languageCodes.some((code) => selectedLocale.includes(code));
    const updatedLocale = isDeselecting
      ? selectedLocale.filter((locale) => !languageCodes.includes(locale))
      : [...selectedLocale, ...languageCodes];
    setSelectedLocale(updatedLocale);
    updateActiveLocales(languageCodes, isDeselecting);
  };

  const toggleLocale = (locale) => {
    setActiveLocales((prev) => {
      const updatedActiveLocales = { ...prev };
      if (updatedActiveLocales[locale]) {
        delete updatedActiveLocales[locale];
      } else {
        const language = findLanguageForLocale(locale);
        if (language) updatedActiveLocales[locale] = language.language;
      }
      return updatedActiveLocales;
    });
  };

  return {
    selectedRegion,
    selectedLocale,
    activeLocales,
    localeRegion,
    locales,
    project,
    errorPresent,
    handleNext,
    handleBack,
    resetSelection,
    toggleRegion,
    selectLanguage,
    toggleLocale,
    selectAll,
    apiError,
    setApiError,
  };
}
