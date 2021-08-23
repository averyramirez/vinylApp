const ultraviolence = {
    url5799966: 'https://api.discogs.com/',
    type5799966: 'releases',
    id5799966: '5799966',
    key5799966: 'OybxAqyJeOwAFtZmqIGa&secret=zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy',
    secret5799966: 'zAsIKkTjuYXESOiOctsFyFmFYFtuRGoy'
  }
  
  const {url5799966, type5799966, id5799966, key5799966, secret5799966} = ultraviolence
  const releaseUrl5799966 = `${url5799966}${type5799966}/${id5799966}?key=${key5799966}&secret=${secret5799966}`
  
  fetch(releaseUrl5799966)
    .then( (data) => data.json())
    .then( (releases) => generateHtml5799966(releases) )
  
  const generateHtml5799966 = (data) => {
    console.log(data.images[0].resource_url)
    const html = `
        <img src=${data.images[0].resource_url}>
    `
    const ultraviolenceDiv = document.querySelector('.ultraviolence')
    ultraviolenceDiv.innerHTML = html
  }