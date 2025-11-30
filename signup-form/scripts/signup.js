// signup.js : Gère l'affichage/masquage du mot de passe et le carrousel de texte

/**
 * Affiche ou masque le mot de passe lors du clic sur l'icône ou le bouton.
 * Change dynamiquement le type de l'input et le texte du bouton.
 */
function togglePassword() {
    const pwd = document.getElementById('password');
    const btn = document.querySelector('.signup__toggle-password');
    if (pwd.type === 'password') {
        pwd.type = 'text';
        btn.textContent = 'Hide';
    } else {
        pwd.type = 'password';
        btn.textContent = 'Show';
    }
}

// --- Carrousel de texte en bas de la partie gauche ---
// Fait défiler automatiquement les slogans toutes les 3 secondes
let carouselIndex = 0;
const items = document.querySelectorAll('.signup__carousel-item');
const indicators = document.querySelectorAll('.signup__carousel-indicator');

// On ne lance le carrousel que s'il y a au moins un slogan et un indicateur
if (items.length && indicators.length) {
    setInterval(() => {
        // On retire la classe active de l'ancien slogan et indicateur
        items[carouselIndex].classList.remove('signup__carousel-item--active');
        indicators[carouselIndex].classList.remove('signup__carousel-indicator--active');
        // On passe à l'élément suivant (bouclage avec modulo)
        carouselIndex = (carouselIndex + 1) % items.length;
        // On ajoute la classe active au nouveau slogan et indicateur
        items[carouselIndex].classList.add('signup__carousel-item--active');
        indicators[carouselIndex].classList.add('signup__carousel-indicator--active');
    }, 3000); // 3000 ms = 3 secondes
}

