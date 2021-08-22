const allIReally = {
    url4470381: 'https://api.discogs.com/',
    type4470381: 'releases',
    id4470381: '4470381',
    key4470381: 'OybxAqyJeOwAFtZmqIGa&secret=zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy',
    secret4470381: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
  }
  
  const {url4470381, type4470381, id4470381, key4470381, secret4470381} = allIReally
  const releaseUrl4470381 = `${url4470381}${type4470381}/${id4470381}?key=${key4470381}&secret=${secret4470381}`
  
  fetch(releaseUrl4470381)
    .then( (data) => data.json())
    .then( (releases) => generateHtml4470381(releases) )
  
  const generateHtml4470381 = (data) => {
    console.log(data.images[0].resource_url)
    const html = `
        <img src=${data.images[0].resource_url}>
    `
    const allIReallyDiv = document.querySelector('.allIReally')
    allIReallyDiv.innerHTML = html
  }