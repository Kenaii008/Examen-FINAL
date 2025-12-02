var card = document.querySelector('.perfil-card');
var nombre = card.querySelector('h2');
var ocupacion = card.querySelector('.ocupacion');
var masculino = true;

card.addEventListener('click', function() {
    if (masculino) {
        nombre.textContent = 'Sad Boyzz';
        ocupacion.textContent = 'Cantante triste';
        masculino = false;
    } else {
        nombre.textContent = 'Junior H';
        ocupacion.textContent = 'Cantante de corridos';
        masculino = true;
    }
    alert ('Perfil sad boyz cambiado');
    //masculino = masculino;
});
