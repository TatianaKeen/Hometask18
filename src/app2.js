class Speakers {
  constructor() {
    this.speakersList = [];
  }

  async getSpeakersList() {
    const response = await fetch(`https://dummyjson.com/users?limit=4`);
    const data = await response.json();
    return data;
  }

  processSpeakersList(speakers) {
    // Using reduce to extract required fields for UI display
    return speakers.reduce((processedList, speaker) => {
      const { firstName, phone } = speaker;
      processedList.push({ firstName, phone });
      return processedList;
    }, []);
  }

  renderSpeakers(isPhoto, size) {
    const speakersContainer = document.getElementById('speakers');

    this.getSpeakersList()
      .then(speakers => {
        const processedSpeakers = this.processSpeakersList(speakers.slice(0, size));
        processedSpeakers.forEach(speaker => {
          const figure = document.createElement('figure');
          const img = document.createElement('img');
          const figcaption = document.createElement('figcaption');
          const h3 = document.createElement('h3');
          const p = document.createElement('p');

          img.src = isPhoto ? 'path/to/photo.jpg' : '';
          h3.textContent = speaker.firstName;
          p.textContent = speaker.phone;

          figcaption.appendChild(h3);
          figcaption.appendChild(p);
          figure.appendChild(img);
          figure.appendChild(figcaption);
          speakersContainer.appendChild(figure);
        });
      })
      .catch(error => {
        console.error('Error fetching speakers list:', error);
      });
  }
}

// Example usage:
const speakers = new Speakers();
speakers.renderSpeakers(true, 3);