{const heartOfStone = {
    url: 'https://api.discogs.com/',
    type: 'releases',
    id: '1618266',
    key: 'OybxAqyJeOwAFtZmqIGa&secret=zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy',
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