const charityNames = document.querySelectorAll('.charity-name');

charityNames.forEach(function(charity) {
    charity.addEventListener('mouseenter', function(event) {
        const charityName = event.target.textContent;
        const charityDetails = event.target.parentElement.getAttribute('data-details');

        const tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        tooltip.textContent = `${charityName}: ${charityDetails}`;

        document.body.appendChild(tooltip);

        const rect = event.target.getBoundingClientRect();
        tooltip.style.position = 'absolute';
        tooltip.style.top = `${rect.top + window.scrollY + rect.height}px`;
        tooltip.style.left = `${rect.left + window.scrollX}px`;
    });

    charity.addEventListener('mouseleave', function() {
        const tooltip = document.querySelector('.tooltip');
        if (tooltip) {
            tooltip.remove();
        }
    });
});