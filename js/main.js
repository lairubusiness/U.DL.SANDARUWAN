// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // ===== Preloader =====
    const preloader = document.querySelector('.preloader');
    
    // Hide preloader when page is fully loaded
    window.addEventListener('load', function() {
        setTimeout(function() {
            preloader.classList.add('fade-out');
            
            // Remove preloader from DOM after animation completes
            setTimeout(function() {
                preloader.style.display = 'none';
            }, 500);
        }, 1000);
    });

    // ===== Sticky Header =====
    const header = document.querySelector('.navbar');
    const backToTop = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        // Sticky header
        if (window.scrollY > 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
        
        // Back to top button
        if (window.scrollY > 500) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });

    // ===== Mobile Navigation =====
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinkItems = document.querySelectorAll('.nav-link');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });
    
    // Close mobile menu when clicking on a nav link
    navLinkItems.forEach(link => {
        link.addEventListener('click', function() {
            if (navLinks.classList.contains('active')) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.classList.remove('no-scroll');
            }
            
            // Add active class to clicked nav link
            navLinkItems.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // ===== Smooth Scrolling =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== Active Navigation on Scroll =====
    const sections = document.querySelectorAll('section');
    
    function setActiveNav() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 200) {
                current = '#' + section.getAttribute('id');
            }
        });
        
        navLinkItems.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === current) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', setActiveNav);

    // ===== Typing Animation =====
    const texts = [
        "Web & Mobile App Developer",
        "Digital Artist",
        "Graphic Designer",
        "Entrepreneur"
    ];
    let currentTextIndex = 0;

    function typeWriter(element, text, speed = 50) {
        let i = 0;
        const cursor = document.querySelector('.cursor');
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                cursor.style.opacity = '1';
                setTimeout(erase, 2000);
            }
        }
        
        function erase() {
            if (element.textContent.length > 0) {
                element.textContent = element.textContent.slice(0, -1);
                setTimeout(erase, speed / 2);
            } else {
                cursor.style.opacity = '0';
                currentTextIndex = (currentTextIndex + 1) % texts.length;
                setTimeout(() => {
                    typeWriter(element, texts[currentTextIndex], speed);
                }, 1000);
            }
        }
        
        cursor.style.opacity = '0';
        element.textContent = '';
        type();
    }

    // Initialize typing animation if element exists
    const typingElement = document.querySelector('.typing-text');
    if (typingElement && texts.length > 0) {
        typeWriter(typingElement, texts[0]);
    }

    // ===== Skills Animation =====
    const skillsSection = document.getElementById('skills');
    const skillBars = document.querySelectorAll('.skill-level');
    
    function animateSkills() {
        if (isInViewport(skillsSection)) {
            skillBars.forEach(bar => {
                const width = bar.parentElement.querySelector('.skill-info span:last-child').textContent;
                bar.style.width = width;
            });
            
            // Remove event listener after animation
            window.removeEventListener('scroll', animateOnScroll);
        }
    }
    
    // Check if element is in viewport
    function isInViewport(element) {
        if (!element) return false;
        
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }
    
    // Animate elements when they come into view
    function animateOnScroll() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('animate');
            }
        });
        
        // Animate skills when in view
        if (skillsSection && isInViewport(skillsSection)) {
            animateSkills();
        }
    }
    
    window.addEventListener('scroll', animateOnScroll);
    
    // Run once on page load
    animateOnScroll();

    // ===== Portfolio Filtering =====
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                
                // Filter projects
                projectItems.forEach(item => {
                    if (filterValue === 'all' || item.classList.contains(filterValue)) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, 50);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }

    // ===== Contact Form =====
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const submitBtn = this.querySelector('button[type="submit"]');
            const submitBtnText = submitBtn.innerHTML;
            
            // Disable submit button
            submitBtn.disabled = true;
            submitBtn.innerHTML = 'Sending...';
            
            // Simulate form submission (replace with actual form submission)
            setTimeout(() => {
                // Show success message
                const successMessage = document.createElement('div');
                successMessage.className = 'alert alert-success';
                successMessage.textContent = 'Your message has been sent successfully!';
                contactForm.prepend(successMessage);
                
                // Reset form
                contactForm.reset();
                
                // Re-enable submit button
                submitBtn.disabled = false;
                submitBtn.innerHTML = submitBtnText;
                
                // Remove success message after 5 seconds
                setTimeout(() => {
                    successMessage.remove();
                }, 5000);
            }, 1500);
        });
    }

    // ===== Testimonials Carousel =====
    const testimonials = document.querySelectorAll('.testimonial-item');
    let currentTestimonial = 0;
    
    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.display = i === index ? 'block' : 'none';
        });
    }
    
    // Initialize first testimonial
    if (testimonials.length > 0) {
        showTestimonial(currentTestimonial);
        
        // Auto-rotate testimonials
        setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        }, 5000);
    }

    // ===== Counter Animation =====
    const counters = document.querySelectorAll('.counter');
    
    function animateCounters() {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / 100;
            
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(animateCounters, 10);
            } else {
                counter.innerText = target;
            }
        });
    }
    
    // Start counter animation when in viewport
    const statsSection = document.querySelector('.stats-section');
    let counted = false;
    
    function checkCounter() {
        if (statsSection && isInViewport(statsSection) && !counted) {
            animateCounters();
            counted = true;
        }
    }
    
    window.addEventListener('scroll', checkCounter);
    
    // Run once on page load
    checkCounter();

    // ===== Custom Cursor =====
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    if (cursor && cursorFollower) {
        document.addEventListener('mousemove', (e) => {
            // Update cursor position
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            // Update follower with delay for smooth effect
            setTimeout(() => {
                cursorFollower.style.left = e.clientX - 20 + 'px';
                cursorFollower.style.top = e.clientY - 20 + 'px';
            }, 100);
        });
        
        // Add active class on click
        document.addEventListener('mousedown', () => {
            cursor.classList.add('cursor-active');
            cursorFollower.classList.add('cursor-follower-active');
        });
        
        document.addEventListener('mouseup', () => {
            cursor.classList.remove('cursor-active');
            cursorFollower.classList.remove('cursor-follower-active');
        });
        
        // Add hover effect on links and buttons
        const hoverElements = ['a', 'button', '.btn', 'input', 'textarea', 'select'];
        
        hoverElements.forEach(selector => {
            document.querySelectorAll(selector).forEach(element => {
                element.addEventListener('mouseenter', () => {
                    cursor.classList.add('cursor-hover');
                    cursorFollower.classList.add('cursor-follower-hover');
                });
                
                element.addEventListener('mouseleave', () => {
                    cursor.classList.remove('cursor-hover');
                    cursorFollower.classList.remove('cursor-follower-hover');
                });
            });
        });
    }

    // ===== Parallax Effect =====
    const parallaxElements = document.querySelectorAll('.parallax');
    
    function updateParallax() {
        const scrollTop = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = parseFloat(element.getAttribute('data-speed')) || 0.5;
            const yPos = -(scrollTop * speed);
            
            element.style.transform = `translate3d(0, ${yPos}px, 0)`;
        });
    }
    
    window.addEventListener('scroll', updateParallax);
    window.addEventListener('resize', updateParallax);
    
    // Run once on page load
    updateParallax();

    // ===== Animate Elements on Scroll =====
    const animateElements = document.querySelectorAll('.animate-element');
    
    function checkIfInView() {
        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('animate');
            }
        });
    }
    
    window.addEventListener('scroll', checkIfInView);
    
    // Run once on page load
    checkIfInView();

    // ===== Set Current Year in Footer =====
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('current-year');
    
    if (yearElement) {
        yearElement.textContent = currentYear;
    }

    // ===== Initialize AOS (Animate On Scroll) if available =====
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }

    // ===== Initialize other libraries if needed =====
    // Example: Initialize a lightbox for portfolio items
    /*
    if (typeof lightbox !== 'undefined') {
        lightbox.option({
            'resizeDuration': 200,
            'wrapAround': true,
            'showImageNumberLabel': false
        });
    }
    */

    // ===== Binary Rain Effect =====
    function createBinaryRain() {
        const binaryRain = document.getElementById('binaryRain');
        if (!binaryRain) return;
        
        const columns = Math.floor(window.innerWidth / 20); // Adjust column width as needed
        
        for (let i = 0; i < columns; i++) {
            const column = document.createElement('div');
            column.className = 'binary-column';
            column.style.left = `${i * 20}px`;
            
            // Generate random binary string
            let binaryString = '';
            const length = Math.floor(Math.random() * 10) + 5; // Random length between 5-15
            
            for (let j = 0; j < length; j++) {
                binaryString += Math.random() > 0.5 ? '1' : '0';
                if (j < length - 1) binaryString += '<br>';
            }
            
            column.innerHTML = binaryString;
            
            // Random animation duration and delay
            const duration = Math.random() * 10 + 10; // 10-20 seconds
            const delay = Math.random() * 5; // 0-5 seconds
            
            column.style.animationDuration = `${duration}s`;
            column.style.animationDelay = `${delay}s`;
            
            binaryRain.appendChild(column);
        }
    }
    
    // Initialize binary rain
    createBinaryRain();
    
    // Recreate binary rain on window resize
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            const binaryRain = document.getElementById('binaryRain');
            if (binaryRain) {
                // Remove all existing binary columns
                while (binaryRain.firstChild) {
                    binaryRain.removeChild(binaryRain.firstChild);
                }
                // Recreate binary rain
                createBinaryRain();
                createBinaryRain();
            }
        }, 250);
    });
    
    // Initialize projects section
    initializeProjectsSection();
    
    // Initialize other sections
    if (typeof initializeEducationSection === 'function') {
        initializeEducationSection();
    }
    
    if (typeof initializeExperienceSection === 'function') {
        initializeExperienceSection();
    }
    
    // Initialize parallax effect if elements exist
    const heroContainer = document.querySelector('.hero');
    const mainPerson = document.querySelector('.profile-image-container');
    
    if (heroContainer && mainPerson) {
        heroContainer.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 50;
            
            // Apply subtle parallax movement
            mainPerson.style.transform = `translate(${xAxis}px, ${yAxis}px)`;
        });
    }
            // ghost2.style.transform = `translate(${xAxis * 1.2}px, ${yAxis * 1.2}px)`;
        });
        
        // Reset position when mouse leaves
        heroContainer.addEventListener('mouseleave', () => {
            mainPerson.style.transform = 'translate(0, 0)';
        });
    

    // ===== Initialize other sections with data =====
    initializeEducationSection();
    initializeProjectsSection();
    initializeExperienceSection();
;

// ===== Initialize Education Section =====
function initializeEducationSection() {
    const educationData = [
        {
            id: 1,
            date: '2024 - 2025 (Completed)',
            title: 'BSc Software Engineering',
            subtitle: 'Kingston University, UK - Esoft Metro Campus',
            description: 'Class: First Class'
        },
        {
            id: 2,
            date: '2023 - 2024 (Completed)',
            title: 'Pearson Higher National Diploma in Software Engineering',
            subtitle: 'Esoft Metro Campus',
            description: 'Grade: Merit'
        },
        {
            id: 3,
            date: '2022 - 2023 (Completed)',
            title: 'Pearson Diploma in ICT (DITEC)',
            subtitle: 'Esoft Metro Campus',
            description: 'Grade: Merit'
        },
        {
            id: 4,
            date: '2022 (Completed)',
            title: 'Pearson Diploma in English (DIE)',
            subtitle: 'Esoft Metro Campus',
            description: 'Grade: Merit | Duration: 4 months'
        },
        {
            id: 5,
            date: '2022 (Completed)',
            title: 'UK My Class English Course',
            subtitle: 'British Council, Sri Lanka',
            description: 'Duration: 6 months (Online)'
        },
        {
            id: 6,
            date: '2019 (Completed)',
            title: 'Certificate Course in Computer Applications',
            subtitle: 'IHRA, University of Colombo',
            description: 'Grade: Merit Pass | Contact Hours: 120 hours'
        },
        {
            id: 7,
            date: '2018 - 2019 (Completed)',
            title: 'English Level CMB Elementary 2 & 4',
            subtitle: 'British Council, Sri Lanka',
            description: 'Grade: B | Duration: 6 months (3 months each level)'
        },
        {
            id: 8,
            date: '2016 (Completed)',
            title: 'G.C.E. Ordinary Level (O/L) Examination',
            subtitle: 'C.W.W. Kannangara National College',
            description: ''
        },
        {
            id: 9,
            date: '2013 - 2015 (Completed)',
            title: 'Diploma in IT Fundamental Course',
            subtitle: 'SUCCESS Computer Training Institute',
            description: 'Grade: A+ | Duration: 6 months'
        },
        {
            id: 10,
            date: '2013 - 2015 (Completed)',
            title: 'Diploma in Computer Studies Course',
            subtitle: 'SUCCESS Computer Training Institute',
            description: 'Grade: A | Duration: 6 months'
        },
        {
            id: 11,
            date: '2013 - 2015 (Completed)',
            title: 'Diploma in Graphic Design Course',
            subtitle: 'SUCCESS Computer Training Institute',
            description: 'Grade: B | Duration: 8 months'
        }
    ];
    
    const timeline = document.querySelector('.education-section .timeline');
    
    if (timeline) {
        // Clear any existing content
        timeline.innerHTML = '';
        
        // Add education items to the timeline
        educationData.forEach((item, index) => {
            const isEven = index % 2 === 0;
            const timelineItem = document.createElement('div');
            timelineItem.className = `timeline-item ${isEven ? 'left' : 'right'}`;
            
            timelineItem.innerHTML = `
                <div class="timeline-content">
                    <span class="timeline-date">${item.date}</span>
                    <h3 class="timeline-title">${item.title}</h3>
                    <h4 class="timeline-subtitle">${item.subtitle}</h4>
                    ${item.description ? `<p class="timeline-description">${item.description}</p>` : ''}
                </div>
            `;
            
            timeline.appendChild(timelineItem);
            
            // Add animation class after a short delay
            setTimeout(() => {
                timelineItem.style.opacity = '1';
                timelineItem.style.transform = 'translateX(0)';
            }, 100 * index);
        });
    }
}

// ===== Initialize Projects Section =====
function initializeProjectsSection() {
    // This function is not needed anymore as we're using static HTML
    // The projects are already defined in the HTML
    
    // Just add animation classes to existing project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 * index);
    });
    
    // Handle image loading errors
    const projectImages = document.querySelectorAll('.project-image img');
    projectImages.forEach(img => {
        img.onerror = function() {
            this.src = 'https://via.placeholder.com/800x600?text=Project+Image';
        };
    });
}

// ===== Initialize Experience Section =====
function initializeExperienceSection() {
    const experienceData = [
        {
            id: 1,
            date: '2023 - Present',
            title: 'Freelance Full Stack Developer',
            company: 'Self-Employed',
            description: 'Developed and deployed full-stack applications using Next.js, Flutter, Firebase, and Supabase. Built and integrated REST APIs, optimized databases, and implemented responsive UI/UX designs. Collaborated with clients to deliver e-commerce platforms, management systems, and mobile apps.'
        },
        // Add more experience items as needed
    ];
    
    const experienceTimeline = document.querySelector('.experience-section .timeline');
    
    if (experienceTimeline) {
        // Clear any existing content
        experienceTimeline.innerHTML = '';
        
        // Add experience items to the timeline
        experienceData.forEach((item, index) => {
            const isEven = index % 2 === 0;
            const timelineItem = document.createElement('div');
            timelineItem.className = `timeline-item ${isEven ? 'left' : 'right'}`;
            
            timelineItem.innerHTML = `
                <div class="timeline-content">
                    <span class="timeline-date">${item.date}</span>
                    <h3 class="timeline-title">${item.title}</h3>
                    <h4 class="timeline-subtitle">${item.company}</h4>
                    <p class="timeline-description">${item.description}</p>
                </div>
            `;
            
            experienceTimeline.appendChild(timelineItem);
            
            // Add animation class after a short delay
            setTimeout(() => {
                timelineItem.style.opacity = '1';
                timelineItem.style.transform = 'translateX(0)';
            }, 100 * index);
        });
    }
}

// ===== Helper Functions =====
function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

function throttle(callback, limit) {
    let wait = false;
    return function() {
        if (!wait) {
            callback.apply(this, arguments);
            wait = true;
            setTimeout(() => {
                wait = false;
            }, limit);
        }
    };
}
