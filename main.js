let comenzarExamen = confirm("Examen de Programacion, te gustaría comenzar?");

if (comenzarExamen) {
    
    const respuestasCorrectas = ["C", "B", "A", "B"];
    let respuestasCorrectasUsuario = 0;

    const preguntas = [
        "1. ¿Qué es un algoritmo?\n \nA) Un lenguaje de programación \nB) Un tipo de hardware \nC) Una secuencia de pasos para resolver un problema",
        "2. ¿Cuál es el principio básico de la programación orientada a objetos?\n \nA) La recursividad \nB) La encapsulación \nC) El procesamiento en paralelo",
        "3. ¿Qué significa 'SQL'? \n\nA) Structured Query Language \nB) Simple Query Language \nC) Sequential Query Language",
        "4. ¿Qué significa 'JSX' en React?\n \nA) JavaScript XML \nB) JavaScript Syntax Extension \nC) JavaScript Extender"
    ];

    for (let i = 0; i < preguntas.length; i++) {
        let respuestaUsuario = prompt(`Pregunta ${i+1}/${preguntas.length}: \n\n${preguntas[i]}`);

        if (respuestaUsuario.toUpperCase() === respuestasCorrectas[i]) {
            respuestasCorrectasUsuario++;
        }
    }

    let puntajeFinal = (respuestasCorrectasUsuario / respuestasCorrectas.length) * 100;

    if (puntajeFinal >= 50) {
        alert("Felicidades! Aprobaste con un puntaje de: " + puntajeFinal + "%");
    } else {
        alert("Lo siento, desaprobaste con un puntaje de: " + puntajeFinal + "%");
    }
} else {
    alert("Examen cancelado");
}
