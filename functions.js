function createEventList(elementId, eventType, event) {
    let element = document.getElementById(elementId);
    element.addEventListener(eventType, event);
}

function pressKeyDown(e) {
    if (e.code === 'Enter') {
        if (document.getElementById('guess').hasAttribute('disabled')) {
            startNewGame();
        } else if (document.getElementById('restart').hasAttribute('disabled')) {
            checkNumberGuess();
        }
    }
}

function changeHtmlContent(elementId, contentString) {
    let element = document.getElementById(elementId);
    element.innerHTML = contentString;
    responsiveVoice.speak(contentString, 'Brazilian Portuguese Female', {rate:1.3});   
}

function changeHtmlAttributes(elementId, attribute, value) {
    let element = document.getElementById(elementId);
    element[attribute] = value;    
}

function generateSecretNumber() {
    return Math.floor(Math.random() * (maxSecretNumber - minSecretNumber + 1)) + minSecretNumber;
}

function getChosenNumber() {
    let value = document.getElementById('inputNumber').value;
    return parseInt(value);
}

function compareNumbers() {
    if (chosenNumber == secretNumber) {
        changeHtmlContent( 
            'title', 
            'Parabéns, você acertou!');
        changeHtmlContent(
            'paragraph', 
            `O número era ${secretNumber}. Você acertou na ${attempts}ª tentativa.`);
        return true;
    } else if (chosenNumber < secretNumber) {
        changeHtmlContent( 
            'title', 
            'Errou!');
        changeHtmlContent( 
            'paragraph', 
            `O número é maior que ${chosenNumber}`);
    } else {
        changeHtmlContent( 
            'title', 
            'Errou!');
        changeHtmlContent( 
            'paragraph', 
            `O número é menor que ${chosenNumber}`);   
    }
    attempts++;
    return false;
}

function changeButton(action) {
    let elementIdForSetAtribute = action === 'guess' ? 'guess' : 'restart';
    let elementIdForRemoveAtribute = action === 'guess' ? 'restart' : 'guess';
    document.getElementById(elementIdForSetAtribute).setAttribute('disabled', '');
    document.getElementById(elementIdForRemoveAtribute).removeAttribute('disabled');
}

function checkNumberGuess() {
    chosenNumber = getChosenNumber();
    if (compareNumbers() == true) {
        changeButton('guess');
    } else {
        changeButton('restart');
    }
    clearInput();
}

function clearInput() {
    document.getElementById('inputNumber').value = '';
}

function startNewGame() {
    changeButton(restart);
    attempts = 1;
    secretNumber = generateSecretNumber();
    changeHtmlContent('title', 'Jogo do Número Secreto');
    changeHtmlContent('paragraph', 'Tente adivinhar qual é o número oculto');
}
