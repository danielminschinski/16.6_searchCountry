var url = 'https://restcountries.eu/rest/v1/name/';
var url2 = 'https://restcountries.eu/rest/v1/capital/';
var countriesList = document.getElementById('countries');

document.getElementById('search').addEventListener('click', searchCountries);

function searchCountries() {
    var countryName = document.getElementById('country-name').value;
    if(!countryName.length) countryName = 'Poland';
    fetch(url + countryName)
        .then(function(resp) {
            return resp.json();
        })
        .then(showCountriesList)
        .catch(function(error) {
            countriesList.innerHTML = null;  
            var status = document.createElement('li');
            status.innerHTML="Status: 404 Nie znaleziono - proszę wpisz nazwę innego kraju.";
            countriesList.appendChild(status);
        });
}

function showCountriesList(resp) {
    countriesList.innerHTML = '';
    resp.forEach(function(item) {
        var liEl = document.createElement('li');
        liEl.innerText = item.name + ', ' + item.capital;;
        countriesList.appendChild(liEl);    
    });
}