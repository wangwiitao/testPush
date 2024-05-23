// const app = document.getElementById('app')
// const header = document.createElement('div')
// header.innerText = 'Header'
// app.appendChild(header)
import mountain from './mountain.JPG'
import Header from './Header.js'
import './index.scss'

const img = new Image()
img.src = mountain
img.className += "logo"
const app = document.getElementById('app')

app.appendChild(img)
console.log('123')


new Header()