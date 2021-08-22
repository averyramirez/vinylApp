const theCon = {
    url1219372: 'https://api.discogs.com/',
    type1219372: 'releases',
    id1219372: '1219372',
    key1219372: 'OybxAqyJeOwAFtZmqIGa&secret=zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy',
    secret1219372: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
  }
  
  const {url1219372, type1219372, id1219372, key1219372, secret1219372} = theCon
  const releaseUrl1219372 = `${url1219372}${type1219372}/${id1219372}?key=${key1219372}&secret=${secret1219372}`
  
  fetch(releaseUrl1219372)
    .then( (data) => data.json())
    .then( (releases) => generateHtml1219372(releases) )
  
  const generateHtml1219372 = (data) => {
    console.log(data.images[0].resource_url)
    const html = `
        <img src=${data.images[0].resource_url}>
    `
    const theConDiv = document.querySelector('.theCon')
    theConDiv.innerHTML = html
  }