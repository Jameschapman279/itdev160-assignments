var message = [];
var messageType = {
   out: 'out',
   in: 'in',
   unknown: 'unknown'
};

//Send data
var data =[
 {
    type : messageType.out,
    user: 'Jilla',
    message: 'whats going on?'

 },
 {
   type: messageType.in,
   user: 'val',
   message: 'Hi Jilla! everything is going great'
 },
 {
   type:messageType.out,
   user: 'Jilla',
   message: 'Awesome, Lets hook up for coffee!'
 },
];

//Message constructor function
function Message(type, user, message) {
    this.type = type;
    this.user = user;
    this.messsage = message;
}

function createMessageElement(message){
  // Build message elements
  var messageText = document.createTextNode(theMessage.message);
  var messageEl = document.createElement('div');
  messageEl.appendChild(messagesText);

  return messageEl;

}



//Message click handler
function addMessage(event) {
   var user,type,className;
   var messageInputEl = document.getElementById('message-input');
   var messageContainerEl = document.getElementById('message-container')

   console.log('event target = '+ event.target.id);

   // Determine message type.
   switch (event.target.id) {
     case 'send-button':
          user = 'Jilla';
          type = messageType.out;
      break;
      case 'reply-button':
            user = 'val';
            type = messageType.in;
      break;
     default:
           user = 'unknown'
           type = messageType.unknown;
     break;
 }

 // Create new message
 if (messageInputEl.value != ''){

    var message = new Message(type, user, messageInputEl.value);
    message.push(message);

    //create element.
     var el = createMessageElement(message);

  // Set the element className.
     if (message.type === messageType.out) {
         el.className = 'out-message';
       }
       else {
        el.className = 'in-message';
       }

      // Add to Dom.
      messageContainerEl.appendChild(el);

      // Reset input.
      messageInputEl.value = '';
   }
}
function init(){
//wire event handler
document.getElementById('send-button').onclick = addMessage;
document.getElementById('reply-button').onclick = addMessage;
}

  init();
