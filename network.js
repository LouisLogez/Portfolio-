// Animation de lignes et points réseau façon cybersécurité
window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.querySelector('.network-lines');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;

    function resize() {
        w = window.innerWidth;
        h = window.innerHeight;
        canvas.width = w;
        canvas.height = h;
    }
    window.addEventListener('resize', resize);

    // Générer des points
    const points = Array.from({length: 18}, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        dx: (Math.random() - 0.5) * 0.4,
        dy: (Math.random() - 0.5) * 0.4
    }));

    function draw() {
        ctx.clearRect(0, 0, w, h);
        // Lignes
        for (let i = 0; i < points.length; i++) {
            for (let j = i + 1; j < points.length; j++) {
                const dist = Math.hypot(points[i].x - points[j].x, points[i].y - points[j].y);
                if (dist < 220) {
                    ctx.strokeStyle = 'rgba(0,255,231,0.13)';
                    ctx.lineWidth = 1.2;
                    ctx.beginPath();
                    ctx.moveTo(points[i].x, points[i].y);
                    ctx.lineTo(points[j].x, points[j].y);
                    ctx.stroke();
                }
            }
        }
        // Points
        for (const p of points) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, 3, 0, 2 * Math.PI);
            ctx.fillStyle = '#00ffe7';
            ctx.shadowColor = '#00ffe7';
            ctx.shadowBlur = 8;
            ctx.fill();
            ctx.shadowBlur = 0;
        }
    }

    function animate() {
        for (const p of points) {
            p.x += p.dx;
            p.y += p.dy;
            if (p.x < 0 || p.x > w) p.dx *= -1;
            if (p.y < 0 || p.y > h) p.dy *= -1;
        }
        draw();
        requestAnimationFrame(animate);
    }
    animate();
});
