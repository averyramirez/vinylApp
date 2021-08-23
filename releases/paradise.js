const paradise = {
    url11015464: 'https://api.discogs.com/',
    type11015464: 'releases',
    id11015464: '11015464',
    key11015464: 'OybxAqyJeOwAFtZmqIGa&secret=zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy',
    secret11015464: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
  }
  
  const {url11015464, type11015464, id11015464, key11015464, secret11015464} = paradise
  const releaseUrl11015464 = `${url11015464}${type11015464}/${id11015464}?key=${key11015464}&secret=${secret11015464}`
  
  fetch(releaseUrl11015464)
    .then( (data) => data.json())
    .then( (releases) => generateHtml11015464(releases) )
  
  const generateHtml11015464 = (data) => {
    console.log(data.images[0].resource_url)
    const html = `
        <img src=${data.images[0].resource_url}>
    `
    const paradiseDiv = document.querySelector('.paradise')
    paradiseDiv.innerHTML = html
  }