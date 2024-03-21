
async function fetchSpeakersAndPopulate() {
  try {
    const response = await fetch('https://dummyjson.com/users?limit=6');
    const data = await response.json();
    console.log(data.users);

    const speakersContainer = document.getElementById('speakers');
    data.users.forEach(function (user) {
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        img.src = user.image; // Assuming user data includes an image URL
        // img.alt = user.name; // Use name as alt text for accessibility
        const figcaption = document.createElement('figcaption');
        const h3 = document.createElement('h3');
        h3.textContent = user.firstName + ' ' + user.lastName;
        const p = document.createElement('p');
        p.textContent = user.company.title + ' at ' + user.company.name;

        figcaption.appendChild(h3);
        figcaption.appendChild(p);
        figure.appendChild(img);
        figure.appendChild(figcaption);
        speakersContainer.appendChild(figure);
      });
  } catch (error) {
    console.error('Error fetching speakers:', error);
  }
}

fetchSpeakersAndPopulate();