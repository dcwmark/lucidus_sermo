'use strict';

// Copied from https://platform.openai.com/docs/api-reference/authentication
// OpenAI Documentation > API Reference > Authentication

/** Need babel
 * import { Configuration, OpenAIApi } from "openai";
 * import 'dotenv/config';
 */

 require('dotenv').config();

// Copied from https://platform.openai.com/docs/api-reference/authentication
// OpenAI Documentation > API Reference > Authentication

const { Configuration, OpenAIApi } = require("openai");

console.log(`process.env.OPENAI_API_KEY:: ${ process.env.OPENAI_API_KEY }`);
const configuration = new Configuration({
    organization: "org-PTouXMFMu8BDIEFSbraMIb0c",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();

// Copied from https://platform.openai.com/docs/api-reference/authentication
// OpenAI Documentation > API Reference > Completion > Choose node.js in language dropdown
/*
const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: "Say this is a test",
  max_tokens: 7,
  temperature: 0,
});
*/
/*
(async () => {
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: "Say this is a test",
    max_tokens: 7,
    temperature: 0,
  });
  console.log(response.data.choices[0].text);
})();
*/
