import mongoose from "mongoose";

/** TODO Your schema here! */

const PokemonSpeciesSchema = new mongoose.Schema({
    dexNumber: Number,
    name: String,
    dexEntry: String,
    types: [String]
});

const trainerSchema = new mongoose.Schema({
    name: String,
    age: Number,
    team: [{
        nickname: String,
        species: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "PokemonSpecies"
        }
    }]
});

export const PokemonSpecies = mongoose.model("PokemonSpecies", PokemonSpeciesSchema);
export const Trainer = mongoose.model("Trainer", trainerSchema);