// função que vai pegar todas as informações preenchidas no input e enviar como mensagem no whatssapp ou sms ou email para o contato informado

function sendMessage(){
    // pegar o valor do input
    var name = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("mensagem").value;

    // montar a mensagem
    var messageToSend = "Olá, meu nome é " + name + ". " + message + ". Meu email é " + email;

    // enviar a mensagem
    window.open("https://wa.me/5531991805907?text=" + messageToSend);
}