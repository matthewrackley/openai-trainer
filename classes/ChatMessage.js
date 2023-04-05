const app = require('../app');
const { message } = require('../renderer');
const { User, userClient, botClient } = require('./User');
const chatBubble = document.getElementById('app');

module.exports = {
    ChatMessage: class ChatMessage extends HTMLElement {
        constructor () {
            super();
            this.message = userClient?.message || botClient?.message;
            this.user = userClient || botClient;
            // Create a text node with the message content
            const messageNode = document.createTextNode(this.message);
            const messageDiv = document.createElement('div');
            messageDiv.className = 'message';
            messageDiv.id = this.user;
            messageDiv.appendChild(messageNode);
            // Create another text Node to encapsulate our message content
            const bubbleDiv = document.createElement('div');
            bubbleDiv.className = 'ChatBubble';
            bubbleDiv.appendChild(messageDiv);
            // Create another Text Node for the final part
            const messageContainer = document.createElement('div');
            messageContainer.className = 'Message';
            messageContainer.id = this.user;
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
