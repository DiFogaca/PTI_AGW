window.onload = function() {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

    //Parte branca da imagem.
    context.fillStyle = 'white';
    context.fillRect(0, 0, canvas.width, canvas.height);

    //Largura e Altura para o formato de bandeira.
    canvas.width = 600; 
    canvas.height = 400;

    //Parte vermelha da bandeira.
    context.beginPath();
    context.arc(canvas.width / 2, canvas.height / 2, 100, 0, 2 * Math.PI, false);
    context.fillStyle = 'red';
    context.fill();
};


