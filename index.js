const form = document.querySelector('form')
const input = document.querySelector('#input')
const img = document.querySelector('img')

form.addEventListener('submit', e =>{

    e.preventDefault()
    if(input.value =="sad"){
        img.src="img/sad.png"
    }else if(input.value=="happy"){
        img.src = "img/happy.png"
    }
})


