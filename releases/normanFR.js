const normanFR = {
    url19948519: 'https://api.discogs.com/',
    type19948519: 'releases',
    id19948519: '19948519',
    key19948519: 'OybxAqyJeOwAFtZmqIGa&secret=zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy',
    secret19948519: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
  }
  
  const {url19948519, type19948519, id19948519, key19948519, secret19948519} = normanFR
  const releaseUrl19948519 = `${url19948519}${type19948519}/${id19948519}?key=${key19948519}&secret=${secret19948519}`
  
  fetch(releaseUrl19948519)
    .then( (data) => data.json())
    .then( (releases) => generateHtml19948519(releases) )
  
  const generateHtml19948519 = (data) => {
    console.log(data.images[0].resource_url)
    const html = `
        <img src=${data.images[0].resource_url}>
    `
    const normanFRDiv = document.querySelector('.normanFR')
    normanFRDiv.innerHTML = html
  }