document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize AOS
    AOS.init({
        duration: 800,
        once: true,
        offset: 100,
        easing: 'ease-out-cubic'
    });

    // 2. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.remove('py-6', 'bg-transparent');
            navbar.classList.add('py-4', 'bg-[#0A0F1E]', 'shadow-lg');
        } else {
            navbar.classList.add('py-6', 'bg-transparent');
            navbar.classList.remove('py-4', 'bg-[#0A0F1E]', 'shadow-lg');
        }
    });

    // 3. Hero Text Split Animation (Characters slide in)
    // Wait for the font to load or just run immediately
    const title = document.querySelector('.hero-title');
    if (title) {
        // We only split text nodes, not HTML elements like <br> or <span>
        const traverseAndSplit = (node) => {
            if (node.nodeType === 3) { // Text node
                const text = node.textContent;
                if (!text.trim()) return;
                
                const fragment = document.createDocumentFragment();
                for (let i = 0; i < text.length; i++) {
                    const char = text[i];
                    if (char === ' ') {
                        fragment.appendChild(document.createTextNode(' '));
                    } else {
                        const span = document.createElement('span');
                        span.textContent = char;
                        span.className = 'char';
                        // Add stagger delay
                        span.style.animationDelay = `${(Math.random() * 0.3).toFixed(2)}s`;
                        fragment.appendChild(span);
                    }
                }
                node.parentNode.replaceChild(fragment, node);
            } else if (node.nodeType === 1 && !node.classList.contains('char')) { // Element node
                Array.from(node.childNodes).forEach(traverseAndSplit);
            }
        };
        
        // Temporarily clone the content to avoid modifying while iterating
        const clone = title.cloneNode(true);
        title.innerHTML = '';
        Array.from(clone.childNodes).forEach(child => {
            title.appendChild(child);
            traverseAndSplit(title.lastChild);
        });
    }

    // 4. Number Count-Up Animation
    const stats = document.querySelectorAll('.stat-number');
    let hasAnimated = false;
    
    const animateStats = () => {
        stats.forEach(stat => {
            const target = +stat.getAttribute('data-target');
            const duration = 2000; // 2 seconds
            const increment = target / (duration / 16); // 60fps
            
            let current = 0;
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    stat.innerText = Math.ceil(current).toLocaleString();
                    requestAnimationFrame(updateCounter);
                } else {
                    stat.innerText = target.toLocaleString() + (target > 100 ? '+' : '');
                }
            };
            updateCounter();
        });
    };

    // Intersection Observer for Stats
    const statsSection = document.querySelector('.stat-number')?.closest('section');
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !hasAnimated) {
                animateStats();
                hasAnimated = true;
            }
        }, { threshold: 0.5 });
        observer.observe(statsSection);
    }

    // 5. Course Filtering
    const tabBtns = document.querySelectorAll('.tab-btn');
    const courses = document.querySelectorAll('.course-card');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active state
            tabBtns.forEach(b => {
                b.classList.remove('bg-white', 'shadow-sm', 'text-primary');
                b.classList.add('text-body');
            });
            // Add active state
            btn.classList.add('bg-white', 'shadow-sm', 'text-primary');
            btn.classList.remove('text-body');

            const category = btn.getAttribute('data-tab');

            courses.forEach(course => {
                course.style.opacity = '0';
                course.style.transform = 'scale(0.95)';
                
                setTimeout(() => {
                    if (category === 'all' || course.getAttribute('data-category') === category) {
                        course.style.display = 'block';
                        // Trigger reflow
                        void course.offsetWidth;
                        course.style.opacity = '1';
                        course.style.transform = 'scale(1)';
                    } else {
                        course.style.display = 'none';
                    }
                }, 300); // Wait for fade out
            });
        });
    });

    // 6. Form Submission
    const form = document.getElementById('cta-form');
    const successMsg = document.getElementById('success-message');
    const submitBtn = document.getElementById('submit-btn');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simulate API Call
            submitBtn.innerHTML = '<svg class="animate-spin h-5 w-5 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>';
            
            setTimeout(() => {
                form.style.display = 'none';
                successMsg.classList.remove('hidden');
                
                // Track GA/Pixel events here in real app
                console.log('Lead captured. Notification sent to admin@techcityskills.com');
            }, 1500);
        });
    }
});
