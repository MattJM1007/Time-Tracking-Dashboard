let json;

const appendData = (item) => {
    for (let i = 0; i < item.length; i++) {
        //Daily Data
        const currentDataDaily = document.querySelector(`.${item[i].title}-wrapper .current-daily`);
        const previousDataDaily = document.querySelector(`.${item[i].title}-wrapper .previous-daily`);
        
        currentDataDaily.innerText = `${item[i].timeframes.daily.current}hrs`;
        previousDataDaily.innerText = `Previous - ${item[i].timeframes.daily.previous}hrs`;
        
        //Weekly Data
        const currentDataWeekly = document.querySelector(`.${item[i].title}-wrapper .current-weekly`);
        const previousDataWeekly = document.querySelector(`.${item[i].title}-wrapper .previous-weekly`);
        
        currentDataWeekly.innerText = `${item[i].timeframes.weekly.current}hrs`;
        previousDataWeekly.innerText = `Previous - ${item[i].timeframes.weekly.previous}hrs`;
        
        //Monthly Data
        const currentDataMonthly = document.querySelector(`.${item[i].title}-wrapper .current-monthly`);
        const previousDataMonthly = document.querySelector(`.${item[i].title}-wrapper .previous-monthly`);
        
        currentDataMonthly.innerText = `${item[i].timeframes.monthly.current}hrs`;
        previousDataMonthly.innerText = `Previous - ${item[i].timeframes.monthly.previous}hrs`;

    }
}


fetch('./data.json').then((response) => {
    if(!response.ok) return console.log('Oops! Something went wrong.');
    
    return response.json();
}).then((data) => {
    json = data;
    appendData(json);
});


//handle button clicks below
const dailyButton = document.getElementById("daily-btn");
const weeklyButton = document.getElementById("weekly-btn");
const monthlyButton = document.getElementById("monthly-btn");

const currentDaily = document.getElementsByClassName("current-daily");
const currentWeekly = document.getElementsByClassName("current-weekly");
const currentMonthly = document.getElementsByClassName("current-monthly");

const previousDaily = document.getElementsByClassName("previous-daily");
const previousWeekly = document.getElementsByClassName("previous-weekly");
const previousMonthly = document.getElementsByClassName("previous-monthly");

function addHidden(data){
    dataArray = Array.from(data);
    dataArray.forEach(element => {
        element.classList.add("hidden");
   })
}

function removeHidden(data){
    dataArray = Array.from(data);
    dataArray.forEach(element => {
        element.classList.remove("hidden");
    });
}

dailyButton.addEventListener("click", () => {
    // alert("button clicked");
    
    removeHidden(currentDaily);
    removeHidden(previousDaily);
    dailyButton.classList.add("active-btn");

    addHidden(currentWeekly);
    addHidden(previousWeekly);
    weeklyButton.classList.remove("active-btn");

    addHidden(currentMonthly);
    addHidden(previousMonthly);
    weeklyButton.classList.remove("active-btn"); 
})

weeklyButton.addEventListener("click", (e) => {
    // alert("button clicked");
    
    addHidden(currentDaily);
    addHidden(previousDaily);
    dailyButton.classList.remove("active-btn");

    removeHidden(currentWeekly);
    removeHidden(previousWeekly);
    weeklyButton.classList.add("active-btn");

    addHidden(currentMonthly);
    addHidden(previousMonthly);
    monthlyButton.classList.remove("active-btn");
})

monthlyButton.addEventListener("click", (e) => {
    // alert("button clicked");
    
    addHidden(currentDaily);
    addHidden(previousDaily);
    dailyButton.classList.remove("active-btn");

    addHidden(currentWeekly);
    addHidden(previousWeekly);
    weeklyButton.classList.remove("active-btn");

    removeHidden(currentMonthly);
    removeHidden(previousMonthly);
    monthlyButton.classList.add("active-btn");
})