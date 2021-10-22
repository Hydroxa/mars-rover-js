import express from "express";
import RoverService from "../services/RoverService";

const router = express.Router();

router.get("/", async (req, res) => {
    res.send(JSON.stringify(RoverService.getRovers()));
});

router.get("/images/:rover", async (req, res) => {
    let date = req.query.date;
    if (date === undefined) {
        date = new Date(Date.now());
    } else {
        const split = req.query.date.split("-");
        date = new Date(Number(split[0]), Number(split[1]) - 1, Number(split[2]));
    }
    if (req.params.rover === "all") {
        const rovers = RoverService.getRovers();
        const images = {};
        for (const rover of rovers) {
            images[rover] = await RoverService.getAllImagesOnDate(rover, date);
        }
        res.send(JSON.stringify(images));
    } else if (RoverService.getRovers().indexOf(req.params.rover) !== -1) {
        res.send(JSON.stringify(await RoverService.getAllImagesOnDate(req.params.rover, date)));
    }
});

export default router;
