{const blackRose = {
    url: 'https://api.discogs.com/',
    type: 'releases',
    id: '3567371',
    key: 'OybxAqyJeOwAFtZmqIGa&secret=zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy',
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