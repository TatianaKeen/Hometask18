class Speaker {
  constructor(firstName, lastName, image, company, phone) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.image = image;
    this.company = company;
    this.phone = phone;
  }

  createSpeakerElement() {
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    img.src = this.image; 
    const figcaption = document.createElement('figcaption');
    const h3 = document.createElement('h3');
    h3.textContent = this.firstName + ' ' + this.lastName;
    const p = document.createElement('p');
    p.textContent = this.company.title + ' at ' + this.company.name;

    figcaption.appendChild(h3);
    figcaption.appendChild(p);
    figure.appendChild(img);
    figure.appendChild(figcaption);

    return figure;
  }
}

class CalendarEvent {
  constructor(date, limit, skip) {
    this.date = date;
    this.limit = limit;
    this.skip = skip;
  }

  async fetchCalendarEvents() {
    try {
      const response = await fetch(`https://dummyjson.com/users?limit=${this.limit}&skip=${this.skip}`);
      const data = await response.json();
      console.log(data.users);

      const scheduleContainer = document.querySelector(`.schedule > div.${this.date} > ul`);
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
}

class April4Event extends CalendarEvent {
  constructor(limit, skip) {
    super('April4', limit, skip);
  }
}

class April5Event extends CalendarEvent {
  constructor(limit, skip) {
    super('April5', limit, skip);
  }
}

class April6Event extends CalendarEvent {
  constructor(limit, skip) {
    super('April6', limit, skip);
  }
}

async function fetchSpeakers() {
  try {
    const response = await fetch('https://dummyjson.com/users?limit=6');
    const data = await response.json();
    console.log(data.users);

    const speakersContainer = document.getElementById('speakers');
    data.users.forEach(function (user) {
      const speaker = new Speaker(user.firstName, user.lastName, user.image, user.company, user.phone);
      const speakerElement = speaker.createSpeakerElement();
      speakersContainer.appendChild(speakerElement);
    });
  } catch (error) {
    console.error('Error fetching speakers:', error);
  }
}

async function fetchCalendarEvents() {
  const april4Event = new April4Event(2, 0);
  const april5Event = new April5Event(3, 2);
  const april6Event = new April6Event(4, 5);

  await april4Event.fetchCalendarEvents();
  await april5Event.fetchCalendarEvents();
  await april6Event.fetchCalendarEvents();
}

fetchSpeakers();
fetchCalendarEvents();