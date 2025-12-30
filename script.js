class Animal {
    #nome; numPatas;
    constructor(nome,numPatas) {
        this.#nome = nome;
        this.numPatas = numPatas;
    }
    get nome() {
        return this.#nome;
    }
    emitirSom() {
        return "Som Genérico";
    }
}

/* Aqui não há necessidade de construir propriedades, pois não serão 
adicionadas novas - subclasses chamam automaticamente o 'constructor'
da superclasse referida. Em caso de propriedades extras, se torna 
necessária a utilização de super([parâmetros da superclasse]) dentro
do construtor para inicializar a parte herdada.*/

class Cachorro extends Animal {
    emitirSom() {
        return "Au-Au";
    }
}

class Gato extends Animal {
    emitirSom() {
        return "Miau";
    }
}

class Passaro extends Animal {
    emitirSom() {
        return "Piu-Piu";
    }
}

const div_figuras = document.querySelectorAll("img");
const div_cadastro = document.getElementById("cadastro");

const input = document.createElement("input");
input.placeholder = "Insira o nome do Animal";
const button = document.createElement("button");
button.textContent = "Cadastrar";
let identificador;


div_figuras.forEach(function(elemento) {
    elemento.addEventListener("click",function(evento) {
        evento.preventDefault();
        div_cadastro.appendChild(input);
        div_cadastro.appendChild(button);
        identificador = evento.target.id;
    },true);
});

button.addEventListener("click",function(evento) {
    evento.preventDefault();
    switch (identificador) {
        case "cachorro":
            let objeto_cachorro = new Cachorro(input.value,4);
            alert(`Cachorrinho ${objeto_cachorro.nome} tem 4 patas e faz ${objeto_cachorro.emitirSom()}.`);
            div_cadastro.innerHTML = "";
            break;
        case "gato":
            let objeto_gato = new Gato(input.value,4);
            alert(`Gatinho ${objeto_gato.nome} tem 4 patas e faz ${objeto_gato.emitirSom()}.`);
            div_cadastro.innerHTML = "";
            break;
        case "pássaro":
            let objeto_passaro = new Passaro(input.value,2);
            alert(`Pássarinho ${objeto_passaro.nome} tem 4 patas e faz ${objeto_passaro.emitirSom()}.`);
            div_cadastro.innerHTML = "";
            break;
        case "outros":
            let outros_patas = prompt("Quantas patas esse animalzinho tem?");
            let objeto_outro = new Animal(input.value,outros_patas);
            alert(`Seu animalzinho ${objeto_outro.nome} tem ${objeto_outro.numPatas} patas e faz ${objeto_outro.emitirSom()}.`);
            div_cadastro.innerHTML = "";
            break;
    };
    input.value = "";
    div_cadastro.innerHTML = "";
});