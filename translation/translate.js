'use strict';

angular.module('myApp.translate', ['pascalprecht.translate',// angular-translate
    'tmh.dynamicLocale'// angular-dynamic-locale
    ])

    .constant('LOCALES', {
        'locales': {
            'ru_RU': 'Русский',
            'en_US': 'English'
        },
        'preferredLocale': 'en_US'
    })

    .config(function ($translateProvider) {
        $translateProvider.useMissingTranslationHandlerLog();

        $translateProvider.useStaticFilesLoader({
            prefix: 'translation/locale-',// path to translations files
            suffix: '.json'// extension of the translations
        });
        $translateProvider.preferredLanguage('en_US');// is applied on first load
        $translateProvider.useLocalStorage();// saves selected language to localStorage
    })

    .config(function (tmhDynamicLocaleProvider) {
        tmhDynamicLocaleProvider.localeLocationPattern('bower_components/angular-i18n/angular-locale_{{locale}}.js');
    })

