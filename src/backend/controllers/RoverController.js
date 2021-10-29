import express from "express";
import * as RoverService from "../services/RoverService";

const router = express.Router();

router.get("/:rover/images", async (req, res) => {
    const sol = req.query.sol;
    if (req.params.rover === "all") {
        const rovers = RoverService.getRovers();
        const images = {};
        for (const rover of rovers) {
            images[rover] = await RoverService.getAllImagesOnSol(rover, sol);
        }

        const returnedImages = {};
        for (const rover in images) {
            returnedImages[rover] = cleanImageObjects(images[rover]);
        }

        res.send(images);
    } else if (RoverService.getRovers().indexOf(req.params.rover) !== -1) {
        res.send(cleanImageObjects(await RoverService.getAllImagesOnSol(req.params.rover, sol)));
    }
});

function cleanImageObjects(images) {
    const roverImages = images.photos.map((image) => {
        const imgObj = {
            camera: {
                name: image.camera.name,
                fullName: image.camera.full_name,
            },
            src: image.img_src,
            sol: image.sol,
            date: image.earth_date,
        };
        return imgObj;
    });
    return roverImages;
}

export default router;
