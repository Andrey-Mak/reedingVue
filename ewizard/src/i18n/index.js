import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en from './en.json';
import ua from './ua.json';
import ru from './ru.json';
import common from './common.json';

Vue.use(VueI18n);

const messages = {
    en,
    ru,
    ua,
    common,
};

const i18n = new VueI18n({
    locale: 'en',
    fallbackLocale: 'common',
    messages,
});


export default i18n;
