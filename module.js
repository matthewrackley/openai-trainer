//@ts-check
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Chat, HeroCard } from "@progress/kendo-react-conversational-ui";
import { Calendar } from "@progress/kendo-react-dateinputs";
import { ApiAiClient } from "api-ai-javascript";
import { User } from "./classes/User.js";

const userClient = new User("userClient", "Matthew");
const chatAI = new User("chatAI", "OpenAI");
