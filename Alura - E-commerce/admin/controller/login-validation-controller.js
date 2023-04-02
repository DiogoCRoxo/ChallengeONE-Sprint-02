const btnEnter = document.querySelector('[data-enter]')

btnEnter.addEventListener('click', (e) => {
    e.preventDefault()

    const user = 'alurageek@alura.com'
    const pass = '123456'

    const inputNameLog = document.querySelector('[data-lgname]').value
    const inputPasswordLog = document.querySelector('[data-lgpassword]').value
    
    if (inputNameLog === user && inputPasswordLog === pass){
        window.location.href = './listProducts.html'
    } else {
        alert('OPS! "Usuário" ou "Senha" inválidos')               
    } 
})
