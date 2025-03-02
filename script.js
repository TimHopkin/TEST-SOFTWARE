document.addEventListener('DOMContentLoaded', function() {
    // Initialize the dashboard as the active page
    document.getElementById('dashboard').classList.add('active');
    document.querySelector('.nav-item[data-page="dashboard"]').classList.add('active');
    
    // Handle sidebar navigation
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all nav items
            navItems.forEach(navItem => navItem.classList.remove('active'));
            
            // Add active class to clicked nav item
            this.classList.add('active');
            
            // Get the page to display
            const pageId = this.getAttribute('data-page');
            
            // Hide all pages
            const pages = document.querySelectorAll('.page');
            pages.forEach(page => page.classList.remove('active'));
            
            // Show the selected page
            document.getElementById(pageId).classList.add('active');
        });
    });
    
    // Handle settings navigation
    const settingsMenuItems = document.querySelectorAll('.settings-menu-item');
    settingsMenuItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all settings menu items
            settingsMenuItems.forEach(menuItem => menuItem.classList.remove('active'));
            
            // Add active class to clicked settings menu item
            this.classList.add('active');
            
            // Get the settings section to display
            const settingsId = this.getAttribute('data-settings');
            
            // Hide all settings sections
            const settingsSections = document.querySelectorAll('.settings-section');
            settingsSections.forEach(section => section.classList.remove('active'));
            
            // Show the selected settings section
            document.getElementById(settingsId + '-settings').classList.add('active');
        });
    });
    
    // Initialize company settings as active
    document.getElementById('company-settings').classList.add('active');

    // Handle employee actions
    const actionButtons = document.querySelectorAll('.actions .btn-icon');
    actionButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const action = this.querySelector('i').classList[1];
            const row = this.closest('tr');
            const employeeName = row.querySelector('.employee-name').textContent;
            
            if (action === 'fa-eye') {
                alert(`Viewing details for ${employeeName}`);
            } else if (action === 'fa-edit') {
                alert(`Editing ${employeeName}`);
            } else if (action === 'fa-trash') {
                if (confirm(`Are you sure you want to delete ${employeeName}?`)) {
                    alert(`${employeeName} has been deleted`);
                }
            } else if (action === 'fa-check') {
                alert(`Timesheet for ${employeeName} approved`);
                const statusCell = row.querySelector('.status-badge');
                statusCell.textContent = 'Approved';
                statusCell.classList.remove('pending');
                statusCell.classList.add('approved');
                // Remove approve/reject buttons
                const actionsCell = row.querySelector('.actions');
                actionsCell.innerHTML = '<button class="btn-icon"><i class="fas fa-eye"></i></button>';
            } else if (action === 'fa-times') {
                alert(`Timesheet for ${employeeName} rejected`);
                // You could add rejection handling here
            }
        });
    });
    
    // Handle add employee button
    const addEmployeeBtn = document.querySelector('.btn-primary[data-page="employees"]');
    if (addEmployeeBtn) {
        addEmployeeBtn.addEventListener('click', function() {
            alert('Add employee form would open here');
        });
    }
    
    // Handle process payroll button
    const processPayrollBtn = document.querySelector('.btn-primary[data-page="payroll"]');
    if (processPayrollBtn) {
        processPayrollBtn.addEventListener('click', function() {
            alert('Processing payroll...');
            setTimeout(() => {
                alert('Payroll processed successfully!');
                // Update statuses
                const statusBadges = document.querySelectorAll('#payroll .status-badge.pending');
                statusBadges.forEach(badge => {
                    badge.textContent = 'Processed';
                    badge.classList.remove('pending');
                    badge.classList.add('approved');
                });
            }, 1500);
        });
    }
    
    // Handle report generation
    const generateReportBtns = document.querySelectorAll('#reports .btn-secondary');
    generateReportBtns.forEach(button => {
        button.addEventListener('click', function() {
            const reportName = this.closest('.report-item').querySelector('h4').textContent;
            alert(`Generating ${reportName}...`);
            setTimeout(() => {
                alert(`${reportName} generated successfully!`);
            }, 1500);
        });
    });
    
    // Handle pagination
    const paginationBtns = document.querySelectorAll('.pagination-number');
    paginationBtns.forEach(button => {
        button.addEventListener('click', function() {
            const currentPage = this.closest('.pagination').querySelector('.pagination-number.active');
            currentPage.classList.remove('active');
            this.classList.add('active');
            
            // In a real app, this would fetch new data for the page
            alert(`Loading page ${this.textContent}...`);
        });
    });
    
    // Handle search functionality
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput) {
        searchInput.addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                alert(`Searching for: ${this.value}`);
                this.value = '';
            }
        });
    }
    
    // Handle save settings
    const saveSettingsBtn = document.querySelector('#company-settings .btn-primary');
    if (saveSettingsBtn) {
        saveSettingsBtn.addEventListener('click', function() {
            alert('Settings saved successfully!');
        });
    }

    // Handle notifications and messages
    const notificationIcon = document.querySelector('.notification');
    if (notificationIcon) {
        notificationIcon.addEventListener('click', function() {
            alert('Notifications panel would open here');
        });
    }
    
    const messagesIcon = document.querySelector('.messages');
    if (messagesIcon) {
        messagesIcon.addEventListener('click', function() {
            alert('Messages panel would open here');
        });
    }
    
    // Add period selector functionality
    const periodSelectors = document.querySelectorAll('.period-selector .btn-icon');
    periodSelectors.forEach(selector => {
        selector.addEventListener('click', function() {
            const currentPeriod = this.closest('.period-selector').querySelector('h3');
            const direction = this.querySelector('i').classList.contains('fa-chevron-left') ? 'prev' : 'next';
            
            // This is just for demo - in a real app you'd calculate actual dates
            if (direction === 'prev') {
                currentPeriod.textContent = 'June 2023';
            } else {
                currentPeriod.textContent = 'August 2023';
            }
            
            alert(`Loading payroll data for ${currentPeriod.textContent}`);
        });
    });
});