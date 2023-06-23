


//   Header altered

const header = document.querySelector("header")


document.addEventListener('scroll', function (e) {
    
    if (window.scrollY > 175) {
      header.classList.add('colorAltered')
    }
    if (window.scrollY < 175) {
        header.classList.remove('colorAltered')
      }
    
  })