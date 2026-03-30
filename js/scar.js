/**
 * ============================================
 * ScarX JavaScript - Interactive Components
 * By Scarfaze Company | https://scarfaze.com
 * Developer: Zawiyar Awan
 * License: MIT
 * ============================================
 */

(function () {
  'use strict';

  const ScarX = {
    // ---- Initialization ----
    init() {
      this.initModals();
      this.initDropdowns();
      this.initTabs();
      this.initAccordions();
      this.initAlertDismiss();
      this.initNavbarToggle();
      this.initThemeToggle();
      this.initTooltips();
      this.initScrollAnimations();
    },

    // ============================================
    // Modal System
    // ============================================
    initModals() {
      // Open modal
      document.querySelectorAll('[data-scar-modal]').forEach(trigger => {
        trigger.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = trigger.getAttribute('data-scar-modal');
          const modal = document.getElementById(targetId);
          if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
          }
        });
      });

      // Close modal - overlay click
      document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
          if (e.target === overlay) {
            this.closeModal(overlay);
          }
        });
      });

      // Close modal - close button
      document.querySelectorAll('.modal-close, [data-scar-modal-close]').forEach(btn => {
        btn.addEventListener('click', () => {
          const overlay = btn.closest('.modal-overlay');
          if (overlay) this.closeModal(overlay);
        });
      });

      // Close modal - Escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          const activeModal = document.querySelector('.modal-overlay.active');
          if (activeModal) this.closeModal(activeModal);
        }
      });
    },

    closeModal(overlay) {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    },

    // ============================================
    // Dropdown System
    // ============================================
    initDropdowns() {
      document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
        toggle.addEventListener('click', (e) => {
          e.stopPropagation();
          const dropdown = toggle.closest('.dropdown');
          const menu = dropdown.querySelector('.dropdown-menu');

          // Close other dropdowns
          document.querySelectorAll('.dropdown-menu.active').forEach(m => {
            if (m !== menu) {
              m.classList.remove('active');
              m.closest('.dropdown').querySelector('.dropdown-toggle').classList.remove('active');
            }
          });

          toggle.classList.toggle('active');
          menu.classList.toggle('active');
        });
      });

      // Close dropdowns on outside click
      document.addEventListener('click', () => {
        document.querySelectorAll('.dropdown-menu.active').forEach(menu => {
          menu.classList.remove('active');
          menu.closest('.dropdown').querySelector('.dropdown-toggle').classList.remove('active');
        });
      });

      // Dropdown item click
      document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', () => {
          const menu = item.closest('.dropdown-menu');
          if (menu) {
            menu.classList.remove('active');
            menu.closest('.dropdown').querySelector('.dropdown-toggle').classList.remove('active');
          }
        });
      });
    },

    // ============================================
    // Tabs System
    // ============================================
    initTabs() {
      document.querySelectorAll('.tabs').forEach(tabContainer => {
        const tabs = tabContainer.querySelectorAll('.tabs-item');
        
        tabs.forEach(tab => {
          tab.addEventListener('click', (e) => {
            e.preventDefault();
            const targetPaneId = tab.getAttribute('data-scar-tab');

            // Deactivate all tabs
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Switch panes
            if (targetPaneId) {
              const contentContainer = tabContainer.nextElementSibling;
              if (contentContainer && contentContainer.classList.contains('tabs-content')) {
                contentContainer.querySelectorAll('.tabs-pane').forEach(pane => {
                  pane.classList.remove('active');
                });
                const targetPane = contentContainer.querySelector(`#${targetPaneId}`);
                if (targetPane) targetPane.classList.add('active');
              }
            }
          });
        });
      });
    },

    // ============================================
    // Accordion System
    // ============================================
    initAccordions() {
      document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
          const item = header.closest('.accordion-item');
          const body = item.querySelector('.accordion-body');
          const accordion = item.closest('.accordion, .accordion-flush, .accordion-card');
          const isActive = header.classList.contains('active');

          // Check if only one can be open
          const allowMultiple = accordion.hasAttribute('data-scar-multiple');

          if (!allowMultiple) {
            // Close all others
            accordion.querySelectorAll('.accordion-header').forEach(h => {
              h.classList.remove('active');
              h.closest('.accordion-item').querySelector('.accordion-body').classList.remove('active');
            });
          }

          if (!isActive) {
            header.classList.add('active');
            body.classList.add('active');
          } else {
            header.classList.remove('active');
            body.classList.remove('active');
          }
        });
      });
    },

    // ============================================
    // Alert Dismiss
    // ============================================
    initAlertDismiss() {
      document.querySelectorAll('.alert-close').forEach(btn => {
        btn.addEventListener('click', () => {
          const alert = btn.closest('.alert, [class*="alert-"]');
          if (alert) {
            alert.style.opacity = '0';
            alert.style.transform = 'translateY(-10px)';
            alert.style.transition = 'all 250ms ease';
            setTimeout(() => alert.remove(), 250);
          }
        });
      });
    },

    // ============================================
    // Navbar Mobile Toggle
    // ============================================
    initNavbarToggle() {
      document.querySelectorAll('.navbar-toggle').forEach(toggle => {
        toggle.addEventListener('click', () => {
          const navbar = toggle.closest('.navbar, [class*="navbar-"]');
          const menu = navbar.querySelector('.navbar-menu, ul');
          if (menu) {
            menu.classList.toggle('active');
            toggle.classList.toggle('active');
          }
        });
      });
    },

    // ============================================
    // Theme Toggle (Dark / Light)
    // ============================================
    initThemeToggle() {
      // Check saved preference
      const savedTheme = localStorage.getItem('scar-theme');
      if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
      }

      // Toggle button
      document.querySelectorAll('[data-scar-theme-toggle]').forEach(btn => {
        btn.addEventListener('click', () => {
          const current = document.documentElement.getAttribute('data-theme');
          const next = current === 'dark' ? 'light' : 'dark';
          document.documentElement.setAttribute('data-theme', next);
          localStorage.setItem('scar-theme', next);

          // Dispatch custom event
          window.dispatchEvent(new CustomEvent('scar:themechange', { detail: { theme: next } }));
        });
      });
    },

    // ============================================
    // Tooltip Positioning (JS-enhanced)
    // ============================================
    initTooltips() {
      document.querySelectorAll('[data-scar-tooltip]').forEach(el => {
        const text = el.getAttribute('data-scar-tooltip');
        const pos = el.getAttribute('data-scar-tooltip-pos') || 'top';

        el.setAttribute('data-tooltip', text);
        if (!el.classList.contains('tooltip')) {
          el.classList.add('tooltip');
        }
        if (pos !== 'top') {
          el.classList.add(`tooltip-${pos}`);
        }
      });
    },

    // ============================================
    // Scroll Animations
    // ============================================
    initScrollAnimations() {
      const animatedElements = document.querySelectorAll('[data-scar-animate]');
      if (animatedElements.length === 0) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const animation = entry.target.getAttribute('data-scar-animate');
            entry.target.style.animation = `${animation} 0.6s ease forwards`;
            entry.target.style.opacity = '1';
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      animatedElements.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
      });
    }
  };

  // ---- Auto Initialize ----
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => ScarX.init());
  } else {
    ScarX.init();
  }

  // Expose globally
  window.ScarX = ScarX;

})();
