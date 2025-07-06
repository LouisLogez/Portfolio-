// Interface de "terminal" pour protéger l'accès au portfolio
// Mot de passe : ExO

document.addEventListener('DOMContentLoaded', function () {

    // Création de l'overlay terminal (affiché dès le chargement)
    const overlay = document.createElement('div');
    overlay.id = 'terminal-overlay';
    overlay.innerHTML = `
        <div class="terminal-window">
            <div class="terminal-bar">root@cyber-portfolio:~$</div>
            <div class="terminal-content">
                <span>Entrer le mot de passe pour accéder au portfolio :</span><br>
                <input type="password" id="terminal-password" autofocus autocomplete="off" maxlength="16" />
                <button id="terminal-submit">Valider</button>
                <div id="terminal-error"></div>
            </div>
        </div>
    `;
    overlay.style.display = 'flex';
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';

    // Gestion du terminal
    function unlockPortfolio() {
        overlay.classList.add('unlocking');
        setTimeout(() => {
            overlay.style.display = 'none';
            document.body.style.overflow = '';
            // Animation hacking (cryptage)
            document.body.classList.add('hacked');
            setTimeout(() => {
                document.body.classList.remove('hacked');
                // Animation decryptage
                document.body.classList.add('decrypted');
                setTimeout(() => {
                    document.body.classList.remove('decrypted');
                }, 1200);
            }, 1200);
        }, 1200);
    }

    function showError(msg) {
        document.getElementById('terminal-error').textContent = msg;
        document.getElementById('terminal-password').value = '';
        document.getElementById('terminal-password').focus();
    }

    document.getElementById('terminal-submit').onclick = function () {
        const val = document.getElementById('terminal-password').value;
        if (val === 'ExO') {
            unlockPortfolio();
        } else {
            showError('Mot de passe incorrect.');
        }
    };
    document.getElementById('terminal-password').addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            document.getElementById('terminal-submit').click();
        }
    });

    // Empêcher navigation tant que pas déverrouillé
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.background = 'rgba(10,16,20,0.98)';
    overlay.style.zIndex = 10000;
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    // Désactiver le clic sur le canvas pour ouvrir le terminal (plus nécessaire)
    if (matrixCanvas) matrixCanvas.style.cursor = 'default';
});
