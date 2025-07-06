// Animation Matrix code vert en cascade
window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('matrix-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
    const fontSize = 18;
    const columns = Math.floor(w / fontSize);
    const drops = Array(columns).fill(1);
    const matrixChars = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズヅブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    function draw() {
        ctx.fillStyle = 'rgba(10, 20, 10, 0.18)';
        ctx.fillRect(0, 0, w, h);
        ctx.font = fontSize + 'px monospace';
        ctx.fillStyle = '#00ff41';
        for (let i = 0; i < drops.length; i++) {
            const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            if (drops[i] * fontSize > h && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    function resize() {
        w = window.innerWidth;
        h = window.innerHeight;
        canvas.width = w;
        canvas.height = h;
    }
    window.addEventListener('resize', resize);
    setInterval(draw, 40);
});
