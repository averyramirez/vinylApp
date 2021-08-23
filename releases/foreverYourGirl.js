const foreverYourGirl = {
    url1013969: 'https://api.discogs.com/',
    type1013969: 'releases',
    id1013969: '1013969',
    key1013969: 'OybxAqyJeOwAFtZmqIGa&secret=zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy',
    secret1013969: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
  }
  
  const {url1013969, type1013969, id1013969, key1013969, secret1013969} = foreverYourGirl
  const releaseUrl1013969 = `${url1013969}${type1013969}/${id1013969}?key=${key1013969}&secret=${secret1013969}`
  
  fetch(releaseUrl1013969)
    .then( (data) => data.json())
    .then( (releases) => generateHtml1013969(releases) )
  
  const generateHtml1013969 = (data) => {
    console.log(data.images[0].resource_url)
    const html = `
        <img src=${data.images[0].resource_url}>
    `
    const foreverYourGirlDiv = document.querySelector('.foreverYourGirl')
    foreverYourGirlDiv.innerHTML = html
  }