import * as cheerio from 'cheerio';
import express from "express";
import axios from "axios";

const app = express();

app.get("/", async(req, res)=>{
    try {

        const {data} = await axios.get('https://www.eleconomista.es/cruce/USDCOP')
        //const {data} = await axios.get('https://www.bcentral.cl/inicio')
        //const select = (".general-tables")
        const select = ("td:first")
        const $ = cheerio.load(data);

        res.json({ dolar: $(select).text()});

    } catch (error) {
        res.json(error)
    }
});

const PORT = process.env.PORT || 5000

app.listen(5000, ()=> console.log("servidor arriba "));
