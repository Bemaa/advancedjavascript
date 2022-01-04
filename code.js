//https://wireframe.cc/gs626f

var meal_url = 'https://www.themealdb.com/api/json/v1/1/random.php';
var getmealBTN = document.getElementById("getmealBTN");

getmealBTN.addEventListener('click', getMEAL);

async function getMEAL() {
    const response = await fetch(meal_url);
    const data = await response.json();

    //Print the name of the meal
    document.getElementById("mealname").innerHTML = data.meals[0].strMeal;

    //Empty img id
    document.getElementById('picofmeal').innerHTML= "";
    //Print a picture of the meal
    let picofmeal = data.meals[0].strMealThumb;
    let mealpictostring = picofmeal.toString();
    let img = document.createElement('img'); 
    img.src = mealpictostring;
    document.getElementById('picofmeal').appendChild(img);
        

    //print instructions
    document.getElementById("instructions").innerHTML = data.meals[0].strInstructions;

    //get ingredients and print them in ingredients div, should have made a for loop but did not know how.
    //the same thing but for measures
    document.getElementById("ingredients").innerHTML = 'Ingredients:';

    if (data.meals[0].strIngredient1 !== null){
        document.getElementById("ingredient1").innerHTML = data.meals[0].strIngredient1 + " " + data.meals[0].strMeasure1 ;
    } else{
    
    }
    if (data.meals[0].strIngredient2 !== null){
        document.getElementById("ingredient2").innerHTML = data.meals[0].strIngredient + " " +  data.meals[0].strMeasure2  ;
    } else{
    
    }
    if (data.meals[0].strIngredient3 !== null){
        document.getElementById("ingredient3").innerHTML = data.meals[0].strIngredient3 + " " +  data.meals[0].strMeasure3  ;
    } else{
    
    }
    if (data.meals[0].strIngredient4 !== null){
        document.getElementById("ingredient4").innerHTML = data.meals[0].strIngredient4 + " " +  data.meals[0].strMeasure4  ;
    } else{
    
    }
    if (data.meals[0].strIngredient5 !== null){
        document.getElementById("ingredient5").innerHTML = data.meals[0].strIngredient5 + " " +  data.meals[0].strMeasure5  ;
    } else{
    
    }
    if (data.meals[0].strIngredient6 !== null){
        document.getElementById("ingredient6").innerHTML = data.meals[0].strIngredient6 + " " +  data.meals[0].strMeasure6  ;
    } else{
    
    }
    if (data.meals[0].strIngredient7 !== null){
        document.getElementById("ingredient7").innerHTML = data.meals[0].strIngredient7 + " " +   data.meals[0].strMeasure7  ;
    } else{
    
    }
    if (data.meals[0].strIngredient8 !== null){
        document.getElementById("ingredient8").innerHTML = data.meals[0].strIngredient8 + " " +  data.meals[0].strMeasure8  ;
    } else{
    
    }
    if (data.meals[0].strIngredient9 !== null){
        document.getElementById("ingredient9").innerHTML = data.meals[0].strIngredient9  + " " +  data.meals[0].strMeasure9  ;
    } else{
    
    }
    if (data.meals[0].strIngredient10 !== null){
        document.getElementById("ingredient10").innerHTML = data.meals[0].strIngredient10 + " " +  data.meals[0].strMeasure10  ;
    } else{
    
    }
    if (data.meals[0].strIngredient11 !== null){
        document.getElementById("ingredient11").innerHTML = data.meals[0].strIngredient11 + " " +  data.meals[0].strMeasure11 ;
    } else{
    
    }
    if (data.meals[0].strIngredient12 !== null){
        document.getElementById("ingredient12").innerHTML = data.meals[0].strIngredient12 + " " +  data.meals[0].strMeasure12  ;
    } else{
    
    }
    if (data.meals[0].strIngredient13 !== null){
        document.getElementById("ingredient13").innerHTML = data.meals[0].strIngredient13 + " " +  data.meals[0].strMeasure13  ;
    } else{
    
    }    if (data.meals[0].strIngredient14 !== null){
        document.getElementById("ingredient14").innerHTML = data.meals[0].strIngredient14 + " " +  data.meals[0].strMeasure14 ;
    } else{
    
    }
    if (data.meals[0].strIngredient15 !== null){
        document.getElementById("ingredient15").innerHTML = data.meals[0].strIngredient15 + " " +  data.meals[0].strMeasure15  ;
    } else{
    
    }
    if (data.meals[0].strIngredient16 !== null){
        document.getElementById("ingredient16").innerHTML = data.meals[0].strIngredient16 + " " +  data.meals[0].strMeasure16  ;
    } else{
    
    }
    if (data.meals[0].strIngredient17 !== null){
        document.getElementById("ingredient17").innerHTML = data.meals[0].strIngredient17 + " " +  data.meals[0].strMeasure17  ;
    } else{
    
    }    if (data.meals[0].strIngredient18 !== null){
        document.getElementById("ingredient18").innerHTML = data.meals[0].strIngredient18 + " " +  data.meals[0].strMeasure18  ;
    } else{
    
    }
    if (data.meals[0].strIngredient19 !== null){
        document.getElementById("ingredient19").innerHTML = data.meals[0].strIngredient19 + " " +  data.meals[0].strMeasure19  ;
    } else{
    
    }
    if (data.meals[0].strIngredient20 !== null){
        document.getElementById("ingredient20").innerHTML = data.meals[0].strIngredient20 + " " +  data.meals[0].strMeasure20  ;
    } else{
    
    }





    
   













    
    
}
