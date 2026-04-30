/* ============================================
   INICIALIZACIÓN Y DARK MODE
   ============================================ */

// Detectar preferencia de tema del sistema
function initializeDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const htmlElement = document.documentElement;
    
    // Verificar si hay una preferencia guardada
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Aplicar tema guardado o preferencia del sistema
    if (savedTheme) {
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
            updateDarkModeIcon(true);
        }
    } else if (prefersDark) {
        document.body.classList.add('dark-mode');
        updateDarkModeIcon(true);
    }
    
    // Event listener para toggle
    darkModeToggle.addEventListener('click', toggleDarkMode);
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    
    // Guardar preferencia
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    updateDarkModeIcon(isDarkMode);
}

function updateDarkModeIcon(isDarkMode) {
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (isDarkMode) {
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
}

/* ============================================
   NAVEGACIÓN RESPONSIVE
   ============================================ */

function initializeNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Toggle menu en móvil
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Cerrar menu al hacer click en un link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Cerrar menu al hacer scroll
    window.addEventListener('scroll', () => {
        if (hamburger.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

/* ============================================
   SMOOTH SCROLL Y SCROLL REVEAL
   ============================================ */

function initializeScrollAnimations() {
    // Observe elementos para animaciones de scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observar secciones y cards
    document.querySelectorAll('section, .project-card, .timeline-item').forEach(el => {
        observer.observe(el);
    });
}

/* ============================================
   FORMULARIO DE CONTACTO
   ============================================ */

function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Obtener valores del formulario
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Validación
        if (!name || !email || !subject || !message) {
            showFormMessage('Por favor completa todos los campos', 'error');
            return;
        }
        
        // Validar email
        if (!isValidEmail(email)) {
            showFormMessage('Por favor ingresa un email válido', 'error');
            return;
        }
        
        // Aquí iría la lógica para enviar el formulario
        // Por ahora, simulamos el envío
        simulateFormSubmission(name, email, subject, message);
    });
    
    function showFormMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        
        // Limpiar mensaje después de 5 segundos
        setTimeout(() => {
            formMessage.className = 'form-message';
        }, 5000);
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function simulateFormSubmission(name, email, subject, message) {
        // Simular envío
        console.log('Formulario enviado:', { name, email, subject, message });
        
        // Mostrar mensaje de éxito
        showFormMessage(
            '✓ Mensaje enviado exitosamente. Me pondré en contacto pronto.',
            'success'
        );
        
        // Resetear formulario
        contactForm.reset();
    }
}

/* ============================================
   HABILIDADES TÉCNICAS - INTERACTIVIDAD
   ============================================ */

function initializeSkillTags() {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach(tag => {
        tag.addEventListener('click', function() {
            this.style.animation = 'none';
            // Trigger reflow
            void this.offsetWidth;
            this.style.animation = 'pulse 0.6s ease-out';
        });
    });
}

/* ============================================
   NAVEGACIÓN SUAVE CON NAVBAR ACTIVO
   ============================================ */

function initializeActiveNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let currentSection = '';
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === currentSection) {
                link.classList.add('active');
            }
        });
    });
}

/* ============================================
   CONTADOR DE PROYECTOS (Ejemplo avanzado)
   ============================================ */

function initializeProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach((card, index) => {
        // Agregar delay a la animación
        card.style.animationDelay = `${index * 0.1}s`;
    });
}

/* ============================================
   INICIALIZACIÓN GLOBAL
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    // Inicializar todas las funcionalidades
    initializeDarkMode();
    initializeNavigation();
    initializeScrollAnimations();
    initializeContactForm();
    initializeSkillTags();
    initializeActiveNavigation();
    initializeProjectCards();
    
    console.log('✓ Portafolio inicializado correctamente');
});

/* ============================================
   ESTILOS DE ANIMACIÓN ADICIONALES
   ============================================ */

// Agregamos una animación de pulso para skills
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
    
    .nav-link.active {
        color: var(--primary-color);
    }
    
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

/* ============================================
   UTILIDADES
   ============================================ */

// Función auxiliar para debounce (útil para eventos de scroll/resize)
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Función para copiar email al portapapeles
function copyEmail(email) {
    navigator.clipboard.writeText(email).then(() => {
        alert('Email copiado al portapapeles');
    });
}

// Log de información del portafolio
console.log('%c⭐ Portafolio de Alejandro Martínez', 'color: #0066FF; font-size: 16px; font-weight: bold;');
console.log('%cIngeniero de Sistemas | Full Stack Developer', 'color: #00D4FF; font-size: 12px;');
console.log('Tecnologías: HTML5 • CSS3 • JavaScript Vanilla');
