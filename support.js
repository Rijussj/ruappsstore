// Support Page Interactive Logic

document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initQA();
    initThemeToggleListener();
});

// Theme Management
function initTheme() {
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateThemeBtn();
}

function updateThemeBtn() {
    const toggleBtn = document.getElementById("themeToggle");
    if (!toggleBtn) return;
    
    toggleBtn.style.transform = "rotate(360deg)";
    setTimeout(() => {
        toggleBtn.style.transform = "none";
    }, 300);
}

function initThemeToggleListener() {
    const themeBtn = document.getElementById("themeToggle");
    if (!themeBtn) return;

    themeBtn.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        const nextTheme = currentTheme === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", nextTheme);
        localStorage.setItem("theme", nextTheme);
        updateThemeBtn();
    });
}

// Q&A Accordion interactive logic
function initQA() {
    const triggers = document.querySelectorAll(".qa-trigger");
    triggers.forEach(trigger => {
        trigger.addEventListener("click", () => {
            const card = trigger.parentElement;
            const isActive = card.classList.contains("active");
            
            // Close all other Q&A cards
            document.querySelectorAll(".qa-card").forEach(c => {
                c.classList.remove("active");
                c.querySelector(".qa-content").style.maxHeight = "0";
            });
            
            if (!isActive) {
                card.classList.add("active");
                const content = card.querySelector(".qa-content");
                // Animate to scrollHeight so it adjusts dynamically
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
}
