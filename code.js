//https://wireframe.cc/gs626f

var meal_url = 'https://www.themealdb.com/api/json/v1/1/random.php';
var getmealBTN = document.getElementById("getmealBTN");

getmealBTN.addEventListener('click', getMEAL);

async function getMEAL() {
    const response = await fetch(meal_url);
    const data = await response.json();
    
    console.log(data.meals[0].strArea);
}
