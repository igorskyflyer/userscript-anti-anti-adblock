// ==UserScript==
// @name           Anti anti-AdBlock
// @namespace      https://github.com/igorskyflyer
// @version        1.0.8
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

unsafeWindow.dotcom =
unsafeWindow.dotcom.flags =
unsafeWindow.dotcom.userinfo = {}

unsafeWindow.hasAdBlocker =
unsafeWindow.abp = false;

unsafeWindow.googleAd =
unsafeWindow.isLoadAds =
unsafeWindow.generatorAds =
unsafeWindow.zfgloadedpopup =
unsafeWindow.dotcom.flags.adverts =
unsafeWindow.dotcom.flags.analytics =
unsafeWindow.dotcom.userinfo.ads = true;

unsafeWindow.GeneratorAds =
unsafeWindow.Ads_PushPage =
unsafeWindow.Ads_Popunder =
unsafeWindow.Ads_Vignette =
unsafeWindow.postAntiadblockInfo =
unsafeWindow.dotcom.initAnalytics =
unsafeWindow.AdsPlugin = function() {}
