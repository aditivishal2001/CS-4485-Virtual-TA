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
            if(contor == 0)
          {
            let greeting = { name: "Sam", message: 'Hi how I can help you ?' };
            this.messages.push(greeting);
            this.updateChatText(chatbox)
            $('div.input').html('<span id="iccontent" class="input firstinput" contenteditable="true" > </span>')
            contor+=1;
          }

        } else {
            chatbox.classList.remove('chatbox--active')
        }
    }

    onSendButton(chatbox) {
        var textField = chatbox.querySelectorAll('#iccontent');
        console.log(textField);
        let text1 = ''
        for (let i = 0; i < textField.length; i++) {
          var a = textField[i].innerHTML.replace('"true"','"false"');
          text1 += a
              }


        if (text1 === "") {
            return;
        }

        let msg1 = { name: "User", message: text1 }
        this.messages.push(msg1);

        fetch('http://127.0.0.1:5000/predict', {
            method: 'POST',
            body: JSON.stringify({ message: text1 }),
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
            $('div.input').html('<span id="iccontent" class="input firstinput" contenteditable="true" > </span>')

        }).catch((error) => {
            console.error('Error:', error);
            this.updateChatText(chatbox)
            $('div.input').html('<span id="iccontent" class="input firstinput" contenteditable="true" > </span>')
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
