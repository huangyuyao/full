function myFunction() {
  let person = prompt("Please enter your name", "john@umich.edu");
  let pass = prompt("Password", "");
  if (person != null) {
    document.getElementById("user").innerHTML = person;
  }
}

document.addEventListener('DOMContentLoaded', () => {
    // Select the navigation links
    const links = document.querySelectorAll('#navigation-menu ul li a');

    // Function to navigate to a random section
    function goToRandomSection() {
        // Generate a random index
        const randomIndex = Math.floor(Math.random() * links.length);

        // Get the href attribute of the randomly selected link
        const randomHref = links[randomIndex].getAttribute('href');

        // Navigate to the section
        location.href = randomHref;
    }

    // Select the button and add a click event listener
    const randomButton = document.getElementById('randomButton');
    randomButton.addEventListener('click', goToRandomSection);
});

document.addEventListener('DOMContentLoaded', () => {
    // Select all the links in the list
    const links = document.querySelectorAll('#navigation-menu ul li a');

    links.forEach(link => {
        // Split the text content into individual letters
        const letters = link.textContent.split('');

        // Wrap each letter in a span and apply the animation with delay
        link.innerHTML = letters.map((letter, index) => {
            return `<span style="animation: slideInEffect 1s ease forwards ${index * 0.5}s;">${letter}</span>`;
        }).join('');
    });


    const link2 = document.querySelectorAll('h2');
    
    link2.forEach(link => {
        // Split the text content into individual letters
        const letters = link.textContent.split('');

        // Wrap each letter in a span and apply the animation with delay
        link.innerHTML = letters.map((letter, index) => {
            return `<span style="animation: slideInEffect 1s ease forwards ${index * 0.5}s;">${letter}</span>`;
        }).join('');
    });

});