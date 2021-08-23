{const takeMeHome = {
    url: 'https://api.discogs.com/',
    type: 'releases',
    id: '7975996',
    key: 'OybxAqyJeOwAFtZmqIGa&secret=zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy',
    secret: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
  }
  
  const {url, type, id, key, secret} = takeMeHome
  const releaseUrl = `${url}${type}/${id}?key=${key}&secret=${secret}`
  
  fetch(releaseUrl)
    .then( (data) => data.json())
    .then( (releases) => generateHtml(releases) )
  
  const generateHtml = (data) => {
    console.log(data.images[0].resource_url)
    const html = `
        <img src=${data.images[0].resource_url}>
    `
    const takeMeHomeDiv = document.querySelector('.takeMeHome')
    takeMeHomeDiv.innerHTML = html
  }
};