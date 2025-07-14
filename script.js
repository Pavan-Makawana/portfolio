//Dynamic text change
const phrases = [
    "Welcome to my Protfolio!",
    "Aspiring Developer",
    "Contact us anytime.",
    "Thanks for visiting!"
];

const textElement = document.getElementById('text');
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentPhrase = phrases[phraseIndex];
    const displayedText = currentPhrase.substring(0, charIndex);

    textElement.textContent = displayedText;
    textElement.classList.add("w-auto");

    if (!isDeleting) {
        if (charIndex < currentPhrase.length) {
            charIndex++;
            setTimeout(type, 100);
        } else {
            // Pause before deleting
            isDeleting = true;
            setTimeout(type, 1000);
        }
    } else {
        if (charIndex > 0) {
            charIndex--;
            setTimeout(type, 50);
        } else {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            setTimeout(type, 300);
        }
    }
}

type();

// Mobile menu toggle
document.getElementById('mobile-menu-button').addEventListener('click', function () {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const offset = 80; // Height of fixed navbar

        window.scrollTo({
            top: target.offsetTop - offset,
            behavior: 'smooth'
        });

        // Close mobile menu if open
        document.getElementById('mobile-menu').classList.add('hidden');
    });
});

// Download CV
function downloadFile() {
      const link = document.createElement("a");
      link.href = "Pavan_Makawana_Resume.pdf"; // Replace with your actual file path or URL
      link.download = "Pavan_Makawana_Resume.pdf"; // Set the filename for download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

// Form submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Here you would typically send the form data to a server
    // For demo purposes, we'll just show an alert
    alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon at ${email}.`);

    // Reset form
    this.reset();
});

// Particles.js configuration
particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

// Intersection Observers for animations
const animateElements = document.querySelectorAll('.animate-fadeIn');
const observersOptions = {
    threshold: 0.1
};

const observers = new IntersectionObservers((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observers.unobserve(entry.target);
        }
    });
}, observersOptions);

animateElements.forEach(element => {
    observers.observe(element);
});

// Animate skill bars on scroll
const skillBars = document.querySelectorAll('.skill-progress');

function animateSkillBars() {
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
}

// Intersection Observer for skill bars animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkillBars();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

const skillsSection = document.getElementById('skills');
observer.observe(skillsSection);
