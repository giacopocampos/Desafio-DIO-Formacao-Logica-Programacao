let nomeHeroi = "Giácopo Teixeira Campos";
let xpHeroi = 7000;
let nivelHeroi = "";

if(xpHeroi <= 1000) {
    nivelHeroi = "Ferro"
} else if (xpHeroi > 1000 && xpHeroi <= 2000) {
    nivelHeroi = "Bronze"
} else if (xpHeroi > 2000 && xpHeroi <= 6000) {
    nivelHeroi = "Prata"
} else if (xpHeroi > 6000 && xpHeroi <= 7000) {
    nivelHeroi = "Ouro"
} else if (xpHeroi > 7000 && xpHeroi <= 8000) {
    nivelHeroi = "Platina"
} else if (xpHeroi > 8000 && xpHeroi <= 9000) {
    nivelHeroi = "Ascendente"    
} else if (xpHeroi > 9000 && xpHeroi <= 10000) {
    nivelHeroi = "Imortal"
} else if (xpHeroi > 10000) {
    nivelHeroi = "Radiante"
}

console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi);


