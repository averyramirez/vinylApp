{const paradise = {
    url: 'https://api.discogs.com/',
    type: 'releases',
    id: '11015464',
    key: 'OybxAqyJeOwAFtZmqIGa&secret=zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy',
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