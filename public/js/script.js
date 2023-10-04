const socket = io();
const form = document.querySelector('#form');
const input = document.querySelector('#input');
const pseudo = document.querySelector('#pseudo');
const messages = document.querySelector('#messages');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const pseudo2 = pseudo.value;
  if (!input.value || !pseudo.value) {
    return;
  }
  const message = input.value;
  socket.emit('chat message', pseudo2, message );
  input.value = '';
  input.focus();
});

socket.on('chat message', (pseudo, message ) => {
  const item = document.createElement('li');
  item.textContent = `${pseudo}: ${message}`;
  messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});








