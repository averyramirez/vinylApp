{const joanne = {
    url: 'https://api.discogs.com/',
    type: 'releases',
    id: '9506110',
    key: 'OybxAqyJeOwAFtZmqIGa&secret=zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy',
    secret: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
  }
  
  const {url, type, id, key, secret} = joanne
  const releaseUrl = `${url}${type}/${id}?key=${key}&secret=${secret}`
  
  fetch(releaseUrl)
    .then( (data) => data.json())
    .then( (releases) => generateHtml(releases) )
  
  const generateHtml = (data) => {
    console.log(data.images[0].resource_url)
    const html = `
        <img src=${data.images[0].resource_url}>
    `
    const joanneDiv = document.querySelector('.joanne')
    joanneDiv.innerHTML = html
  }
};