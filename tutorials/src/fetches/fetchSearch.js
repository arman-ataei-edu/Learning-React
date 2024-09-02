const fetchSearch = async ({ queryKey }) => {
  let countriesRegion = {};
  let langsRegion = {};
  const keyWord = queryKey[0];
  const region = queryKey[1];
  var URL = "https://restcountries.com/v3.1/";
  if (!keyWord || !region) {
    URL += "all";
  } else if (keyWord && region) {
    URL += `${keyWord}/${region}`;
  }

  const apiRes = await fetch(URL);

  if (!apiRes) {
    throw new Error("cant fetch data");
  }
  const countries = await apiRes.json();

  // countriesRegion: an object consists of region(s) where the values are countries in that region
  // langsRegion: and object consists of region(s) where the values are languages in that region
  countries.map((country) => {
    // eslint-disable-next-line no-prototype-builtins
    if (!countriesRegion.hasOwnProperty(country.region)) {
      countriesRegion[country.region] = new Set([]);
    }
    // eslint-disable-next-line no-prototype-builtins
    if (!langsRegion.hasOwnProperty(country.region)) {
      langsRegion[country.region] = new Set([]);
    }
    countriesRegion[country.region].add(country);

    if (country.languages) {
      Object.keys(country.languages).map((lang) => {
        langsRegion[country.region].add(country.languages[lang]);
      });
    }
  });

  // filtering countries in region (if provided) that speaks queryKey[2] (if provided)
  const searchCountries = {};
  if (queryKey[2] && keyWord && region) {
    searchCountries[region] = [];
    const language = queryKey[2];
    Object.keys(countriesRegion).map((regen) => {
      const countries = [...countriesRegion[regen]];
      if (regen === region) {
        countries.map((country) => {
          if (country.languages) {
            const langs = new Set(Object.values(country.languages));
            if (langs.has(language)) {
              searchCountries[region].push(country);
            }
          }
        });
      }
    });
    return [searchCountries, langsRegion];
  }
  // filtering countries if only the language is provided
  else if (queryKey[2] && keyWord && !region) {
    const language = queryKey[2];
    searchCountries[language] = [];
    Object.keys(countriesRegion).map((regen) => {
      const countries = [...countriesRegion[regen]];
      countries.map((country) => {
        if (country.languages) {
          const langs = new Set(Object.values(country.languages));
          if (langs.has(language)) {
            searchCountries[language].push(country);
          }
        }
      });
    });

    return [searchCountries, langsRegion];
  }

  return [countriesRegion, langsRegion];
};

export default fetchSearch;
