(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{363:function(t,e,s){"use strict";s.r(e);var a=s(43),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),s("p",[t._v("Here are all the options available when configuring the module and their default values:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vue-i18n configuration.")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// See documentation: http://kazupon.github.io/vue-i18n/api/#constructor-options")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// To be able to pass more complex configuration options that can't be stringified, it's also")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// supported to set this property to a path to a local configuration file. File needs to export")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// a function (that will be passed a Nuxt context as a parameter) or plain object.")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Example path: '~/plugins/vue-i18n.js'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Example file content:")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// export default context => {")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   return {")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     modifiers: {")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//       snakeCase: (str) => str.split(' ').join('-')")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     }")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   }")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// }")]),t._v("\n  vueI18n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If true, vue-i18n-loader is added to Nuxt's Webpack config")]),t._v("\n  vueI18nLoader"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// List of locales supported by your app")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This can either be an array of codes: ['en', 'fr', 'es']")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Or an array of objects for more complex configurations:")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   { code: 'en', iso: 'en-US', file: 'en.js' },")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   { code: 'fr', iso: 'fr-FR', file: 'fr.js' },")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   { code: 'es', iso: 'es-ES', file: 'es.js' }")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   `iso` value should have either:")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   - code of ISO 639-1 (e.g. 'en')")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   - code of ISO 639-1 and code of ISO 3166-1 alpha-2, with a hyphen (e.g. 'en-US')")]),t._v("\n  locales"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The app's default locale.")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// When using 'prefix_except_default' strategy, URLs for this locale won't have a prefix.")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// It's recommended to set this to some locale regardless of chosen strategy, as it will be")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// used as a locale fallback to use when navigating to a non-existent route.")]),t._v("\n  defaultLocale"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Separator used to generated routes name for each locale, you shouldn't")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// need to change this")]),t._v("\n  routesNameSeparator"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'___'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Suffix added to generated routes name for default locale if strategy is prefix_and_default,")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// you shouldn't need to change this")]),t._v("\n  defaultLocaleRouteNameSuffix"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'default'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Routes generation strategy, can be set to one of the following:")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// - 'no_prefix': routes won't be prefixed")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// - 'prefix_except_default': add locale prefix for every locale except default")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// - 'prefix': add locale prefix for every locale")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// - 'prefix_and_default': add locale prefix for every locale and default")]),t._v("\n  strategy"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'prefix_except_default'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Wether or not the translations should be lazy-loaded, if this is enabled,")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// you MUST configure langDir option, and locales must be an array of objects,")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// each containing a file key")]),t._v("\n  lazy"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Directory that contains translations files when lazy-loading messages,")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this CAN NOT be empty if lazy-loading is enabled")]),t._v("\n  langDir"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Set this to a path to which you want to redirect users accessing root URL (/)")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Accepts either string or object with statusCode and path properties. E.g")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// {")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   statusCode: 301,")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   path: 'about-us'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// }")]),t._v("\n  rootRedirect"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Enable browser language detection to automatically redirect user")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// to their preferred language as they visit your app for the first time")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Set to false to disable")]),t._v("\n  detectBrowserLanguage"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If enabled, a cookie is set once a user has been redirected to his")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// preferred language to prevent subsequent redirections")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Set to false to redirect every time")]),t._v("\n    useCookie"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Set to override the default domain of the cookie. Defaults to host of the site.")]),t._v("\n    cookieDomain"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Cookie name")]),t._v("\n    cookieKey"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'i18n_redirected'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Set to always redirect to value stored in the cookie, not just once")]),t._v("\n    alwaysRedirect"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If no locale for the browsers locale is a match, use this one as a fallback")]),t._v("\n    fallbackLocale"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Set this to true if you're using different domains for each language")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If enabled, no prefix is added to your routes and you MUST configure locales")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// as an array of objects, each containing a domain key")]),t._v("\n  differentDomains"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If true, SEO metadata is generated for routes that have i18n enabled.")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Note that performance can suffer with this enabled and there might be compatibility")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// issues with some plugins. Recommended way is to set up SEO as described in:")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https://nuxt-community.github.io/nuxt-i18n/seo.html#improving-performance")]),t._v("\n  seo"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Fallback base URL to use as prefix for alternate URLs in hreflang tags.")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// By default VueRouter's base URL will be used and only if that is not available,")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// fallback URL will be used.")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Can also be a function that will be passed a Nuxt context as a parameter and")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// should return a string. Useful to make base url dynamic based on request headers.")]),t._v("\n  baseUrl"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// By default a store module is registered and kept in sync with the")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// app's i18n current state")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Set to false to disable")]),t._v("\n  vuex"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Module namespace")]),t._v("\n    moduleName"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'i18n'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If enabled, current app's locale is synced with nuxt-i18n store module")]),t._v("\n    syncLocale"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If enabled, current translation messages are synced with nuxt-i18n store module")]),t._v("\n    syncMessages"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Mutation to commit to set route parameters translations")]),t._v("\n    syncRouteParams"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// By default, custom routes are extracted from page files using babel parser,")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// set this to false to disable this")]),t._v("\n  parsePages"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If parsePages option is disabled, the module will look for custom routes in")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// the pages option, refer to the "Routing" section for usage')]),t._v("\n  pages"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// By default, custom paths will be encoded using encodeURI method.")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// This does not work with regexp: "/foo/:slug-:id(\\\\d+)". If you want to use')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// regexp in the path, then set this option to false, and make sure you process")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// path encoding yourself.")]),t._v("\n  encodePaths"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Called right before app's locale changes")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("beforeLanguageSwitch")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("oldLocale"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" newLocale")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Called after app's locale has changed")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onLanguageSwitched")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("oldLocale"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" newLocale")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);