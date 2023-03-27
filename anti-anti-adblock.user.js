// ==UserScript==
// @name           Anti anti-AdBlock
// @namespace      https://github.com/igorskyflyer
// @version        1.0.12
// @author         Igor Dimitrijević (@igorskyflyer)
// @description    Counters anti-AdBlock scripts
// @homepage       https://github.com/igorskyflyer/userscript-anti-anti-adblock
// @homepageURL    https://github.com/igorskyflyer/userscript-anti-anti-adblock
// @website        https://igorskyflyer.me
// @source         https://github.com/igorskyflyer/userscript-anti-anti-adblock/raw/main/anti-anti-adblock.user.js
// @downloadURL    https://github.com/igorskyflyer/userscript-anti-anti-adblock/raw/main/anti-anti-adblock.user.js
// @updateURL      https://github.com/igorskyflyer/userscript-anti-anti-adblock/raw/main/anti-anti-adblock.user.js
// @supportURL     https://github.com/igorskyflyer/userscript-anti-anti-adblock/issues
// @grant          unsafeWindow
// @match          *://*/*
// @run-at         document-end
// ==/UserScript==

unsafeWindow.dotcom = { flags: { adverts: true, analytics: true,  }, userinfo: { ads: true }, initAnalytics: function() {} }
unsafeWindow.zaraz = { track: function() {} }
unsafeWindow.zarazData = {}

unsafeWindow.hasAdBlocker =
unsafeWindow.abp = false;

unsafeWindow.googleAd =
unsafeWindow.isLoadAds =
unsafeWindow.generatorAds =
unsafeWindow.zfgloadedpopup = true;

unsafeWindow.GeneratorAds =
unsafeWindow.Ads_PushPage =
unsafeWindow.Ads_Popunder =
unsafeWindow.Ads_Vignette =
unsafeWindow.postAntiadblockInfo =
unsafeWindow.AdsPlugin = function() {}
