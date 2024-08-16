// função que vai pegar todas as informações preenchidas no input e enviar como mensagem no whatssapp ou sms ou email para o contato informado

function sendMessage(){
    // pegar o valor do input
    var nome = document.getElementById("nome").value;
    var pedido = document.getElementById("pedido").value;
    var assunto = document.getElementById("assunto").value;
    var mensagem = document.getElementById("mensagem").value;

    // montar a mensagem com quebrar de linha e personalização de texto com emojis e negrito se possível
    var messageToSend = `Olá, meu nome é `+ nome + `. \n`;
    messageToSend += ` *Gostaria de mais informações sobre:* `+assunto +`. \n`; 
    messageToSend += `*Pedido:* ` + pedido + `. \n\n\n`; 
    messageToSend += mensagem; 

    // enviar a mensagem
    window.open("https://wa.me/5532984595525?text=" + messageToSend);
}
