const lustForLife = {
    url10895108: 'https://api.discogs.com/',
    type10895108: 'releases',
    id10895108: '10895108',
    key10895108: 'OybxAqyJeOwAFtZmqIGa&secret=zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy',
    secret10895108: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
  }
  
  const {url10895108, type10895108, id10895108, key10895108, secret10895108} = lustForLife
  const releaseUrl10895108 = `${url10895108}${type10895108}/${id10895108}?key=${key10895108}&secret=${secret10895108}`
  
  fetch(releaseUrl10895108)
    .then( (data) => data.json())
    .then( (releases) => generateHtml10895108(releases) )
  
  const generateHtml10895108 = (data) => {
    console.log(data.images[0].resource_url)
    const html = `
        <img src=${data.images[0].resource_url}>
    `
    const lustForLifeDiv = document.querySelector('.lustForLife')
    lustForLifeDiv.innerHTML = html
  }