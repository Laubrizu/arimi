// Toggle expandable cards
function toggleCard(header) {
    const content = header.nextElementSibling;
    const isActive = content.classList.contains('active');
    
    // Toggle active class
    content.classList.toggle('active');
    header.classList.toggle('collapsed');
    
    // Update icon
    const icon = header.querySelector('.toggle-icon');
    icon.textContent = isActive ? '+' : '−';
    
    // Smooth animation
    if (isActive) {
        content.style.maxHeight = '0';
    } else {
        content.style.maxHeight = content.scrollHeight + 'px';
    }
}

// Intersection Observer for scroll animations
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

// Apply animation to cards on scroll
document.addEventListener('DOMContentLoaded', () => {
    // Set initial state for animated elements
    const animatedElements = document.querySelectorAll('.content-card, .cta-card, .link-card');
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add hover effect to profile image
    const profileImage = document.querySelector('.profile-image');
    if (profileImage) {
        profileImage.addEventListener('mouseenter', () => {
            document.querySelectorAll('.sound-ripple').forEach(ripple => {
                ripple.style.animationPlayState = 'running';
            });
        });
    }
    
    // Analytics - track button clicks (optional - requires Google Analytics)
    const trackClick = (category, action, label) => {
        if (typeof gtag !== 'undefined') {
            gtag('event', action, {
                'event_category': category,
                'event_label': label
            });
        }
    };
    
    // Track social media clicks
    document.querySelectorAll('.social-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const platform = btn.textContent.trim();
            trackClick('Social Media', 'click', platform);
        });
    });
    
    // Track donation clicks
    document.querySelectorAll('[href*="donate.stripe.com"]').forEach(btn => {
        btn.addEventListener('click', () => {
            trackClick('Donation', 'click', 'Stripe Donation Button');
        });
    });
    
    // Track outbound links
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        link.addEventListener('click', () => {
            const url = link.href;
            trackClick('Outbound Link', 'click', url);
        });
    });
});

// Handle window resize for card content
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.querySelectorAll('.card-content.active').forEach(content => {
            content.style.maxHeight = content.scrollHeight + 'px';
        });
    }, 250);
});

// Keyboard accessibility for card toggles
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        if (e.target.classList.contains('card-header')) {
            e.preventDefault();
            toggleCard(e.target);
        }
    }
});

// Add keyboard focus styles
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.card-header').forEach(header => {
        header.setAttribute('tabindex', '0');
        header.setAttribute('role', 'button');
        header.setAttribute('aria-expanded', 'true');
    });
});
