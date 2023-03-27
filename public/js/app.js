console.log('Hola estoy aqui desde el frontend')

document.addEventListener('click', (e) => {
  if (e.target.dataset.short) {
    const url = 'http://localhost:3000/' + e.target.dataset.short

    navigator.clipboard
      .writeText(url)
      .then(() => {
        console.log('Texto copiado al portapapeles')
      })
      .catch((err) => {
        console.log('Error al copiar al portapapeles', err)
      })
  }
})
