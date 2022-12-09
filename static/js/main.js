let contor = 0;
class Chatbox {
    constructor() {
        this.args = {
            openButton: document.querySelector('.chatbox__button'),
            chatBox: document.querySelector('.chatbox__support'),
            sendButton: document.querySelector('.send__button')
        }

        this.state = false;
        this.messages = [];
    }

    display() {
        const {openButton, chatBox, sendButton} = this.args;

        openButton.addEventListener('click', () => this.toggleState(chatBox))

        sendButton.addEventListener('click', () => this.onSendButton(chatBox))

        // const node = chatBox.querySelector('.input');
        // node.addEventListener("keyup", ({key}) => {
        //     if (key === "Enter") {
        //       return false
        //         // this.onSendButton(chatBox)
        //     }
        // })
    }

    toggleState(chatbox) {
        this.state = !this.state;

        // show or hides the box
        if(this.state) {
            chatbox.classList.add('chatbox--active')
          //   if(contor == 0)
          // {
          //   let greeting = { name: "Sam", message: 'Hi how I can help you ?' };
          //   this.messages.push(greeting);
          //   this.updateChatText(chatbox)
          //   $('div.input').html('<input type="text" id="iiccontent" class="input firstinput" placeholder="type your message" />')
          //   contor+=1;
          // }

        } else {
            chatbox.classList.remove('chatbox--active')
        }
    }

    onSendButton(chatbox) {
      var message = '';
      var itextField = chatbox.querySelector('#iiccontent');
      console.log(itextField);
      if(itextField !== null){
        message = itextField.value;
      }

        var textField = chatbox.querySelector('#iccontent');

        if(textField !== null){
          var a = textField.innerHTML.replaceAll('"true"','"false"');
        //  message = jQuery(a).text()
        message = a;
        }

        console.log(message)


        if (message === "") {
            return;
        }

        let msg1 = { name: "User", message: message }
        this.messages.push(msg1);

        fetch('http://127.0.0.1:5000/predict', {
            method: 'POST',
            body: JSON.stringify({ message: message }),
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json'
            },
          })
          .then(r => r.json())
          .then(r => {
            console.log(r)
            let msg2 = { name: "Sam", message: r.answer };
            this.messages.push(msg2);
            this.updateChatText(chatbox)
            $('div.input').html('<input type="text" id="iiccontent" class="input firstinput" placeholder="type your message" />')

        }).catch((error) => {
            console.error('Error:', error);
            this.updateChatText(chatbox)
            $('div.input').html('<input type="text" id="iiccontent" class="input firstinput" placeholder="type your message" />')
          });
    }

    updateChatText(chatbox) {
        console.log(this.messages)
        var html = '';
        this.messages.slice().reverse().forEach(function(item, index) {
            if (item.name === "Sam")
            {
                html += '<div class="messages__item messages__item--visitor">' + item.message + '</div>'
            }
            else
            {
                html += '<div class="messages__item messages__item--operator">' + item.message + '</div>'
            }
          });

        const chatmessage = chatbox.querySelector('.chatbox__messages');
        chatmessage.innerHTML = html;
    }
}


const chatbox = new Chatbox();
chatbox.display();
