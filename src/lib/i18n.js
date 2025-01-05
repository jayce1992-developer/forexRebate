// lib/i18n.js
import en from '../locales/en.json';
import zh from '../locales/zh.json';
import fr from '../locales/fr.json';

const translations = { en, zh, fr };

let currentLocale = 'en'; // 默认语言

export const setLocale = (locale) => {
  currentLocale = translations[locale] ? locale : 'en';
};

export const $t = (keys, lang = currentLocale) => keys.split('.').reduce((x, y) => x && x[y], translations[lang || 'en'])

