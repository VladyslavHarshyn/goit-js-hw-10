const restCountries = `https://restcountries.com/v3.1/name/${name}`;
const fields = 'fields=name,capital,population,flags,languages';

export const fetchCountries = name => {
  return fetch(`${restCountries}?${fields}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.jsone();
  });
};
