import './css/styles.css';
import { fetchCountries } from './fetchCountries';
const DEBOUNCE_DELAY = 300;

const searchBox = document.querySelector('#search-box');
const countryList = document.querySelector('country-list');
const countryInfo = document.querySelector('country-info');

console.log(fetchCountries('Lebanon'));
