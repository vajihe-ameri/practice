import {getData, setData} from "~/utils/localStorage";

export default {
  data() {
    return {
      selectedLangIcon: '',
      languages: [
        {
          name: 'Persian',
          icon: 'ir',
          local: 'fa',
          rtl: true,
        },
        {
          name: 'English',
          icon: 'gb-eng',
          local: 'en',
          rtl: false,
        },
        /*{
          name: 'Arabic',
          icon: 'sa',
          local: 'sa',
          rtl: true,
        }*/
      ]
    }
  },
  created() {
    this.configLanguage()
  },
  methods: {
    configLanguage() {
      let currentLang = getData('@currentLanguage')
      if (currentLang) {
        let tempLang = this.languages.filter(lang => {
          return lang.icon === currentLang
        })[0]
        this.$vuetify.rtl = tempLang.rtl
        this.$i18n.setLocale(tempLang.local)
        this.selectedLangIcon = currentLang
      } else {
        this.selectedLangIcon = 'ir'
        this.$i18n.setLocale('fa')
        setData('@currentLanguage', 'ir')
        this.$vuetify.rtl = false
      }
    },
    changeLanguage(lang) {
      this.selectedLangIcon = lang.icon
      this.$i18n.setLocale(lang.local)
      setData('@currentLanguage', lang.icon)
      this.$vuetify.rtl = lang.rtl
    }
  }
}
