const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    butInstall.style.visibility = 'visible';
    deferredPrompt = event;
});

butInstall.addEventListener('click', async () => {
    if (deferredPrompt !== null) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            deferredPrompt = null;
        }
    };
    butInstall.setAttribute('disabled', true);
    butInstall.textContent = 'Installed!';
});

window.addEventListener('appinstalled', (event) => {
    console.log('👍', 'appinstalled', event);
});
