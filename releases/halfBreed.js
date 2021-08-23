const halfBreed = {
    url5991169: 'https://api.discogs.com/',
    type5991169: 'releases',
    id5991169: '5991169',
    key5991169: 'OybxAqyJeOwAFtZmqIGa&secret=zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy',
    secret5991169: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
  }
  
  const {url5991169, type5991169, id5991169, key5991169, secret5991169} = halfBreed
  const releaseUrl5991169 = `${url5991169}${type5991169}/${id5991169}?key=${key5991169}&secret=${secret5991169}`
  
  fetch(releaseUrl5991169)
    .then( (data) => data.json())
    .then( (releases) => generateHtml5991169(releases) )
  
  const generateHtml5991169 = (data) => {
    console.log(data.images[0].resource_url)
    const html = `
        <img src=${data.images[0].resource_url}>
    `
    const halfBreedDiv = document.querySelector('.halfBreed')
    halfBreedDiv.innerHTML = html
  }