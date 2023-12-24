// ==UserScript==
// @name           Anti anti-AdBlock
// @namespace      https://github.com/igorskyflyer
// @version        1.0.35
// @author         Igor Dimitrijević (@igorskyflyer)
// @description    Counters anti-AdBlock scripts
// @homepage       https://github.com/igorskyflyer/userscript-anti-anti-adblock
// @homepageURL    https://github.com/igorskyflyer/userscript-anti-anti-adblock
// @website        https://igorskyflyer.me
// @downloadURL    https://github.com/igorskyflyer/userscript-anti-anti-adblock/raw/main/anti-anti-adblock.user.js
// @updateURL      https://github.com/igorskyflyer/userscript-anti-anti-adblock/raw/main/anti-anti-adblock.user.js
// @supportURL     https://github.com/igorskyflyer/userscript-anti-anti-adblock/issues
// @grant          unsafeWindow
// @match          *://*/*
// @run-at         document-end
// ==/UserScript==

unsafeWindow.dotcom = {
	flags: { adverts: true, analytics: true },
	userinfo: { ads: true },
	initAnalytics: function () {}
}
unsafeWindow.zarazData = {}
unsafeWindow.__ez = {}
unsafeWindow.adsconfig = {}
unsafeWindow.__cfRLUnblockHandlers = {}
unsafeWindow.demandSupply = { pfAds: true, setPfAds: function () {} }
unsafeWindow.MDCore = { adblock: 0 }
unsafeWindow.Matomo = { initialized: true }
unsafeWindow._pb = { libLoaded: true }
unsafeWindow.Piwik = { initialized: true }
unsafeWindow.zaraz = { track: function () {} }
unsafeWindow.AdTrack = { init: function () {} }
unsafeWindow._carbonads = { init: function () {} }
unsafeWindow.ez_ad_units = { push: function () {} }

unsafeWindow.hasAdBlocker =
	unsafeWindow.abp =
	unsafeWindow.adBlockerReady =
	unsafeWindow.isBlocked =
	unsafeWindow.adblockcheck =
		false

unsafeWindow.googleAd =
	unsafeWindow.isLoadAds =
	unsafeWindow.generatorAds =
	unsafeWindow.zfgloadedpopup =
	unsafeWindow.canRunAds =
	unsafeWindow.canRunAdvertise =
	unsafeWindow.isAdEnabled =
		true

unsafeWindow.google_ad_status = 1

unsafeWindow.GeneratorAds =
	unsafeWindow.Ads_PushPage =
	unsafeWindow.Ads_Popunder =
	unsafeWindow.Ads_Vignette =
	unsafeWindow.postAntiadblockInfo =
	unsafeWindow.AdsPlugin =
	unsafeWindow.AdscoreInit =
	unsafeWindow.GalaBanner =
	unsafeWindow.admiral =
		function () {}
