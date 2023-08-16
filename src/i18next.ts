import translation_fr from './translations/fr/translation.json'
import translation_en from './translations/en/translation.json'
import i18next from "i18next"

i18next
   .init({
      lng:'en',
      resources: {
         en:{
            trans:translation_en
         },
         fr:{
            trans : translation_fr
         },
      },
      interpolation: {
         escapeValue: false,
      },
   })

export default i18next
