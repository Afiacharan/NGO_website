document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.stats-number');
    const speed = 200; // Adjust speed as needed

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const updateCount = () => {
                    const target = +counter.getAttribute('data-count');
                    const count = +counter.innerText;

                    const increment = target / speed;

                    if (count < target) {
                        counter.innerText = Math.ceil(count + increment);
                        setTimeout(updateCount, 1);
                    } else {
                        counter.innerText = target.toLocaleString() + 'k';
                    }
                };

                updateCount();
                observer.unobserve(counter); // Unobserve after counting
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        observer.observe(counter);
    });
});
