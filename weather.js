const apiKey = "534860f66914543659dd01b6342d5945";
const baseApiURL = "http://api.openweathermap.org/data/2.5/forecast";
const countryShow = document.querySelector('.location-icon');
const temperature = document.querySelector('.cels');
const storm = document.querySelector('.nort');
const search = document.querySelector('.search');
const btnn = document.querySelector('.btn');
const act2=document.querySelector('.active-2')
const act1=document.querySelector('.active-1')
const hourlyForecastContainer = document.querySelector('.hourly-forecast');
btnn.addEventListener('click', async function () {
    const city = search.value;
    
      
      
    const apiUrl = `${baseApiURL}?q=${city}&appid=${apiKey}&units=metric`;

   try {
    const response= await fetch(apiUrl);
    const data= await response.json();
    if(response.ok){
        console.log(data);
        countryShow.innerHTML=`${data.city.country}  ${data.city.name}`;
        temperature.innerHTML=`${Math.round(data.list[0].main.temp)}°C`
        storm.innerHTML=`wind speed ${data.list[0].wind.speed} m/s`
        hourlyForecastContainer.innerHTML = '';

        for (let i = 0; i < 10; i++) {
            const forecast = data.list[i];
            const time = new Date(forecast.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            const temp = Math.round(forecast.main.temp);
            const iconCode = forecast.weather[0].icon; 
            const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
            const hourDiv = document.createElement('div');
            hourDiv.classList.add('hour');
            const timeParagraph = document.createElement('p');
            timeParagraph.innerText = time;
            hourDiv.appendChild(timeParagraph);

            const iconImg = document.createElement('img');
            iconImg.src = iconUrl;
            iconImg.alt = forecast.weather[0].description;
            iconImg.classList.add('weather-icon');
            hourDiv.appendChild(iconImg);
            const tempParagraph = document.createElement('p');
            tempParagraph.innerText = `${temp}°C`;
            hourDiv.appendChild(tempParagraph);
            hourlyForecastContainer.appendChild(hourDiv);
        }
        
        act2.addEventListener('click',function () {
            hourlyForecastContainer.innerHTML='';
            for (let i = 0; i < 5; i++) {
                const forecast = data.list[i];
                const time = new Date(forecast.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                const temp = Math.round(forecast.main.temp);
                const iconCode = forecast.weather[0].icon; 
                const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
                const hourDiv = document.createElement('div');
                hourDiv.classList.add('hour');
                const timeParagraph = document.createElement('p');
                timeParagraph.innerText = time;
                hourDiv.appendChild(timeParagraph);
    
                const iconImg = document.createElement('img');
                iconImg.src = iconUrl;
                iconImg.alt = forecast.weather[0].description;
                iconImg.classList.add('weather-icon');
                hourDiv.appendChild(iconImg);
                const tempParagraph = document.createElement('p');
                tempParagraph.innerText = `${temp}°C`;
                hourDiv.appendChild(tempParagraph);
                hourlyForecastContainer.appendChild(hourDiv);
            }

            
        })
        act1.addEventListener('click',function () {
            hourlyForecastContainer.innerHTML='';
            for (let i = 0; i < 10; i++) {
                const forecast = data.list[i];
                const time = new Date(forecast.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                const temp = Math.round(forecast.main.temp);
                const iconCode = forecast.weather[0].icon; 
                const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
                const hourDiv = document.createElement('div');
                hourDiv.classList.add('hour');
                const timeParagraph = document.createElement('p');
                timeParagraph.innerText = time;
                hourDiv.appendChild(timeParagraph);
    
                const iconImg = document.createElement('img');
                iconImg.src = iconUrl;
                iconImg.alt = forecast.weather[0].description;
                iconImg.classList.add('weather-icon');
                hourDiv.appendChild(iconImg);
                const tempParagraph = document.createElement('p');
                tempParagraph.innerText = `${temp}°C`;
                hourDiv.appendChild(tempParagraph);
                hourlyForecastContainer.appendChild(hourDiv);
            }

            
        })
    }
    else{
        console.log("error fetching data");
        
    }
    
   } catch (error) {
    console.log("error",error);
    
    
   }
});