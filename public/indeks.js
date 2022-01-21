let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();
let dayNumber = date.getDay();
let minutes = date.getMinutes();
let hours =date.getHours();
let monthName = "";

const greeting = [
    "Merhaba , iyi bir gün geçirmen dileğiyle","Gayet iyi görünüyorsun. :)"
    , "Sanırım yoğun bir gün olacak..","Kendine iyi davran :)","Merhaba bugün nasılsınız ?",
    "Kendine inanman yeterli :)"]

function req(){
    fetch("./bilgi.json").then(
        response =>{
            return response.json()
        }
    ).then(responseJson =>{
        const aptName = responseJson.userName;
        const liftNum = responseJson.liftId;
        const company = responseJson.company;
        if(responseJson.active == true ){
            document.getElementById("first").innerHTML =aptName +"<br>"+liftNum+"<br>"+company;
        }else{
            document.getElementById("first").innerHTML ="Kayıt için iletişime geçiniz";
        }
        console.log(aptName);
        console.log(liftNum);
        console.log(company)
    
       
        
    })
}



function weather(){
    const url =`https://api.openweathermap.org/data/2.5/weather?q=rize,tr,41.0208,40.5219&appid=83c0f164dc0fb3a79ffc97092dc930e6&units=metric&lang=tr`;
    fetch(url).then(
        weather => {
            return weather.json();
    }
    ).then(weatherJson)
}
const weatherJson = (result) =>{
    let city = result.name;
    let country = result.sys.country;
    let temp = result.main.temp;
    let weather = result.weather[0].description;
    document.getElementById("weatherOne").innerHTML=Math.ceil(temp)+" °C";
    document.getElementById("weatherTwo").innerHTML=weather+"<br>"+city+" - "+ country;
    console.log(city)
    console.log(Math.ceil(temp))
    console.log(result)
    console.log(weather)
}




if(hours <= 9 ){
   hours = String(hours);
   hours = "0"+hours;
}
if( minutes <= 9){
    minutes = String(minutes);
    minutes = "0" + minutes;
}

function monthN(){
    switch(month){
        case 0 :
            monthName = "Ocak";
            break;
        case 1 :
            monthName = "Şubat";
            break;
        case 2 :
            monthName = "Mart";
            break;
        case 3 :
            monthName ="Nisan";
            break;
        case 4 :
            monthName = "Mayıs";
            break;
        case 5 :
            monthName = "Haziran";
            break;
        case 6 :
            monthName = "Temmuz";
            break;
        case 7 :
            monthName = "Ağustos";
            break;
        case 8 :
            monthName = "Eylül";
            break;
        case 9 :
            monthName = "Ekim";
            break;
        case 10 :
            monthName = "Kasım";
            break;
        case 11 :
            monthName = "Aralık";
            break;
        default:
            monthName ="TARİH HATASI !"
    }return monthName;
    
}
function time() {
    document.getElementById("one").innerHTML =+ hours + ":" + minutes+"\n"+ "<br>" +day +" " +(monthN()) + " " + year +"<br>" + today ;
}
function dayName(){
    switch(dayNumber){
        case 0 :
            today = "Pazartesi";
            break;
        case 1 :
            today = "Salı";
            break;
        case 2 :
            today = "Çarşamba";
            break;
        case 3 :
            today = "Perşembe";
            break;
        case 4 :
            today = "Cuma";
            break;
        case 5 :
            today = "Cumartesi";
            break;
        case 6 :
            today = "Pazar";
            break;
        default:
            today ="Tarih hatası";
        }return today;
}
function history() {
    document.getElementById("two").innerHTML = day +" " +(monthN()) + " " + year +"\n" + today;
}
function meeting(){
    
document.getElementById("endOne").innerHTML = greeting[Math.floor(Math.random()*5)] ;
}


/*
setInterval(()=> {
    weather();
    console.log('setınterval çalıştı')
    
    console.log('Saat Çalıştı')
},20000)*/

dayName();
monthN();
history();
time();
meeting();
req();
console.log(weather());


