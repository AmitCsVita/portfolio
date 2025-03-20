// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    menuBtn.classList.toggle('toggle');

    // Animate burger menu
    const burger = menuBtn.querySelector('.menu-btn__burger');
    if (burger.style.transform === 'rotate(45deg)') {
        burger.style.transform = 'rotate(0)';
        burger.style.background = 'var(--dark-color)';
        burger.style.before = 'translateY(-8px)';
        burger.style.after = 'translateY(8px)';
    } else {
        burger.style.transform = 'rotate(45deg)';
        burger.style.background = 'transparent';
        burger.style.before = 'rotate(90deg)';
        burger.style.after = 'rotate(0)';
    }
});

// Close mobile menu when clicking on a nav link
const navItems = document.querySelectorAll('.nav-links li a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (navLinks.classList.contains('nav-active')) {
            navLinks.classList.remove('nav-active');
            menuBtn.classList.remove('toggle');
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Adjust for header height
                behavior: 'smooth'
            });
        }
    });
});

// Custom Popup Functions
const popupOverlay = document.getElementById('popupOverlay');
const popupTitle = document.getElementById('popupTitle');
const popupMessage = document.getElementById('popupMessage');
const popupClose = document.getElementById('popupClose');
const popupBtn = document.getElementById('popupBtn');

// Show popup function
function showPopup(title, message) {
    popupTitle.textContent = title;
    popupMessage.textContent = message;
    popupOverlay.classList.add('active');
    
    // Prevent scrolling when popup is open
    document.body.style.overflow = 'hidden';
}

// Hide popup function
function hidePopup() {
    popupOverlay.classList.remove('active');
    
    // Re-enable scrolling
    document.body.style.overflow = '';
}

// Event listeners for popup
popupClose.addEventListener('click', hidePopup);
popupBtn.addEventListener('click', hidePopup);

// Also close when clicking outside
popupOverlay.addEventListener('click', (e) => {
    if (e.target === popupOverlay) {
        hidePopup();
    }
});

// Contact Form Validation and Submission
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic form validation
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (!name || !email || !subject || !message) {
            // Replace alert with custom popup
            showPopup('Form Validation', 'Please fill in all fields');
            return;
        }
        
        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            // Replace alert with custom popup
            showPopup('Form Validation', 'Please enter a valid email address');
            return;
        }
        
        // You would typically send the form data to a server here
        // Replace success alert with custom popup
        showPopup('Success', 'Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Add active class to nav items on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add animation on scroll
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1 });
    
    // Target elements to animate
    const timelineItems = document.querySelectorAll('.timeline-item');
    const skillCategories = document.querySelectorAll('.skill-category');
    const projectCards = document.querySelectorAll('.project-card');
    
    // Observe elements
    [...timelineItems, ...skillCategories, ...projectCards].forEach(item => {
        observer.observe(item);
    });
});

// Update copyright year
document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    const copyright = document.querySelector('footer p');
    
    if (copyright) {
        copyright.textContent = `© ${currentYear} Amit Kumar. All Rights Reserved.`;
    }
});

// Close popup with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && popupOverlay.classList.contains('active')) {
        hidePopup();
    }
}); 