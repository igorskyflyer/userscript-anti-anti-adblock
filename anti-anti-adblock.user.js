// ==UserScript==
// @name           Anti anti-AdBlock
// @namespace      https://github.com/igorskyflyer
// @description    Counters anti-AdBlock scripts
// @grant          unsafeWindow
// @include        *
// @run-at         document-idle
// @version        1.0.0
// ==/UserScript==

unsafeWindow.hasAdBlocker =
unsafeWindow.abp = false;

unsafeWindow.googleAd =
unsafeWindow.isLoadAds =
unsafeWindow.generatorAds =
unsafeWindow.zfgloadedpopup = true;

unsafeWindow.GeneratorAds =
unsafeWindow.Ads_PushPage =
unsafeWindow.Ads_Popunder =
unsafeWindow.Ads_Vignette = function() {}
