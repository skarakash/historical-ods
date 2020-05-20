const { Router } = require("express");
const router = Router();
const Match = require("../models/match");

router.post("/add", async (req, res) => {
    try {
        const {
            season,
            tournament,
            gw,
            homeTeam,
            awayTeam,
            homeScore,
            awayScore,
            totalGoals,
            hOdds,
            aOdds,
            dOdds,
            o2_5,
            xG_H,
            xG_A,
            xPTS_H,
            xPTS_A,
        } = req.body;

        const candidate = await Match.findOne({
            season,
            tournament,
            homeTeam,
            awayTeam,
        });

        if (candidate) {
            return res.status(400).json({ message: "Match already exists" });
        }

        const match = new Match({
            season,
            tournament,
            gw,
            homeTeam,
            awayTeam,
            homeScore,
            awayScore,
            totalGoals,
            hOdds,
            aOdds,
            dOdds,
            o2_5,
            xG_H,
            xG_A,
            xPTS_H,
            xPTS_A,
        });

        await match.save();
        res.status(201).json({ message: "New record has been added" });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
});

module.exports = router;
