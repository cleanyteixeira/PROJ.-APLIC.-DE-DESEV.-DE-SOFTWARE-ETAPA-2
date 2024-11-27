const inputMusica = document.getElementById('musica');
const btnAdicionar = document.getElementById('adicionar');
const playlist = document.getElementById('playlist');
const audio = document.getElementById('audio');

btnAdicionar.addEventListener('click', () => {
    const novaMusica = inputMusica.value;
    if (novaMusica) {
        const li = document.createElement('li');
        li.textContent = novaMusica;
        li.classList.add('musica');
        li.addEventListener('click', () => {
            audio.src = `musicas/${novaMusica}.mp3`; // Substitua "musicas/" pelo caminho das suas músicas
            audio.play();
        });
        playlist.appendChild(li);
        inputMusica.value = '';
    }
});