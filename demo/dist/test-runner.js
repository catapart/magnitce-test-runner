// src/test-runner.css?raw
var test_runner_default = `:host\r
{\r
    \r
    --gap-small: 7px;\r
    --gap: 14px;\r
\r
    --surface-menu: oklch(99.4% 0 0);\r
    --surface-button: oklch(62.39% 0.181 258.33);\r
    --surface-button-hover: oklch(68.39% 0.181 258.33);\r
    --surface-button-active: oklch(50.39% 0.181 258.33);\r
\r
    --surface-success: oklch(93.96% 0.05 148.74);\r
    --surface-fail: oklch(88.98% 0.052 3.28);\r
    --surface-process: oklch(89.66% 0.046 260.67);\r
\r
    --text-surface: oklch(14.38% 0.007 256.88);\r
    --text-button: oklch(99.4% 0 0);\r
\r
    --border-test: solid 1px oklch(63.12% 0.004 219.55);\r
    --border-success: solid 1px oklch(58.83% 0.158 145.05);\r
    --border-fail: solid 1px oklch(45.8% 0.177 17.7);\r
    --border-process: solid 1px oklch(43.48% 0.17 260.2);\r
\r
    --border-button: solid 1px oklch(62.39% 0.181 258.33);\r
\r
    --info-icon: url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%2022.812714%2022.814663%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Asvg%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20style%3D%22fill%3Atransparent%3Bstroke%3Atransparent%3Bstroke-width%3A0.999999%3Bstroke-linejoin%3Around%3Bstroke-miterlimit%3A6.3%3Bstroke-dasharray%3Anone%3Bstroke-dashoffset%3A29.2913%3Bstroke-opacity%3A1%22%20d%3D%22M%2022.295505%2C11.407332%20A%2010.889144%2C10.889144%200%200%201%2011.406424%2C22.296479%2010.889144%2C10.889144%200%200%201%200.51720881%2C11.407332%2010.889144%2C10.889144%200%200%201%2011.406424%2C0.51818382%2010.889144%2C10.889144%200%200%201%2022.295505%2C11.407332%20Z%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22m%2013.945668%2C4.3053761%20c%200.150778%2C-0.96462%20-0.30687%2C-1.43709%20-1.36997%2C-1.43709%20-1.063%2C0%20-1.668452%2C0.47247%20-1.81923%2C1.43709%20-0.150779%2C0.96462%200.306971%2C1.43708%201.369971%2C1.43708%201.004%2C0%201.66845%2C-0.47246%201.819229%2C-1.43708%20z%20M%2011.693889%2C17.829726%2013.373994%2C7.0811161%20h%20-2.9333%20L%208.7605887%2C17.829726%20Z%22%20style%3D%22font-size%3A19.6861px%3Bfont-family%3APassageway%3B-inkscape-font-specification%3APassageway%3Bfill%3A%23a30d30%3Bstroke-width%3A2.5%3Bstroke-linejoin%3Around%3Bstroke-miterlimit%3A6.3%3Bstroke-dashoffset%3A29.2913%22%20aria-label%3D%22i%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E');\r
\r
    --font-size: 12px;\r
    --font-text: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\r
    \r
\r
    color-scheme: light dark;\r
    display: grid;\r
    grid-template-columns: 400px 1fr;\r
    overflow: hidden;\r
    font-size: var(--font-size);\r
    font-family: var(--font-text);\r
}\r
@media (prefers-color-scheme: dark) \r
{\r
    :host\r
    {\r
        --surface-menu: oklch(25.11% 0.006 258.36);\r
\r
        --text-surface: oklch(99.4% 0 0);\r
        /* --text-result: oklch(99.4% 0 0); */\r
\r
        /* --surface-test: oklch(25.11% 0.006 258.36);\r
        --surface-test-summary: oklch(35.02% 0.005 236.66); */\r
    }\r
}\r
\r
#app-menu\r
{\r
    background-color: var(--surface-menu);\r
    display: grid;\r
    grid-template-rows: auto auto 1fr auto;\r
    margin: 0;\r
    padding: 0;\r
    overflow: hidden;\r
}\r
\r
#app-header\r
{\r
    display: grid;\r
    grid-template-columns: auto 1fr auto;\r
    gap: var(--gap-small);\r
    padding: var(--gap-small);\r
}\r
\r
#title\r
{\r
    font-size: 16px;\r
    font-weight: bold;\r
}\r
\r
#test-groups\r
{\r
    overflow: hidden;\r
    display: grid;\r
    grid-template-rows: auto 1fr;\r
}\r
\r
#test-groups-header\r
,#analyst-queue-summary\r
{\r
    padding: var(--gap-small);\r
    font-weight: bold;\r
}\r
\r
#test-groups-header\r
{\r
    border-bottom: solid 1px;\r
}\r
\r
#test-group-items\r
,#analyst-queue-items\r
{\r
    margin: 0;\r
    padding: 0;\r
    overflow: auto;\r
}\r
\r
summary\r
{\r
    display: grid;\r
    grid-template-columns: auto auto auto 1fr auto;\r
    gap: var(--gap-small);\r
    padding: var(--gap-small);\r
    align-items: center;\r
    user-select: none;\r
}\r
summary::before\r
{\r
    content: '';\r
    width: 12px;\r
    height: 12px;\r
    background: url("data:image/svg+xml,%3Csvg%20viewBox%3D'0%200%2020%2020'%20width%3D'14px'%20height%3D'14px'%20fill%3D'none'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cg%20stroke-width%3D'0'%3E%3C%2Fg%3E%3Cg%20stroke-linecap%3D'round'%20stroke-linejoin%3D'round'%3E%3C%2Fg%3E%3Cg%3E%3Cpath%20d%3D'M8.72798%2015.795L3.72798%207.795C3.10356%206.79593%203.82183%205.5%204.99998%205.5L15%205.5C16.1781%205.5%2016.8964%206.79593%2016.272%207.795L11.272%2015.795C10.6845%2016.735%209.31549%2016.735%208.72798%2015.795Z'%20fill%3D'%23878a8b'%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E");\r
    transform: rotate(-90deg);\r
    transition: transform ease-out 200ms;\r
}\r
[open] > summary::before\r
{\r
    transform: rotate(0);\r
}\r
\r
\r
code-tests::part(result-icon)\r
{\r
    --background-size: 16px;\r
    --icon-size: 12px;\r
}\r
code-tests::part(result-icon running)\r
{\r
    --icon-size: 10px;\r
}\r
code-tests::part(result-icon)::before\r
{\r
    font-size: 10px;\r
}\r
\r
/* .running::part(result-icon running)::before\r
{\r
    --size: 12px;\r
} */\r
\r
\r
#run-all\r
{\r
    width: auto;\r
    min-width: auto;\r
    max-width: auto;\r
    appearance: none;\r
    display: inline-flex;\r
    justify-content: center;\r
    align-items: center;\r
    padding: 3px 10px 3px 7px;\r
    font-size: 11px;\r
    gap: var(--gap-small);\r
    background: var(--surface-button);\r
    border: solid 1px var(--surface-button);\r
    border-radius: 4px;\r
    text-shadow: 1px 1px rgb(0 0 0 / .2);\r
    color: var(--text-button);\r
}\r
#run-all:hover\r
{\r
    background: var(--surface-button-hover);\r
}\r
#run-all:active\r
{\r
    background: var(--surface-button-active);\r
}\r
#run-all::before\r
{\r
    content: '';\r
    display: block;\r
    width: 16px;\r
    height: 16px;\r
    transform: rotate(-90deg);\r
    background: \r
    url("data:image/svg+xml,%3Csvg%20viewBox%3D'0%200%2020%2020'%20width%3D'16px'%20height%3D'16px'%20fill%3D'none'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cg%20stroke-width%3D'0'%3E%3C%2Fg%3E%3Cg%20stroke-linecap%3D'round'%20stroke-linejoin%3D'round'%3E%3C%2Fg%3E%3Cg%3E%3Cpath%20d%3D'M8.72798%2015.795L3.72798%207.795C3.10356%206.79593%203.82183%205.5%204.99998%205.5L15%205.5C16.1781%205.5%2016.8964%206.79593%2016.272%207.795L11.272%2015.795C10.6845%2016.735%209.31549%2016.735%208.72798%2015.795Z'%20fill%3D'%23fdfdfd'%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E");\r
}\r
\r
#app-footer\r
{\r
    padding: var(--gap-small);\r
}\r
\r
#subject\r
{\r
    overflow: auto;\r
}\r
\r
@media (max-width: 665px) \r
{\r
    :host\r
    {\r
        grid-template-columns: 1fr;\r
    }\r
}`;

// src/test-runner.html?raw
var test_runner_default2 = '<menu id="app-menu" class="menu">\r\n    <header id="app-header">\r\n        <div id="title">Test Runner</div>\r\n        <div id="app-options" class="options">\r\n\r\n        </div>\r\n        <button type="button" id="run-all">\r\n            <span id="run-button-label" class="button-label label icon">Run All Tests</span>\r\n        </button>\r\n    </header>\r\n    <details id="analyst-queue">\r\n        <summary id="analyst-queue-summary">Analyst Queue</summary>\r\n        <ul id="analyst-queue-items" class="items"></ul>\r\n    </details>\r\n    <div id="test-groups">\r\n        <header id="test-groups-header">Test Groups</header>\r\n        <ul id="test-group-items" class="items"></ul>\r\n    </div>\r\n    <footer id="app-footer">\r\n        <div id="app-results" class="results">\r\n            <div id="passing-results" class="pill">\r\n                <div id="passing-title" class="title">\r\n                    <span id="passing-color" class="color"></span>\r\n                    <span id="passing-label" class="label">Passing</span>\r\n                </div>\r\n                <div class="value"></div>\r\n            </div>\r\n            <div id="percentage">\r\n                <div class="pass"></div>\r\n                <div class="fail"></div>\r\n                <div class="skip"></div>\r\n                <div class="running"></div>\r\n            </div>\r\n        </div>\r\n    </footer>\r\n</menu>\r\n<div id="subject">\r\n    <slot name="subject"></slot>\r\n</div>\r\n<slot id="groups-slot"></slot>';

// node_modules/.pnpm/ce-part-utils@0.0.0/node_modules/ce-part-utils/dist/ce-part-utils.js
var DEFAULT_ELEMENT_SELECTOR = ":not(slot,defs,g,rect,path,circle,ellipse,line,polygon,text,tspan,use,svg image,svg title,desc,template,template *)";
function assignClassAndIdToPart(shadowRoot) {
  const identifiedElements = [...shadowRoot.querySelectorAll(`${DEFAULT_ELEMENT_SELECTOR}[id]`)];
  for (let i = 0; i < identifiedElements.length; i++) {
    identifiedElements[i].part.add(identifiedElements[i].id);
  }
  const classedElements = [...shadowRoot.querySelectorAll(`${DEFAULT_ELEMENT_SELECTOR}[class]`)];
  for (let i = 0; i < classedElements.length; i++) {
    classedElements[i].part.add(...classedElements[i].classList);
  }
}
function assignTagToPart(shadowRoot, config) {
  const elements = [...shadowRoot.querySelectorAll(`${DEFAULT_ELEMENT_SELECTOR}`)];
  for (let i = 0; i < elements.length; i++) {
    const tagName = elements[i].tagName.toLowerCase();
    elements[i].part.add(config?.[tagName] ?? tagName);
  }
}
function getExportPartsFromParts(shadowRoot, addNewlines = false, replacements) {
  const exportPartsSet = new Set([...shadowRoot.querySelectorAll("[part]")].map((item) => {
    let parts = [...item.part.values()].filter((item2) => item2 != null).map((part) => {
      const replacement = replacements?.[part];
      return replacement != null ? `${part}:${replacement}` : part;
    });
    const childExports = item.getAttribute("exportparts");
    if (childExports != null) {
      const childParts = childExports.replaceAll(/[\s\n]/g, "").split(",").map((item2) => item2.indexOf(":") == -1 ? item2 : item2.split(":")[1]);
      parts = parts.concat(...childParts);
    }
    return parts;
  }).flat().filter((item) => item.length > 0));
  const exportParts = Array.from(exportPartsSet).join(`,${addNewlines == true ? "\n" : ""}`);
  return exportParts;
}
function assignPartsAsExportPartsAttribute(shadowRoot, addNewlines = false, replacements) {
  const exportParts = getExportPartsFromParts(shadowRoot, addNewlines, replacements);
  const existingExports = shadowRoot.host.getAttribute("exportparts");
  shadowRoot.host.setAttribute("exportparts", `${existingExports == null ? "" : `${existingExports},`}${exportParts}`);
}

// node_modules/.pnpm/@magnit-ce+code-tests@0.0.10/node_modules/@magnit-ce/code-tests/dist/code-tests.js
var code_tests_default = `:host
{
    /*** gray ***/
    --uchu-light-gray-raw: 95.57% 0.003 286.35;
    --uchu-light-gray: oklch(var(--uchu-light-gray-raw));

    --uchu-gray-raw: 84.68% 0.002 197.12;
    --uchu-gray: oklch(var(--uchu-gray-raw));

    --uchu-dark-gray-raw: 63.12% 0.004 219.55;
    --uchu-dark-gray: oklch(var(--uchu-dark-gray-raw));

    /*** red ***/
    --uchu-light-red-raw: 88.98% 0.052 3.28;
    --uchu-light-red: oklch(var(--uchu-light-red-raw));

    --uchu-dark-red-raw: 45.8% 0.177 17.7;
    --uchu-dark-red: oklch(var(--uchu-dark-red-raw));

    /*** purple ***/
    --uchu-light-purple-raw: 89.1% 0.046 305.24;
    --uchu-light-purple: oklch(var(--uchu-light-purple-raw));

    --uchu-dark-purple-raw: 39.46% 0.164 298.29;
    --uchu-dark-purple: oklch(var(--uchu-dark-purple-raw));

    /*** blue ***/
    --uchu-light-blue-raw: 89.66% 0.046 260.67;
    --uchu-light-blue: oklch(var(--uchu-light-blue-raw));

    --uchu-blue-raw: 62.39% 0.181 258.33;
    --uchu-blue: oklch(var(--uchu-blue-raw));

    --uchu-dark-blue-raw: 43.48% 0.17 260.2;
    --uchu-dark-blue: oklch(var(--uchu-dark-blue-raw));

    /*** green ***/
    --uchu-light-green-raw: 93.96% 0.05 148.74;
    --uchu-light-green: oklch(var(--uchu-light-green-raw));

    --uchu-green-raw: 79.33% 0.179 145.62;
    --uchu-green: oklch(var(--uchu-green-raw));

    --uchu-dark-green-raw: 58.83% 0.158 145.05;
    --uchu-dark-green: oklch(var(--uchu-dark-green-raw));

    /*** general ***/
    --uchu-yang-raw: 99.4% 0 0;
    --uchu-yang: oklch(var(--uchu-yang-raw));

    --uchu-yin-raw: 14.38% 0.007 256.88;
    --uchu-yin: oklch(var(--uchu-yin-raw));

    /*** code-tests vars ***/

    --spacer: calc(1em - 7px);
    --small-spacer: calc(var(--spacer) / 2);

    --color-success: var(--uchu-green);
    --color-fail: var(--uchu-red);
    --color-process: var(--uchu-blue);

    --text-surface: var(--uchu-yin);
    --text-result: var(--uchu-yang); /* --uchu-yang: #fdfdfd; */
    --text-collapse-icon: var(--uchu-dark-gray);  /* --uchu-dark-gray: #878a8b; */
    --text-hook-summary: var(--uchu-dark-purple);
    --text-success: var(--uchu-dark-green); /* --uchu-dark-green: #2e943a; */
    --text-fail: var(--uchu-dark-red); /* --uchu-dark-red: #a30d30; */
    --text-process: var(--uchu-dark-blue); /* --uchu-dark-blue: #0949ac; */
    --text-button: var(--uchu-yang); /* --uchu-dark-blue: #0949ac; */
    --text-placeholder: var(--uchu-dark-gray);

    --surface-0: var(--uchu-light-gray);
    --surface-test: var(--uchu-yang);
    --surface-test-summary: var(--uchu-gray);
    --surface-hook-summary: var(--uchu-light-purple);
    --surface-success: var(--uchu-light-green);
    --surface-fail: var(--uchu-light-red);
    --surface-process: var(--uchu-light-blue);
    --surface-button: var(--uchu-blue); /* --uchu-blue: #3984f2 */
    --surface-button-hover: var(--uchu-light-blue);
    --surface-button-active: var(--uchu-dark-blue);
    --surface-button-cancel: var(--uchu-dark-blue);

    --border-test: solid 1px var(--uchu-dark-gray);
    --border-hook: solid 1px var(--uchu-dark-purple);
    --border-success: solid 1px var(--uchu-dark-green);
    --border-fail: solid 1px var(--uchu-dark-red);
    --border-process: solid 1px var(--uchu-dark-blue);
    --border-button: solid 1px var(--uchu-blue);

    --success-icon: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="%232e943a" d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>');
    --info-icon: url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%2022.812714%2022.814663%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Asvg%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20style%3D%22fill%3Atransparent%3Bstroke%3Atransparent%3Bstroke-width%3A0.999999%3Bstroke-linejoin%3Around%3Bstroke-miterlimit%3A6.3%3Bstroke-dasharray%3Anone%3Bstroke-dashoffset%3A29.2913%3Bstroke-opacity%3A1%22%20d%3D%22M%2022.295505%2C11.407332%20A%2010.889144%2C10.889144%200%200%201%2011.406424%2C22.296479%2010.889144%2C10.889144%200%200%201%200.51720881%2C11.407332%2010.889144%2C10.889144%200%200%201%2011.406424%2C0.51818382%2010.889144%2C10.889144%200%200%201%2022.295505%2C11.407332%20Z%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22m%2013.945668%2C4.3053761%20c%200.150778%2C-0.96462%20-0.30687%2C-1.43709%20-1.36997%2C-1.43709%20-1.063%2C0%20-1.668452%2C0.47247%20-1.81923%2C1.43709%20-0.150779%2C0.96462%200.306971%2C1.43708%201.369971%2C1.43708%201.004%2C0%201.66845%2C-0.47246%201.819229%2C-1.43708%20z%20M%2011.693889%2C17.829726%2013.373994%2C7.0811161%20h%20-2.9333%20L%208.7605887%2C17.829726%20Z%22%20style%3D%22font-size%3A19.6861px%3Bfont-family%3APassageway%3B-inkscape-font-specification%3APassageway%3Bfill%3A%23a30d30%3Bstroke-width%3A2.5%3Bstroke-linejoin%3Around%3Bstroke-miterlimit%3A6.3%3Bstroke-dashoffset%3A29.2913%22%20aria-label%3D%22i%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E');

    --font-text: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

    /*** styles ***/

    color-scheme: light dark;
    display: grid;
    gap: var(--spacer);
    background-color: var(--surface-0);
    color: var(--text-surface); 
    padding: var(--small-spacer);
    font-family: var(--font-text);
}
@media (prefers-color-scheme: dark) 
{
    :host
    {
        --text-surface: var(--uchu-yang);
        --text-result: var(--uchu-yang);

        --surface-0: var(--uchu-yin);
        --surface-test: oklch(25.11% 0.006 258.36);
        --surface-test-summary: oklch(35.02% 0.005 236.66);
    }
}

#header
{
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: var(--spacer);
    border-bottom: solid 2px;
    padding: var(--spacer);
    margin-bottom: var(--spacer);
    user-select: none;
}

#title
{
    font-weight: bold;
    font-size: 16px;
}

.hook
{
    display: none;
}
:host(.has-before-hook) #before-all-details
,:host(.has-before-hook) #after-all-details
{
    display: initial;
}

#tests
{
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    grid-auto-rows: max-content;
    gap: var(--spacer);
}

summary
{
    display: grid;
    gap: var(--spacer);
    padding: var(--small-spacer) var(--spacer);
    align-items: center;
}
summary::before
{
    content: '';
    width: 16px;
    height: 16px;
    background: url("data:image/svg+xml,%3Csvg%20viewBox%3D'0%200%2020%2020'%20width%3D'14px'%20height%3D'14px'%20fill%3D'none'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cg%20stroke-width%3D'0'%3E%3C%2Fg%3E%3Cg%20stroke-linecap%3D'round'%20stroke-linejoin%3D'round'%3E%3C%2Fg%3E%3Cg%3E%3Cpath%20d%3D'M8.72798%2015.795L3.72798%207.795C3.10356%206.79593%203.82183%205.5%204.99998%205.5L15%205.5C16.1781%205.5%2016.8964%206.79593%2016.272%207.795L11.272%2015.795C10.6845%2016.735%209.31549%2016.735%208.72798%2015.795Z'%20fill%3D'%23878a8b'%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E");
    transform: rotate(-90deg);
    transition: transform ease-out 200ms;
}
[open] > summary::before
{
    transform: rotate(0);
    /* background: var(--surface-test-summary); */
}

:host(.running) .run[data-all]
{
    background-color: var(--surface-test-summary);
    border-color: var(--surface-test-summary);
}
:host(.running) .run[data-all]:hover
{
    background-color: var(--uchu-dark-gray);
    border-color: var(--uchu-dark-gray);
}
:host(.running) .run[data-all]:active
{
    background-color: var(--surface-test);
    border-color: var(--surface-test);
}
:host(.running) .run[data-all]::before
{
    display: none;
}

#before-all-summary
,#after-all-summary
{
    background: var(--surface-hook-summary);
    color: var(--text-hook-summary);
    grid-template-columns: auto auto 1fr;
}

.result-icon
{
    --background-size: 24px;
    width: var(--background-size);
    height: var(--background-size);

    display: flex;
    align-items: center;
    justify-content: center;

    border: solid 1px currentColor;
    border-radius: 50%;
}
.result-icon::before
{
    content: '\u22EF';
}

.hook
{
    border: var(--border-hook);
}

.test
,#before-all-details
,#after-all-details
{
    border: var(--border-test);
    border-radius: 2px;
}

.test summary
{
    background: var(--surface-test-summary);
    grid-template-columns: auto auto 1fr auto;
}

.test.running .result-icon
,.hook.running .result-icon
{
    border: var(--border-process);
    background: var(--surface-process);
}
.test.success .result-icon
,.hook.success .result-icon
{
    border: var(--border-success);
    background: var(--surface-success)
    var(--success-icon);
    background-repeat: no-repeat;
    background-position: center;
    background-size: var(--icon-size, 16px) var(--icon-size, 16px);
}
.test.fail .result-icon
,.hook.fail .result-icon
{
    border: var(--border-fail);
    background: var(--surface-fail)
    var(--info-icon);
    background-repeat: no-repeat;
    background-position: center;
    transform: rotate(175deg);
}
.test:is(.success,.fail) .result-icon::before
,.hook:is(.success,.fail) .result-icon::before
{
    display: none;
}
.test:is(.running) .result-icon::before
,.hook:is(.running) .result-icon::before
{
    content: '';
    --color: var(--text-process);
    --animation-timing-function: linear;
    --animation-duration: 2s;
    width: var(--icon-size, 18px);
    height: var(--icon-size, 18px);
    mask-image: radial-gradient(circle at 50% 50%, transparent calc(var(--icon-size, 18px) / 3), black calc(var(--icon-size, 18px) / 3));
    background-image: conic-gradient(transparent, transparent 135deg, var(--color));
    border-radius: 50%;
    animation: var(--animation-timing-function) var(--animation-duration) infinite spin;
    margin: 2px;
}

.description
{
    user-select: none;
}

.test .result
,.hook .result
{
    background: var(--surface-test);
    border: var(--border-test);
    border-radius: 2px;
    margin: var(--small-spacer);
}

.test .result:empty::before
,.results:empty::before
{
    content: "[Test has not been run]";
    font-style: italic;
    font-size: 11px;
    color: var(--text-placeholder);
}
.results:empty::before
{
    content: "[Tests have not been run]";
}
.before-result:empty
,.after-result:empty
{
    display: none;
}

.test .result
,.results
,.before-result
,.after-result
{
    padding: var(--small-spacer) var(--spacer);
}

pre
{
    margin: var(--small-spacer);
}

.run
{
    width: auto;
    min-width: auto;
    max-width: auto;
    appearance: none;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 3px 10px 3px 7px;
    font-size: 11px;
    gap: var(--small-spacer);
    border: var(--border-button);
    background: var(--surface-button);
    border-radius: 4px;
    text-shadow: 1px 1px rgb(0 0 0 / .2);
    color: var(--text-button);
}
.run:hover
{
    background: oklch(68.39% 0.181 258.33);
}
.run:active
{
    background: oklch(50.39% 0.181 258.33);
}
.run::before
{
    content: '';
    display: block;
    width: 16px;
    height: 16px;
    transform: rotate(-90deg);
    background: 
    url("data:image/svg+xml,%3Csvg%20viewBox%3D'0%200%2020%2020'%20width%3D'16px'%20height%3D'16px'%20fill%3D'none'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cg%20stroke-width%3D'0'%3E%3C%2Fg%3E%3Cg%20stroke-linecap%3D'round'%20stroke-linejoin%3D'round'%3E%3C%2Fg%3E%3Cg%3E%3Cpath%20d%3D'M8.72798%2015.795L3.72798%207.795C3.10356%206.79593%203.82183%205.5%204.99998%205.5L15%205.5C16.1781%205.5%2016.8964%206.79593%2016.272%207.795L11.272%2015.795C10.6845%2016.735%209.31549%2016.735%208.72798%2015.795Z'%20fill%3D'%23fdfdfd'%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E");
}



@keyframes spin
{
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}`;
var code_tests_default2 = '<slot name="header">\n    <header id="header">\n        <span id="title"><slot name="title"><span id="title-text">Tests</span></slot></span>\n        <slot name="play-button">\n            <button type="button" class="run" data-all>\n                <slot name="play-button-label">\n                    <span id="play-button-label" class="button-label label icon">Run Tests</span>\n                </slot>\n            </button>\n        </slot>\n        <slot name="details"></slot>\n    </header>\n</slot>\n<details id="before-all-details" class="hook">\n    <summary id="before-all-summary">\n        <span id="before-all-result-icon" class="result-icon"></span>\n        <span id="before-all-description" class="description">Results from Before All Hook</span>\n    </summary>\n    <div id="before-all-results" class="results"></div>\n</details>\n<ul id="tests"></ul>\n<details id="after-all-details" class="hook">\n    <summary id="after-all-summary">\n        <span id="after-all-result-icon" class="result-icon"></span>\n        <span id="after-all-description" class="description">Results from After All Hook</span>\n    </summary>\n    <div id="after-all-results" class="results"></div>\n</details>\n\n<template id="prompt-template">\n    <div class="prompt" part="prompt">\n        <div class="prompt-display">\n            <span class="icon prompt-icon"></span>\n            <span class="label prompt-label"></span>\n        </div>\n        <div class="prompt-actions">\n            <button class="prompt-button accept" type="button">Accept</button>\n            <button class="prompt-button reject" type="button">Reject</button>\n        </div>\n    </div>\n</template>';
var TestPromise = class extends Promise {
  async toBeDefined(valueName) {
    const target = await this;
    if (target == void 0) {
      throw new Error(`${valueName != null ? valueName : "Value"} is undefined`);
    }
  }
  async toBe(value, exact = false) {
    const target = await this;
    const result = exact == true ? target === value : target == value;
    if (result == false) {
      throw new Error(`  Value is not equal.
  Expected: ${value}
  Result: ${target}`);
    }
  }
  async toContainText(value) {
    const target = await this;
  }
  async toHaveAttribute(value) {
    const target = await this;
    if (!(target instanceof HTMLElement)) {
      throw new Error("Unable to check for attribute on non-HTMLElement target");
    }
    if (target.getAttribute(value)) {
      throw new Error("Taret does not have attribute");
    }
  }
};
var BEFOREALL = Symbol("beforeAll");
var BEFOREEACH = Symbol("beforeEach");
var AFTERALL = Symbol("afterAll");
var AFTEREACH = Symbol("afterEach");
var CodeTests = class _CodeTests {
  static timeoutMS = 500;
  static #expectInterval;
  static #expectPromise;
  static expect(value) {
    const promise = new TestPromise(async (resolve, reject) => {
      if (value instanceof Promise) {
        const result = await value;
        resolve(result);
        return;
      }
      resolve(value);
    });
    return promise;
  }
  static expectSync(value) {
    const promise = new TestPromise(async (resolve, reject) => {
      if (value instanceof Promise) {
        const result = await value;
        resolve(result);
        return;
      }
      resolve(value);
    });
    return promise;
  }
  static expectBefore(value) {
    const promise = new TestPromise(async (resolve, reject) => {
      if (value instanceof Promise) {
        const result = await value;
        resolve(result);
        return;
      }
      resolve(value);
    });
    return promise;
  }
  static async prompt(host, parent, message, options) {
    return new Promise((resolve, reject) => {
      const template = host.findElement("prompt-template");
      const promptElement = _CodeTests.createElementFromTemplate(template);
      promptElement.querySelector(".label").textContent = message;
      const clickHandler = (event) => {
        const composedPath = event.composedPath();
        const acceptButton = composedPath.find((item) => item instanceof HTMLButtonElement && item.classList.contains("accept"));
        if (acceptButton != null) {
          const result = options?.onAccept?.() ?? true;
          promptElement.removeEventListener("click", clickHandler);
          resolve(result);
          return;
        }
        const rejectButton = composedPath.find((item) => item instanceof HTMLButtonElement && item.classList.contains("reject"));
        if (rejectButton != null) {
          const result = options?.onReject?.() ?? false;
          promptElement.removeEventListener("click", clickHandler);
          resolve(result);
          return;
        }
      };
      promptElement.addEventListener("click", clickHandler);
      if (options?.acceptLabel != null) {
        promptElement.querySelector(".accept").textContent = options.acceptLabel;
      }
      if (options?.rejectLabel != null) {
        promptElement.querySelector(".reject").textContent = options.rejectLabel;
      }
      const details = parent instanceof HTMLDetailsElement ? parent : parent.querySelector(".test-details");
      if (details != null) {
        details.open = true;
      }
      parent.querySelector(".result")?.append(promptElement);
    });
  }
  static createElementFromTemplate(target, parent) {
    const templateNode = target instanceof HTMLTemplateElement ? target : document.querySelector(target);
    if (templateNode == null) {
      throw new Error(`Unable to find template element from selector: ${target}`);
    }
    const firstChild = templateNode.content.cloneNode(true).querySelector("*");
    if (firstChild == null) {
      throw new Error(`Unable to find first child of template element`);
    }
    parent?.append(firstChild);
    return firstChild;
  }
};
function expect(value) {
  return CodeTests.expect(value);
}
function prompt(host, parent, message, options) {
  return CodeTests.prompt(host, parent, message, options);
}
var DEFAULT_ELEMENT_SELECTOR2 = ":not(slot,defs,g,rect,path,circle,ellipse,line,polygon,text,tspan,use,svg image,svg title,desc,template,template *)";
function assignClassAndIdToPart2(shadowRoot) {
  const identifiedElements = [...shadowRoot.querySelectorAll(`${DEFAULT_ELEMENT_SELECTOR2}[id]`)];
  for (let i = 0; i < identifiedElements.length; i++) {
    identifiedElements[i].part.add(identifiedElements[i].id);
  }
  const classedElements = [...shadowRoot.querySelectorAll(`${DEFAULT_ELEMENT_SELECTOR2}[class]`)];
  for (let i = 0; i < classedElements.length; i++) {
    classedElements[i].part.add(...classedElements[i].classList);
  }
}
var CodeTestEventType = /* @__PURE__ */ ((CodeTestEventType2) => {
  CodeTestEventType2["BeforeAll"] = "beforeall";
  CodeTestEventType2["AfterAll"] = "afterall";
  CodeTestEventType2["BeforeTest"] = "beforetest";
  CodeTestEventType2["AfterTest"] = "aftertest";
  CodeTestEventType2["Cancel"] = "cancel";
  return CodeTestEventType2;
})(CodeTestEventType || {});
var NOTESTDEFINED = Symbol("No Test Defined");
var COMPONENT_STYLESHEET = new CSSStyleSheet();
COMPONENT_STYLESHEET.replaceSync(code_tests_default);
var COMPONENT_TAG_NAME = "code-tests";
var CodeTestsElement = class extends HTMLElement {
  componentParts = /* @__PURE__ */ new Map();
  getElement(id) {
    if (this.componentParts.get(id) == null) {
      const part = this.findElement(id);
      if (part != null) {
        this.componentParts.set(id, part);
      }
    }
    return this.componentParts.get(id);
  }
  findElement(id) {
    return this.shadowRoot.getElementById(id);
  }
  #hooks = /* @__PURE__ */ new Map();
  #hookIds = {
    [BEFOREALL]: generateId(),
    [BEFOREEACH]: generateId(),
    [AFTEREACH]: generateId(),
    [AFTERALL]: generateId()
  };
  #continueRunningTests = true;
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = code_tests_default2;
    this.shadowRoot.adoptedStyleSheets.push(COMPONENT_STYLESHEET);
    this.#boundClickHandler = this.#onClick.bind(this);
  }
  connectedCallback() {
    assignClassAndIdToPart2(this.shadowRoot);
    this.addEventListener("click", this.#boundClickHandler);
    if (this.getAttribute("auto") == "false") {
      return;
    }
    const testsPath = this.getAttribute("src") ?? this.getAttribute("test") ?? this.getAttribute("tests") ?? this.getAttribute("run") ?? this.getAttribute("path");
    if (testsPath == null) {
      return;
    }
    this.loadTests(testsPath);
  }
  disconnectedCallback() {
    this.removeEventListener("click", this.#boundClickHandler);
  }
  #boundClickHandler;
  #onClick(event) {
    const runButton = event.composedPath().find((item) => item instanceof HTMLButtonElement && item.classList.contains("run"));
    if (runButton == null) {
      return;
    }
    const parentListItem = runButton.closest("li");
    if (parentListItem == null) {
      const isRunAll = runButton.hasAttribute("data-all");
      if (isRunAll == true) {
        if (this.classList.contains("running")) {
          if (this.classList.contains("canceled")) {
            return;
          }
          this.cancel();
        } else {
          this.runTests();
        }
      }
      return;
    }
    const testId = parentListItem.dataset.testId;
    if (testId == null) {
      return;
    }
    const test = this.#tests.get(testId);
    if (test == null) {
      return;
    }
    this.#isCanceled = false;
    this.classList.remove("canceled");
    this.part.remove("canceled");
    this.#runTest(testId, test);
  }
  #getCurrentTestsPath() {
    return this.getAttribute("src") ?? this.getAttribute("test") ?? this.getAttribute("tests") ?? this.getAttribute("run") ?? this.getAttribute("path");
  }
  async loadTests(testsPath) {
    const path = testsPath ?? this.#getCurrentTestsPath();
    if (path == null) {
      return;
    }
    try {
      this.getElement("tests").innerHTML = "";
      this.#tests.clear();
      this.classList.remove("has-before-hook");
      this.classList.remove("has-after-hook");
      const lastSlashIndexInCurrentPath = window.location.href.lastIndexOf("/");
      const currentPathHasExtension = window.location.href.substring(lastSlashIndexInCurrentPath).indexOf(".") != -1;
      const currentPath = currentPathHasExtension == true ? window.location.href.substring(0, lastSlashIndexInCurrentPath + 1) : window.location.href;
      const moduleDirectory = currentPath + path.substring(0, path.lastIndexOf("/") + 1);
      const modulePath = currentPath + path;
      let moduleContent = await (await fetch(modulePath)).text();
      moduleContent = moduleContent.replaceAll(/['"`](((\.\/)|(\.\.\/))+(.*))['"`]/g, `'${moduleDirectory}$1'`);
      const moduleFile = new File([moduleContent], path.substring(path.lastIndexOf("/")), { type: "text/javascript" });
      const moduleURL = URL.createObjectURL(moduleFile);
      const module = await import(moduleURL);
      const tests = module.tests ?? module.default;
      if (tests == void 0) {
        throw new Error(`Unable to find tests definition in file at path: ${path}`);
      }
      const beforeAll = tests[BEFOREALL];
      if (beforeAll != null) {
        const hookMap = this.#hooks.get(BEFOREALL);
        if (hookMap == null) {
          const map = /* @__PURE__ */ new Map();
          map.set(beforeAll, /* @__PURE__ */ new Set());
          this.#hooks.set(BEFOREALL, map);
        }
        this.classList.add("has-before-hook");
      }
      const beforeEach = tests[BEFOREEACH];
      if (beforeEach != null) {
        const hookMap = this.#hooks.get(BEFOREEACH);
        if (hookMap == null) {
          const map = /* @__PURE__ */ new Map();
          map.set(beforeEach, /* @__PURE__ */ new Set());
          this.#hooks.set(BEFOREEACH, map);
        }
      }
      const afterAll = tests[AFTERALL];
      if (afterAll != null) {
        const hookMap = this.#hooks.get(AFTERALL);
        if (hookMap == null) {
          const map = /* @__PURE__ */ new Map();
          map.set(afterAll, /* @__PURE__ */ new Set());
          this.#hooks.set(AFTERALL, map);
        }
        this.classList.add("has-after-hook");
      }
      const afterEach = tests[AFTEREACH];
      if (afterEach != null) {
        const hookMap = this.#hooks.get(AFTEREACH);
        if (hookMap == null) {
          const map = /* @__PURE__ */ new Map();
          map.set(afterEach, /* @__PURE__ */ new Set());
          this.#hooks.set(AFTEREACH, map);
        }
      }
      for (const [description, test] of Object.entries(tests)) {
        const id = this.#addTest(description, test);
        if (beforeAll != null) {
          const hookMap = this.#hooks.get(BEFOREALL);
          if (hookMap != null) {
            const testIds = hookMap.get(beforeAll);
            if (testIds != null) {
              testIds.add(id);
            }
          }
        }
        if (beforeEach != null) {
          const hookMap = this.#hooks.get(BEFOREEACH);
          if (hookMap != null) {
            const testIds = hookMap.get(beforeEach);
            if (testIds != null) {
              testIds.add(id);
            }
          }
        }
        if (afterAll != null) {
          const hookMap = this.#hooks.get(AFTERALL);
          if (hookMap != null) {
            const testIds = hookMap.get(afterAll);
            if (testIds != null) {
              testIds.add(id);
            }
          }
        }
        if (afterEach != null) {
          const hookMap = this.#hooks.get(AFTEREACH);
          if (hookMap != null) {
            const testIds = hookMap.get(afterEach);
            if (testIds != null) {
              testIds.add(id);
            }
          }
        }
      }
    } catch (error) {
      this.#addProcessError("An error occurred while loading the tasks:", error);
    }
  }
  #isCanceled = false;
  cancel() {
    this.#isCanceled = true;
    this.classList.add("canceled");
    this.part.add("canceled");
    this.dispatchEvent(new CustomEvent("cancel", { bubbles: true, composed: true }));
  }
  async runTests() {
    this.dispatchEvent(new CustomEvent("beforeall", { bubbles: true, composed: true }));
    this.#continueRunningTests = true;
    this.classList.add("running");
    this.#isCanceled = false;
    this.classList.remove("canceled");
    this.part.remove("canceled");
    this.toggleAttribute("success", false);
    const playButtonLabel = this.findElement("play-button-label");
    if (playButtonLabel != null) {
      playButtonLabel.textContent = "Cancel";
    }
    this.#clearTestStatuses();
    const inOrder = this.hasAttribute("in-order");
    const beforeHooks = this.#hooks.get(BEFOREALL);
    if (beforeHooks != null) {
      let hookResult;
      try {
        const beforeAllHookElement = this.getElement(`before-all-details`);
        beforeAllHookElement.classList.add("running");
        beforeAllHookElement.part.add("running");
        for (const [hook, ids] of beforeHooks) {
          if (this.#isCanceled == true) {
            throw new Error("Test has been cancelled");
          }
          hookResult = await hook(this, beforeAllHookElement);
          this.#handleHookResult(hookResult, true, "before");
        }
        beforeAllHookElement.part.remove("running");
        beforeAllHookElement.classList.remove("running");
      } catch (error) {
        this.#handleHookResult(hookResult, false, "before", error);
        console.error(error);
        this.#continueRunningTests = false;
        this.classList.remove("running");
        this.part.remove("running");
        if (playButtonLabel != null) {
          playButtonLabel.textContent = "Run Tests";
        }
        this.dispatchEvent(new CustomEvent("afterall", { bubbles: true, composed: true }));
        return;
      }
    }
    if (inOrder == false) {
      const promises = [];
      for (const [id, test] of this.#tests) {
        promises.push(this.#runTest(id, test));
      }
      await Promise.all(promises);
    } else {
      for (const [id, test] of this.#tests) {
        if (this.#continueRunningTests == false) {
          break;
        }
        await this.#runTest(id, test);
      }
    }
    if (this.#continueRunningTests == false) {
      this.classList.remove("running");
      this.part.remove("running");
      if (playButtonLabel != null) {
        playButtonLabel.textContent = "Run Tests";
      }
      this.dispatchEvent(new CustomEvent("afterall", { bubbles: true, composed: true }));
      return;
    }
    const afterHooks = this.#hooks.get(AFTERALL);
    if (afterHooks != null) {
      let hookResult;
      try {
        const afterAllHookElement = this.getElement(`after-all-details`);
        afterAllHookElement.classList.add("running");
        afterAllHookElement.part.add("running");
        for (const [hook, ids] of afterHooks) {
          if (this.#isCanceled == true) {
            throw new Error("Test has been cancelled");
          }
          hookResult = await hook(this, afterAllHookElement);
          this.#handleHookResult(hookResult, true, "after");
        }
        afterAllHookElement.part.remove("running");
        afterAllHookElement.classList.remove("running");
      } catch (error) {
        this.#handleHookResult(hookResult, false, "after", error);
        console.error(error);
        this.#continueRunningTests = false;
        this.classList.remove("running");
        this.part.remove("running");
        if (playButtonLabel != null) {
          playButtonLabel.textContent = "Run Tests";
        }
        this.dispatchEvent(new CustomEvent("afterall", { bubbles: true, composed: true }));
        return;
      }
    }
    const failedTests = this.shadowRoot.querySelectorAll('[success="false"]');
    this.setAttribute("success", failedTests.length == 0 ? "true" : "false");
    this.classList.remove("running");
    this.part.remove("running");
    if (playButtonLabel != null) {
      playButtonLabel.textContent = "Run Tests";
    }
    this.dispatchEvent(new CustomEvent("afterall", { bubbles: true, composed: true }));
  }
  #clearTestStatuses() {
    for (const [testId, test] of this.#tests) {
      const testElement = this.getElement("tests").querySelector(`[data-test-id="${testId}"]`);
      if (testElement == null) {
        this.#addProcessError(`Unable to find test element for test: ${testId}`);
        return;
      }
      testElement.toggleAttribute("success", false);
      testElement.classList.remove("success", "fail");
      testElement.part.remove("success", "fail");
    }
    const beforeAllHookElement = this.getElement(`before-all-details`);
    beforeAllHookElement.toggleAttribute("success", false);
    beforeAllHookElement.classList.remove("success", "fail");
    beforeAllHookElement.part.remove("success", "fail");
    const afterAllHookElement = this.getElement(`after-all-details`);
    afterAllHookElement.toggleAttribute("success", false);
    afterAllHookElement.classList.remove("success", "fail");
    afterAllHookElement.part.remove("success", "fail");
  }
  async #runTest(testId, test) {
    const testElement = this.getElement("tests").querySelector(`[data-test-id="${testId}"]`);
    if (testElement == null) {
      this.#addProcessError(`Unable to find test element for test: ${testId}`);
      return;
    }
    testElement.toggleAttribute("success", false);
    testElement.classList.add("running");
    testElement.part.add("running");
    testElement.classList.remove("success", "fail");
    testElement.part.remove("success", "fail");
    const iconElement = testElement.querySelector(".result-icon");
    iconElement?.classList.remove("success", "fail");
    iconElement?.part.remove("success", "fail");
    iconElement?.classList.add("running");
    iconElement?.part.add("running");
    const errorMessageElement = testElement.querySelector(".error-message");
    if (errorMessageElement != null) {
      errorMessageElement.textContent = "";
    }
    const detailsElement = testElement.querySelector("details");
    if (detailsElement != null) {
      detailsElement.open = false;
    }
    let beforeResult = NOTESTDEFINED;
    let testResult;
    let afterResult = NOTESTDEFINED;
    let testType;
    try {
      const allowTest = this.dispatchEvent(new CustomEvent("beforetest", { bubbles: true, cancelable: true, composed: true, detail: { testElement } }));
      if (allowTest == false || this.#isCanceled == true) {
        throw new Error("Test has been cancelled");
      }
      const beforeHooks = this.#hooks.get(BEFOREEACH);
      if (beforeHooks != null) {
        for (const [hook, ids] of beforeHooks) {
          if (ids.has(testId)) {
            beforeResult = await hook(this, testElement);
            break;
          }
        }
      }
      if (this.#isCanceled == true) {
        throw new Error("Test has been cancelled");
      }
      testResult = await test(this, testElement);
      if (this.#isCanceled == true) {
        throw new Error("Test has been cancelled");
      }
      const afterHooks = this.#hooks.get(AFTEREACH);
      if (afterHooks != null) {
        for (const [hook, ids] of afterHooks) {
          if (ids.has(testId)) {
            afterResult = await hook(this, testElement);
            break;
          }
        }
      }
      testType = "before";
      if (beforeResult != NOTESTDEFINED) {
        this.#handleTestResult(testElement, beforeResult, true, void 0, testType);
      }
      testType = void 0;
      this.#handleTestResult(testElement, testResult, true, void 0, testType);
      testType = "after";
      if (afterResult != NOTESTDEFINED) {
        this.#handleTestResult(testElement, afterResult, true, void 0, testType);
      }
    } catch (error) {
      this.#handleTestResult(testElement, testResult, false, error, testType);
      console.error(error);
      this.#continueRunningTests = false;
    } finally {
      testElement?.classList.remove("running");
      testElement?.part.remove("running");
      iconElement?.classList.remove("running");
      iconElement?.part.remove("running");
      this.dispatchEvent(new CustomEvent("aftertest", { bubbles: true, cancelable: true, composed: true, detail: { testElement } }));
    }
  }
  #handleTestResult(testElement, result, finishedTest, error, beforeOrAfter) {
    if (result instanceof HTMLElement) {
      this.#setTestResult(testElement, result, finishedTest, beforeOrAfter);
    } else if (result == void 0) {
      const trueMessage = beforeOrAfter == void 0 ? "Passed" : "Hook Ran Successfully";
      const defaultResult = this.#createDefaultResult(finishedTest == true ? `${trueMessage}` : `Failed${error != null ? `:
${error.message}` : ""}`, finishedTest, beforeOrAfter);
      this.#setTestResult(testElement, defaultResult, finishedTest, beforeOrAfter);
    } else if (typeof result == "string") {
      const defaultResult = this.#createDefaultResult(`${result}${error == null ? "" : `:
${error.message}`}`, finishedTest, beforeOrAfter);
      this.#setTestResult(testElement, defaultResult, finishedTest, beforeOrAfter);
    } else if (typeof result == "object") {
      const objectResult = result;
      if (objectResult.success != void 0 && objectResult.expected != void 0 && objectResult.value != void 0) {
        const trueMessage = beforeOrAfter == void 0 ? "Passed" : "Success";
        const falseMessage = beforeOrAfter == void 0 ? "Failed" : "Fail";
        const defaultResult = this.#createDefaultResult(
          `${objectResult.success == true ? `${trueMessage}:` : `${falseMessage}:`}
Expected:${objectResult.expected}
Result:${objectResult.value}`,
          objectResult.success,
          beforeOrAfter
        );
        this.#setTestResult(testElement, defaultResult, finishedTest, beforeOrAfter);
      }
    }
    const detailsElement = testElement.querySelector("details");
    if (detailsElement != null) {
      detailsElement.open = true;
    }
  }
  #handleHookResult(result, finishedTest, beforeOrAfter, error) {
    if (result instanceof HTMLElement) {
      this.#setHookResult(result, finishedTest, beforeOrAfter);
    } else {
      let defaultResult;
      if (result == void 0) {
        defaultResult = this.#createDefaultResult(finishedTest == true ? "Hook Ran Successfully" : `Failed${error != null ? `:
${error.message}` : ""}`, finishedTest);
        this.#setHookResult(defaultResult, finishedTest, beforeOrAfter);
      } else if (typeof result == "string") {
        defaultResult = this.#createDefaultResult(`${result}${error == null ? "" : `:
${error.message}`}`, finishedTest);
        this.#setHookResult(defaultResult, finishedTest, beforeOrAfter);
      } else if (typeof result == "object") {
        const objectResult = result;
        if (objectResult.success != void 0 && objectResult.expected != void 0 && objectResult.value != void 0) {
          defaultResult = this.#createDefaultResult(
            `${objectResult.success == true ? "Success:" : "Fail:"}
Expected:${objectResult.expected}
Result:${objectResult.value}`,
            objectResult.success
          );
          this.#setHookResult(defaultResult, finishedTest, beforeOrAfter);
        }
      }
    }
    const detailsElement = this.getElement(`${beforeOrAfter}-all-details`);
    if (detailsElement != null) {
      detailsElement.open = true;
    }
  }
  static create(properties) {
    const element = document.createElement("code-tests");
    return element;
  }
  #tests = /* @__PURE__ */ new Map();
  #addTest(description, test) {
    const testId = generateId();
    this.#tests.set(testId, test);
    const testElement = this.#createTest(testId, description);
    this.getElement("tests").append(testElement);
    return testId;
  }
  #createTest(testId, description) {
    const testElement = document.createElement("li");
    testElement.dataset.testId = testId;
    testElement.classList.add("test");
    testElement.part.add("test");
    const detailsElement = document.createElement("details");
    detailsElement.classList.add("test-details");
    detailsElement.part.add("test-details");
    const summaryElement = document.createElement("summary");
    summaryElement.classList.add("test-summary");
    summaryElement.part.add("test-summary");
    const resultIcon = document.createElement("div");
    resultIcon.classList.add("result-icon");
    resultIcon.part.add("result-icon");
    summaryElement.append(resultIcon);
    const descriptionElement = document.createElement("span");
    descriptionElement.classList.add("description", "test-description");
    descriptionElement.textContent = description;
    summaryElement.append(descriptionElement);
    const runButton = document.createElement("button");
    runButton.classList.add("run", "test-run");
    runButton.part.add("run", "test-run");
    runButton.textContent = "Run Test";
    runButton.title = "Run Test";
    summaryElement.append(runButton);
    const beforeResultElement = document.createElement("div");
    beforeResultElement.classList.add("before-result", "test-before-result");
    beforeResultElement.part.add("before-result", "test-before-result");
    const resultElement = document.createElement("div");
    resultElement.classList.add("result", "test-result");
    resultElement.part.add("result", "test-result");
    const afterResultElement = document.createElement("div");
    afterResultElement.classList.add("after-result", "test-after-result");
    afterResultElement.part.add("after-result", "test-after-result");
    detailsElement.append(summaryElement);
    detailsElement.append(beforeResultElement);
    detailsElement.append(resultElement);
    detailsElement.append(afterResultElement);
    testElement.append(detailsElement);
    return testElement;
  }
  #setTestResult(testElement, valueElement, success, beforeOrAfter) {
    testElement.setAttribute("success", success == true ? "true" : "false");
    testElement.classList.toggle("success", success);
    testElement.part.toggle("success", success);
    testElement.classList.toggle("fail", !success);
    testElement.part.toggle("fail", !success);
    const iconElement = testElement.querySelector(".result-icon");
    iconElement?.classList.toggle("success", success);
    iconElement?.part.toggle("success", success);
    iconElement?.classList.toggle("fail", !success);
    iconElement?.part.toggle("fail", !success);
    const resultElement = testElement.querySelector(`.${beforeOrAfter == void 0 ? "result" : beforeOrAfter == "before" ? "before-result" : "after-result"}`);
    if (resultElement == null) {
      this.#addProcessError(`Unable to find result element`);
      return;
    }
    resultElement.innerHTML = "";
    resultElement.appendChild(valueElement);
  }
  #createDefaultResult(message, success, beforeOrAfter) {
    const codeElement = document.createElement("code");
    codeElement.classList.add("code");
    codeElement.part.add("code");
    const preElement = document.createElement("pre");
    preElement.textContent = message;
    const className = success == true ? "success-message" : "error-message";
    preElement.classList.add("pre", className);
    preElement.part.add("pre", className);
    codeElement.appendChild(preElement);
    return codeElement;
  }
  #setHookResult(valueElement, success, beforeOrAfter) {
    const detailsElement = this.getElement(`${beforeOrAfter}-all-details`);
    const resultsElement = this.getElement(`${beforeOrAfter}-all-results`);
    detailsElement.setAttribute("success", success == true ? "true" : "false");
    detailsElement.classList.toggle("success", success);
    detailsElement.part.toggle("success", success);
    detailsElement.classList.toggle("fail", !success);
    detailsElement.part.toggle("fail", !success);
    resultsElement.innerHTML = "";
    resultsElement.appendChild(valueElement);
  }
  #addProcessError(message, error) {
    if (error instanceof Error) {
      message += `
${error.message}`;
      console.error(error);
    }
    const errorElement = document.createElement("li");
    errorElement.classList.add("error", "process-error");
    errorElement.part.add("error", "process-error");
    const codeElement = document.createElement("code");
    codeElement.classList.add("code", "process-error-code");
    codeElement.part.add("code", "process-error-code");
    const preElement = document.createElement("pre");
    preElement.classList.add("pre", "process-error-pre");
    preElement.part.add("pre", "process-error-pre");
    preElement.textContent = message;
    codeElement.append(preElement);
    errorElement.append(codeElement);
    this.getElement("tests").append(errorElement);
  }
  #updateListType(type) {
    if (type == "ordered") {
      const list = this.shadowRoot.querySelector("ul");
      if (list == null) {
        return;
      }
      const items = this.shadowRoot?.querySelectorAll("li");
      const newList = document.createElement("ol");
      if (items != null) {
        newList.append(...items);
      }
      newList.id = "tests";
      list.replaceWith(newList);
    } else {
      const list = this.shadowRoot.querySelector("ol");
      if (list == null) {
        return;
      }
      const items = this.shadowRoot?.querySelectorAll("li");
      const newList = document.createElement("ul");
      newList.id = "tests";
      if (items != null) {
        newList.append(...items);
      }
      list.replaceWith(newList);
    }
  }
  static observedAttributes = ["in-order"];
  attributeChangedCallback(attributeName, oldValue, newValue) {
    if (attributeName == "in-order") {
      if (newValue == void 0) {
        this.#updateListType("unordered");
      } else {
        this.#updateListType("ordered");
      }
    }
  }
};
function generateId() {
  const rnd = new Uint8Array(20);
  crypto.getRandomValues(rnd);
  const b64 = [].slice.apply(rnd).map(function(ch) {
    return String.fromCharCode(ch);
  }).join("");
  const secret = btoa(b64).replace(/\//g, "_").replace(/\+/g, "-").replace(/=/g, "");
  return secret;
}
if (customElements.get(COMPONENT_TAG_NAME) == null) {
  customElements.define(COMPONENT_TAG_NAME, CodeTestsElement);
}

// src/test-group/test-group.css?raw
var test_group_default = `:host\r
{\r
    \r
    /* color-scheme: light dark; */\r
    display: grid;\r
    color: var(--text-surface); \r
    padding: var(--gap-small);\r
    /* font-family: var(--font-text); */\r
}\r
\r
::slotted(code-tests)\r
{\r
    /* background-color: var(--surface-test); */\r
}\r
\r
\r
summary\r
{\r
    display: grid;\r
    grid-template-columns: auto auto auto 1fr auto;\r
    gap: var(--gap-small);\r
    padding: var(--gap-small);\r
    align-items: center;\r
    user-select: none;\r
}\r
summary::before\r
{\r
    content: '';\r
    width: 12px;\r
    height: 12px;\r
    background: url("data:image/svg+xml,%3Csvg%20viewBox%3D'0%200%2020%2020'%20width%3D'14px'%20height%3D'14px'%20fill%3D'none'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cg%20stroke-width%3D'0'%3E%3C%2Fg%3E%3Cg%20stroke-linecap%3D'round'%20stroke-linejoin%3D'round'%3E%3C%2Fg%3E%3Cg%3E%3Cpath%20d%3D'M8.72798%2015.795L3.72798%207.795C3.10356%206.79593%203.82183%205.5%204.99998%205.5L15%205.5C16.1781%205.5%2016.8964%206.79593%2016.272%207.795L11.272%2015.795C10.6845%2016.735%209.31549%2016.735%208.72798%2015.795Z'%20fill%3D'%23878a8b'%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E");\r
    transform: rotate(-90deg);\r
    transition: transform ease-out 200ms;\r
}\r
[open] > summary::before\r
{\r
    transform: rotate(0);\r
    /* background: var(--surface-test-summary); */\r
}\r
\r
.result-icon\r
{\r
    --background-size: 16px;\r
    --icon-size: 12px;\r
\r
    width: var(--background-size);\r
    height: var(--background-size);\r
\r
    display: flex;\r
    align-items: center;\r
    justify-content: center;\r
\r
    border: solid 1px currentColor;\r
    border-radius: 50%;\r
}\r
.result-icon::before\r
{\r
    content: '\u22EF';\r
    font-size: 10px;\r
    --icon-size: 10px;\r
}\r
:host(.running) .result-icon\r
{\r
    border: var(--border-process);\r
    background: var(--surface-process);\r
}\r
:host(.success) .result-icon\r
{\r
    border: var(--border-success);\r
    background: var(--surface-success)\r
    url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path fill="%232e943a" d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>');\r
    background-repeat: no-repeat;\r
    background-position: center;\r
    background-size: var(--icon-size) var(--icon-size);\r
}\r
:host(.fail) .result-icon\r
{\r
    border: var(--border-fail);\r
    background: var(--surface-fail)\r
    var(--info-icon);\r
    background-repeat: no-repeat;\r
    background-position: center;\r
    transform: rotate(175deg);\r
}\r
:host(:is(.success,.fail)) .result-icon::before\r
{\r
    display: none;\r
}\r
:host(.running) .result-icon::before\r
{\r
    content: '';\r
    --animation-timing-function: linear;\r
    --animation-duration: 2s;\r
    width: var(--icon-size, 10px);\r
    height: var(--icon-size, 10px);\r
    mask-image: radial-gradient(circle at 50% 50%, transparent calc(var(--icon-size, 10px) / 3), black calc(var(--icon-size, 10px) / 3));\r
    background-image: conic-gradient(transparent, transparent 135deg, var(--color, oklch(43.48% 0.17 260.2)));\r
    border-radius: 50%;\r
    animation: var(--animation-timing-function) var(--animation-duration) infinite spin;\r
    margin: 2px;\r
}\r
@keyframes spin\r
{\r
    from { transform: rotate(0deg); }\r
    to { transform: rotate(360deg); }\r
}\r
\r
/* tooltip copied from https://blog.logrocket.com/creating-beautiful-tooltips-with-only-css/ */\r
.tooltip {\r
  position:relative; /* making the .tooltip span a container for the tooltip text */\r
  border-bottom:1px dashed #000; /* little indicater to indicate it's hoverable */\r
}\r
.tooltip:before {\r
  content: attr(data-text); /* here's the magic */\r
  position:absolute;\r
  \r
  /* vertically center */\r
  top:50%;\r
  transform:translateY(-50%);\r
  \r
  /* move to right */\r
  left:100%;\r
  margin-left:15px; /* and add a small left margin */\r
  \r
  /* basic styles */\r
  width:max-content;\r
  max-width: 300px;\r
  padding:10px;\r
  border-radius:10px;\r
  background:#000;\r
  color: #fff;\r
  text-align:center;\r
\r
  opacity:0;\r
  transition:.3s opacity; \r
  pointer-events: none;\r
}\r
.tooltip:after {\r
  content: "";\r
  position:absolute;\r
  \r
  /* position tooltip correctly */\r
  left:100%;\r
  margin-left:-5px;\r
 \r
  /* vertically center */\r
  top:50%;\r
  transform:translateY(-50%);\r
 \r
  /* the arrow */\r
  border:10px solid #000;\r
  border-color: transparent black transparent transparent;\r
  \r
  opacity:0;\r
  transition:.3s; \r
  pointer-events: none;\r
}\r
.tooltip:hover:before,.tooltip:hover:after{\r
  display:block;\r
  opacity:1;\r
}\r
\r
\r
.run\r
{\r
    width: auto;\r
    min-width: auto;\r
    max-width: auto;\r
    appearance: none;\r
    display: inline-flex;\r
    justify-content: center;\r
    align-items: center;\r
    padding: 3px 10px 3px 7px;\r
    font-size: 11px;\r
    gap: var(--gap-small);\r
    background: var(--surface-button);\r
    border: solid 1px var(--surface-button);\r
    border-radius: 4px;\r
    text-shadow: 1px 1px rgb(0 0 0 / .2);\r
    color: var(--text-button);\r
}\r
.run:hover\r
{\r
    background: var(--surface-button-hover);\r
}\r
.run:active\r
{\r
    background: var(--surface-button-active);\r
}\r
.run::before\r
{\r
    content: '';\r
    display: block;\r
    width: 16px;\r
    height: 16px;\r
    transform: rotate(-90deg);\r
    background: \r
    url("data:image/svg+xml,%3Csvg%20viewBox%3D'0%200%2020%2020'%20width%3D'16px'%20height%3D'16px'%20fill%3D'none'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cg%20stroke-width%3D'0'%3E%3C%2Fg%3E%3Cg%20stroke-linecap%3D'round'%20stroke-linejoin%3D'round'%3E%3C%2Fg%3E%3Cg%3E%3Cpath%20d%3D'M8.72798%2015.795L3.72798%207.795C3.10356%206.79593%203.82183%205.5%204.99998%205.5L15%205.5C16.1781%205.5%2016.8964%206.79593%2016.272%207.795L11.272%2015.795C10.6845%2016.735%209.31549%2016.735%208.72798%2015.795Z'%20fill%3D'%23fdfdfd'%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E");\r
}`;

// src/test-group/test-group.html?raw
var test_group_default2 = '<details id="details">\r\n    <summary id="summary">\r\n        <div class="result-icon"></div>\r\n        <span id="enable-container" class="tooltip" data-text="Enable Tests?">\r\n            <input type="checkbox" id="enable-value" title="Enable Tests?" class="value" checked />\r\n        </span>\r\n        <span id="group-title" class="title"></span>\r\n    </summary>\r\n    <div id="content">\r\n        <slot id="groups-slot"></slot>\r\n    </div>\r\n</details>';

// src/test-group/test-group.ts
var COMPONENT_STYLESHEET2 = new CSSStyleSheet();
COMPONENT_STYLESHEET2.replaceSync(`
    ${test_group_default}`);
var COMPONENT_TEMPLATE = `${test_group_default2}
`;
var COMPONENT_TAG_NAME2 = "test-group";
var TestGroupElement = class extends HTMLElement {
  findElement(id) {
    return this.shadowRoot.getElementById(id);
  }
  get enabled() {
    return this.findElement("enable-value")?.checked;
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = COMPONENT_TEMPLATE;
    this.shadowRoot.adoptedStyleSheets.push(COMPONENT_STYLESHEET2);
  }
  connectedCallback() {
    this.findElement("details").open = true;
    const groupsSlot = this.findElement("groups-slot");
    groupsSlot.addEventListener("slotchange", () => {
      const children = groupsSlot.assignedElements();
      const testGroup = children.find((item) => item instanceof CodeTestsElement);
      if (testGroup != null) {
        const header = testGroup.shadowRoot.querySelector("#header");
        header?.style.setProperty("display", "none");
        const title = (testGroup.querySelector('[slot="title"]') ?? header?.querySelector("#title-text"))?.textContent;
        if (title != null) {
          this.findElement("group-title").textContent = title;
        }
        const runButton = header?.querySelector("button.run");
        if (runButton != null) {
          this.findElement("summary").append(runButton);
        }
        testGroup.loadTests();
      }
    });
    assignTagToPart(this.shadowRoot);
    assignClassAndIdToPart(this.shadowRoot);
    assignPartsAsExportPartsAttribute(this.shadowRoot);
    this.addEventListener(CodeTestEventType.BeforeAll, () => {
      this.classList.remove("success", "fail");
      this.part.remove("success", "fail");
      this.classList.add("running");
      this.part.add("running");
    });
    this.addEventListener(CodeTestEventType.AfterAll, () => {
      this.classList.remove("running");
      this.part.remove("running");
      const children = groupsSlot.assignedElements();
      const testGroup = children.find((item) => item instanceof CodeTestsElement);
      if (testGroup != null && testGroup.hasAttribute("success") == true) {
        this.classList.add("success");
        this.part.add("success");
      } else {
        this.classList.add("fail");
        this.part.add("fail");
      }
      const playButtonLabel = this.findElement("play-button-label");
      if (playButtonLabel != null) {
        playButtonLabel.textContent = "Run Tests";
      }
    });
  }
  runTests() {
    if (this.classList.contains("running")) {
      return;
    }
    const playButtonLabel = this.findElement("play-button-label");
    if (playButtonLabel != null) {
      playButtonLabel.textContent = "Cancel";
    }
    return this.querySelector("code-tests")?.runTests();
  }
};
if (customElements.get(COMPONENT_TAG_NAME2) == null) {
  customElements.define(COMPONENT_TAG_NAME2, TestGroupElement);
}

// src/test-runner.ts
var COMPONENT_STYLESHEET3 = new CSSStyleSheet();
COMPONENT_STYLESHEET3.replaceSync(`
    ${test_runner_default}`);
var COMPONENT_TEMPLATE2 = `${test_runner_default2}
`;
var COMPONENT_TAG_NAME3 = "test-runner";
var TestRunnerElement = class extends HTMLElement {
  findElement(id) {
    return this.shadowRoot.getElementById(id);
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = COMPONENT_TEMPLATE2;
    this.shadowRoot.adoptedStyleSheets.push(COMPONENT_STYLESHEET3);
    this.#addHandlers();
    const groupsSlot = this.findElement("groups-slot");
    groupsSlot.addEventListener("slotchange", () => {
      const children = groupsSlot.assignedElements();
      if (children.length == 0) {
        this.classList.add("empty");
        this.part.add("empty");
      } else {
        this.classList.remove("empty");
        this.part.remove("empty");
      }
      const testGroups = children.filter((item) => item instanceof CodeTestsElement);
      this.updateTests(testGroups);
    });
    assignTagToPart(this.shadowRoot);
    assignClassAndIdToPart(this.shadowRoot);
    assignPartsAsExportPartsAttribute(this.shadowRoot);
  }
  //#region API
  updateTests(testGroups) {
    const groupElements = [];
    for (let i = 0; i < testGroups.length; i++) {
      const groupTests = testGroups[i];
      const group = this.#createTestGroup(groupTests);
      groupElements.push(group);
    }
    this.findElement("test-group-items").append(...groupElements);
  }
  async runAllTests() {
    const groups = this.shadowRoot.querySelectorAll("test-group");
    for (let i = 0; i < groups.length; i++) {
      const group = groups[i];
      if (group.enabled == false) {
        continue;
      }
      await group.runTests();
    }
  }
  //#endregion
  //#region Handlers
  async #onClick(event) {
    const composedPath = event.composedPath().filter((item) => item instanceof HTMLElement);
    const runAllButton = composedPath.find((item) => item instanceof HTMLButtonElement && item.id == "run-all");
    if (runAllButton != null) {
      this.runAllTests();
    }
    const runButton = composedPath.find((item) => item instanceof HTMLButtonElement && item.classList.contains("run") && item.hasAttribute("data-all"));
    if (runButton != null) {
      const group = runButton.getRootNode().host;
      if (group != null && group instanceof TestGroupElement) {
        group.runTests();
      }
    }
  }
  //#endregion Handlers
  //#region Management
  #createTestGroup(codeTests) {
    const element = document.createElement("test-group");
    element.append(codeTests);
    return element;
  }
  #addHandlers() {
    this.addEventListener("click", this.#onClick);
  }
  //#endregion
};
if (customElements.get(COMPONENT_TAG_NAME3) == null) {
  customElements.define(COMPONENT_TAG_NAME3, TestRunnerElement);
}
export {
  AFTERALL,
  AFTEREACH,
  BEFOREALL,
  BEFOREEACH,
  CodeTestEventType,
  CodeTests,
  CodeTestsElement,
  TestRunnerElement,
  expect,
  prompt
};
