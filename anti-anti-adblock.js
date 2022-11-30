// ==UserScript==
// @name           Anti anti-AdBlock
// @namespace      https://github.com/igorskyflyer
// @description    Counters anti-AdBlock scripts
// @grant          unsafeWindow
// @include        *
// @runat          document-idle
// ==/UserScript==

unsafeWindow.googleAd = unsafeWindow.zfgloadedpopup = true;
