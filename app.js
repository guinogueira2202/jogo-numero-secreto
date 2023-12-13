// alteração dinâmica de atributos no HTML
changeHtmlAttributes('inputNumber', 'placeholder', 
    `Digite um número entre ${minSecretNumber} e ${maxSecretNumber}`
);
changeHtmlAttributes('inputNumber', 'min', minSecretNumber);
changeHtmlAttributes('inputNumber', 'max', maxSecretNumber);
// criação de lista de eventos para botões e teclas
document.addEventListener('keydown', pressKeyDown);
createEventList('guess', 'click', checkNumberGuess);
createEventList('restart', 'click', startNewGame);
// inicia o jogo
startNewGame();
