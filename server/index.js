'use strict';

// Copied from https://platform.openai.com/docs/api-reference/authentication
// OpenAI Documentation > API Reference > Authentication
import { Configuration, OpenAIApi } from "openai";

import 'dotenv/config';

// Copied from https://platform.openai.com/docs/api-reference/authentication
// OpenAI Documentation > API Reference > Authentication
const configuration = new Configuration({
    organization: "org-PTouXMFMu8BDIEFSbraMIb0c",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();
