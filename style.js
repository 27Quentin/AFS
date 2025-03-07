document.addEventListener('DOMContentLoaded', function() {
    const imageMap = {
        'irlande': {
            original: './images/irlande.jpg',
            hover: './images/irlande2.jpg'
        },
        'argentine': {
            original: './images/argentine.jpg',
            hover: './images/argentine2.jpg'
        },
        'hongrie': {
            original: './images/hongrie.jpg',
            hover: './images/hongrie2.jpg'
        },
        'thailande': {
            original: './images/thaïlande.jpg',
            hover: './images/thailand2.jpg'
        },
        'depart': {
            original: './images/départ.jpg',
            hover: './images/depart2.jpg'
        },
        'trimestre': {
            original: './images/trimestre.jpg',
            hover: './images/trimestre2.jpg'
        },
        'sejour': {
            original: './images/séjour.jpg',
            hover: './images/sejour2.jpg'
        },
        'scolaire': {
            original: './images/scolaire.jpg',
            hover: './images/scolaire2.jpg'
        }
    };

    const irlandeImg = document.querySelector('.irlande');
    const argentineImg = document.querySelector('.argentine');
    const hongrieImg = document.querySelector('.hongrie');
    const thailandeImg = document.querySelector('.thailande');
    const departImg = document.querySelector('.depart');
    const trimestreImg = document.querySelector('.trimestre');
    const sejourImg = document.querySelector('.sejour');
    const scolaireImg = document.querySelector('.scolaire');

    function addHoverEvents(img, className) {
        img.addEventListener('mouseenter', function() {
            img.src = imageMap[className].hover;
            img.style.transition = 'all 0.3s ease';
            img.style.transform = 'scale(1.05)';
        });
        
        img.addEventListener('mouseleave', function() {
            img.src = imageMap[className].original;
            img.style.transform = 'scale(1)';
        });
    }

    if (irlandeImg) addHoverEvents(irlandeImg, 'irlande');
    if (argentineImg) addHoverEvents(argentineImg, 'argentine');
    if (hongrieImg) addHoverEvents(hongrieImg, 'hongrie');
    if (thailandeImg) addHoverEvents(thailandeImg, 'thailande');
    if (departImg) addHoverEvents(departImg, 'depart');
    if (trimestreImg) addHoverEvents(trimestreImg, 'trimestre');
    if (sejourImg) addHoverEvents(sejourImg, 'sejour');
    if (scolaireImg) addHoverEvents(scolaireImg, 'scolaire');
});


document.addEventListener('DOMContentLoaded', function() {
    // Exemple: Soumission du formulaire
    const searchButton = document.querySelector('.search-button');
    
    searchButton.addEventListener('click', function() {
        const destination = document.getElementById('destination').value;
        const duree = document.getElementById('duree').value;
        const age = document.getElementById('age').value;
        const programme = document.getElementById('programme').value;
        
        // Vous pouvez rediriger vers une page de résultats ou traiter les données ici
        console.log('Recherche avec les critères:', { destination, duree, age, programme });
        
        // Exemple de redirection: 
        // window.location.href = `/resultats?destination=${destination}&duree=${duree}&age=${age}&programme=${programme}`;
    });
});
