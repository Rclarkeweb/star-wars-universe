import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs", { content: "Choose a topic to start exploring!" });
});


app.get("/planet", async (req, res) => {
    const random_planet_num = Math.floor(Math.random() * 60);
    try {
        const api = await axios.get(`https://swapi.dev/api/planets/${random_planet_num}/`);
        const result = JSON.stringify(api.data);
        const data_results = JSON.parse(result);
        res.render("index.ejs", {
            planet_name: data_results["name"],
            climate: data_results["climate"],
            terrain: data_results["terrain"],
            population: data_results["population"],
        });
    } catch (error) {
        res.status(404).render("index.ejs", { error: "Oops, that didn't work, please try again" });
    }
});


app.get("/character", async (req, res) => {
    const random_char_num = Math.floor(Math.random() * 82);
    try {
        const api = await axios.get(`https://swapi.dev/api/people/${random_char_num}/`);
        const result = JSON.stringify(api.data);
        const data_results = JSON.parse(result);
        res.render("index.ejs", {
            char_name: data_results["name"],
            gender: data_results["gender"],
            hair_color: data_results["hair_color"],
            birth_year: data_results["birth_year"],
            homeworld: data_results["homeworld"],
        });
    } catch (error) {
        res.status(404).render("index.ejs", { error: "Oops, that didn't work, please try again" });
    }
});


app.get("/starship", async (req, res) => {
    const random_starship_num = Math.floor(Math.random() * 36);
    try {
        const api = await axios.get(`https://swapi.dev/api/starships/${random_starship_num}/`);
        const result = JSON.stringify(api.data);
        const data_results = JSON.parse(result);
        res.render("index.ejs", {
            starship_name: data_results["name"],
            model: data_results["model"],
            manufacturer: data_results["manufacturer"],
            crew: data_results["crew"],
            passengers: data_results["passengers"],
            hyperdrive: data_results["hyperdrive_rating"],
            cost: data_results["cost_in_credits"],
        });
    } catch (error) {
        res.status(404).render("index.ejs", { error: "Oops, that didn't work, please try again" });
    }
});


app.get("/species", async (req, res) => {
    const random_species_num = Math.floor(Math.random() * 39);
    try {
        const api = await axios.get(`https://swapi.dev/api/species/${random_species_num}/`);
        const result = JSON.stringify(api.data);
        const data_results = JSON.parse(result);
        res.render("index.ejs", {
            species_name: data_results["name"],
            language: data_results["language"],
            classification: data_results["classification"],
            average_lifespan: data_results["average_lifespan"],
            skin_colors: data_results["skin_colors"],
            hair_colors: data_results["hair_colors"],
            eye_colors: data_results["eye_colors"],
        });
    } catch (error) {
        res.status(404).render("index.ejs", { error: "Oops, that didn't work, please try again" });
    }
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

