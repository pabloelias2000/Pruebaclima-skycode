const keywheather = 'bf49883f7cd569aab9ef818c9f9a7c03';
/*const lat= 44.34;
const long = 10.99;
const nameCity = document.getElementById('name');
const coord =document.getElementById('cloud');
const description =document.getElementById('description');


const currentwheather = async (wheather) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${keywheather}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
}

currentwheather()

    .then(response =>{
        nameCity.innerText = response.name;
        cloud.innerText = response.coord.lat;
        description.innerText = response.weather[0].description;
    })
.catch(error => console.log(error));*/

const city =document.getElementById('city');
const state =document.getElementById('state');
const lat =document.getElementById('lat');
const long =document.getElementById('long');

let Caracas = 'caracas'



const Wheathernew = async (wheather) => {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${Caracas}&limit=1&appid=${keywheather}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
}

Wheathernew()

    .then(response =>{
        nameCity.innerText = response.name;
        cloud.innerText = response.coord.lat;
        description.innerText = response.weather[0].description;
    })
.catch(error => console.log(error));

