const client = window.io();

const createMessage = (from, message, avatar) => {
  const messageElement = document.createElement("div");
  messageElement.classList.add("msg");

  const messageComponent = `
    <div class="msg-img" style="background-image: url(${avatar})"></div>

    <div class="msg-bubble">
      <div class="msg-info">
        <div class="msg-info-name">${from}</div>
        <div class="msg-info-time">12:45</div>
      </div>

      <div class="msg-text">
        ${message}
      </div>
    </div>
  `;

  messageElement.innerHTML = messageComponent;

  return messageElement;
};

client.on("confirmConnection", (user) => {
  console.log(user);
  const newMsg = createMessage(user.name, 'Coleh', user.avatar);
  document.querySelector("#listMessages").append(newMsg);
});

client.on('newUserConnect', (user) => {
  console.log(user);
  const newMsg = createMessage(user.name, 'Entrou no chat', user.avatar);
  document.querySelector("#listMessages").append(newMsg);
});