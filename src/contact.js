export function contact()
{
    const contentDiv = document.querySelector("#content");

    // Remove any existing DOM children if present.
   contentDiv.replaceChildren();

   // DOM for heading.
   const heading = document.createElement("h1");
   heading.textContent = "Welcome to Big Dogg's pizza";
   heading.classList.add("landing-title");
   contentDiv.appendChild(heading);

   // DOM for p tag for address.
   const paragraph1Address = document.createElement("p");
   paragraph1Address.classList.add("contact-copy");
   paragraph1Address.textContent = "Our address is 123 fake street, Fake town, 61554";
   contentDiv.appendChild(paragraph1Address);

   // DOM for p tag for phone number.
   const paragraph2PhoneNumber = document.createElement("p");
   paragraph2PhoneNumber.classList.add("contact-copy");
   paragraph2PhoneNumber.textContent = "Our phone number is (309) 123-4567";
   contentDiv.appendChild(paragraph2PhoneNumber);
}