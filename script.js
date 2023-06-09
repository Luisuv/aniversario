window.addEventListener('DOMContentLoaded', () => {
    const messages = [
      "princesa",
      "muñeca",
      "reina",
      "pinguina",
      "costumbre mas",
      "enojona",
      "risueña",
      "novia inteligente y",
      "compañera",
      "inspiracion",
      "futura ......"
    ];
 
    let currentMessageIndex = 0;
    const messageElement = document.getElementById('message');
    const finalMessageElement = document.getElementById('final-message');

    function changeMessage() {
      if (currentMessageIndex < messages.length) {
        messageElement.classList.add('hidden');
        setTimeout(() => {
          messageElement.textContent = messages[currentMessageIndex];
          messageElement.classList.remove('hidden');
          currentMessageIndex++;
        }, 500);
      } else {
        messageElement.classList.add('hidden');
        setTimeout(() => {
          finalMessageElement.classList.remove('hidden');
        }, 500);
      }
    }

    setInterval(changeMessage, 3000);
  });
