# 🚀 Initiation au Développement Web : HTML, CSS et JavaScript

Pour bien comprendre les rôles de chaque technologie, nous allons utiliser l'analogie de la construction d'une maison ou d'une voiture. Et voir en quelques mots ce que fait chaque technologie. 

---

## 1. 🏠 HTML : Le Squelette (Le Contenu)

L'**HTML** (HyperText Markup Language) est la **structure** ou le **contenu** de ta page web. C'est le fondement de tout ce que l'utilisateur voit.

* **Rôle :** Définir les différents éléments (titres, paragraphes, images, liens, boutons, etc.) avec des **balises** (`tags`). Il dit : "J'ai un titre, un paragraphe et un bouton."
* **Analogie :** C'est le **squelette** d'une maison ou la **carrosserie** de base d'une voiture.

### Exemple de code HTML

```html
<!DOCTYPE html>
<html lang="fr">
<body>
    <h1>Titre de la Page</h1>
    <p class="texte-important">Ceci est un paragraphe très important !</p> 
    <button id="monBouton">Bouton à cliquer</button>
</body>
</html>
```
## 2. 🎨 CSS : Le Style (L'Apparence)

Le **CSS** (Cascading Style Sheets) est responsable de **l'apparence** des éléments HTML.

* **Rôle :** Indiquer comment les éléments doivent être présentés : la couleur, la taille de la police, les marges, l'emplacement, les coins arrondis, etc. Il dit : "Le titre est bleu et centré, le bouton est vert." Nous utilisons la classe pour appliquer le même style à plusieurs éléments différents.

* **Analogie :** La décoration intérieure et extérieure de la maison (peinture, couleurs, design).

### Exemple de code CSS
Pour cibler un élément avec une classe, on utilise un point (**.**) suivi du nom de la classe. Pour cibler un élément avec un ID, on utilise un dièse (**#**). Nous pouvons aussi cybler directement une balise en utilisant son nom. 
Ce CSS s'applique aux éléments HTML définis précédemment :
```css
/* Style le titre principal */
h1 {
    color: darkred; 
    text-align: center;
}

/* Style TOUS les éléments appartenant à la classe "texte-important" */
.texte-important {
    color: green; /* Texte vert */
    font-weight: bold; /* Rendre le texte gras */
    border: 1px solid green; /* Ajouter une bordure fine */
    padding: 5px;
}

/* Style le bouton avec l'ID unique */
#monBouton {
    background-color: #007bff;
    color: white;
    padding: 10px 20px; 
    border-radius: 5px;
}
```
## 3. ⚡ JavaScript : Le Cerveau (Le Comportement)

Le **JavaScript** est ce qui rend la page **interactive et vivante**. C'est un langage de programmation.

* **Rôle :** Gérer les actions et les événements (clics, survol, chargement). Il peut modifier le HTML et le CSS en direct pour que la page réagisse à l'utilisateur.

* **Analogie :** Le moteur et l'électronique de la voiture (ce qui lui permet de bouger, de s'allumer).

### Exemple de code JavaScript
Pour changer le texte du titre quand on clique sur le bouton :
```javascript
// 1. Trouver les éléments HTML
const bouton = document.getElementById('monBouton');
const titre = document.querySelector('h1');

// 2. Écouter l'événement 'click'
bouton.addEventListener('click', function() {
    // 3. Exécuter une action
    titre.textContent = "Le texte a été mis à jour par JavaScript !"; // Modifie le contenu HTML
    bouton.style.backgroundColor = "gold"; // Modifie la propriété CSS
});
```
## 4. 💡 Résumé :
HTML : Le Contenu (Ce qu'il y a).

CSS : Le Design (À quoi ça ressemble).

JavaScript : L'Action (Ce qu'il fait).
