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
            o2_5
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
            totalGoals: homeScore + awayScore,
            hOdds,
            aOdds,
            dOdds,
            o2_5,
        });

        await match.save();
        res.status(201).json({ message: "New record has been added" });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
});


router.post("/matches", async (req, res) => {
    try {
        const {
            body
        } = req;

        const params = {}
        Object.keys(body).forEach(key => {
            if (body[key]) {
                params[key] = body[key]
            }
        });

        const matches = await Match.find(params)

        res.status(200).json(matches)

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
})

module.exports = router;
