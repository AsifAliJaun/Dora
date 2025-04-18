const message = `I love you the way you truly deserve—completely and unconditionally. I love you to the moon and back. You are my friend, my soulmate❤‍🩹💞, and the comfort that soothes my pain. As long as you stand by my side, nothing else matters—not even the whole world😭❤.
I don’t seek perfection in you; I love you just as you are💕❤.
I know I make mistakes, and sometimes, I may fall short of treating you the way you deserve. I know I may hurt you at times😢, but please believe me—there is no one in this world I love more than you💕🫶. I have chosen you, now and forever, my love.`;

const typingElement = document.getElementById("typingText");

let index = 0;

function typeWriter() {
  if (index < message.length) {
    typingElement.textContent += message.charAt(index);
    index++;
    setTimeout(typeWriter, 35); // typing speed
  }
}

window.addEventListener("load", typeWriter);
