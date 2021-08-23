const janetControl = {
    url339019: 'https://api.discogs.com/',
    type339019: 'releases',
    id339019: '339019',
    key339019: 'OybxAqyJeOwAFtZmqIGa&secret=zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy',
    secret339019: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
  }
  
  const {url339019, type339019, id339019, key339019, secret339019} = janetControl
  const releaseUrl339019 = `${url339019}${type339019}/${id339019}?key=${key339019}&secret=${secret339019}`
  
  fetch(releaseUrl339019)
    .then( (data) => data.json())
    .then( (releases) => generateHtml339019(releases) )
  
  const generateHtml339019 = (data) => {
    console.log(data.images[0].resource_url)
    const html = `
        <img src=${data.images[0].resource_url}>
    `
    const janetControlDiv = document.querySelector('.janetControl')
    janetControlDiv.innerHTML = html
  }