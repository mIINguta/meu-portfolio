
const textoP = document.querySelector('.p-proj');
const subtituloP = document.querySelector('.h3-proj');
const subtituloT = document.querySelector('.h3-tec');
let card = document.querySelectorAll('.card');
const link = document.getElementById('link-site');
window.sr = ScrollReveal({ reset: true});
function delay(){
sr.reveal('<section>', {delay:500});
}

delay();
//caçando os respectivos cards.
card.forEach(card => {
      card.addEventListener("mouseover", function()  {
         if (card.id == "card1"){
                console.log(card.title)
                abrirDesc(1);
                }
         else if(card.id == "card2")
               abrirDesc(2);
        else if(card.id =="cardtec"){
                subtituloT.innerText= card.title;
        }
})});
// mobile click
function abrirDesc(id){
        if(id == 1)
         {
        subtituloP.innerText = "Site MM Assessoria Contábil";
        textoP.innerHTML = 'Feito no ano de 2023, esse é o meu projeto mais atual. Para o desenvolvimento desse site, foram usados HTML, CSS e Java Script. Além do desenvolvimento do site, fui responsável por capturar as imagens e produzir parte dos textos informativos.';
        link.style =" display:block;";

        }
        else {
                subtituloP.innerText = "Regue-me";
                textoP.innerText = "O Regue-me foi um aplicativo feito para meu TCC, juntamente com dois amigos o objetivo era instruir e motivar as pessoas a cuidar de suas plantas de forma gamificada. Foi usado a plataforma Kodular para o desenvolvimento do aplicativo.";
                link.style =" display:none;"
        }
}
function abrirHb(id){
        let h3 = document.querySelector('.h3-hb');
        let p = document.querySelector('.p-hb');

        if(id == '#proatividade'){
                h3.innerText = "proatividade";
                p.innerText = "Sempre busco melhorar a rotina do escritório para melhor gestão de tempo. O sentimento de estar solucionando um problema me impulsiona a ser um profissional melhor.";
        }
        if(id == '#comunicacao'){
                h3.innerText = "comunicação";
                p.innerText = "Busquei melhorar essa habilidade para facilitar a resolução dos problemas. Muita das vezes a falta de intimidade ou confiança atrapalham a comunicação e o entendimento de cada situação. Procuro sempre me expressar de forma simples porém objetiva.";
        }
        if(id == '#compromisso'){
                h3.innerText = "compromisso";
                p.innerText = "Em todo momento em que firmo um compromisso, junto a ele tenho um objetivo que é alcançar o resultado desejado. Assim como o cliente espera o melhor, eu busco entregar o melhor, passando sempre a confiança e compromisso.";
        }
        if(id == '#trabalhoeq'){
                h3.innerText = "trabalho em Equipe";
                p.innerText = "A parte que mais gosto. Trabalhar em equipe trás um sentimento de evolução conjunta, solucionando os problemas, aprendendo com os erros e por fim achando a solução exata."
                
        }

}
