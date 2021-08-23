const chemtrails = {
    url17035572: 'https://api.discogs.com/',
    type17035572: 'releases',
    id17035572: '17035572',
    key17035572: 'OybxAqyJeOwAFtZmqIGa&secret=zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy',
    secret17035572: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
  }
  
  const {url17035572, type17035572, id17035572, key17035572, secret17035572} = chemtrails
  const releaseUrl17035572 = `${url17035572}${type17035572}/${id17035572}?key=${key17035572}&secret=${secret17035572}`
  
  fetch(releaseUrl17035572)
    .then( (data) => data.json())
    .then( (releases) => generateHtml17035572(releases) )
  
  const generateHtml17035572 = (data) => {
    console.log(data.images[0].resource_url)
    const html = `
        <img src=${data.images[0].resource_url}>
    `
    const chemtrailsDiv = document.querySelector('.chemtrails')
    chemtrailsDiv.innerHTML = html
  }