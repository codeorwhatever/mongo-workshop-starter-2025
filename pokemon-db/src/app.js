import dotenv from "dotenv"
import mongoose from "mongoose";
import { PokemonSpecies, Trainer } from "./schema.js";

dotenv.config();

await mongoose.connect(process.env.DB_URL);
console.log("Hello Connected to MongoDB!");

// const species = await PokemonSpecies.find({types: "Water" });
// console.log("Pokemon Species:", species);


// const trainers = await Trainer.find(age: { { $gt: 15 } });
// console.log("Trainers:" trainers);

const ash = await Trainer.findOne({"name": "Ash Ketchum", "team.nickname": "Bulby"}).populate("team.species");
console.log("Ash's Team:", ash.team);


//Disconnect when done
await mongoose.disconnect();
console.log("done!");

