export function initialPageLoad()
{
   const contentDiv = document.querySelector("#content");

   // Remove any existing DOM children if present.
   contentDiv.replaceChildren();

   // DOM for heading.
   const heading = document.createElement("h1");
   heading.textContent = "Welcome to Big Dogg's pizza";
   heading.classList.add("landing-title");
   contentDiv.appendChild(heading);

   // DOM for landing page top image.
   const topImage = document.createElement("img");
   topImage.classList.add("image");
   topImage.src = "../src/assets/restaurant-image.jpg"
   topImage.alt = "Image of restaurant";
   contentDiv.appendChild(topImage);

   // Dom for p tag 1.
   const paragraph1 = document.createElement("p");
   paragraph1.classList.add("landing-page-copy");
   paragraph1.textContent = "Best pizza in town!";
   contentDiv.appendChild(paragraph1);

   // Dom for p tag 2.
   const paragraph2 = document.createElement("p")
   paragraph2.classList.add("landing-page-copy");
   paragraph2.textContent = "Proudly made since 2022.";
   contentDiv.appendChild(paragraph2);

   // Dom for p tag 3.
   const paragraph3 = document.createElement("p")
   paragraph3.classList.add("landing-page-copy");
   paragraph3.textContent = "Stop in or order online!";
   contentDiv.appendChild(paragraph3);
}