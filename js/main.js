const featureGuest = {
  guestOne: {
    name: 'Luc Mayitoukoua',
    job: 'Director ZHU Culture from Senegal',
    subject: 'Markets and cultural networks',
    picture: './img/luc.png',
  },
  guestTwo: {
    name: 'Stéphanie Soleansky',
    job: 'Consultant and cultural entrepreneur from France',
    subject: 'Women and cultural entreprenership',
    picture: './img/steph.png',
  },
  guestThree: {
    name: 'Natalie Aloessode Bernardin',
    job: 'Artist manager from Canade',
    subject: 'Women and cultural entreprenership',
    picture: './img/natalie.png',
  },
  guestFour: {
    name: 'Mawuto Dick',
    job: 'Director of the togoville jazz festival from Togo',
    subject: 'The music charters of the world',
    picture: './img/mawuto.png',
  },
  guestFive: {
    name: 'Cyriaque Noussouglo',
    job: 'Secretary of national committee of francophonie in togo',
    subject: 'cultural and creative industries',
    picture: './img/cyriaque.png',
  },
  guestSix: {
    name: 'Vanessa Kanga',
    job: 'Artist and co-founder of Afropolitain Nomade from Canada',
    subject: 'women and cultural entreprenership',
    picture: './img/vanessa.png',
  },
};

const featureSpeakersSection = document.querySelector('.featured-speakers');

const SpeakersSection = document.querySelector('.speakers-section');

const featuredSpeakersTitle = document.createElement('h3');
featuredSpeakersTitle.className = 'lato-font-black';
featuredSpeakersTitle.innerHTML = 'Featured Speakers<span class="underline-style"></span>';
SpeakersSection.append(featuredSpeakersTitle);

const moreSpeakers = document.createElement('button');
moreSpeakers.className = 'lato-font-black';
moreSpeakers.innerHTML = 'More  ▼';

SpeakersSection.append(moreSpeakers);

function callSpeakers(guest) {
  const everyFeatureArticle = document.createElement('article');
  everyFeatureArticle.className = 'every-feature';

  const speakerPicture = document.createElement('img');
  speakerPicture.className = 'speaker-picture';

  const speakerDescription = document.createElement('div');
  speakerDescription.className = 'lato-font-black';
  speakerDescription.id = 'speaker-description';

  const speakerName = document.createElement('h4');
  speakerName.id = 'speaker-name';

  const speakerSkills = document.createElement('p');
  speakerSkills.className = 'lato-font-red';
  speakerSkills.id = 'speaker-skills';

  const underlineStyle = document.createElement('span');
  underlineStyle.className = 'underline-style';
  underlineStyle.id = 'speaker-infosplit';

  const speakerNationality = document.createElement('p');
  speakerNationality.className = 'speaker-nationality';

  speakerPicture.src = featureGuest[guest].picture;
  speakerPicture.alt = `${featureGuest[guest].name} picture`;
  speakerName.innerText = featureGuest[guest].name;
  speakerSkills.innerText = featureGuest[guest].job;
  speakerNationality.innerText = featureGuest[guest].subject;

  speakerSkills.appendChild(underlineStyle);
  speakerDescription.appendChild(speakerName);
  speakerDescription.appendChild(speakerSkills);
  speakerDescription.appendChild(speakerNationality);

  everyFeatureArticle.appendChild(speakerDescription);
  everyFeatureArticle.appendChild(speakerPicture);
  featureSpeakersSection.appendChild(everyFeatureArticle);
}

const guestArray = Object.keys(featureGuest);

for (let guest = 0; guest < guestArray.length - 4; guest += 1) {
  callSpeakers(guestArray[guest]);
}

function ndSpeakers() {
  for (let guest = 2; guest < guestArray.length; guest += 1) {
    callSpeakers(guestArray[guest]);
  }
}

const x = window.matchMedia('(min-width: 768px)');
if (x.matches) {
  ndSpeakers();
}
const moreSpeakersBtn = document.querySelector('.speakers-section button');

moreSpeakersBtn.addEventListener('click', ndSpeakers);
moreSpeakersBtn.addEventListener('click', () => {
  moreSpeakersBtn.remove();
});
