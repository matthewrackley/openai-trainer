const U = require('../classes/User.js');
const { error } = require('jquery');
const chatBubble = document.getElementById('app');

module.exports = {
    ChatMessage: class extends HTMLElement {
        constructor (username, message) {
            super();
            // Create a text node with the message content
            const messageNode = document.createTextNode(message);
            const messageDiv = document.createElement('div');
            messageDiv.className = 'message';
            messageDiv.id = username;
            messageDiv.appendChild(messageNode);
            // Create another text Node to encapsulate our message content
            const bubbleDiv = document.createElement('div');
            bubbleDiv.className = 'ChatBubble';
            bubbleDiv.appendChild(messageDiv);
            // Create another Text Node for the final part
            const messageContainer = document.createElement('div');
            messageContainer.className = 'Message';
            messageContainer.id = username;
            messageContainer.appendChild(bubbleDiv);
            const template = document.createElement('template');
            template.innerHTML = `
            <style>
                :host {
                    display: block;
                }
            </style>
        `;
            this.attachShadow({ mode: 'open' }); // create a shadow DOM
            this.shadowRoot?.appendChild(template.content.cloneNode(true)); // append the cloned template to the shadow DOM
            this.shadowRoot?.appendChild(messageContainer); // append the message container div to the shadow DOM
        }
    },

    customElements: customElements.define('message-input', this.ChatMessage),
    appendMessage: function appendMessage () {
        chatBubble?.appendChild
    },
}
