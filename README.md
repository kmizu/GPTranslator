# GPTranslator

This project uses the ChatGPT API to provide a transpiler between various programming languages. For example, you can transpile from Java to C, Scala to Java, Python to JavaScript, JavaScript to Java, etc.

This is a result of GPT-3.5 and GPT-4 gaining a variety of programming languages as a result, and it can also perform transpiling that was not anticipated in advance.

Note, however, that GPT transpiling is not perfect. Sometimes the transpiled result uses libraries that do not exist, and sometimes it makes some logic mistakes.

If used with this in mind, the GPTranslator can be extremely useful tool for your daily programming.

## Usage

You can use GPTranslator as following:

```sh
$ git clone https://github.com/kmizu/GPTranslator.git
$ cd GPTranslator
$ export REACT_APP_OPENAI_API_KEY=<api key> # this must be set before npm start
$ npm i
$ npm start
```

Once you have typed the above commands, your React-based application will be launched. All that remains is to enter the required information in the application's input fields. Specifically,

- Source Language
- Target Language
- Source Language Text

The following three items must be entered. Then press the "Transpile" button to output the conversion results in the text area below.

## Limitation

GPTranslator uses ChatGPT API (gpt-3.5-turbo / gpt-4). Accuracy is highly dependent on those APIs.

Also, please note that the accuracy of the conversion depends on the prompt at the time of transpiling, which may change as development progresses.

The top_p parameter, which determines how probabilistic the output of ChatGPT's API is, set to 0 so that the conversion results are as unbiased as possible. This allows us to assume that at least if we give the same prompt and the same program, the transpile results will also be the same.

## Demo

![image](https://user-images.githubusercontent.com/97326/227081262-cb8fc3cd-9eb1-468b-a123-8794d4057ab2.png)

## License

This software is distributed under the MIT License.
