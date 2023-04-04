//@ts-check
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Chat, HeroCard } from "@progress/kendo-react-conversational-ui";
import { Calendar } from "@progress/kendo-react-dateinputs";
import { ApiAiClient } from "api-ai-javascript";
import { User } from "./classes/User.js";

const client = new ApiAiClient({
  accessToken: "280344fb165a461a8ccfef7e1bb47e65",
});
const userClient = new User("userClient", "Matthew");
const chatAI = new User("chatAI", "OpenAI");

const user = {
  sender: userClient.username,
  name: userClient.nickname,
  id: userClient.ID,
};

const bot = {
  sender: chatAI.username,
  name: chatAI.nickname,
  id: chatAI.ID,
  avatarUrl:
    "https://demos.telerik.com/kendo-ui/content/chat/InsuranceBot.png",
  avatarAltText: "KendoReact Conversational UI InsuranceBot",
};

const app = () => {
  const [messages, setMessages] = React.useState([]);

  const onResponse = React.useCallback((activity) => {
    let responseMessages = [];

    activity.result.fulfillment.messages.forEach(function (element) {
      let newMessage;

      newMessage = {
        text: element.speech,
        author: bot,
        timestamp: new Date(activity.timestamp),
        suggestedActions: element.replies
          ? element.replies.map((x) => {
            return {
              type: "reply",
              title: x,
              value: x,
            };
          })
          : [],
      };

      responseMessages.push(newMessage);
    });

    setMessages((oldMessages) => [...oldMessages, ...responseMessages]);

    if (activity.result.fulfillment.data) {
      let newMessage = {
        text: chatAI.message,
        author: bot,
        timestamp: new Date(activity.timestamp),
        suggestedActions: activity.result.fulfillment.data.null.suggestedActions
          ? parseActions(
            activity.result.fulfillment.data.null.suggestedActions
          )
          : [],
        attachments: activity.result.fulfillment.data.null.attachments
          ? activity.result.fulfillment.data.null.attachments
          : [],
      };

      setMessages((oldMessages) => [...oldMessages, newMessage]);
    }

    if (activity.result.fulfillment.speech === client.message) {
      let newAttachments = [
        {
          type: "calendar",
        },
      ];

      setMessages([
        ...messages,
        {
          author: bot,
          timestamp: new Date(activity.timestamp),
          text: client.message,
          attachments: newAttachments,
        },
      ]);
    }
  }, []);

  React.useEffect(() => {
    client.eventRequest("Welcome").then(onResponse);
  }, []);

  const attachmentTemplate = (props) => {
    let attachment = props.item;

    if (attachment.type === "quote") {
      return (
        <div className="k-card k-card-type-rich">
          <div className="k-card-body">
            <div>
              <strong>Type:</strong>
              <span>{ attachment.coverage }</span>
            </div>
            <div>
              <strong>Car model:</strong>
              <span>{ attachment.make }</span>
            </div>
            <div>
              <strong>Car cost:</strong>
              <span>{ attachment.worth }</span>
            </div>
            <div>
              <strong>Start date:</strong>
              <span>{ attachment.startDate }</span>
            </div>
            <hr />
            <div>
              <strong>Total:</strong>
              <span>{ attachment.premium }</span>
            </div>
          </div>
        </div>
      );
    } else if (attachment.type === "payment_plan") {
      return (
        <div className="k-card k-card-type-rich">
          <div className="k-card-body">
            { attachment.rows.map((row, index) => (
              <div key={ index }>{ row.text }</div>
            )) }
            <hr />
            <div>
              <strong>Total:</strong>
              <span>{ attachment.premium }</span>
            </div>
          </div>
        </div>
      );
    } else if (attachment.type === "calendar") {
      return (
        <Calendar
          onChange={ (event) => {
            addNewMessage(event);
          } }
        />
      );
    }
  };

  return (
    <Chat
      messages={ messages }
      user={ user }
      onMessageSend={ addNewMessage }
      attachmentTemplate={ attachmentTemplate }
    />
  );
};

const parseActions = (actions) => {
  if (actions !== undefined) {
    actions.map((action) => {
      if (action.type === "postBack") {
        action.type = "reply";
      }
    });

    return actions;
  }

  return [];
};

const parseText = (event) => {
  if (event.action !== undefined) {
    return event.action.value;
  } else if (event.value) {
    return event.value;
  } else {
    return event.message.text;
  }
};

const addNewMessage = (event) => {
  let value = parseText(event);

  client.textRequest(value.toString()).then(onResponse, this);

  if (!event.value) {
    setMessages([
      ...messages,
      {
        author: user,
        text: User.message,
        timestamp: new Date(),
      },
    ]);
  }
};

ReactDOM.render(<app />, document.getElementById("my-app"));

const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const io = new Server(server);
const sendData = require("./app.js");

const appExp = express();
const server = http.createServer(appExp);

appExp.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("a user connected");
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});

var socket = io();

var form = document.getElementById("form");
var input = document.getElementById("input");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (input.value) {
    socket.emit("chat message", input.value);
    input.value = "";
  }
});

function ChatMessage (props) {
  return <div>{ props.message }</div>;
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<ChatMessage message={ User.message } />);

ReactDOM.render(<User.message message={ this.message } />, inputData);
