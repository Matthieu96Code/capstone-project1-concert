console.log(document.querySelector('.last-festival'))

const featureGuest = {
    guestOne: {
        name: 'Luc Mayitoukoua',
        skills: 'Contre-bass',
        nationality: 'Senegal',
        picture: "./img/luc.png"
    },
    guestTwo: {
        name: 'Stéphanie Soleansky',
        skills: 'keyboard',
        nationality: 'France',
        picture: "./img/steph.png"
    },
    guestThree: {
        name: 'Natalie Aloessode Bernardin',
        skills: 'drums',
        nationality: 'Canada',
        picture: "./img/natalie.png"
    },
    guestFour: {
        name: 'Mawuto Dick',
        skills: 'Singer',
        nationality: 'Maroc',
        picture: "./img/mawuto.png"
    },
    guestFive: {
        name: 'Cyriaque Noussouglo',
        skills: 'Artiste et co-fondatrice Afropolitain Nomade',
        nationality: 'Canada',
        picture: "./img/cyriaque.png"
    },
    guestSix: {
        name: 'Vanessa Kanga',
        skills: 'Artiste et co-fondatrice Afropolitain Nomade',
        nationality: 'Togo',
        picture: "./img/vanessa.png"
    }
}

const featureSpeakersSection = document.querySelector('.featured-speakers');

const SpeakersSection = document.querySelector('.speakers-section');

const featuredSpeakersTitle = document.createElement('h3');
featuredSpeakersTitle.className = 'lato-font-black';
featuredSpeakersTitle.innerHTML = 'Featured Speakers<span class="underline-style"></span>'
SpeakersSection.append(featuredSpeakersTitle);

const moreSpeakers = document.createElement('button');
moreSpeakers.className = 'fa fa-chevron-down';
moreSpeakers.innerHTML = 'More'

SpeakersSection.append(moreSpeakers);


function callSpeakers (guest) {
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


let stObjCount = 0;

for (let guest in featureGuest) {
    stObjCount +=1 ;
    
    if (stObjCount < 3) {
        callSpeakers(guest)  
    } 
    
}


function ndSpeakers() {
    let ndObjCount = 0;
    for (let guest in featureGuest) {
        ndObjCount +=1 ;
        
        if (ndObjCount > 2) {
            callSpeakers(guest)
        }  
    }
}

const x = window.matchMedia('(min-width: 768px)');
if (x.matches) {
    ndSpeakers()
}
const moreSpeakersBtn = document.querySelector('.speakers-section button')
moreSpeakersBtn.addEventListener('click', ndSpeakers);
moreSpeakersBtn.addEventListener('click', () =>{
    moreSpeakersBtn.remove()
});