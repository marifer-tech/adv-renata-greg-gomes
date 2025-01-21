document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Mensagem enviada com sucesso!");
});

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show"); // Mostra o card
                observer.unobserve(entry.target); // Para de observar após a exibição
            }
        });
    }, {
        threshold: 0.1 // Define que o card deve estar 10% visível
    });

    const cards = document.querySelectorAll(".card.hidden"); // Seleciona os cards com a classe 'hidden'
    cards.forEach(card => observer.observe(card));
});
