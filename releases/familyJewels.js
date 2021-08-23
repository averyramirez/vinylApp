const familyJewels = {
    url2315153: 'https://api.discogs.com/',
    type2315153: 'releases',
    id2315153: '2315153',
    key2315153: 'OybxAqyJeOwAFtZmqIGa&secret=zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy',
    secret2315153: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
  }
  
  const {url2315153, type2315153, id2315153, key2315153, secret2315153} = familyJewels
  const releaseUrl2315153 = `${url2315153}${type2315153}/${id2315153}?key=${key2315153}&secret=${secret2315153}`
  
  fetch(releaseUrl2315153)
    .then( (data) => data.json())
    .then( (releases) => generateHtml2315153(releases) )
  
  const generateHtml2315153 = (data) => {
    console.log(data.images[0].resource_url)
    const html = `
        <img src=${data.images[0].resource_url}>
    `
    const familyJewelsDiv = document.querySelector('.familyJewels')
    familyJewelsDiv.innerHTML = html
  }