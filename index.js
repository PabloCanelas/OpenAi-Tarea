import express from "express";
import "dotenv/config";
import OpenAI from "openai";

const app = express();
const port = process.env.port;
const openai = new OpenAI({
    apiKey: process.env.api_key
})

app.use(express.json());

app.listen(port, () => {
    console.log("server running on port 3000")
})

app.get("/gpt", (req, res) =>{
    getCompletion(req.query.query, res)
})

app.get("/", (req, res) => {
    res.send("Hello world")
})


app.get("/getSynonyms", (req, res) => {
    const word = req.query.query;
    if(!word || word.length === 0){
        res.status(400).send({message: "invalid word"});
        return;
    }
    const prompt = `Get 5 synonyms in a single string separated by commas from th text delimited by the tags <word></word>. Text: <word>${word}</word>`
    getCompletion(prompt, res);
})

app.post("/getHtmlReport", (req, res) => {
    const report = req.body.content;
    console.log(report);
    
    if (!Array.isArray(report) || report.length === 0) {
        res.status(400).send({ message: "Missing or invalid report data" });
        return;
    }
    
    const prompt = `Use the json data array delimited by the tags <info></info> to generate a complete HTML file that contains a centered table showing all the results, return just the HTML. json: <info>${JSON.stringify(report)}</info>`;
    
    getReportCompletion(prompt, res);
});

async function getCompletion(prompt, res) {
    const completion = await openai.chat.completions.create({
        messages: [{role: "user", content: prompt}],
        model: "gpt-3.5-turbo",
        max_tokens: 1024,
        temperature: 0
    })
    console.log(completion);
    res.send({result: completion.choices[0].message.content})
}

async function getReportCompletion(prompt, res) {
    const completion = await openai.chat.completions.create({
        messages: [{ role: "user", content: prompt }],
        model: "gpt-3.5-turbo",
        max_tokens: 1024,
        temperature: 0
    });
    console.log(completion);
    res.send({ result: completion.choices[0].message.content });
}