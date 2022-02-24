var openimage = document.querySelector('.Item__btn')

openimage.addEventListener('click', function(){
    this.parentElement.classList.toggle('open')
    this.previousElementSibling.focus()
})

