const whitneyHouston = {
    url5856861: 'https://api.discogs.com/',
    type5856861: 'releases',
    id5856861: '5856861',
    key5856861: 'OybxAqyJeOwAFtZmqIGa&secret=zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy',
    secret5856861: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
  }
  
  const {url5856861, type5856861, id5856861, key5856861, secret5856861} = whitneyHouston
  const releaseUrl5856861 = `${url5856861}${type5856861}/${id5856861}?key=${key5856861}&secret=${secret5856861}`
  
  fetch(releaseUrl5856861)
    .then( (data) => data.json())
    .then( (releases) => generateHtml5856861(releases) )
  
  const generateHtml5856861 = (data) => {
    console.log(data.images[0].resource_url)
    const html = `
        <img src=${data.images[0].resource_url}>
    `
    const whitneyHoustonDiv = document.querySelector('.whitneyHouston')
    whitneyHoustonDiv.innerHTML = html
  }