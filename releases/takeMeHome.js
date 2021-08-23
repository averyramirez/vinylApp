const takeMeHome = {
    url7975996: 'https://api.discogs.com/',
    type7975996: 'releases',
    id7975996: '7975996',
    key7975996: 'OybxAqyJeOwAFtZmqIGa&secret=zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy',
    secret7975996: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
  }
  
  const {url7975996, type7975996, id7975996, key7975996, secret7975996} = takeMeHome
  const releaseUrl7975996 = `${url7975996}${type7975996}/${id7975996}?key=${key7975996}&secret=${secret7975996}`
  
  fetch(releaseUrl7975996)
    .then( (data) => data.json())
    .then( (releases) => generateHtml7975996(releases) )
  
  const generateHtml7975996 = (data) => {
    console.log(data.images[0].resource_url)
    const html = `
        <img src=${data.images[0].resource_url}>
    `
    const takeMeHomeDiv = document.querySelector('.takeMeHome')
    takeMeHomeDiv.innerHTML = html
  }