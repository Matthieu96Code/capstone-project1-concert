/* object for feature guest */

const featureGuest = {
    guestOne: {
        name: 'First Person',
        skills: 'Contre-bass',
        nationality: 'USA',
        picture: "/img/iconmonstr-school-6-240.png"
    },
    guestTwo: {
        name: 'Second Person',
        skills: 'keyboard',
        nationality: 'Germmany',
        picture: "/img/iconmonstr-school-6-240.png"
    },
    guestThree: {
        name: 'third Person',
        skills: 'drums',
        nationality: 'France',
        picture: "/img/iconmonstr-school-6-240.png"
    },
    guestFour: {
        name: 'fourth Person',
        skills: 'Singer',
        nationality: 'Maroc',
        picture: "/img/iconmonstr-school-6-240.png"
    },
    guestFive: {
        name: 'fifth Person',
        skills: 'Guitare',
        nationality: 'Congo',
        picture: "/img/iconmonstr-school-6-240.png"
    },
    guestSix: {
        name: 'sixth Person',
        skills: 'Bass',
        nationality: 'Togo',
        picture: "/img/iconmonstr-school-6-240.png"
    }
}

const featureSpeakersSection = document.querySelector('.featured-speakers');

for (let guest in featureGuest) {

    const everyFeatureDiv = document.createElement('div');
    everyFeatureDiv.className = 'every-feature';

    const speakerPicture = document.createElement('img');
    speakerPicture.className = 'speaker-picture';
    
    
    const speakerDescription = document.createElement('div');
    speakerDescription.className = 'speaker-description';

    const speakerName = document.createElement('h4');
    speakerName.className = 'speaker-name';
    const speakerSkills = document.createElement('p');
    speakerSkills.className = 'speaker-skills';
    const speakerNationality = document.createElement('p');
    speakerNationality.className = 'speaker-nationality';

    speakerPicture.src = featureGuest[guest].picture;
    speakerPicture.alt = featureGuest[guest].name +' picture';
    speakerName.innerText = featureGuest[guest].name;
    speakerSkills.innerText = featureGuest[guest].skills;
    speakerNationality.innerText = featureGuest[guest].nationality;
    
    speakerDescription.appendChild(speakerName);
    speakerDescription.appendChild(speakerSkills);
    speakerDescription.appendChild(speakerNationality);

    everyFeatureDiv.appendChild(speakerDescription);
    everyFeatureDiv.appendChild(speakerPicture);
    featureSpeakersSection.appendChild(everyFeatureDiv);
}

