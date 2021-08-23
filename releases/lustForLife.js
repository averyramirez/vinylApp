{const lustForLife = {
    url: 'https://api.discogs.com/',
    type: 'releases',
    id: '10895108',
    key: 'OybxAqyJeOwAFtZmqIGa&secret=zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy',
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