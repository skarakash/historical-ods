const { Schema, model } = require("mongoose");

const schema = new Schema({
    season: { type: String, required: true },
    tournament: { type: String, required: true },
    gw: { type: Number, required: true },
    homeTeam: { type: String, required: true },
    awayTeam: { type: String, required: true },
    homeScore: { type: Number, required: true },
    awayScore: { type: Number, required: true },
    totalGoals: { type: Number, required: true },
    hOdds: { type: Number, required: true },
    aOdds: { type: Number, required: true },
    dOdds: { type: Number, required: true },
    o2_5: { type: Number, required: true },
    xG_H: { type: Number, required: true },
    xG_A: { type: Number, required: true },
    xPTS_H: { type: Number, required: true },
    xPTS_A: { type: Number, required: true },
});

module.exports = model("Match", schema);
