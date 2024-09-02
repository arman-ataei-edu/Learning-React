const fetchData = async ({ queryKey }) => {
  const keyWord = queryKey[1];
  const value = queryKey[2];
  var URL = "https://restcountries.com/v3.1/";

  if (!keyWord && !value) {
    URL += "all";
  } else if (keyWord && value) {
    URL += `${keyWord}/${value}`;
  }
  const apiRes = await fetch(URL);

  if (!apiRes) {
    throw new Error("cant fetch data");
  }
  return apiRes.json();
};

export default fetchData;
