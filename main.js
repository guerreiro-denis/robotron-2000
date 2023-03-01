const controle = document.querySelectorAll("[data-controle]");
const estatistica = document.querySelectorAll('[data-estatistica]');

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatistica(evento.target.dataset.controle, evento.target.dataset.peca);

    })
}) 

//somar.addEventListener('click', () => {manipulaDados ("somar")});

//subtrair.addEventListener('click', () => {manipulaDados ("subtrair")});

function manipulaDados (operacao, controle) {

    const peca = controle.querySelector("[data-contador]");

    if (operacao === "-") { //era a class subtrair mas devido ao usar o forEach() pode ser usado o conteúdo
        peca.value = parseInt(peca.value) - 1;
    }
    else {
        peca.value = parseInt(peca.value) + 1;
    }
}

function atualizaEstatistica (operacao, peca) {
    estatistica.forEach((elemento)=> {
        if (operacao == '-'){
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica];
        }
        else {
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
        } 
    });
}

const imagemRobo = document.getElementById('robotron');
const corRobo = document.getElementById('cor-robotron');

corRobo.addEventListener('change', () => {
    const corSelecionada = corRobo.value;
    const areaRobo = document.getElementById('area-robotron');
    switch(corSelecionada) {
        case 'azul':
            console.log('azul');
            areaRobo.innerHTML = "";
            areaRobo.innerHTML = `<img class="robo" src="img/azul/robo-azul.png" alt="Robotron" id="robotron">
            <figcaption class="titulo">ROBOTRON <br>2000</figcaption>`;          
            break;
        case 'amarelo':
            console.log('amarelo');
            areaRobo.innerHTML = "";
            areaRobo.innerHTML = `<img class="robo" src="img/amarelo/robo-amarelo.png" alt="Robotron" id="robotron">
            <figcaption class="titulo">ROBOTRON <br>2000</figcaption>`;
            break;
        case 'vermelho':
            console.log('vermelho');
            areaRobo.innerHTML = "";
            areaRobo.innerHTML = `<img class="robo" src="img/vermelho/robo-vermelho.png" alt="Robotron" id="robotron">
            <figcaption class="titulo">ROBOTRON <br>2000</figcaption>`;
            break;
        case 'rosa':
            console.log('rosa');
            areaRobo.innerHTML = "";
            areaRobo.innerHTML = `<img class="robo" src="img/rosa/robo-rosa.png" alt="Robotron" id="robotron">
            <figcaption class="titulo">ROBOTRON <br>2000</figcaption>`;
            break;
        case 'preto':
            console.log('preto');
            areaRobo.innerHTML = "";
            areaRobo.innerHTML = `<img class="robo" src="img/preto/robo-preto.png" alt="Robotron" id="robotron">
            <figcaption class="titulo">ROBOTRON <br>2000</figcaption>`;
            break;
        case 'branco':
            console.log('branco');
            areaRobo.innerHTML = "";
            areaRobo.innerHTML = `<img class="robo" src="img/branco/robo-branco.png" alt="Robotron" id="robotron">
            <figcaption class="titulo">ROBOTRON <br>2000</figcaption>`;
            break;
        default:
            console.log('preto');
            imagemRobo.innerHTML = `<img class="robo" src="img/preto/robo-preto.png" alt="Robotron" id="robotron">
            <figcaption class="titulo">ROBOTRON <br>2000</figcaption>`;
    }
});
