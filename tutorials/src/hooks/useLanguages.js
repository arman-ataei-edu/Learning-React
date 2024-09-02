const useLanguages = (region) => {
  let langs = [];
  const countries = [...region];

  countries.map((country) => {
    country.languages.map((lang) => {
      langs.push(lang);
    });
  });
  console.log(langs);

  return langs;
};

export default useLanguages;
