const selectLanguage = (data, lang) => {
    if (lang === 'en') {
        return data.en
    } else if (lang === 'fr') {
        return data.fr
    }
}

export default selectLanguage;