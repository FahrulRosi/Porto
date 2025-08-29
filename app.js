// Project data
const projectData = {
    'lokatani': {
        title: 'Lokatani Farmware AI',
        role: 'IoT Firmware Update System Front-End Developer',
        period: 'Maret - Juni 2025',
        description: 'Sistem pembaruan firmware OTA (Over The Air) yang canggih berbasis ESP32 dengan integrasi machine learning untuk deteksi gagal update. Proyek ini menggabungkan teknologi IoT dengan AI untuk mengoptimalkan proses update firmware pada perangkat pertanian pintar.',
        technologies: ['React JS', 'Tailwind CSS', 'Chart.js', 'Flask API', 'ESP32', 'Machine Learning', 'JWT Authentication'],
        features: [
            'Sistem pembaruan firmware OTA berbasis ESP32 dengan machine learning untuk deteksi gagal update',
            'Web interface modern menggunakan React JS dengan styling Tailwind CSS',
            'Visualisasi data real-time menggunakan Chart.js untuk monitoring status update',
            'Upload firmware melalui form interaktif dengan validasi komprehensif',
            'Backend API menggunakan Flask untuk manajemen firmware dan device',
            'Real-time notification system untuk status update firmware',
            'Role-based access control untuk keamanan sistem',
            'Sistem autentikasi JWT untuk proteksi endpoint API',
            'Machine learning algorithm untuk prediksi dan deteksi kegagalan update'
        ],
        challenges: [
            'Implementasi algoritma machine learning untuk deteksi pola kegagalan update',
            'Optimisasi performa web interface untuk handle data real-time',
            'Integrasi seamless antara frontend React dengan backend Flask',
            'Manajemen state yang kompleks untuk multiple device monitoring'
        ]
    },
    'smart-door': {
        title: 'Smart Door Lock with Face Recognition',
        role: 'Backend Engineer & Security Specialist',
        period: 'September 2023 - Februari 2024',
        description: 'Smart door lock system yang menggunakan teknologi face recognition untuk akses kontrol. Sistem ini dilengkapi dengan backend yang robust, database management yang efisien, dan protokol keamanan tingkat tinggi.',
        technologies: ['Python', 'Face Recognition API', 'SQLite/MySQL', 'REST API', 'Encryption', 'Authentication Protocols', 'IoT Sensors'],
        features: [
            'API Python yang robust untuk komunikasi antara IoT device dan server',
            'Database management untuk penyimpanan data pengguna dan log akses',
            'Sistem face recognition dengan tingkat akurasi tinggi',
            'Protokol enkripsi end-to-end untuk keamanan data',
            'Multi-layer authentication system untuk akses yang aman',
            'Real-time logging dan monitoring sistem akses',
            'Kebijakan keamanan berlapis dengan fail-safe mechanism',
            'API endpoints untuk manajemen user dan access control',
            'Integration dengan hardware sensor untuk deteksi kehadiran'
        ],
        challenges: [
            'Optimisasi algoritma face recognition untuk akurasi tinggi',
            'Implementasi protokol keamanan berlapis tanpa mengurangi performa',
            'Manajemen database yang efisien untuk log access yang besar',
            'Integrasi hardware-software yang seamless'
        ]
    },
    'network-simulation': {
        title: 'Network Infrastructure Simulation',
        role: 'Network Designer & Administrator',
        period: 'Desember 2023 - Februari 2024',
        description: 'Perancangan dan simulasi infrastruktur jaringan enterprise yang kompleks menggunakan Cisco Packet Tracer. Proyek ini fokus pada implementasi best practices dalam network design dan security.',
        technologies: ['Cisco Packet Tracer', 'Router Configuration', 'Switch Management', 'DNS Server', 'HTTP Server', 'ACL', 'Network Security'],
        features: [
            'Desain topologi jaringan enterprise dengan multiple subnets',
            'Konfigurasi routing protocol (OSPF, EIGRP, RIP) untuk optimisasi jalur',
            'Segmentasi jaringan untuk isolasi traffic dan keamanan',
            'Implementasi Access Control Lists (ACL) untuk filtering traffic',
            'Setup dan konfigurasi DNS server untuk name resolution',
            'Deploy HTTP server dengan load balancing configuration',
            'VLAN configuration untuk network segmentation',
            'Network monitoring dan troubleshooting tools implementation',
            'Disaster recovery planning dan redundancy setup'
        ],
        challenges: [
            'Optimisasi routing untuk performa jaringan maksimal',
            'Balancing antara keamanan dan accessibility dalam ACL configuration',
            'Scalability planning untuk future network expansion',
            'Integration berbagai service dalam satu infrastruktur'
        ]
    },
    'iot-hardware': {
        title: 'IoT Hardware Development',
        role: 'Hardware IoT Specialist',
        period: 'Maret - September 2024',
        description: 'Pengembangan perangkat IoT dari ground up, mulai dari pemilihan komponen hingga programming dan deployment. Proyek ini mencakup berbagai sensor dan actuator untuk aplikasi smart home dan industrial monitoring.',
        technologies: ['Arduino', 'ESP8266', 'ESP32', 'nRF24L01+', 'Various Sensors', 'Actuators', 'C/C++', 'IoT Protocols'],
        features: [
            'Pemilihan dan evaluasi komponen optimal (Arduino, ESP8266, nRF24L01+)',
            'Perakitan hardware dengan consideration untuk EMI dan power consumption',
            'Pemrograman embedded systems menggunakan C/C++ untuk performa optimal',
            'Implementasi komunikasi wireless dengan protokol nRF24L01+',
            'Integration berbagai sensor (temperature, humidity, motion, light)',
            'Actuator control untuk automated system response',
            'Power management optimization untuk battery-powered devices',
            'Data logging dan transmission ke cloud platforms',
            'Real-time monitoring dashboard untuk device status',
            'OTA (Over-The-Air) update capability untuk remote maintenance'
        ],
        challenges: [
            'Optimisasi konsumsi daya untuk aplikasi battery-powered',
            'Reliability testing dalam berbagai kondisi lingkungan',
            'Integration multiple sensor dengan single microcontroller',
            'Wireless communication stability dalam industrial environment'
        ]
    }
};

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initScrollAnimations();
    initSmoothScroll();
    initProjectModals();
    initMobileMenu();
    initHeaderScroll();
});

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Smooth Scroll for Navigation
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Project Modal System
function initProjectModals() {
    const modal = document.getElementById('projectModal');
    const closeBtn = document.querySelector('.close');
    const projectCards = document.querySelectorAll('.project-card');

    // Open modal when project card is clicked
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            const project = projectData[projectId];
            
            if (project) {
                showProjectModal(project);
            }
        });
    });

    // Close modal when X is clicked
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// Show Project Modal
function showProjectModal(project) {
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalRole = document.getElementById('modalRole');
    const modalContent = document.getElementById('modalContent');

    // Set modal content
    modalTitle.textContent = project.title;
    modalRole.textContent = project.role;

    // Get project image if it's the Lokatani project
    const projectImageHTML = project.title === 'Lokatani Farmware AI' ? 
        `<div class="modal-project-image" style="margin-bottom: 2rem; text-align: center;">
            <img src="img/Lokatani.png" alt="${project.title}" style="max-width: 100%; height: 300px; object-fit: cover; border-radius: 10px; box-shadow: 0 10px 25px rgba(0,0,0,0.1);">
        </div>` : '';

    // Build modal content HTML
    const contentHTML = `
        ${projectImageHTML}
        
        <div class="project-period" style="color: #667eea; font-weight: 600; margin-bottom: 1rem;">
            ${project.period}
        </div>
        
        <div class="project-overview" style="margin-bottom: 2rem;">
            <h3 style="color: #333; margin-bottom: 1rem; font-size: 1.2rem;">Project Overview</h3>
            <p style="line-height: 1.6; color: #666;">${project.description}</p>
        </div>

        <div class="tech-stack-section" style="margin-bottom: 2rem;">
            <h3 style="color: #333; margin-bottom: 1rem; font-size: 1.2rem;">Technologies Used</h3>
            <div class="tech-stack">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
        </div>

        <div class="features-section" style="margin-bottom: 2rem;">
            <h3 style="color: #333; margin-bottom: 1rem; font-size: 1.2rem;">Key Features & Achievements</h3>
            <ul style="list-style: none; padding: 0;">
                ${project.features.map(feature => `
                    <li style="padding: 0.5rem 0; border-left: 3px solid #667eea; padding-left: 1rem; margin-bottom: 0.5rem; background: #f8f9ff; border-radius: 0 5px 5px 0;">
                        ${feature}
                    </li>
                `).join('')}
            </ul>
        </div>

        <div class="challenges-section">
            <h3 style="color: #333; margin-bottom: 1rem; font-size: 1.2rem;">Technical Challenges Solved</h3>
            <ul style="list-style: none; padding: 0;">
                ${project.challenges.map(challenge => `
                    <li style="padding: 0.5rem 0; border-left: 3px solid #764ba2; padding-left: 1rem; margin-bottom: 0.5rem; background: #f3f0ff; border-radius: 0 5px 5px 0;">
                        ${challenge}
                    </li>
                `).join('')}
            </ul>
        </div>
    `;

    modalContent.innerHTML = contentHTML;

    // Show modal with animation
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    // Add entrance animation
    const modalContentEl = document.querySelector('.modal-content');
    modalContentEl.style.transform = 'translateY(-50px)';
    modalContentEl.style.opacity = '0';
    
    setTimeout(() => {
        modalContentEl.style.transform = 'translateY(0)';
        modalContentEl.style.opacity = '1';
        modalContentEl.style.transition = 'all 0.3s ease';
    }, 10);
}

// Mobile Menu Toggle
function initMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', function() {
            navLinks.classList.toggle('show');
        });
    }
}

// Header Scroll Effect
function initHeaderScroll() {
    const header = document.querySelector('header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        
        // Add background blur effect when scrolling
        if (scrollTop > 50) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
        
        lastScrollTop = scrollTop;
    });
}

// Typing Animation for Hero Text
function initTypingAnimation() {
    const heroTitle = document.querySelector('.hero h1');
    const heroSubtitle = document.querySelector('.hero p');
    
    if (heroTitle && heroSubtitle) {
        const titleText = heroTitle.textContent;
        const subtitleText = heroSubtitle.textContent;
        
        heroTitle.textContent = '';
        heroSubtitle.textContent = '';
        
        let titleIndex = 0;
        let subtitleIndex = 0;
        
        function typeTitle() {
            if (titleIndex < titleText.length) {
                heroTitle.textContent += titleText.charAt(titleIndex);
                titleIndex++;
                setTimeout(typeTitle, 100);
            } else {
                setTimeout(typeSubtitle, 500);
            }
        }
        
        function typeSubtitle() {
            if (subtitleIndex < subtitleText.length) {
                heroSubtitle.textContent += subtitleText.charAt(subtitleIndex);
                subtitleIndex++;
                setTimeout(typeSubtitle, 50);
            }
        }
        
        setTimeout(typeTitle, 1000);
    }
}

// Parallax Effect for Hero Section
function initParallaxEffect() {
    const hero = document.querySelector('.hero');
    
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        });
    }
}

// Contact Form Animation (if needed in future)
function initContactAnimations() {
    const contactItems = document.querySelectorAll('.contact-item');
    
    contactItems.forEach((item, index) => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Skill Items Animation
function initSkillAnimations() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        
        item.addEventListener('mouseenter', function() {
            const icon = this.querySelector('i');
            icon.style.transform = 'scale(1.2) rotate(360deg)';
            icon.style.transition = 'transform 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            const icon = this.querySelector('i');
            icon.style.transform = 'scale(1) rotate(0deg)';
        });
    });
}

// Initialize additional animations when page loads
window.addEventListener('load', function() {
    initContactAnimations();
    initSkillAnimations();
    initParallaxEffect();
});

// Scroll to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll to top button (optional)
function initScrollToTop() {
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollTopBtn.className = 'scroll-top-btn';
    scrollTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border: none;
        color: white;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    `;
    
    scrollTopBtn.addEventListener('click', scrollToTop);
    document.body.appendChild(scrollTopBtn);
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.style.opacity = '1';
            scrollTopBtn.style.visibility = 'visible';
        } else {
            scrollTopBtn.style.opacity = '0';
            scrollTopBtn.style.visibility = 'hidden';
        }
    });
}

// Initialize scroll to top when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initScrollToTop();
});