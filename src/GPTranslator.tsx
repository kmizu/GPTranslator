import React, { useState } from 'react';
import {Button, TextField} from "@mui/material";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import InputLabel from "@mui/material/InputLabel";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

async function translate(sourceLanguage: string, targetLanguage: string, sourceLanguageText: string, setAnswer: (answer: string) => void) {
  const query = `
Please translate the following program from ${sourceLanguage} to ${targetLanguage}:
   
${sourceLanguageText}
   
Explain the translation result in English.
  `;
  console.log(query);
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{role: "user", content: query}],
    top_p: 0
  });
  const answer = completion.data.choices[0].message.content;
  console.log(answer);
  setAnswer(answer);
}
function App() {
  const [sourceLanguage, setSourceLanguage] : [string, (text: string) => void] = useState("");
  const [targetLanguage, setTargetLanguage]: [string, (text: string) => void] = useState("");
  const [sourceLanguageText, setSourceLanguageText]: [string, (text: string) => void] = useState("");
  const [answer, setAnswer]: [string, (text: string) => void] = useState("");

  return (
      <div className="App">
          <InputLabel>GPTranslator: GPT-based universal translator between any non-natural language</InputLabel>
          <header className="App-header">
              <Box mx="2rem">
                  <Grid container spacing={2}>
                      <Grid item xs={1}>
                          <p>Source Language</p>
                          <TextField id="source-language" label="Source Language" placeholder="Ssource language"
                                     inputProps={{ min: 20, max: 20 }}
                                     onChange={e => setSourceLanguage(e.target.value)}
                          />
                      </Grid>
                      <Grid item xs={1}>
                          <p>Target Language</p>
                          <TextField id="target-language" label="Target Language" placeholder="target language"
                                     inputProps={{ min: 20, max: 20 }}
                                     onChange={e => setTargetLanguage(e.target.value)}
                          />
                      </Grid>
                  </Grid>
              </Box>
              <InputLabel id="source-language-text">Source Language Text</InputLabel>
              <TextareaAutosize
                  maxRows={100}
                  area-label="Source Language Text"
                  placeholder="Input the text of source language"
                  onChange={e => setSourceLanguageText(e.target.value)}
                  value={sourceLanguageText}
                  style={{ height: 200, width: 800 }}
              />
          </header>
          <Button variant="outlined" onClick={() => translate(sourceLanguage, targetLanguage, sourceLanguageText, setAnswer)}>Translate</Button>
          <p>Translated Result</p>
          <TextareaAutosize
              maxRows={100}
              aria-label="maximum height"
              placeholder="Output the text of target language"
              value={answer}
              style={{ height: 200, width: 800 }}
          />
      </div>
  );
}
export default App;
