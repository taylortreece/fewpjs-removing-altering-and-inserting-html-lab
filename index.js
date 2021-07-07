// 1.
//
// correct:
//
// let main = document.getElementById('main')
// main.remove()
// 

document.getElementById('main').remove()

// 2.

let newHeader = document.createElement('h1')
newHeader.setAttribute('id', 'victory')
newHeader.innerHTML = 'is the champion'