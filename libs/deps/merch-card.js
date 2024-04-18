// branch: MWPW-142003-stable commit: fd49fb6f54e6b8ef08dc8e8b5b1ad19ac5370e3b Thu, 18 Apr 2024 14:24:45 GMT
import{html as t,LitElement as O}from"/libs/deps/lit-all.min.js";import{css as v,unsafeCSS as f}from"/libs/deps/lit-all.min.js";var m="(max-width: 767px)";var i="(min-width: 768px)",c="(min-width: 1200px)",s="(min-width: 1600px)";var k=v`
    :host {
        position: relative;
        display: flex;
        flex-direction: column;
        height: 100%;
        flex: 1 1 0;
        text-align: start;
        border-radius: var(--consonant-merch-spacing-xxxs);
        background-color: var(--consonant-merch-card-background-color);
        grid-template-columns: repeat(auto-fit, minmax(300px, max-content));
        background-color: var(--consonant-merch-card-background-color);
        font-family: var(--body-font-family, 'Adobe Clean');
        border-radius: var(--consonant-merch-spacing-xs);
        border: 1px solid var(--consonant-merch-card-border-color);
    }

    :host(.placeholder) {
        visibility: hidden;
    }

    :host([variant='special-offers']) {
        min-height: 439px;
    }

    :host([variant='catalog']) {
        min-height: 330px;
    }

    :host([variant='plans']) {
        min-height: 348px;
    }

    :host([variant='segment']) {
        min-height: 214px;
    }

    .invisible {
        visibility: hidden;
    }

    :host(:hover) .invisible {
        visibility: visible;
        background-image: var(--ellipsis-icon);
        cursor: pointer;
    }

    .action-menu.always-visible {
        visibility: visible;
        background-image: var(--ellipsis-icon);
    }

    slot {
        display: block;
    }

    .top-section {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .top-section > .icons img:last-child {
        margin-right: var(--consonant-merch-spacing-xs);
    }

    .icons {
        display: flex;
        width: fit-content;
        fle-direction: row;
    }

    .icons img {
        width: var(--consonant-merch-card-plans-icon-size);
        height: var(--consonant-merch-card-plans-icon-size);
        margin-right: var(--consonant-merch-spacing-xxs);
    }

    .body {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        height: 100%;
        gap: var(--consonant-merch-spacing-xxs);
        padding: var(--consonant-merch-spacing-xs);
    }

    footer {
        display: flex;
        justify-content: flex-end;
        box-sizing: border-box;
        width: 100%;
        flex-flow: wrap;
    }

    hr {
        background-color: var(--color-gray-200);
        border: none;
        height: 1px;
        width: auto;
        margin-top: 0;
        margin-bottom: 0;
        margin-left: var(--consonant-merch-spacing-xs);
        margin-right: var(--consonant-merch-spacing-xs);
    }

    div[class$='-badge'] {
        position: absolute;
        top: 16px;
        right: 0;
        font-size: var(--type-heading-xxs-size);
        font-weight: 500;
        max-width: 150px;
        line-height: 16px;
        text-align: center;
        padding: 8px 11px;
        border-radius: 5px 0 0 5px;
    }

    .body .catalog-badge {
        display: flex;
        height: fit-content;
        flex-direction: column;
        width: fit-content;
        border-radius: 5px;
        position: relative;
        top: 0;
        margin-left: var(--consonant-merch-spacing-xxs);
    }

    .detail-bg-container {
        right: 0;
        padding: var(--consonant-merch-spacing-xs);
        border-radius: 5px;
        font-size: var(--consonant-merch-card-body-font-size);
        margin: var(--consonant-merch-spacing-xs);
    }

    .action-menu {
        display: flex;
        width: 32px;
        height: 32px;
        position: absolute;
        top: 16px;
        right: 16px;
        background-color: #f6f6f6;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 16px 16px;
    }
    .hidden {
        visibility: hidden;
    }

    #stock-checkbox,
    .secure-transaction-label {
        font-size: var(--consonant-merch-card-body-xxs-font-size);
        line-height: 1.3;
        color: var(--color-gray-600);
    }

    #stock-checkbox {
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        gap: 10px; /*same as spectrum */
    }

    #stock-checkbox > input {
        display: none;
    }

    #stock-checkbox > span {
        display: inline-block;
        box-sizing: border-box;
        border: 2px solid rgb(117, 117, 117);
        border-radius: 2px;
        width: 14px;
        height: 14px;
    }

    #stock-checkbox > input:checked + span {
        background: var(--checkmark-icon) no-repeat var(--color-accent);
        border-color: var(--color-accent);
    }

    .secure-transaction-label {
        white-space: nowrap;
        display: inline-flex;
        gap: var(--consonant-merch-spacing-xxs);
        align-items: center;
        flex: 1;
        height: inherit;
        padding-inline-start: var(--consonant-merch-spacing-xs);
        padding-inline-end: var(--consonant-merch-spacing-xs);
        padding-top: var(--consonant-merch-spacing-xs);
        padding-bottom: var(--consonant-merch-spacing-xs);
    }

    .secure-transaction-label::before {
        display: inline-block;
        content: '';
        width: 12px;
        height: 15px;
        background: var(--secure-icon) no-repeat;
        background-position: center;
        background-size: contain;
    }

    .checkbox-container {
        display: flex;
        align-items: center;
        gap: var(--consonant-merch-spacing-xxs);
    }

    .checkbox-container input[type='checkbox']:checked + .checkmark {
        background-color: var(--color-accent);
        background-image: var(--checkmark-icon);
        border-color: var(--color-accent);
    }

    .checkbox-container input[type='checkbox'] {
        display: none;
    }

    .checkbox-container .checkmark {
        position: relative;
        display: inline-block;
        width: 12px;
        height: 12px;
        border: 2px solid #757575;
        background: #fff;
        border-radius: 2px;
        cursor: pointer;
        margin-top: 2px;
    }

    :host([variant='mini-compare-chart']) .icons .img {
        width: var(--consonant-merch-card-mini-compare-chart-icon-size);
        height: var(--consonant-merch-card-mini-compare-chart-icon-size);
    }

    :host([variant='mini-compare-chart']) .top-section {
        padding-top: var(--consonant-merch-spacing-s);
        height: var(--consonant-merch-card-mini-compare-top-section-height);
    }

    :host([variant='mini-compare-chart']) .top-section .icons {
        padding-left: var(--consonant-merch-spacing-s);
    }

    :host([variant='mini-compare-chart']) .top-section .icons img {
        padding-bottom: var(--consonant-merch-spacing-xs);
    }

    :host([variant='mini-compare-chart']) footer {
        padding: var(--consonant-merch-spacing-xs)
            var(--consonant-merch-spacing-xxs) 0;
        justify-content: space-between;
    }

    @media screen and ${f(m)} {
        :host([variant='mini-compare-chart']) .top-section .icons {
            padding-left: var(--consonant-merch-spacing-xs);
        }
        :host([variant='mini-compare-chart']) .top-section {
            padding-top: var(--consonant-merch-spacing-xs);
        }
        :host([variant='mini-compare-chart']) .mini-compare-chart-badge {
            font-size: var(--consonant-merch-card-detail-font-size);
            padding: 6px 8px;
            top: 10px;
            width: 56px;
        }
        :host([variant='mini-compare-chart']) footer {
            justify-content: center;
            min-height: var(--consonant-merch-card-mini-compare-footer-height);
        }
    }

    :host([variant='special-offers'].center) {
        text-align: center;
    }

    /* plans */
    :host([variant='plans']) {
        min-height: 348px;
    }

    /* mini-compare card  */

    :host([variant='mini-compare-chart']) slot[name='footer-rows'] {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: end;
    }
    /* mini-compare card heights for the slots: heading-m, body-m, heading-m-price, price-commitment, offers, promo-text, footer */
    :host([variant='mini-compare-chart']) slot[name='heading-m'] {
        min-height: var(--consonant-merch-card-mini-compare-heading-m-height);
    }
    :host([variant='mini-compare-chart']) slot[name='body-m'] {
        min-height: var(--consonant-merch-card-mini-compare-body-m-height);
    }
    :host([variant='mini-compare-chart']) slot[name='heading-m-price'] {
        min-height: var(
            --consonant-merch-card-mini-compare-heading-m-price-height
        );
    }
    :host([variant='mini-compare-chart']) slot[name='price-commitment'] {
        min-height: var(
            --consonant-merch-card-mini-compare-price-commitment-height
        );
    }
    :host([variant='mini-compare-chart']) slot[name='offers'] {
        min-height: var(--consonant-merch-card-mini-compare-offers-height);
    }
    :host([variant='mini-compare-chart']) slot[name='promo-text'] {
        min-height: var(--consonant-merch-card-mini-compare-promo-text-height);
    }
    :host([variant='mini-compare-chart'])
        slot[name='secure-transaction-label'] {
        min-height: var(
            --consonant-merch-card-mini-compare-secure-transaction-label-height
        );
    }
    :host([variant='mini-compare-chart']) slot[name='footer'] {
        min-height: var(--consonant-merch-card-mini-compare-footer-height);
    }
`,z=()=>{let d=[v`
        /* Tablet */
        @media screen and ${f(i)} {
            :host([size='wide']),
            :host([size='super-wide']) {
                grid-column: span 2;
                width: 100%;
            }
        }

        /* Laptop */
        @media screen and ${f(c)} {
            :host([size='super-wide']) {
                grid-column: span 3;
            }
        `];return d.push(v`
        /* Large desktop */
        @media screen and ${f(s)} {
            :host([size='super-wide']) {
                grid-column: span 4;
            }
        }
    `),d};var[$,E,C,S,A,j]=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Enter","Tab"];var L=document.createElement("style");L.innerHTML=`
:root {

    --consonant-merch-card-detail-font-size: 12px;
    --consonant-merch-card-detail-font-weight: 500;
    --consonant-merch-card-detail-letter-spacing: 0.8px;
    --consonant-merch-card-background-color: #fff;

    --consonant-merch-card-heading-font-size: 18px;
    --consonant-merch-card-heading-line-height: 22.5px;
    --consonant-merch-card-heading-secondary-font-size: 14px;
    --consonant-merch-card-body-font-size: 14px;
    --consonant-merch-card-body-line-height: 21px;

    /* responsive width */
    --consonant-merch-card-mobile-width: 300px;

    /* spacing */
    --consonant-merch-spacing-xxxs: 4px;
    --consonant-merch-spacing-xxs: 8px;
    --consonant-merch-spacing-xs: 16px;
    --consonant-merch-spacing-s: 24px;
    --consonant-merch-spacing-m: 32px;

    /* cta */
    --consonant-merch-card-cta-font-size: 15px;

    /* headings */
    --consonant-merch-card-heading-xs-font-size: 18px;
    --consonant-merch-card-heading-xs-line-height: 22.5px;
    --consonant-merch-card-heading-s-font-size: 20px;
    --consonant-merch-card-heading-s-line-height: 25px;
    --consonant-merch-card-heading-m-font-size: 24px;
    --consonant-merch-card-heading-m-line-height: 30px;
    --consonant-merch-card-heading-l-font-size: 20px;
    --consonant-merch-card-heading-l-line-height: 30px;
    --consonant-merch-card-heading-xl-font-size: 36px;
    --consonant-merch-card-heading-xl-line-height: 45px;

    /* detail */
    --consonant-merch-card-detail-m-font-size: 12px;
    --consonant-merch-card-detail-m-line-height: 15px;
    --consonant-merch-card-detail-m-font-weight: 700;
    --consonant-merch-card-detail-m-letter-spacing: 1px;

    /* body */
    --consonant-merch-card-body-xxs-font-size: 12px;
    --consonant-merch-card-body-xxs-line-height: 18px;
    --consonant-merch-card-body-xxs-letter-spacing: 1px;
    --consonant-merch-card-body-xs-font-size: 14px;
    --consonant-merch-card-body-xs-line-height: 21px;
    --consonant-merch-card-body-s-font-size: 16px;
    --consonant-merch-card-body-s-line-height: 24px;
    --consonant-merch-card-body-m-font-size: 18px;
    --consonant-merch-card-body-m-line-height: 27px;
    --consonant-merch-card-body-l-font-size: 20px;
    --consonant-merch-card-body-l-line-height: 30px;
    --consonant-merch-card-body-xl-font-size: 22px;
    --consonant-merch-card-body-xl-line-height: 33px;


    --consonant-merch-card-heading-padding: 0;
    --consonant-merch-card-image-height: 180px;

    /* colors */
    --consonant-merch-card-border-color: #eaeaea;
    --color-accent: #1473E6;
    --merch-color-focus-ring: #1473E6;
    --merch-color-grey-80: #2c2c2c;
    --merch-color-green-promo: #12805C;

    /* focus */
    --merch-focused-outline: var(--merch-color-focus-ring) auto 1px;
    --merch-hovered-shadow: 0 0 0 1px #aaa;
    --merch-selected-shadow: 0 0 0 2px var(--color-accent);

    /* merch card generic */
    --consonant-merch-card-max-width: 300px;
    --transition: cmax-height 0.3s linear, opacity 0.3s linear;

    /* special offers */
    --consonant-merch-card-special-offers-width: 378px;

    /* image */
    --consonant-merch-card-image-width: 300px;

    /* segment */
    --consonant-merch-card-segment-width: 378px;

    /* inline-heading */
    --consonant-merch-card-inline-heading-width: 300px;

    /* product */
    --consonant-merch-card-product-width: 300px;

    /* plans */
    --consonant-merch-card-plans-width: 300px;
    --consonant-merch-card-plans-icon-size: 40px;

    /* catalog */
    --consonant-merch-card-catalog-width: 276px;
    --consonant-merch-card-catalog-icon-size: 40px;

    /*mini compare chart */
    --consonant-merch-card-mini-compare-chart-icon-size: 32px;
    --consonant-merch-card-mini-compare-mobile-cta-font-size: 15px;
    --consonant-merch-card-mini-compare-mobile-cta-width: 75px;
    --consonant-merch-card-mini-compare-badge-mobile-max-width: 50px;

    /* inline SVGs */
    --checkmark-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'%3E%3Cpath fill='%23fff' d='M3.788 9A.999.999 0 0 1 3 8.615l-2.288-3a1 1 0 1 1 1.576-1.23l1.5 1.991 3.924-4.991a1 1 0 1 1 1.576 1.23l-4.712 6A.999.999 0 0 1 3.788 9z' class='spectrum-UIIcon--medium'/%3E%3C/svg%3E%0A");

    --secure-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23757575' viewBox='0 0 12 15'%3E%3Cpath d='M11.5 6H11V5A5 5 0 1 0 1 5v1H.5a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5ZM3 5a3 3 0 1 1 6 0v1H3Zm4 6.111V12.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1.389a1.5 1.5 0 1 1 2 0Z'/%3E%3C/svg%3E");

    --info-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36'><circle cx='18' cy='12' r='2.15'%3E%3C/circle%3E%3Cpath d='M20.333 24H20v-7.6a.4.4 0 0 0-.4-.4h-3.933s-1.167.032-1.167 1 1.167 1 1.167 1H16v6h-.333s-1.167.032-1.167 1 1.167 1 1.167 1h4.667s1.167-.033 1.167-1-1.168-1-1.168-1z'%3E%3C/path%3E%3Cpath d='M18 2.1A15.9 15.9 0 1 0 33.9 18 15.9 15.9 0 0 0 18 2.1zm0 29.812A13.912 13.912 0 1 1 31.913 18 13.912 13.912 0 0 1 18 31.913z'%3E%3C/path%3E%3C/svg%3E");

    --ellipsis-icon: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><circle cx="2" cy="2" r="2" fill="%232c2c2c" transform="translate(6 6)"/><circle cx="2" cy="2" r="2" fill="%232c2c2c" data-name="Ellipse 71" transform="translate(12 6)"/><circle cx="2" cy="2" r="2" fill="%232c2c2c" transform="translate(0 6)"/></svg>');

}

merch-card-collection {
    display: contents;
}

merch-card-collection > merch-card:not([style]) {
    display: none;
}

merch-card-collection > p[slot],
merch-card-collection > div[slot] p {
    margin: 0;
}

.one-merch-card,
.two-merch-cards,
.three-merch-cards,
.four-merch-cards {
    display: grid;
    justify-content: center;
    justify-items: stretch;
    gap: var(--consonant-merch-spacing-m);
}

@media screen and ${c} {
    .one-merch-card,
    .two-merch-cards,
    .three-merch-cards,
    .four-merch-cards {
        padding: var(--spacing-m);
    }
}

merch-card.background-opacity-70 {
    background-color: rgba(255 255 255 / 70%);
}

merch-card.has-divider hr {
    margin-bottom: var(--consonant-merch-spacing-xs);
    height: 1px;
    border: none;
}

merch-card[variant="special-offers"] span[is="inline-price"][data-template="strikethrough"] {
    font-size: var(--consonant-merch-card-body-xs-font-size);
}

merch-card p, merch-card h3, merch-card h4 {
    margin: 0;
}

merch-card span[is=inline-price] {
    display: inline-block;
}

merch-card [slot='heading-xs'] {
    font-size: var(--consonant-merch-card-heading-xs-font-size);
    line-height: var(--consonant-merch-card-heading-xs-line-height);
    margin: 0;
    margin-bottom: var(--consonant-merch-spacing-xxs);
    color: var(--merch-color-grey-80);
}

merch-card [slot='heading-s'] {
    font-size: var(--consonant-merch-card-heading-s-font-size);
    line-height: var(--consonant-merch-card-heading-s-line-height);
    margin: 0;
    color: var(--merch-color-grey-80);
}

merch-card [slot='heading-m'] {
    font-size: var(--consonant-merch-card-heading-m-font-size);
    line-height: var(--consonant-merch-card-heading-m-line-height);
    margin: 0;
    color: var(--merch-color-grey-80);
    font-weight: 700;
}

merch-card [slot='heading-m-price'] {
    font-size: var(--consonant-merch-card-heading-m-font-size);
    line-height: var(--consonant-merch-card-heading-m-line-height);
    padding: 0 var(--consonant-merch-spacing-s);
    font-weight: 700;
    margin: 0;
    color: var(--merch-color-grey-80);
}

merch-card [slot='offers'] {
    padding: var(--consonant-merch-spacing-xxs) var(--consonant-merch-spacing-s);
}

merch-card [slot='heading-l'] {
    font-size: var(--consonant-merch-card-heading-l-font-size);
    line-height: var(--consonant-merch-card-heading-l-line-height);
    margin: 0;
    color: var(--merch-color-grey-80);
}

merch-card [slot='heading-xl'] {
    font-size: var(--consonant-merch-card-heading-xl-font-size);
    line-height: var(--consonant-merch-card-heading-xl-line-height);
    margin: 0;
    color: var(--merch-color-grey-80);
}

merch-card [slot='detail-m'] {
    font-size: var(--consonant-merch-card-detail-m-font-size);
    letter-spacing: var(--consonant-merch-card-detail-m-letter-spacing);
    font-weight: var(--consonant-merch-card-detail-m-font-weight);
    text-transform: uppercase;
    margin: 0;
    color: var(--merch-color-grey-80);
}

merch-card [slot="body-xxs"] {
    font-size: var(--consonant-merch-card-body-xxs-font-size);
    line-height: var(--consonant-merch-card-body-xxs-line-height);
    font-weight: normal;
    letter-spacing: var(--consonant-merch-card-body-xxs-letter-spacing);
    color: var(--merch-color-grey-80);
    margin: 0;
}

merch-card [slot="body-xs"] {
    font-size: var(--consonant-merch-card-body-xs-font-size);
    line-height: var(--consonant-merch-card-body-xs-line-height);
    color: var(--merch-color-grey-80);
}

merch-card [slot="body-m"] {
    font-size: var(--consonant-merch-card-body-m-font-size);
    line-height: var(--consonant-merch-card-body-m-line-height);
    color: var(--merch-color-grey-80);
}

merch-card [slot="body-l"] {
    font-size: var(--consonant-merch-card-body-l-font-size);
    line-height: var(--consonant-merch-card-body-l-line-height);
    color: var(--merch-color-grey-80);
}

merch-card [slot="body-xl"] {
    font-size: var(--consonant-merch-card-body-xl-font-size);
    line-height: var(--consonant-merch-card-body-xl-line-height);
    color: var(--merch-color-grey-80);
}

merch-card[variant="plans"] [slot="description"] {
    min-height: 84px;
}

merch-card[variant="catalog"] [slot="action-menu-content"] {
    background-color: #000;
    color: var(--color-white, #fff);
    font-size: var(--consonant-merch-card-body-xs-font-size);
    width: fit-content;
    padding: var(--consonant-merch-spacing-xs);
    border-radius: var(--consonant-merch-spacing-xxxs);
    position: absolute;
    top: 55px;
    right: 15px;
    line-height: var(--consonant-merch-card-body-line-height);
}

merch-card[variant="catalog"] [slot="action-menu-content"] ul {
    padding-left: 0;
    padding-bottom: var(--consonant-merch-spacing-xss);
    margin-top: 0;
    margin-bottom: 0;
    list-style-position: inside;
    list-style-type: '\u2022 ';
}

merch-card[variant="catalog"] [slot="action-menu-content"] ul li {
    padding-left: 0;
    line-height: var(--consonant-merch-card-body-line-height);
}

merch-card[variant="catalog"] [slot="action-menu-content"] ::marker {
    margin-right: 0;
}

merch-card[variant="catalog"] [slot="action-menu-content"] p {
    color: var(--color-white, #fff);
}

merch-card[variant="catalog"] [slot="action-menu-content"] a {
    color: var(--consonant-merch-card-background-color);
    text-decoration: underline;
}

merch-card[variant="plans"] [slot="quantity-select"] {
    display: flex;
    justify-content: flex-start;
    box-sizing: border-box;
    width: 100%;
    padding: var(--consonant-merch-spacing-xs);
}

/* mini compare chart card styles */

merch-card[variant="mini-compare-chart"] [slot="heading-m"] {
    padding: 0 var(--consonant-merch-spacing-s) 0;
}

merch-card[variant="mini-compare-chart"] [slot="body-m"] {
    padding: var(--consonant-merch-spacing-xs) var(--consonant-merch-spacing-s);
}

merch-card[variant="mini-compare-chart"] [is="inline-price"] {
    display: inline-block;
    min-height: 30px;
    min-width: 1px;
}

merch-card[variant="mini-compare-chart"] span.placeholder-resolved[data-template="strikethrough"] {
    font-size: var(--consonant-merch-card-body-m-font-size);
    font-weight: 500;
}

merch-card[variant="mini-compare-chart"] [slot="price-commitment"] {
    font-size: var(--consonant-merch-card-body-xs-font-size);
    padding: 0 var(--consonant-merch-spacing-s);
}

merch-card[variant="mini-compare-chart"] [slot="price-commitment"] a {
    display: inline-block;
    height: 27px;
}

merch-card[variant="mini-compare-chart"] [slot="offers"] {
    font-size: var(--consonant-merch-card-body-xs-font-size);
}

merch-card[variant="mini-compare-chart"] [slot="promo-text"] {
    color: var(--merch-color-green-promo);
    font-weight: 700;
    padding: var(--consonant-merch-spacing-xs) var(--consonant-merch-spacing-s) 0;
}

merch-card[variant="mini-compare-chart"] [slot="promo-text"] a {
    text-decoration: underline;
}

merch-card[variant="mini-compare-chart"] [slot="footer"] {
    padding-top: var(--consonant-merch-spacing-xs);
}

merch-card[variant="mini-compare-chart"] [slot="footer"] a.con-button:first-child {
    margin-left: 0;
}

merch-card[variant="mini-compare-chart"] [slot="footer"] .action-area {
    display: flex;
    justify-content: flex-end;
}

merch-card[variant="mini-compare-chart"] [slot="footer"] a.con-button {
    margin-bottom: var(--consonant-merch-spacing-xs);
    display: inline-flex;
}

merch-card[variant="mini-compare-chart"] .footer-row-icon {
    display: flex;
    place-items: center;
}

merch-card[variant="mini-compare-chart"] .footer-row-icon img {
    max-width: initial;
    width: var(--consonant-merch-card-mini-compare-chart-icon-size);
    height: var(--consonant-merch-card-mini-compare-chart-icon-size);
}

merch-card[variant="mini-compare-chart"] .footer-row-cell {
    border-top: 1px solid var(--consonant-merch-card-border-color);
    display: flex;
    gap: var(--consonant-merch-spacing-xs);
    justify-content: start;
    place-items: center;
    padding: var(--consonant-merch-spacing-xs) var(--consonant-merch-spacing-s);
}

merch-card[variant="mini-compare-chart"] .footer-row-cell-description {
    font-size: var(--consonant-merch-card-body-s-font-size);
    line-height: var(--consonant-merch-card-body-s-line-height);
}

merch-card[variant="mini-compare-chart"] .footer-row-cell-description p {
    color: var(--merch-color-grey-80);
    vertical-align: bottom;
}

merch-card[variant="mini-compare-chart"] .footer-row-cell-description a {
    color: var(--color-accent);
    text-decoration: solid;
}

@media screen and ${m} {
    merch-card[variant="mini-compare-chart"] .mini-compare-chart-badge + [slot='heading-m'] {
        margin-top: var(--consonant-merch-spacing-m);
    }

    merch-card[variant="mini-compare-chart"] [slot='heading-m'] {
        padding: 0 var(--consonant-merch-spacing-xs) 0;
        font-size: var(--consonant-merch-card-body-s-font-size);
        line-height: var(--consonant-merch-card-body-s-line-height);
        width: inherit;
    }

    merch-card[variant="mini-compare-chart"] [slot='body-m'] {
        font-size: var(--consonant-merch-card-body-xs-font-size);
        line-height: var(--consonant-merch-card-body-xs-line-height);
        padding: var(--consonant-merch-spacing-xs);
    }

    merch-card[variant="mini-compare-chart"] [slot="offers"] {
        padding: 0 var(--consonant-merch-spacing-xs);
    }

    merch-card[variant="mini-compare-chart"] [slot='heading-m-price'] {
        font-size: var(--consonant-merch-card-body-s-font-size);
        padding: 0 var(--consonant-merch-spacing-xs) var(--consonant-merch-spacing-xs);
    }

    merch-card[variant="mini-compare-chart"] span.placeholder-resolved[data-template="strikethrough"] {
        font-size: var(--consonant-merch-card-body-xs-font-size);
    }

    merch-card[variant="mini-compare-chart"] [slot="price-commitment"] {
        padding: 0 var(--consonant-merch-spacing-xs);
    }

    merch-card[variant="mini-compare-chart"] [slot="promo-text"] {
        font-size: var(--consonant-merch-card-body-xs-font-size);
        padding: var(--consonant-merch-spacing-xs);
    }

    merch-card[variant="mini-compare-chart"] .footer-row-cell {
        flex-direction: column;
        place-items: flex-start;
        gap: 0px;
        padding: var(--consonant-merch-spacing-xs);
    }

    merch-card[variant="mini-compare-chart"] .footer-row-icon {
        margin-bottom: var(--consonant-merch-spacing-xs);
    }

    merch-card[variant="mini-compare-chart"] .footer-row-cell-description {
        font-size: var(--consonant-merch-card-body-xs-font-size);
        line-height: var(--consonant-merch-card-body-xs-line-height);
    }

    merch-card[variant="mini-compare-chart"] [slot="footer"] .action-area {
        display: block;
    }

    merch-card[variant="mini-compare-chart"] [slot="footer"] a.con-button {
        margin-left: 0;
        padding: 4px 18px 5px 21px;
        font-size: var(--consonant-merch-card-mini-compare-mobile-cta-font-size);
        width: var(--consonant-merch-card-mini-compare-mobile-cta-width);
        text-align: center;
        justify-content: center;
    }

    merch-card[variant="mini-compare-chart"] [slot="footer"] a.con-button:first-child {
        margin-bottom: var(--consonant-merch-spacing-xs);
    }

    merch-card[variant="mini-compare-chart"] [slot="footer"] {
        white-space: initial;
        padding-bottom: 0;
        flex-direction: column-reverse;
    }
}

div[slot="footer"] {
    white-space: nowrap;
    display: inline-flex;
    align-items: center;
    flex: 1;
    padding: var(--consonant-merch-spacing-xs);
}

div[slot="footer"] a.con-button {
    margin-left: var(--consonant-merch-spacing-xs);
    width: max-content;
}

div[slot="footer"] a:not([class]) {
    font-weight: 700;
    font-size: var(--consonant-merch-card-cta-font-size);
}

div[slot='bg-image'] img {
    position: relative;
    width: 100%;
    min-height: var(--consonant-merch-card-image-height);
    max-height: var(--consonant-merch-card-image-height);
    object-fit: cover;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
}

/* Mobile */
@media screen and ${m} {
    :root {
        --consonant-merch-card-mini-compare-chart-width: 142px;
        --consonant-merch-card-special-offers-width: 302px;
    }
}


/* Tablet */
@media screen and ${i} {
    :root {
        --consonant-merch-card-catalog-width: 302px;
        --consonant-merch-card-plans-width: 302px;
        --consonant-merch-card-mini-compare-chart-width: 302px;
        --consonant-merch-card-special-offers-width: 302px;
    }
}

/* desktop */
@media screen and ${c} {
    :root {
        --consonant-merch-card-catalog-width: 276px;
        --consonant-merch-card-plans-width: 276px;
        --consonant-merch-card-inline-heading-width: 378px;
        --consonant-merch-card-product-width: 378px;
        --consonant-merch-card-image-width: 378px;
        --consonant-merch-card-mini-compare-chart-width: 378px;
        --consonant-merch-card-mini-compare-chart-wide-width: 484px;
    }
}

/* supported cards */
/* grid style for plans */
.one-merch-card.plans,
.two-merch-cards.plans,
.three-merch-cards.plans,
.four-merch-cards.plans {
    grid-template-columns: var(--consonant-merch-card-plans-width);
}

/* Tablet */
@media screen and ${i} {
    .two-merch-cards.plans,
    .three-merch-cards.plans,
    .four-merch-cards.plans {
        grid-template-columns: repeat(2, var(--consonant-merch-card-plans-width));
    }
}

/* desktop */
@media screen and ${c} {
    .three-merch-cards.plans,
    .four-merch-cards.plans {
        grid-template-columns: repeat(3, var(--consonant-merch-card-plans-width));
    }
}

/* Large desktop */
    @media screen and ${s} {
    .four-merch-cards.plans {
        grid-template-columns: repeat(4, var(--consonant-merch-card-plans-width));
    }
}


/* grid style for catalog */
.one-merch-card.catalog,
.two-merch-cards.catalog,
.three-merch-cards.catalog,
.four-merch-cards.catalog {
    grid-template-columns: var(--consonant-merch-card-catalog-width);
}

/* Tablet */
@media screen and ${i} {
    .two-merch-cards.catalog,
    .three-merch-cards.catalog,
    .four-merch-cards.catalog {
        grid-template-columns: repeat(2, var(--consonant-merch-card-catalog-width));
    }
}

/* desktop */
@media screen and ${c} {
    .three-merch-cards.catalog,
    .four-merch-cards.catalog {
        grid-template-columns: repeat(3, var(--consonant-merch-card-catalog-width));
    }
}

/* Large desktop */
    @media screen and ${s} {
    .four-merch-cards.catalog {
        grid-template-columns: repeat(4, var(--consonant-merch-card-catalog-width));
    }
}


/* grid style for special-offers */
.one-merch-card.special-offers,
.two-merch-cards.special-offers,
.three-merch-cards.special-offers,
.four-merch-cards.special-offers {
    grid-template-columns: minmax(300px, var(--consonant-merch-card-special-offers-width));
}

/* Tablet */
@media screen and ${i} {
    .two-merch-cards.special-offers,
    .three-merch-cards.special-offers,
    .four-merch-cards.special-offers {
        grid-template-columns: repeat(2, minmax(300px, var(--consonant-merch-card-special-offers-width)));
    }
}

/* desktop */
@media screen and ${c} {
    .three-merch-cards.special-offers,
    .four-merch-cards.special-offers {
        grid-template-columns: repeat(3, minmax(300px, var(--consonant-merch-card-special-offers-width)));
    }
}

@media screen and ${s} {
    .four-merch-cards.special-offers {
        grid-template-columns: repeat(4, minmax(300px, var(--consonant-merch-card-special-offers-width)));
    }
}


/* grid style for image */
.one-merch-card.image,
.two-merch-cards.image,
.three-merch-cards.image,
.four-merch-cards.image {
    grid-template-columns: var(--consonant-merch-card-image-width);
}

/* Tablet */
@media screen and ${i} {
    .two-merch-cards.image,
    .three-merch-cards.image,
    .four-merch-cards.image {
        grid-template-columns: repeat(2, var(--consonant-merch-card-image-width));
    }
}

/* desktop */
@media screen and ${c} {
    .three-merch-cards.image,
    .four-merch-cards.image {
        grid-template-columns: repeat(3, var(--consonant-merch-card-image-width));
    }
}

/* Large desktop */
    @media screen and ${s} {
    .four-merch-cards.image {
        grid-template-columns: repeat(4, var(--consonant-merch-card-image-width));
    }
}


/* grid style for segment */
.one-merch-card.segment,
.two-merch-cards.segment,
.three-merch-cards.segment,
.four-merch-cards.segment {
    grid-template-columns: minmax(276px, var(--consonant-merch-card-segment-width));
}

/* Tablet */
@media screen and ${i} {
    .two-merch-cards.segment,
    .three-merch-cards.segment,
    .four-merch-cards.segment {
        grid-template-columns: repeat(2, minmax(276px, var(--consonant-merch-card-segment-width)));
    }
}

/* desktop */
@media screen and ${c} {
    .three-merch-cards.segment {
        grid-template-columns: repeat(3, minmax(276px, var(--consonant-merch-card-segment-width)));
    }

    .four-merch-cards.segment {
        grid-template-columns: repeat(4, minmax(276px, var(--consonant-merch-card-segment-width)));
    }
}


/* grid style for product */
.one-merch-card.product,
.two-merch-cards.product,
.three-merch-cards.product,
.four-merch-cards.product {
    grid-template-columns: var(--consonant-merch-card-product-width);
}

/* Tablet */
@media screen and ${i} {
    .two-merch-cards.product,
    .three-merch-cards.product,
    .four-merch-cards.product {
        grid-template-columns: repeat(2, var(--consonant-merch-card-product-width));
    }
}

/* desktop */
@media screen and ${c} {
    .three-merch-cards.product,
    .four-merch-cards.product {
        grid-template-columns: repeat(3, var(--consonant-merch-card-product-width));
    }
}

/* Large desktop */
    @media screen and ${s} {
    .four-merch-cards.product {
        grid-template-columns: repeat(4, var(--consonant-merch-card-product-width));
    }
}


/* grid style for inline-heading */
.one-merch-card.inline-heading,
.two-merch-cards.inline-heading,
.three-merch-cards.inline-heading,
.four-merch-cards.inline-heading {
    grid-template-columns: var(--consonant-merch-card-inline-heading-width);
}

/* Tablet */
@media screen and ${i} {
    .two-merch-cards.inline-heading,
    .three-merch-cards.inline-heading,
    .four-merch-cards.inline-heading {
        grid-template-columns: repeat(2, var(--consonant-merch-card-inline-heading-width));
    }
}

/* desktop */
@media screen and ${c} {
    .three-merch-cards.inline-heading,
    .four-merch-cards.inline-heading {
        grid-template-columns: repeat(3, var(--consonant-merch-card-inline-heading-width));
    }
}

/* Large desktop */
    @media screen and ${s} {
    .four-merch-cards.inline-heading {
        grid-template-columns: repeat(4, var(--consonant-merch-card-inline-heading-width));
    }
}

/* grid style for mini-compare-chart */
.one-merch-card.mini-compare-chart,
.two-merch-cards.mini-compare-chart {
    grid-template-columns: minmax(300px, var(--consonant-merch-card-mini-compare-chart-wide-width));
}
.three-merch-cards.mini-compare-chart,
.four-merch-cards.mini-compare-chart {
    grid-template-columns: minmax(300px, var(--consonant-merch-card-mini-compare-chart-width));
}

/* Mobile */
@media screen and ${m} {
    .one-merch-card.mini-compare-chart {
        grid-template-columns: repeat(1, minmax(300px, var(--consonant-merch-card-mini-compare-chart-width)));
        gap: var(--consonant-merch-spacing-xs);
        padding: var(--consonant-merch-spacing-m);
    }
    .two-merch-cards.mini-compare-chart,
    .three-merch-cards.mini-compare-chart,
    .four-merch-cards.mini-compare-chart {
        grid-template-columns: repeat(2, minmax(142px, var(--consonant-merch-card-mini-compare-chart-width)));
        gap: var(--consonant-merch-spacing-xs);
        padding: var(--consonant-merch-spacing-xs);
    }
}

/* Tablet */
@media screen and ${i} {
    .one-merch-card.mini-compare-chart {
        grid-template-columns: repeat(1, minmax(300px, var(--consonant-merch-card-mini-compare-chart-width)));
    }

    .two-merch-cards.mini-compare-chart,
    .three-merch-cards.mini-compare-chart,
    .four-merch-cards.mini-compare-chart {
        grid-template-columns: repeat(2, minmax(300px, var(--consonant-merch-card-mini-compare-chart-width)));
    }
}

/* desktop */
@media screen and ${c} {
    .one-merch-card.mini-compare-chart {
        grid-template-columns: repeat(1, minmax(300px, var(--consonant-merch-card-mini-compare-chart-wide-width)));
    }
    .two-merch-cards.mini-compare-chart {
        grid-template-columns: repeat(2, minmax(300px, var(--consonant-merch-card-mini-compare-chart-wide-width)));
    }
    .three-merch-cards.mini-compare-chart,
    .four-merch-cards.mini-compare-chart {
        grid-template-columns: repeat(3, minmax(300px, var(--consonant-merch-card-mini-compare-chart-width)));
    }
}

@media screen and ${s} {
    .four-merch-cards.mini-compare-chart {
        grid-template-columns: repeat(4, minmax(300px, var(--consonant-merch-card-mini-compare-chart-width)));
    }
}

/* mini-compare card footer rows */
merch-card .footer-row-cell:nth-child(1) {
    min-height: var(--consonant-merch-card-footer-row-1-min-height);
}

merch-card .footer-row-cell:nth-child(2) {
    min-height: var(--consonant-merch-card-footer-row-2-min-height);
}

merch-card .footer-row-cell:nth-child(3) {
    min-height: var(--consonant-merch-card-footer-row-3-min-height);
}

merch-card .footer-row-cell:nth-child(4) {
    min-height: var(--consonant-merch-card-footer-row-4-min-height);
}

merch-card .footer-row-cell:nth-child(5) {
    min-height: var(--consonant-merch-card-footer-row-5-min-height);
}

merch-card .footer-row-cell:nth-child(6) {
    min-height: var(--consonant-merch-card-footer-row-6-min-height);
}

merch-card .footer-row-cell:nth-child(7) {
    min-height: var(--consonant-merch-card-footer-row-7-min-height);
}

merch-card .footer-row-cell:nth-child(8) {
    min-height: var(--consonant-merch-card-footer-row-8-min-height);
}

`;document.head.appendChild(L);var M="MERCH-CARD",T="merch-card",P=32,b="mini-compare-chart",R=d=>`--consonant-merch-card-footer-row-${d}-min-height`,y=class extends O{static properties={name:{type:String},variant:{type:String,reflect:!0},size:{type:String,attribute:"size",reflect:!0},badgeColor:{type:String,attribute:"badge-color"},badgeBackgroundColor:{type:String,attribute:"badge-background-color"},badgeText:{type:String,attribute:"badge-text"},icons:{type:Array},actionMenu:{type:Boolean,attribute:"action-menu"},actionMenuContent:{type:String,attribute:"action-menu-content"},title:{type:String},description:{type:String},customHr:{type:Boolean,attribute:"custom-hr"},detailBg:{type:String,attribute:"detail-bg"},secureLabel:{type:String,attribute:"secure-label"},checkboxLabel:{type:String,attribute:"checkbox-label"},stockOfferOsis:{type:Object,attribute:"stock-offer-osis",converter:{fromAttribute:e=>{let[r,n,a]=e.split(",");return{PUF:r,ABM:n,M2M:a}}}},filters:{type:String,reflect:!0,converter:{fromAttribute:e=>Object.fromEntries(e.split(",").map(r=>{let[n,a,o]=r.split(":"),h=Number(a);return[n,{order:isNaN(h)?void 0:h,size:o}]})),toAttribute:e=>Object.entries(e).map(([r,{order:n,size:a}])=>[r,n,a].filter(o=>o!=null).join(":")).join(",")}},types:{type:String,attribute:"types",reflect:!0}};static styles=[k,...z()];constructor(){super(),this.filters={},this.types=""}#e;updated(e){e.has("badgeBackgroundColor")&&(this.style.border=`1px solid ${this.badgeBackgroundColor}`),this.updateComplete.then(async()=>{let r=Array.from(this.querySelectorAll('span[is="inline-price"][data-wcs-osi]'));await Promise.all(Array.from(r).map(n=>n.onceSettled())),this.adjustMiniCompareBodySlots(),this.adjustMiniCompareFooterRows()})}renderIcons(){return!this.icons||this.icons.length===0?t`<slot name="icons"></slot>`:t`
            <div class="icons">
                ${this.icons.map(e=>{let r=this.querySelector('div[slot="body-xs"]')?.querySelector('a[href$="#mnemonic-link"]');return r&&(r.href=r.href.replace("#mnemonic-link","")),r?t`
                              <a href="${r.href||"#"}">
                                  <img
                                      src="${e.src}"
                                      alt="${e.alt}"
                                      loading="lazy"
                                  />
                              </a>
                          `:t`<img
                              src="${e.src}"
                              alt="${e.alt}"
                              loading="lazy"
                          />`})}
            </div>
        `}get evergreen(){return this.classList.contains("intro-pricing")}get stockCheckbox(){return this.checkboxLabel?t`<label id="stock-checkbox">
                    <input type="checkbox" @change=${this.toggleStockOffer}></input>
                    <span></span>
                    ${this.checkboxLabel}
                </label>`:""}get cardImage(){return t` <div class="image">
            <slot name="bg-image"></slot>
            ${this.badge}
        </div>`}get secureLabelFooter(){let e=this.secureLabel?t`<span class="secure-transaction-label"
                  >${this.secureLabel}</span
              >`:"";return t`<footer>${e}<slot name="footer"></slot></footer>`}get miniCompareFooter(){let e=this.secureLabel?t`<slot name="secure-transaction-label">
                  <span class="secure-transaction-label"
                      >${this.secureLabel}</span
                  ></slot
              >`:t`<slot name="secure-transaction-label"><slot>`;return t`<footer>${e}<slot name="footer"></slot></footer>`}get badge(){let e;if(!(!this.badgeBackgroundColor||!this.badgeColor||!this.badgeText))return this.evergreen&&(e=`border: 1px solid ${this.badgeBackgroundColor}; border-right: none;`),t`
            <div
                class="${this.variant}-badge"
                style="background-color: ${this.badgeBackgroundColor};
                    color: ${this.badgeColor};
                    ${e}"
            >
                ${this.badgeText}
            </div>
        `}getContainer(){return this.closest('[class*="-merch-cards"]')??this.parentElement}get headingmMSlot(){return this.shadowRoot.querySelector('slot[name="heading-m"]').assignedElements()[0]}get footerSlot(){return this.shadowRoot.querySelector('slot[name="footer"]')?.assignedElements()[0]}get price(){return this.headingmMSlot?.querySelector('span[is="inline-price"]')}get checkoutLinks(){return[...this.footerSlot?.querySelectorAll('a[is="checkout-link"]')??[]]}get isMobileOrTablet(){return window.matchMedia("(max-width: 1024px)").matches}async toggleStockOffer({target:e}){if(!this.stockOfferOsis)return;let r=this.checkoutLinks;if(r.length!==0)for(let n of r){await n.onceSettled();let a=n.value?.[0]?.planType;if(!a)return;let o=this.stockOfferOsis[a];if(!o)return;let h=n.dataset.wcsOsi.split(",").filter(x=>x!==o);e.checked&&h.push(o),n.dataset.wcsOsi=h.join(",")}}toggleActionMenu(e){let r=e?.type==="mouseleave"?!0:void 0,n=this.shadowRoot.querySelector('slot[name="action-menu-content"]');n&&n.classList.toggle("hidden",r)}handleQuantitySelection(e){let r=this.checkoutLinks;for(let n of r)n.dataset.quantity=e.detail.option}get title(){return(this.variant==="special-offers"?this.querySelector('[slot="detail-m"]'):this.querySelector('[slot="heading-xs"]'))?.textContent?.trim()}updateFilters(e){let r={...this.filters};Object.keys(r).forEach(n=>{if(e){r[n].order=Math.min(r[n].order||2,2);return}let a=r[n].order;a===1||isNaN(a)||(r[n].order=Number(a)+1)}),this.filters=r}includes(e){return this.textContent.match(new RegExp(e,"i"))!==null}render(){if(!(!this.isConnected||this.style.display==="none"))switch(this.variant){case"special-offers":return this.renderSpecialOffer();case"segment":return this.renderSegment();case"plans":return this.renderPlans();case"catalog":return this.renderCatalog();case"image":return this.renderImage();case"product":return this.renderProduct();case"inline-heading":return this.renderInlineHeading();case b:return this.renderMiniCompareChart();default:return this.renderProduct()}}renderSpecialOffer(){return t`${this.cardImage}
            <div class="body">
                <slot name="detail-m"></slot>
                <slot name="heading-xs"></slot>
                <slot name="body-xs"></slot>
            </div>
            ${this.evergreen?t`
                      <div
                          class="detail-bg-container"
                          style="background: ${this.detailBg}"
                      >
                          <slot name="detail-bg"></slot>
                      </div>
                  `:t`
                      <hr />
                      ${this.secureLabelFooter}
                  `}`}renderSegment(){return t` ${this.badge}
            <div class="body">
                <slot name="heading-xs"></slot>
                <slot name="body-xs"></slot>
            </div>
            <hr />
            ${this.secureLabelFooter}`}renderPlans(){return t` ${this.badge}
            <div class="body">
                ${this.renderIcons()}
                <slot name="heading-xs"></slot>
                <slot name="heading-m"></slot>
                <slot name="body-xxs"></slot>
                <slot name="body-xs"></slot>
                ${this.stockCheckbox}
            </div>
            <slot name="quantity-select"></slot>
            ${this.secureLabelFooter}`}renderCatalog(){return t` <div class="body">
                <div class="top-section">
                    ${this.renderIcons()} ${this.badge}
                    <div
                        class="action-menu
                        ${this.isMobileOrTablet?"always-visible":""}
                        ${this.actionMenu?"invisible":"hidden"}"
                        @click="${this.toggleActionMenu}"
                    ></div>
                </div>
                <slot
                    name="action-menu-content"
                    class="action-menu-content
                    ${this.actionMenuContent?"":"hidden"}"
                    >${this.actionMenuContent}</slot
                >
                <slot name="heading-xs"></slot>
                <slot name="heading-m"></slot>
                <slot name="body-xxs"></slot>
                <slot name="body-xs"></slot>
            </div>
            ${this.secureLabelFooter}`}renderImage(){return t`${this.cardImage}
            <div class="body">
                ${this.renderIcons()}
                <slot name="heading-xs"></slot>
                <slot name="body-xxs"></slot>
                <slot name="body-xs"></slot>
            </div>
            ${this.evergreen?t`
                      <div
                          class="detail-bg-container"
                          style="background: ${this.detailBg}"
                      >
                          <slot name="detail-bg"></slot>
                      </div>
                  `:t`
                      <hr />
                      ${this.secureLabelFooter}
                  `}`}renderInlineHeading(){return t` ${this.badge}
            <div class="body">
                <div class="top-section">
                    ${this.renderIcons()}
                    <slot name="heading-xs"></slot>
                </div>
                <slot name="body-xs"></slot>
            </div>
            ${this.customHr?"":t`<hr />`} ${this.secureLabelFooter}`}renderProduct(){return t` ${this.badge}
            <div class="body">
                ${this.renderIcons()}
                <slot name="heading-xs"></slot>
                <slot name="body-xs"></slot>
            </div>
            ${this.secureLabelFooter}`}renderMiniCompareChart(){return t` <div class="top-section">
                ${this.renderIcons()} ${this.badge}
            </div>
            <slot name="heading-m"></slot>
            <slot name="body-m"></slot>
            <slot name="heading-m-price"></slot>
            <slot name="price-commitment"></slot>
            <slot name="offers"></slot>
            <slot name="promo-text"></slot>
            ${this.miniCompareFooter}
            <slot name="footer-rows"><slot name="body-s"></slot></slot>`}connectedCallback(){super.connectedCallback(),this.#e=this.getContainer(),this.setAttribute("tabindex","0"),this.addEventListener("keydown",this.keydownHandler),this.addEventListener("mouseleave",this.toggleActionMenu),this.addEventListener("change",this.handleQuantitySelection)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.keydownHandler),this.removeEventListener("change",this.handleQuantitySelection)}keydownHandler(e){let r=document.activeElement?.closest(M);if(!r)return;function n(l,u){let p=document.elementFromPoint(l,u)?.closest(M);p&&(e.preventDefault(),e.stopImmediatePropagation(),p.focus(),p.scrollIntoView({behavior:"smooth",block:"center"}))}let{x:a,y:o,width:h,height:x}=r.getBoundingClientRect(),g=64,{code:w}=e;if(w==="Tab"){let l=Array.from(this.querySelectorAll('a[href], button:not([disabled]), textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select')),u=l[0],p=l[l.length-1];(!e.shiftKey&&document.activeElement===p||e.shiftKey&&document.activeElement===u)&&(e.preventDefault(),e.stopImmediatePropagation())}else switch(w){case $:n(a-g,o);break;case E:n(a+h+g,o);break;case C:n(a,o-g);break;case S:n(a,o+x+g);break;case A:this.footerSlot?.querySelector("a")?.click();break}}async adjustMiniCompareBodySlots(){if(this.variant!==b||this.getBoundingClientRect().width===0)return;["heading-m","body-m","heading-m-price","price-commitment","offers","promo-text","secure-transaction-label","footer"].forEach(r=>{let n=`--consonant-merch-card-mini-compare-${r}-height`,a=this.shadowRoot.querySelector(`slot[name="${r}"]`),o=Math.max(0,parseInt(window.getComputedStyle(a).height)||0),h=parseInt(this.#e.style.getPropertyValue(n))||0;o>h&&this.#e.style.setProperty(n,`${o}px`)})}adjustMiniCompareFooterRows(){if(this.variant!==b||this.getBoundingClientRect().width===0)return;[...this.querySelector('[slot="footer-rows"]').children].forEach((r,n)=>{let a=Math.max(P,parseInt(window.getComputedStyle(r).height)||0),o=parseInt(this.#e.style.getPropertyValue(R(n+1)))||0;a>o&&this.#e.style.setProperty(R(n+1),`${a}px`)})}};customElements.define(T,y);export{T as MERCH_CARD,M as MERCH_CARD_NODE_NAME,y as MerchCard};
//# sourceMappingURL=merch-card.js.map
