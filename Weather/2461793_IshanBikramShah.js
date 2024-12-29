let time = document.getElementById("time");
setInterval(() => {
    let d = new Date();
    time.innerHTML = d.toLocaleTimeString();
});

const dateElement = document.querySelector(".date");
function formatDate(date) {
    const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const MONTHS = ["January","February","March","April","May","June","July","August", "September","October","November","December"];

    return `${DAYS[date.getDay()]} , ${MONTHS[date.getMonth()]} ${[date.getDate()]} , ${[date.getFullYear()]}`;
}
setInterval(()=>{
    const now = new Date();
    dateElement.textContent = formatDate(now);
 });
 


let valueSearch = document.getElementById('valueSearch');
let city = document.getElementById('city');
let temperature = document.getElementById('temperature');
let description = document.querySelector('.description');
let clouds = document.getElementById('clouds');
let humidity = document.getElementById('humidity');
let form = document.querySelector('form');
let main= document.querySelector('main');
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    if(valueSearch.value!=''){
        searchWeather();
    }
})
let id = '3db1f2ac024ed577087cd3c29527c94b';
let url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid='+id;
const searchWeather = () =>{
    fetch(url + '&q=' + valueSearch.value)
    .then(responsive => responsive.json())
    .then(data =>{
        console.log(data);
        if(data.cod==200){
            city.querySelector('figcaption').innerText = data.name;
            city.querySelector('img').src='https://flagsapi.com/'+data.sys.country+'/shiny/32.png';
            temperature.querySelector('img').src='https://openweathermap.org/img/wn/'+data.weather[0].icon+'@2x.png';
            temperature.querySelector('figcaption span').innerText=data.main.temp;
            description.innerText=data.weather[0].description;
            clouds.innerText=data.clouds.all;
            humidity.innerText=data.main.humidity;
        }else{

        }
        
        valueSearch.vlaue='';
    })

}
const initApp = ()=>{
    valueSearch.value= 'Rajbiraj';
    searchWeather();
}
initApp();