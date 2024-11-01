document.querySelectorAll("nav ul li a").forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 80, // Offset for a sticky header if needed
                behavior: "smooth"
            });
        }
    });
});

// Service Details Toggle
document.addEventListener("DOMContentLoaded", () => {
    // Hide all service details on load
    document.querySelectorAll(".service-item .details").forEach(details => {
        details.style.display = "none";
    });

    // Add click event to each "Learn More" button
    document.querySelectorAll(".service-item button").forEach((button, index) => {
        button.addEventListener("click", () => {
            const details = document.querySelectorAll(".service-item .details")[index];
            if (details.style.display === "none" || details.style.display === "") {
                details.style.display = "block";
                button.textContent = "Show Less";
            } else {
                details.style.display = "none";
                button.textContent = "Learn More";
            }
        });
    });
});