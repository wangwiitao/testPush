function Header (){
    const app  = document.getElementById("app")
    const header = document.createElement('div')
    header.innerText = "Header"
    app.appendChild(header)
}

export default Header