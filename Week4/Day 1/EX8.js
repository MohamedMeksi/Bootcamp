function makeJuice(size) {
    let ingredients = [];

    function addIngredients(ingredient1, ingredient2, ingredient3) {
        ingredients.push(ingredient1, ingredient2, ingredient3);
    }

    function displayJuice() {
        const ingredientList = ingredients.join(", ");
        document.body.innerHTML += `The client wants a ${size} juice, containing ${ingredientList}.<br>`;
    }


    addIngredients("apple", "banana", "orange");

    addIngredients("mango", "pineapple", "strawberry");

    displayJuice();
}

makeJuice("large");