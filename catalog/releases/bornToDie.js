const bornToDie = {
    url3354383: 'https://api.discogs.com/',
    type3354383: 'releases',
    id3354383: '3354383',
    key3354383: 'OybxAqyJeOwAFtZmqIGa&secret=zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy',
    secret3354383: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
  }
  
  const {url3354383, type3354383, id3354383, key3354383, secret3354383} = bornToDie
  const releaseUrl3354383 = `${url3354383}${type3354383}/${id3354383}?key=${key3354383}&secret=${secret3354383}`
  
  fetch(releaseUrl3354383)
    .then( (data) => data.json())
    .then( (releases) => generateHtml3354383(releases) )
  
  const generateHtml3354383 = (data) => {
    console.log(data.images[0].resource_url)
    const html = `
        <img src=${data.images[0].resource_url}>
    `
    const bornToDieDiv = document.querySelector('.bornToDie')
    bornToDieDiv.innerHTML = html
  }