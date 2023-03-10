'use strict';

// Copied from https://platform.openai.com/docs/api-reference/authentication
// OpenAI Documentation > API Reference > Authentication

/** Need babel
 * import { Configuration, OpenAIApi } from "openai";
 * import 'dotenv/config';
 */

 require('dotenv').config();

 const express = require('express');
 const bodyParser = require('body-parser');
 const cors = require('cors');

// Copied from https://platform.openai.com/docs/api-reference/authentication
// OpenAI Documentation > API Reference > Authentication

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    organization: "org-sWRf3X89saV0NvJfUgyZhUEZ",
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

async function callApi() {
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: "Say this is a test",
    max_tokens: 7,
    temperature: 0,
  });
  console.log(response.data.choices[0].text);
};

// create a simple express api that calls the functio above.

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT;

app.post('/', async (req, res) => {
  const { message } = req.body;
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${ message }`,
    max_tokens: 100,
    temperature: 0.5,
  });
  console.log(response.data.choices[0].text);

  res.json({
    message: response.data.choices[0].text,
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${ port }`);
});
