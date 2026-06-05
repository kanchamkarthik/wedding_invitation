document.addEventListener("DOMContentLoaded", () => {
    
    // --- DOOR TRIGGER SWITCH INTERACTION MECHANISM ---
    const openBtn = document.getElementById("open-btn");
    const doorOverlay = document.getElementById("door-overlay");
    const mainContent = document.getElementById("main-content");

    if (openBtn) {
        openBtn.addEventListener("click", () => {
            // Slide doors wide open
            doorOverlay.classList.add("doors-open");
            
            // Remove hidden classes from content immediately
            mainContent.classList.remove("hidden");
            
            // Trigger smooth fade entry
            setTimeout(() => {
                mainContent.classList.remove("opacity-0");
                mainContent.classList.add("opacity-100");
            }, 50);

            document.body.classList.remove("overflow-hidden");

            // Clean overlay layout stack out of window tree view space completely
            setTimeout(() => {
                doorOverlay.style.display = "none";
            }, 1200);

            // Fire Canvas Frame Setup Engine Instantly
            initScratchCardInstance();
        });
    }

    // --- COUNTDOWN SCHEDULER MATRIX ENGINE ---
    // Change target date to match your desired wedding date
    const eventTime = new Date("May 18, 2026 17:00:00").getTime();

    function processClockDisplay() {
        const timeNow = new Date().getTime();
        const gap = eventTime - timeNow;

        if (gap <= 0) return; 

        const sec = 1000, min = sec * 60, hr = min * 60, day = hr * 24;

        const textDay = Math.floor(gap / day);
        const textHour = Math.floor((gap % day) / hr);
        const textMinute = Math.floor((gap % hr) / min);
        const textSecond = Math.floor((gap % min) / sec);

        const dEl = document.getElementById("timer-d");
        const hEl = document.getElementById("timer-h");
        const mEl = document.getElementById("timer-m");
        const sEl = document.getElementById("timer-s");

        if(dEl) dEl.innerText = textDay.toString().padStart(2, '0');
        if(hEl) hEl.innerText = textHour.toString().padStart(2, '0');
        if(mEl) mEl.innerText = textMinute.toString().padStart(2, '0');
        if(sEl) sEl.innerText = textSecond.toString().padStart(2, '0');
    }
    setInterval(processClockDisplay, 1000);
    processClockDisplay();

    // --- REVEAL CANVAS INTERACTION HANDLER ---
    function initScratchCardInstance() {
        const canvas = document.getElementById("scratch-canvas");
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        const box = canvas.parentElement;

        canvas.width = box.offsetWidth;
        canvas.height = box.offsetHeight;

        // Cover the content with the gold cover mask layer
        ctx.fillStyle = "#ebdcb9";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Sublayer indicator tip font layout assembly rules
        ctx.font = "bold 10px Montserrat, sans-serif";
        ctx.fillStyle = "#11151e";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("✦ SCRATCH TO REVEAL ✦", canvas.width / 2, canvas.height / 2);

        let activeDrawing = false;

        function applyScratchErase(e) {
            if (!activeDrawing) return;
            
            const bounds = canvas.getBoundingClientRect();
            const basePointerX = e.clientX || (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
            const basePointerY = e.clientY || (e.touches && e.touches[0] ? e.touches[0].clientY : 0);
            
            const posX = basePointerX - bounds.left;
            const posY = basePointerY - bounds.top;

            ctx.globalCompositeOperation = "destination-out";
            ctx.beginPath();
            ctx.arc(posX, posY, 22, 0, Math.PI * 2); // 22px brush radius
            ctx.fill();
        }

        canvas.addEventListener("mousedown", () => activeDrawing = true);
        canvas.addEventListener("mouseup", () => activeDrawing = false);
        canvas.addEventListener("mousemove", applyScratchErase);

        canvas.addEventListener("touchstart", () => activeDrawing = true);
        canvas.addEventListener("touchend", () => activeDrawing = false);
        canvas.addEventListener("touchmove", applyScratchErase);
    }

    // --- RSVP SUBMIT MODULE ---
    const rsvpForm = document.getElementById("rsvp-interactive-form");
    if(rsvpForm) {
        rsvpForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Wishes and RSVP registered successfully!");
            e.target.reset();
        });
    }
});