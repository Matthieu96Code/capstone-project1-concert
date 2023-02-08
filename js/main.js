
const featureGuest = {
    guestOne: {
        name: 'Luc Mayitoukoua',
        job: 'Cultural entrepreneur, consultant and director ZHU Culture from Senegal',
        subject: 'Markets and cultural networks',
        picture: "./img/luc.png"
    },
    guestTwo: {
        name: 'Stéphanie Soleansky',
        job: 'Consultant and cultural entrepreneur from France',
        subject: 'Women and cultural entrepreneurship',
        picture: "./img/steph.png"
    },
    guestThree: {
        name: 'Natalie Aloessode Bernardin',
        job: 'Consultant and artist manager from Canade',
        subject: 'Women and cultural entrepreneurship',
        picture: "./img/natalie.png"
    },
    guestFour: {
        name: 'Mawuto Dick',
        job: 'cultural entrepreneur, director of the togoville jazz festival from Togo',
        subject: 'The music charters of the world',
        picture: "./img/mawuto.png"
    },
    guestFive: {
        name: 'Cyriaque Noussouglo',
        job: 'general secretary of the national commission of francophonie in togo',
        subject: 'cultural and creative industries',
        picture: "./img/cyriaque.png"
    },
    guestSix: {
        name: 'Vanessa Kanga',
        job: 'Artist and co-founder of Afropolitain Nomade from Canada',
        subject: 'women and cultural entrepreneurship',
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
    speakerDescription.className = 'lato-font-black';
    speakerDescription.id = 'speaker-description';

    const speakerName = document.createElement('h4');
    speakerName.id = 'speaker-name';

    const speakerSkills = document.createElement('p');
    speakerSkills.className = 'lato-font-red';
    speakerSkills.id = 'speaker-skills';

    const speakerNationality = document.createElement('p');
    speakerNationality.className = 'speaker-nationality';


    speakerPicture.src = featureGuest[guest].picture;
    speakerPicture.alt = featureGuest[guest].name +' picture';
    speakerName.innerText = featureGuest[guest].name;
    speakerSkills.innerText = featureGuest[guest].job;
    speakerNationality.innerText = featureGuest[guest].subject;
    
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


