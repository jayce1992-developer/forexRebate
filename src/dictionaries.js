
const locales = {
  // en: 'en-US'
}

export const $t = (keys, lang = 'en') => keys.split('.').reduce((x, y) => x && x[y], locales[lang || 'en'])
