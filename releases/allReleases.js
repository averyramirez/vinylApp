//All Releases

//********A********//


//Abdul, Paula
//Forever Your Girl

{const foreverYourGirl = {
    url: 'https://api.discogs.com/',
    type: 'releases',
    id: '1013969',
    key: 'OybxAqyJeOwAFtZmqIGa',
    secret: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
  }
  
  const {url, type, id, key, secret} = foreverYourGirl
  const releaseUrl = `${url}${type}/${id}?key=${key}&secret=${secret}`
  
  fetch(releaseUrl)
    .then( (data) => data.json())
    .then( (releases) => generateHtml(releases) )
  
  const generateHtml = (data) => {
    const html = `
        <img src=${data.images[0].resource_url}>
    `
    const foreverYourGirlDiv = document.querySelector('.foreverYourGirl')
    foreverYourGirlDiv.innerHTML = html
  }
};


//********B********//


//Black Rose
//Self-titled

{const blackRose = {
    url: 'https://api.discogs.com/',
    type: 'releases',
    id: '3567371',
    key: 'OybxAqyJeOwAFtZmqIGa',
    secret: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
  }
  
  const {url, type, id, key, secret} = blackRose
  const releaseUrl = `${url}${type}/${id}?key=${key}&secret=${secret}`
  
  fetch(releaseUrl)
    .then( (data) => data.json())
    .then( (releases) => generateHtml(releases) )
  
  const generateHtml = (data) => {
    const html = `
        <img src=${data.images[0].resource_url}>
    `
    const blackRoseDiv = document.querySelector('.blackRose')
    blackRoseDiv.innerHTML = html
  }
};


//Bleachers
//Gone Now

{const goneNow = {
    url: 'https://api.discogs.com/',
    type: 'releases',
    id: '10395276',
    key: 'OybxAqyJeOwAFtZmqIGa',
    secret: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
  }
  
  const {url, type, id, key, secret} = goneNow
  const releaseUrl = `${url}${type}/${id}?key=${key}&secret=${secret}`
  
  fetch(releaseUrl)
    .then( (data) => data.json())
    .then( (releases) => generateHtml(releases) )
  
  const generateHtml = (data) => {
    const html = `
        <img src=${data.images[0].resource_url}>
    `
    const goneNowDiv = document.querySelector('.goneNow')
    goneNowDiv.innerHTML = html
  }
};


//Blondie
//AutoAmerican

{const autoAmerican = {
    url: 'https://api.discogs.com/',
    type: 'releases',
    id: '4218423',
    key: 'OybxAqyJeOwAFtZmqIGa',
    secret: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
  }
  
  const {url, type, id, key, secret} = autoAmerican
  const releaseUrl = `${url}${type}/${id}?key=${key}&secret=${secret}`
  
  fetch(releaseUrl)
    .then( (data) => data.json())
    .then( (releases) => generateHtml(releases) )
  
  const generateHtml = (data) => {
    const html = `
        <img src=${data.images[0].resource_url}>
    `
    const autoAmericanDiv = document.querySelector('.autoAmerican')
    autoAmericanDiv.innerHTML = html
  }
};


//Buckingham Nicks
//Self-titled

{const buckNicks = {
    url: 'https://api.discogs.com/',
    type: 'releases',
    id: '1778025',
    key: 'OybxAqyJeOwAFtZmqIGa',
    secret: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
  }
  
  const {url, type, id, key, secret} = buckNicks
  const releaseUrl = `${url}${type}/${id}?key=${key}&secret=${secret}`
  
  fetch(releaseUrl)
    .then( (data) => data.json())
    .then( (releases) => generateHtml(releases) )
  
  const generateHtml = (data) => {
    const html = `
        <img src=${data.images[0].resource_url}>
    `
    const buckNicksDiv = document.querySelector('.buckNicks')
    buckNicksDiv.innerHTML = html
  }
};


//********C********//


//Cher
//All I Really Want To Do

{const allIReally = {
  url: 'https://api.discogs.com/',
  type: 'releases',
  id: '4470381',
  key: 'OybxAqyJeOwAFtZmqIGa',
  secret: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
}

const {url, type, id, key, secret} = allIReally
const releaseUrl = `${url}${type}/${id}?key=${key}&secret=${secret}`

fetch(releaseUrl)
  .then( (data) => data.json())
  .then( (releases) => generateHtml(releases) )

const generateHtml = (data) => {
  const html = `
      <img src=${data.images[0].resource_url}>
  `
  const allIReallyDiv = document.querySelector('.allIReally')
  allIReallyDiv.innerHTML = html
}
};

//Half Breed

{const halfBreed = {
  url: 'https://api.discogs.com/',
  type: 'releases',
  id: '5991169',
  key: 'OybxAqyJeOwAFtZmqIGa',
  secret: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
}

const {url, type, id, key, secret} = halfBreed
const releaseUrl = `${url}${type}/${id}?key=${key}&secret=${secret}`

fetch(releaseUrl)
  .then( (data) => data.json())
  .then( (releases) => generateHtml(releases) )

const generateHtml = (data) => {
  const html = `
      <img src=${data.images[0].resource_url}>
  `
  const halfBreedDiv = document.querySelector('.halfBreed')
  halfBreedDiv.innerHTML = html
}
};

//Greatest Hits 1974

{const cherGreatest = {
  url: 'https://api.discogs.com/',
  type: 'releases',
  id: '5532374',
  key: 'OybxAqyJeOwAFtZmqIGa',
  secret: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
}

const {url, type, id, key, secret} = cherGreatest
const releaseUrl = `${url}${type}/${id}?key=${key}&secret=${secret}`

fetch(releaseUrl)
  .then( (data) => data.json())
  .then( (releases) => generateHtml(releases) )

const generateHtml = (data) => {
  const html = `
      <img src=${data.images[0].resource_url}>
  `
  const cherGreatestDiv = document.querySelector('.cherGreatest')
  cherGreatestDiv.innerHTML = html
}
};

//Take Me Home

{const takeMeHome = {
  url: 'https://api.discogs.com/',
  type: 'releases',
  id: '7975996',
  key: 'OybxAqyJeOwAFtZmqIGa',
  secret: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
}

const {url, type, id, key, secret} = takeMeHome
const releaseUrl = `${url}${type}/${id}?key=${key}&secret=${secret}`

fetch(releaseUrl)
  .then( (data) => data.json())
  .then( (releases) => generateHtml(releases) )

const generateHtml = (data) => {
  const html = `
      <img src=${data.images[0].resource_url}>
  `
  const takeMeHomeDiv = document.querySelector('.takeMeHome')
  takeMeHomeDiv.innerHTML = html
}
};

//Self-titled 1987

{const cher1987 = {
  url: 'https://api.discogs.com/',
  type: 'releases',
  id: '13666137',
  key: 'OybxAqyJeOwAFtZmqIGa',
  secret: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
}

const {url, type, id, key, secret} = cher1987
const releaseUrl = `${url}${type}/${id}?key=${key}&secret=${secret}`

fetch(releaseUrl)
  .then( (data) => data.json())
  .then( (releases) => generateHtml(releases) )

const generateHtml = (data) => {
  const html = `
      <img src=${data.images[0].resource_url}>
  `
  const cher1987Div = document.querySelector('.cher1987')
  cher1987Div.innerHTML = html
}
};

//Heart of Stone

{const heartOfStone = {
  url: 'https://api.discogs.com/',
  type: 'releases',
  id: '1618266',
  key: 'OybxAqyJeOwAFtZmqIGa',
  secret: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
}

const {url, type, id, key, secret} = heartOfStone
const releaseUrl = `${url}${type}/${id}?key=${key}&secret=${secret}`

fetch(releaseUrl)
  .then( (data) => data.json())
  .then( (releases) => generateHtml(releases) )

const generateHtml = (data) => {
  const html = `
      <img src=${data.images[0].resource_url}>
  `
  const heartOfStoneDiv = document.querySelector('.heartOfStone')
  heartOfStoneDiv.innerHTML = html
}
};


//Culture Club
//Kissing to be Clever

{const kissingToBe = {
  url: 'https://api.discogs.com/',
  type: 'releases',
  id: '595732',
  key: 'OybxAqyJeOwAFtZmqIGa',
  secret: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
}

const {url, type, id, key, secret} = kissingToBe
const releaseUrl = `${url}${type}/${id}?key=${key}&secret=${secret}`

fetch(releaseUrl)
  .then( (data) => data.json())
  .then( (releases) => generateHtml(releases) )

const generateHtml = (data) => {
  const html = `
      <img src=${data.images[0].resource_url}>
  `
  const kissingToBeDiv = document.querySelector('.kissingToBe')
  kissingToBeDiv.innerHTML = html
}
};


//Colour by Numbers

{const colourByNumbers = {
  url: 'https://api.discogs.com/',
  type: 'releases',
  id: '371984',
  key: 'OybxAqyJeOwAFtZmqIGa',
  secret: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
}

const {url, type, id, key, secret} = colourByNumbers
const releaseUrl = `${url}${type}/${id}?key=${key}&secret=${secret}`

fetch(releaseUrl)
  .then( (data) => data.json())
  .then( (releases) => generateHtml(releases) )

const generateHtml = (data) => {
  const html = `
      <img src=${data.images[0].resource_url}>
  `
  const colourByNumbersDiv = document.querySelector('.colourByNumbers')
  colourByNumbersDiv.innerHTML = html
}
};


//********D********//


//Dead or Alive
//Youthquake

{const youthquake = {
  url: 'https://api.discogs.com/',
  type: 'releases',
  id: '1547900',
  key: 'OybxAqyJeOwAFtZmqIGa',
  secret: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
}

const {url, type, id, key, secret} = youthquake
const releaseUrl = `${url}${type}/${id}?key=${key}&secret=${secret}`

fetch(releaseUrl)
  .then( (data) => data.json())
  .then( (releases) => generateHtml(releases) )

const generateHtml = (data) => {
  const html = `
      <img src=${data.images[0].resource_url}>
  `
  const youthquakeDiv = document.querySelector('.youthquake')
  youthquakeDiv.innerHTML = html
}
};


//Del Rey, Lana
//Born to Die

{ const bornToDie = {
  url: 'https://api.discogs.com/',
  type: 'releases',
  id: '3354383',
  key: 'OybxAqyJeOwAFtZmqIGa',
  secret: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
}


const {url, type, id, key, secret} = bornToDie
const releaseUrl = `${url}${type}/${id}?key=${key}&secret=${secret}`

fetch(releaseUrl)
  .then( (data) => data.json())
  .then( (releases) => generateHtml(releases) )

const generateHtml = (data) => {
  const html = `
      <img src=${data.images[0].resource_url}>
  `
  const bornToDieDiv = document.querySelector('.bornToDie')
  bornToDieDiv.innerHTML = html
}
};


//Paradise

{const paradise = {
  url: 'https://api.discogs.com/',
  type: 'releases',
  id: '11015464',
  key: 'OybxAqyJeOwAFtZmqIGa',
  secret: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
}

const {url, type, id, key, secret} = paradise
const releaseUrl = `${url}${type}/${id}?key=${key}&secret=${secret}`

fetch(releaseUrl)
  .then( (data) => data.json())
  .then( (releases) => generateHtml(releases) )

const generateHtml = (data) => {
  const html = `
      <img src=${data.images[0].resource_url}>
  `
  const paradiseDiv = document.querySelector('.paradise')
  paradiseDiv.innerHTML = html
}
};


//Ultraviolence

{const ultraviolence = {
  url: 'https://api.discogs.com/',
  type: 'releases',
  id: '5799966',
  key: 'OybxAqyJeOwAFtZmqIGa',
  secret: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
}

const {url, type, id, key, secret} = ultraviolence
const releaseUrl = `${url}${type}/${id}?key=${key}&secret=${secret}`

fetch(releaseUrl)
  .then( (data) => data.json())
  .then( (releases) => generateHtml(releases) )

const generateHtml = (data) => {
  const html = `
      <img src=${data.images[0].resource_url}>
  `
  const ultraviolenceDiv = document.querySelector('.ultraviolence')
  ultraviolenceDiv.innerHTML = html
}
};


//Lust for Life

{const lustForLife = {
  url: 'https://api.discogs.com/',
  type: 'releases',
  id: '10895108',
  key: 'OybxAqyJeOwAFtZmqIGa',
  secret: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
}

const {url, type, id, key, secret} = lustForLife
const releaseUrl = `${url}${type}/${id}?key=${key}&secret=${secret}`

fetch(releaseUrl)
  .then( (data) => data.json())
  .then( (releases) => generateHtml(releases) )

const generateHtml = (data) => {
  const html = `
      <img src=${data.images[0].resource_url}>
  `
  const lustForLifeDiv = document.querySelector('.lustForLife')
  lustForLifeDiv.innerHTML = html
}
};

//Norman F Rockwell

{const normanFR = {
  url: 'https://api.discogs.com/',
  type: 'releases',
  id: '19948519',
  key: 'OybxAqyJeOwAFtZmqIGa',
  secret: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
}

const {url, type, id, key, secret} = normanFR
const releaseUrl = `${url}${type}/${id}?key=${key}&secret=${secret}`

fetch(releaseUrl)
  .then( (data) => data.json())
  .then( (releases) => generateHtml(releases) )

const generateHtml = (data) => {
  const html = `
      <img src=${data.images[0].resource_url}>
  `
  const normanFRDiv = document.querySelector('.normanFR')
  normanFRDiv.innerHTML = html
}
};


//Chemtrails Over The Country Club

{const chemtrails = {
  url: 'https://api.discogs.com/',
  type: 'releases',
  id: '17035572',
  key: 'OybxAqyJeOwAFtZmqIGa',
  secret: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
}

const {url, type, id, key, secret} = chemtrails
const releaseUrl = `${url}${type}/${id}?key=${key}&secret=${secret}`

fetch(releaseUrl)
  .then( (data) => data.json())
  .then( (releases) => generateHtml(releases) )

const generateHtml = (data) => {
  const html = `
      <img src=${data.images[0].resource_url}>
  `
  const chemtrailsDiv = document.querySelector('.chemtrails')
  chemtrailsDiv.innerHTML = html
}
};


//********E********//


//********F********//


//********G********//


//Gentry, Bobbie
//Ode to Billie Joe

{const odeToBillie = {
  url: 'https://api.discogs.com/',
  type: 'releases',
  id: '9162476',
  key: 'OybxAqyJeOwAFtZmqIGa',
  secret: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
}

const {url, type, id, key, secret} = odeToBillie
const releaseUrl = `${url}${type}/${id}?key=${key}&secret=${secret}`

fetch(releaseUrl)
  .then( (data) => data.json())
  .then( (releases) => generateHtml(releases) )

const generateHtml = (data) => {
  const html = `
      <img src=${data.images[0].resource_url}>
  `
  const odeToBillieDiv = document.querySelector('.odeToBillie')
  odeToBillieDiv.innerHTML = html
}
};


//Local Gentry

{const localGentry = {
  url: 'https://api.discogs.com/',
  type: 'releases',
  id: '3822688',
  key: 'OybxAqyJeOwAFtZmqIGa',
  secret: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
}

const {url, type, id, key, secret} = localGentry
const releaseUrl = `${url}${type}/${id}?key=${key}&secret=${secret}`

fetch(releaseUrl)
  .then( (data) => data.json())
  .then( (releases) => generateHtml(releases) )

const generateHtml = (data) => {
  const html = `
      <img src=${data.images[0].resource_url}>
  `
  const localGentryDiv = document.querySelector('.localGentry')
  localGentryDiv.innerHTML = html
}
};


//********H********//


//Hilton, Paris
//Stars Are Blind

{const starsAreBlind = {
  url: 'https://api.discogs.com/',
  type: 'releases',
  id: '3617653',
  key: 'OybxAqyJeOwAFtZmqIGa',
  secret: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
}

const {url, type, id, key, secret} = starsAreBlind
const releaseUrl = `${url}${type}/${id}?key=${key}&secret=${secret}`

fetch(releaseUrl)
  .then( (data) => data.json())
  .then( (releases) => generateHtml(releases) )

const generateHtml = (data) => {
  const html = `
      <img src=${data.images[0].resource_url}>
  `
  const starsAreBlindDiv = document.querySelector('.starsAreBlind')
  starsAreBlindDiv.innerHTML = html
}
};


//Nothing In This World

{const nothingIn = {
  url: 'https://api.discogs.com/',
  type: 'releases',
  id: '871139',
  key: 'OybxAqyJeOwAFtZmqIGa',
  secret: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
}

const {url, type, id, key, secret} = nothingIn
const releaseUrl = `${url}${type}/${id}?key=${key}&secret=${secret}`

fetch(releaseUrl)
  .then( (data) => data.json())
  .then( (releases) => generateHtml(releases) )

const generateHtml = (data) => {
  const html = `
      <img src=${data.images[0].resource_url}>
  `
  const nothingInDiv = document.querySelector('.nothingIn')
  nothingInDiv.innerHTML = html
}
};


//Houston, Whitney

//Self-titled

{const whitneyHouston = {
  url: 'https://api.discogs.com/',
  type: 'releases',
  id: '5856861',
  key: 'OybxAqyJeOwAFtZmqIGa',
  secret: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
}

const {url, type, id, key, secret} = whitneyHouston
const releaseUrl = `${url}${type}/${id}?key=${key}&secret=${secret}`

fetch(releaseUrl)
  .then( (data) => data.json())
  .then( (releases) => generateHtml(releases) )

const generateHtml = (data) => {
  const html = `
      <img src=${data.images[0].resource_url}>
  `
  const whitneyHoustonDiv = document.querySelector('.whitneyHouston')
  whitneyHoustonDiv.innerHTML = html
}
};


//********I********//


//********J********//

//Jackson, Janet

//Control

{const janetControl = {
  url: 'https://api.discogs.com/',
  type: 'releases',
  id: '339019',
  key: 'OybxAqyJeOwAFtZmqIGa',
  secret: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
}

const {url, type, id, key, secret} = janetControl
const releaseUrl = `${url}${type}/${id}?key=${key}&secret=${secret}`

fetch(releaseUrl)
  .then( (data) => data.json())
  .then( (releases) => generateHtml(releases) )

const generateHtml = (data) => {
  const html = `
      <img src=${data.images[0].resource_url}>
  `
  const janetControlDiv = document.querySelector('.janetControl')
  janetControlDiv.innerHTML = html
}
};


//Jett, Joan
//I Love Rock N Roll

{const iLoveRock = {
  url: 'https://api.discogs.com/',
  type: 'releases',
  id: '392586',
  key: 'OybxAqyJeOwAFtZmqIGa',
  secret: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
}

const {url, type, id, key, secret} = iLoveRock
const releaseUrl = `${url}${type}/${id}?key=${key}&secret=${secret}`

fetch(releaseUrl)
  .then( (data) => data.json())
  .then( (releases) => generateHtml(releases) )

const generateHtml = (data) => {
  const html = `
      <img src=${data.images[0].resource_url}>
  `
  const iLoveRockDiv = document.querySelector('.iLoveRock')
  iLoveRockDiv.innerHTML = html
}
};


//********K********//


//********L********//


//Labelle, Patti
//Winner In You

{const winnerInYou = {
  url: 'https://api.discogs.com/',
  type: 'releases',
  id: '943730',
  key: 'OybxAqyJeOwAFtZmqIGa',
  secret: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
}

const {url, type, id, key, secret} = winnerInYou
const releaseUrl = `${url}${type}/${id}?key=${key}&secret=${secret}`

fetch(releaseUrl)
  .then( (data) => data.json())
  .then( (releases) => generateHtml(releases) )

const generateHtml = (data) => {
  const html = `
      <img src=${data.images[0].resource_url}>
  `
  const winnerInYouDiv = document.querySelector('.winnerInYou')
  winnerInYouDiv.innerHTML = html
}
};


//Lady Gaga
//Joanne

{const joanne = {
  url: 'https://api.discogs.com/',
  type: 'releases',
  id: '9506110',
  key: 'OybxAqyJeOwAFtZmqIGa',
  secret: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
}

const {url, type, id, key, secret} = joanne
const releaseUrl = `${url}${type}/${id}?key=${key}&secret=${secret}`

fetch(releaseUrl)
  .then( (data) => data.json())
  .then( (releases) => generateHtml(releases) )

const generateHtml = (data) => {
  const html = `
      <img src=${data.images[0].resource_url}>
  `
  const joanneDiv = document.querySelector('.joanne')
  joanneDiv.innerHTML = html
}
};


//Lipa, Dua
//Self-titled

{const duaSelfTitled = {
  url: 'https://api.discogs.com/',
  type: 'releases',
  id: '10654633',
  key: 'OybxAqyJeOwAFtZmqIGa',
  secret: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
}

const {url, type, id, key, secret} = duaSelfTitled
const releaseUrl = `${url}${type}/${id}?key=${key}&secret=${secret}`

fetch(releaseUrl)
  .then( (data) => data.json())
  .then( (releases) => generateHtml(releases) )

const generateHtml = (data) => {
  const html = `
      <img src=${data.images[0].resource_url}>
  `
  const duaSelfTitledDiv = document.querySelector('.duaSelfTitled')
  duaSelfTitledDiv.innerHTML = html
}
};


//********M********//


//Marina and the Diamonds
//Family Jewels, The

{const familyJewels = {
  url: 'https://api.discogs.com/',
  type: 'releases',
  id: '2315153',
  key: 'OybxAqyJeOwAFtZmqIGa',
  secret: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
}

const {url, type, id, key, secret} = familyJewels
const releaseUrl = `${url}${type}/${id}?key=${key}&secret=${secret}`

fetch(releaseUrl)
  .then( (data) => data.json())
  .then( (releases) => generateHtml(releases) )

const generateHtml = (data) => {
  const html = `
      <img src=${data.images[0].resource_url}>
  `
  const familyJewelsDiv = document.querySelector('.familyJewels')
  familyJewelsDiv.innerHTML = html
}
};


//********N********//


//Nicks, Stevie
//Bella Donna

{const bellaDonna = {
  url: 'https://api.discogs.com/',
  type: 'releases',
  id: '4779571',
  key: 'OybxAqyJeOwAFtZmqIGa',
  secret: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
}

const {url, type, id, key, secret} = bellaDonna
const releaseUrl = `${url}${type}/${id}?key=${key}&secret=${secret}`

fetch(releaseUrl)
  .then( (data) => data.json())
  .then( (releases) => generateHtml(releases) )

const generateHtml = (data) => {
  const html = `
      <img src=${data.images[0].resource_url}>
  `
  const bellaDonnaDiv = document.querySelector('.bellaDonna')
  bellaDonnaDiv.innerHTML = html
}
};


//Wild Heart

{const wildHeart = {
  url: 'https://api.discogs.com/',
  type: 'releases',
  id: '16164981',
  key: 'OybxAqyJeOwAFtZmqIGa',
  secret: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
}

const {url, type, id, key, secret} = wildHeart
const releaseUrl = `${url}${type}/${id}?key=${key}&secret=${secret}`

fetch(releaseUrl)
  .then( (data) => data.json())
  .then( (releases) => generateHtml(releases) )

const generateHtml = (data) => {
  const html = `
      <img src=${data.images[0].resource_url}>
  `
  const wildHeartDiv = document.querySelector('.wildHeart')
  wildHeartDiv.innerHTML = html
}
};


//********O********//


//********P********//


//Panic at the Disco
//A Fever You Can't Sweat Out

{const aFever = {
  url: 'https://api.discogs.com/',
  type: 'releases',
  id: '4116887',
  key: 'OybxAqyJeOwAFtZmqIGa',
  secret: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
}

const {url, type, id, key, secret} = aFever
const releaseUrl = `${url}${type}/${id}?key=${key}&secret=${secret}`

fetch(releaseUrl)
  .then( (data) => data.json())
  .then( (releases) => generateHtml(releases) )

const generateHtml = (data) => {
  const html = `
      <img src=${data.images[0].resource_url}>
  `
  const aFeverDiv = document.querySelector('.aFever')
  aFeverDiv.innerHTML = html
}
};


//Petras, Kim
//Turn Off The Light

{const turnOff = {
  url: 'https://api.discogs.com/',
  type: 'releases',
  id: '14167431',
  key: 'OybxAqyJeOwAFtZmqIGa',
  secret: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
}

const {url, type, id, key, secret} = turnOff
const releaseUrl = `${url}${type}/${id}?key=${key}&secret=${secret}`

fetch(releaseUrl)
  .then( (data) => data.json())
  .then( (releases) => generateHtml(releases) )

const generateHtml = (data) => {
  const html = `
      <img src=${data.images[0].resource_url}>
  `
  const turnOffDiv = document.querySelector('.turnOff')
  turnOffDiv.innerHTML = html
}
};


//Police, The
//Ghost in the Machine

{const ghostIn = {
  url: 'https://api.discogs.com/',
  type: 'releases',
  id: '12816864',
  key: 'OybxAqyJeOwAFtZmqIGa',
  secret: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
}

const {url, type, id, key, secret} = ghostIn
const releaseUrl = `${url}${type}/${id}?key=${key}&secret=${secret}`

fetch(releaseUrl)
  .then( (data) => data.json())
  .then( (releases) => generateHtml(releases) )

const generateHtml = (data) => {
  const html = `
      <img src=${data.images[0].resource_url}>
  `
  const ghostInDiv = document.querySelector('.ghostIn')
  ghostInDiv.innerHTML = html
}
};


//********Q********//


//********R********//


//Riley, Jeannie C
//Harper Valley PTA

{const harperValley = {
  url: 'https://api.discogs.com/',
  type: 'releases',
  id: '10647674',
  key: 'OybxAqyJeOwAFtZmqIGa',
  secret: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
}

const {url, type, id, key, secret} = harperValley
const releaseUrl = `${url}${type}/${id}?key=${key}&secret=${secret}`

fetch(releaseUrl)
  .then( (data) => data.json())
  .then( (releases) => generateHtml(releases) )

const generateHtml = (data) => {
  const html = `
      <img src=${data.images[0].resource_url}>
  `
  const harperValleyDiv = document.querySelector('.harperValley')
  harperValleyDiv.innerHTML = html
}
};


//********S********//


//Shins, The
//Wincing The Night Away

{const wincing = {
  url: 'https://api.discogs.com/',
  type: 'releases',
  id: '891539',
  key: 'OybxAqyJeOwAFtZmqIGa',
  secret: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
}

const {url, type, id, key, secret} = wincing
const releaseUrl = `${url}${type}/${id}?key=${key}&secret=${secret}`

fetch(releaseUrl)
  .then( (data) => data.json())
  .then( (releases) => generateHtml(releases) )

const generateHtml = (data) => {
  const html = `
      <img src=${data.images[0].resource_url}>
  `
  const wincingDiv = document.querySelector('.wincing')
  wincingDiv.innerHTML = html
}
};


//Spears, Britney
//Me Against The Music

{const meAgainst = {
  url: 'https://api.discogs.com/',
  type: 'releases',
  id: '402317',
  key: 'OybxAqyJeOwAFtZmqIGa',
  secret: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
}

const {url, type, id, key, secret} = meAgainst
const releaseUrl = `${url}${type}/${id}?key=${key}&secret=${secret}`

fetch(releaseUrl)
  .then( (data) => data.json())
  .then( (releases) => generateHtml(releases) )

const generateHtml = (data) => {
  const html = `
      <img src=${data.images[0].resource_url}>
  `
  const meAgainstDiv = document.querySelector('.meAgainst')
  meAgainstDiv.innerHTML = html
}
};


//Glory

{const britneyGlory = {
  url: 'https://api.discogs.com/',
  type: 'releases',
  id: '16330560',
  key: 'OybxAqyJeOwAFtZmqIGa',
  secret: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
}

const {url, type, id, key, secret} = britneyGlory
const releaseUrl = `${url}${type}/${id}?key=${key}&secret=${secret}`

fetch(releaseUrl)
  .then( (data) => data.json())
  .then( (releases) => generateHtml(releases) )

const generateHtml = (data) => {
  const html = `
      <img src=${data.images[0].resource_url}>
  `
  const britneyGloryDiv = document.querySelector('.britneyGlory')
  britneyGloryDiv.innerHTML = html
}
};


//Stefani, Gwen
//Love Angel Music Baby

{const loveAngel = {
  url: 'https://api.discogs.com/',
  type: 'releases',
  id: '676489',
  key: 'OybxAqyJeOwAFtZmqIGa',
  secret: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
}

const {url, type, id, key, secret} = loveAngel
const releaseUrl = `${url}${type}/${id}?key=${key}&secret=${secret}`

fetch(releaseUrl)
  .then( (data) => data.json())
  .then( (releases) => generateHtml(releases) )

const generateHtml = (data) => {
  const html = `
      <img src=${data.images[0].resource_url}>
  `
  const loveAngelDiv = document.querySelector('.loveAngel')
  loveAngelDiv.innerHTML = html
}
};


//********T********//


//Tatu
//All The Things She Said

{const allTheThings = {
  url: 'https://api.discogs.com/',
  type: 'releases',
  id: '1201881',
  key: 'OybxAqyJeOwAFtZmqIGa',
  secret: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
}

const {url, type, id, key, secret} = allTheThings
const releaseUrl = `${url}${type}/${id}?key=${key}&secret=${secret}`

fetch(releaseUrl)
  .then( (data) => data.json())
  .then( (releases) => generateHtml(releases) )

const generateHtml = (data) => {
  const html = `
      <img src=${data.images[0].resource_url}>
  `
  const allTheThingsDiv = document.querySelector('.allTheThings')
  allTheThingsDiv.innerHTML = html
}
};


//Tegan and Sara
//The Con

{const theCon = {
  url: 'https://api.discogs.com/',
  type: 'releases',
  id: '1219372',
  key: 'OybxAqyJeOwAFtZmqIGa',
  secret: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
}

const {url, type, id, key, secret} = theCon
const releaseUrl = `${url}${type}/${id}?key=${key}&secret=${secret}`

fetch(releaseUrl)
  .then( (data) => data.json())
  .then( (releases) => generateHtml(releases) )

const generateHtml = (data) => {
  const html = `
      <img src=${data.images[0].resource_url}>
  `
  const theConDiv = document.querySelector('.theCon')
  theConDiv.innerHTML = html
}
};


//Thompson Twins
//Into The Gap

{const intoTheGap = {
  url: 'https://api.discogs.com/',
  type: 'releases',
  id: '56303',
  key: 'OybxAqyJeOwAFtZmqIGa',
  secret: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
}

const {url, type, id, key, secret} = intoTheGap
const releaseUrl = `${url}${type}/${id}?key=${key}&secret=${secret}`

fetch(releaseUrl)
  .then( (data) => data.json())
  .then( (releases) => generateHtml(releases) )

const generateHtml = (data) => {
  const html = `
      <img src=${data.images[0].resource_url}>
  `
  const intoTheGapDiv = document.querySelector('.intoTheGap')
  intoTheGapDiv.innerHTML = html
}
};


//********U********//


//********V********//


//********W********//


//Winehouse, Amy
//Back to Black

{ const backToBlack = {
  url: 'https://api.discogs.com/',
  type: 'releases',
  id: '2848009',
  key: 'OybxAqyJeOwAFtZmqIGa',
  secret: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
}


const {url, type, id, key, secret} = backToBlack
const releaseUrl = `${url}${type}/${id}?key=${key}&secret=${secret}`

fetch(releaseUrl)
  .then( (data) => data.json())
  .then( (releases) => generateHtml(releases) )

const generateHtml = (data) => {
  const html = `
      <img src=${data.images[0].resource_url}>
  `
  const backToBlackDiv = document.querySelector('.backToBlack')
  backToBlackDiv.innerHTML = html
}
};


//********X********//


//********Y********//


//********Z********//