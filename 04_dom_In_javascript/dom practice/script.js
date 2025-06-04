console.log("script is working")

function addelement(name){
    const li = document.createElement('li')
    li.innerHTML= `${name}`
    document.querySelector('.vegetables').appendChild(li)
}

addelement("cauliflower")
addelement("brinjal")