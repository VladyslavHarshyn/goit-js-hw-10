const e=`https://restcountries.com/v3.1/name/${name}`;document.querySelector("#search-box"),document.querySelector("country-list"),document.querySelector("country-info");console.log(fetch(`${e}?fields=name,capital,population,flags,languages`).then((e=>{if(!e.ok)throw new Error(e.status);return e.jsone()})));
//# sourceMappingURL=index.b02537c1.js.map
