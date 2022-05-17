const menu = document.querySelector('#menu');
const htmlMenu = `<div class="title">
                    <h1>Ipazia</h1>
                </div>
                <div class="nav-content">                   
                        <a href="index.html" class="underline">Home</a>
                        <a href="personaggio.html" class="underline">Personaggio</a>
                        <a href="curiosita.html" class="underline">Curiosità</a>
                        <a href="gallery.html" class="underline">Gallery</a>
                </div>`;
menu.innerHTML += htmlMenu;

var footer = document.querySelector('#footer');
var htmlFooter = `<div class="col">
<div class="col-2" id="footer-left">
    <p>Sito web realizzato per il progetto “Laboratorio di Comunicazione Visiva” - Università degli Studi di
        Milano - Bicocca</p>
</div>
<div class="col-2" id="footer-right">
    <p>Fonti</p>
    <div class="footer-icons">
        <a href="https://it.wikipedia.org/wiki/Ipazia"><img src="img/wikipedia.png"></a>
        <a href="https://www.treccani.it/enciclopedia/ipazia_%28Enciclopedia-Italiana%29/"><img
                src="img/treccani.png"></a>
        <a href="https://www.britannica.com/biography/Hypatia"><img src="img/britanicca.png"></a>
    </div>
</div>
</div>
<div class="col" id="copyright">
<p>©2022</p> <a href="https://gpaparaz.github.io/index.html" target="_blank">gpaparaz</a> <img
    src="img/icona_gpaparaz.png">
</div>`;
footer.innerHTML += htmlFooter;

function setActive(e) {
    var el = document.querySelector('.active');
    // Check if the element exists to avoid a null syntax error on the removal
    if (el) {
        el.classList.remove('active');
    }
    e.target.classList.add('active');
}

