document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });

    // Sticky navigation
    const nav = document.querySelector('.main-nav');
    const navOffset = nav.offsetTop;
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > navOffset) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }
    });

    // Form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would typically send the form data to a server
            // For this example, we'll just show a success message
            alert('Mensagem enviada com sucesso! Em breve entrarei em contato.');
            contactForm.reset();
        });
    }

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with the 'hidden' class
    document.querySelectorAll('.hidden').forEach(element => {
        observer.observe(element);
    });

    // Mobile menu toggle (would need additional HTML/CSS for full implementation)
    // This is a placeholder for future mobile menu functionality
    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.className = 'mobile-menu-button';
    mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
    mobileMenuButton.addEventListener('click', function() {
        document.querySelector('.main-nav ul').classList.toggle('active');
    });
    
    // Only add mobile menu button on small screens
    if (window.innerWidth <= 768) {
        nav.prepend(mobileMenuButton);
    }
    
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 768 && !document.querySelector('.mobile-menu-button')) {
            nav.prepend(mobileMenuButton);
        } else if (window.innerWidth > 768 && document.querySelector('.mobile-menu-button')) {
            nav.removeChild(mobileMenuButton);
            document.querySelector('.main-nav ul').classList.remove('active');
        }
    });
});