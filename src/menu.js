export function menu()
{
	const contentDiv = document.querySelector("#content");

	// Remove any existing DOM children if present.
	contentDiv.replaceChildren();

	// DOM for heading.
	const heading = document.createElement("h1");
	heading.textContent = "Welcome to Big Dogg's pizza";
	heading.classList.add("landing-title");
	contentDiv.appendChild(heading);

	// DOM for pizza heading.
	const pizzaHeading = document.createElement("h1");
	pizzaHeading.textContent = "Pizza";
	pizzaHeading.classList.add("landing-title");
	contentDiv.appendChild(pizzaHeading);

	// DOM for cheese pizza image.
	const cheesePizza = document.createElement("img");
	cheesePizza.classList.add("image");
	cheesePizza.src = "../src/assets/cheese-pizza.jpg";
	cheesePizza.alt = "Image of cheese pizza";
	contentDiv.appendChild(cheesePizza);

	// DOM for p tag for cheese pizza.
	const paragraphCheesePizza = document.createElement("p");
	paragraphCheesePizza.classList.add("menu-copy");
	paragraphCheesePizza.textContent = "Cheese Pizza";
	contentDiv.appendChild(paragraphCheesePizza);

	// DOM for meat lovers pizza image.
	const meatLoversPizza = document.createElement("img");
	meatLoversPizza.classList.add("image");
	meatLoversPizza.src = "../src/assets/meat-lovers-pizza.jpg";
	meatLoversPizza.alt = "Image of meat lovers pizza";
	contentDiv.appendChild(meatLoversPizza);

	// DOM for p tag for meat lovers pizza.
	const paragraphMeatLoversPizza = document.createElement("p");
	paragraphMeatLoversPizza.classList.add("menu-copy");
	paragraphMeatLoversPizza.textContent = "Meat Lovers Pizza";
	contentDiv.appendChild(paragraphMeatLoversPizza);

	// DOM for pepperoni pizza image.
	const pepperoniPizza = document.createElement("img");
	pepperoniPizza.classList.add("image");
	pepperoniPizza.src = "../src/assets/pepperoni-pizza.jpg";
	pepperoniPizza.alt = "Image of pepperoni pizza";
	contentDiv.appendChild(pepperoniPizza);

	// DOM for p tag for pepperoni pizza.
	const paragraphPepperoniPizza = document.createElement("p");
	paragraphPepperoniPizza.classList.add("menu-copy");
	paragraphPepperoniPizza.textContent = "Pepperoni Pizza";
	contentDiv.appendChild(paragraphPepperoniPizza);
}