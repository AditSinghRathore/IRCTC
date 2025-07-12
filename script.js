function updateDateTime() {
            const now = new Date();
            const options = { day: '2-digit', month: 'short', year: 'numeric' };
            const dateStr = now.toLocaleDateString('en-IN', options);
            const timeStr = now.toLocaleTimeString('en-IN', { hour12: false });
            document.getElementById('current-date').textContent = `${dateStr} [${timeStr}]`;
        }
        
        // Update every second
        updateDateTime();
        setInterval(updateDateTime, 1000);
        
        // Dropdown menu functionality
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.querySelector('.dropdown-menu').style.opacity = '1';
                this.querySelector('.dropdown-menu').style.visibility = 'visible';
            });
            
            item.addEventListener('mouseleave', function() {
                this.querySelector('.dropdown-menu').style.opacity = '0';
                this.querySelector('.dropdown-menu').style.visibility = 'hidden';
            });
        });
        
        // Mobile menu toggle (for responsive design)
        document.addEventListener('DOMContentLoaded', function() {
            const mobileMenuToggle = document.createElement('button');
            mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            mobileMenuToggle.className = 'mobile-menu-toggle';
            mobileMenuToggle.style.display = 'none';
            document.querySelector('.header-container').appendChild(mobileMenuToggle);
            
            function checkScreenSize() {
                if (window.innerWidth <= 768) {
                    mobileMenuToggle.style.display = 'block';
                    document.querySelector('.nav-menu').style.display = 'none';
                } else {
                    mobileMenuToggle.style.display = 'none';
                    document.querySelector('.nav-menu').style.display = 'flex';
                }
            }
            
            mobileMenuToggle.addEventListener('click', function() {
                const navMenu = document.querySelector('.nav-menu');
                if (navMenu.style.display === 'none' || navMenu.style.display === '') {
                    navMenu.style.display = 'flex';
                } else {
                    navMenu.style.display = 'none';
                }
            });
            
            window.addEventListener('resize', checkScreenSize);
            checkScreenSize();
        });