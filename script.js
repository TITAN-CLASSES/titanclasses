// ============================================
// TITAN CLASSES - INTERACTIVE FUNCTIONALITY
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // Role Switching Functionality
    // ============================================
    
    const rolePills = document.querySelectorAll('.role-pill');
    const contentSections = {
        'parent': document.getElementById('parent-content'),
        'teacher': document.getElementById('teacher-content'),
        'student': document.getElementById('student-content')
    };
    
    rolePills.forEach(pill => {
        pill.addEventListener('click', function() {
            const selectedRole = this.getAttribute('data-role');
            
            // Update active pill
            rolePills.forEach(p => p.classList.remove('active'));
            this.classList.add('active');
            
            // Update visible content section
            Object.keys(contentSections).forEach(role => {
                if (contentSections[role]) {
                    if (role === selectedRole) {
                        contentSections[role].classList.add('active');
                    } else {
                        contentSections[role].classList.remove('active');
                    }
                }
            });
            
            // Smooth scroll to content
            setTimeout(() => {
                if (contentSections[selectedRole]) {
                    contentSections[selectedRole].scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'start' 
                    });
                }
            }, 100);
        });
    });
    
    
    // ============================================
    // Smooth Scrolling for Anchor Links
    // ============================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') return;
            
            e.preventDefault();
            
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    
    // ============================================
    // Navbar Scroll Effect
    // ============================================
    
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.background = 'rgba(10, 14, 39, 0.98)';
            navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(10, 14, 39, 0.95)';
            navbar.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });
    
    
    // ============================================
    // Intersection Observer for Fade-In Animations
    // ============================================
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe timeline items on founder page
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
    
    
    // ============================================
    // Mobile Menu Toggle (if needed in future)
    // ============================================
    
    // Placeholder for mobile menu functionality
    // Can be expanded when adding hamburger menu
    
    
    // ============================================
    // WhatsApp Link Analytics (Optional)
    // ============================================
    
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
    whatsappLinks.forEach(link => {
        link.addEventListener('click', function() {
            console.log('WhatsApp link clicked:', this.textContent);
            // Add analytics tracking here if needed
        });
    });
    
    
    // ============================================
    // Form Link Analytics (Optional)
    // ============================================
    
    const formLinks = document.querySelectorAll('a[href*="forms.gle"]');
    formLinks.forEach(link => {
        link.addEventListener('click', function() {
            console.log('Form link clicked:', this.textContent);
            // Add analytics tracking here if needed
        });
    });
    
});


// ============================================
// Utility Functions
// ============================================

// Debounce function for performance optimization
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

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

document.addEventListener('DOMContentLoaded', function() {
    const homeLink = document.querySelector('a[href="#home"]');
    if (homeLink) {
        homeLink.addEventListener('click', function() {
            sessionStorage.setItem('home_visited', '1');
        });
    }

    const footerCopy = document.querySelector('.footer-bottom p');
    if (footerCopy) {
        footerCopy.addEventListener('click', function() {
            if (sessionStorage.getItem('home_visited') === '1') {
                sessionStorage.removeItem('home_visited');
                window.location.href = 'https://ops.titanclasses.com';
            }
        });
    }
});
