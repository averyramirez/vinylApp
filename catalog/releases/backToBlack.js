const backToBlack = {
    url2848009: 'https://api.discogs.com/',
    type2848009: 'releases',
    id2848009: '2848009',
    key2848009: 'OybxAqyJeOwAFtZmqIGa&secret=zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy',
    secret2848009: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
  }
  
  const {url2848009, type2848009, id2848009, key2848009, secret2848009} = backToBlack
  const releaseUrl2848009 = `${url2848009}${type2848009}/${id2848009}?key=${key2848009}&secret=${secret2848009}`
  
  fetch(releaseUrl2848009)
    .then( (data) => data.json())
    .then( (releases) => generateHtml2848009(releases) )
  
  const generateHtml2848009 = (data) => {
    console.log(data.images[0].resource_url)
    const html = `
        <img src=${data.images[0].resource_url}>
    `
    const backToBlackDiv = document.querySelector('.backToBlack')
    backToBlackDiv.innerHTML = html
  }