
async function fetchSpeakers() {
  try {
    const response = await fetch('https://dummyjson.com/users?limit=6');
    const data = await response.json();
    console.log(data.users);

    const speakersContainer = document.getElementById('speakers');
    data.users.forEach(function (user) {
      const figure = document.createElement('figure');
      const img = document.createElement('img');
      img.src = user.image; 
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

async function fetchCalendarApril4() {
  try {
    const response = await fetch('https://dummyjson.com/users?limit=2');
    const data = await response.json();
    console.log(data.users);

    const scheduleContainer = document.querySelector('.schedule > div.April4 > ul');
    scheduleContainer.innerHTML = '';

    data.users.forEach(function (user) {
      const listItem = document.createElement('li');

      const nameHeading = document.createElement('h4');
      nameHeading.textContent = user.firstName + ' ' + user.lastName;
      listItem.appendChild(nameHeading);

      const companyPara = document.createElement('p');
      companyPara.textContent = user.company.title;
      listItem.appendChild(companyPara);

      const phoneSpan = document.createElement('span');
      phoneSpan.textContent = user.phone;
      listItem.appendChild(phoneSpan);

      scheduleContainer.appendChild(listItem);
    });
  } catch (error) {
    console.error('Error fetching calendar:', error);
  }
}

async function fetchCalendarApril5() {
  try {
    const response = await fetch('https://dummyjson.com/users?limit=3&skip=2');
    const data = await response.json();
    console.log(data.users);

    const scheduleContainer = document.querySelector('.schedule > div.April5 > ul');
    scheduleContainer.innerHTML = '';

    data.users.forEach(function (user) {
      const listItem = document.createElement('li');

      const nameHeading = document.createElement('h4');
      nameHeading.textContent = user.firstName + ' ' + user.lastName;
      listItem.appendChild(nameHeading);

      const companyPara = document.createElement('p');
      companyPara.textContent = user.company.title;
      listItem.appendChild(companyPara);

      const phoneSpan = document.createElement('span');
      phoneSpan.textContent = user.phone;
      listItem.appendChild(phoneSpan);

      scheduleContainer.appendChild(listItem);
    });
  } catch (error) {
    console.error('Error fetching calendar:', error);
  }
}

async function fetchCalendarApril6() {
  try {
    const response = await fetch('https://dummyjson.com/users?limit=4&skip=5');
    const data = await response.json();
    console.log(data.users);

    const scheduleContainer = document.querySelector('.schedule > div.April6 > ul');
    scheduleContainer.innerHTML = '';

    data.users.forEach(function (user) {
      const listItem = document.createElement('li');

      const nameHeading = document.createElement('h4');
      nameHeading.textContent = user.firstName + ' ' + user.lastName;
      listItem.appendChild(nameHeading);

      const companyPara = document.createElement('p');
      companyPara.textContent = user.company.title;
      listItem.appendChild(companyPara);

      const phoneSpan = document.createElement('span');
      phoneSpan.textContent = user.phone;
      listItem.appendChild(phoneSpan);

      scheduleContainer.appendChild(listItem);
    });
  } catch (error) {
    console.error('Error fetching calendar:', error);
  }
}





fetchSpeakers();
fetchCalendarApril4();
fetchCalendarApril5();
fetchCalendarApril6();