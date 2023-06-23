const i18next = require('i18next');
i18next.init({
    lng: 'en',
    fallbackLng: 'en',
    resources: {
        en: {
            translation: {
                "home": "Home",
                'test': 'test',
                "variable": "{{count}} numbers"
            }
        },
        pk: {
            translation: {
                "home": "Homee"
            }
        }
    }
});
// console.log(i18next.t('home', { lng: 'pk' }));

//pass the variable
console.log(i18next.t('variable', { count: 100 }));
