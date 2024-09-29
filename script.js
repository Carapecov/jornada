document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Previne o envio real do formulário
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if(name && email && message) {
            alert('Mensagem enviada com sucesso!');
            form.reset(); // Limpa o formulário
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
});
