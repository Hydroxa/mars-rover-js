import express from "express";
import RoverService from "../services/RoverService";

const router = express.Router();

router.get("/", async (req, res) => {
    res.send(JSON.stringify(RoverService.getRovers()));
});

router.get("/images/:rover", async (req, res) => {
	let date = req.query.date;
	let sol = req.query.sol;
	if (date === undefined && sol === undefined) {
		date = new Date(Date.now());
	} else if (sol === undefined) {
		const split = req.query.date.split("-");
		date = new Date(Number(split[0]), Number(split[1]) - 1, Number(split[2]));
	}
	if (req.params.rover === "all") {
		const rovers = RoverService.getRovers();
		const images = {};
		for (const rover of rovers) {
			images[rover] = await RoverService.getAllImagesOnDate(rover, date ?? sol);
		}

		const returnedImages = {};
		for (const rover in images) {
			returnedImages[rover] = cleanImageObjects(images[rover]);
		}

		res.send(JSON.stringify(images));
	} else if (RoverService.getRovers().indexOf(req.params.rover) !== -1) {
		res.send(JSON.stringify(cleanImageObjects(await RoverService.getAllImagesOnDate(req.params.rover, date ?? sol))));
	}
});

function cleanImageObjects(images) {
	const roverImages = [];
	for (const image of images.photos) {
		const imgObj = {
			camera: {
				name: image.camera.name,
				fullName: image.camera.full_name,
			},
			src: image.img_src,
			sol: image.sol,
			date: image.earth_date,
		};
		roverImages.push(imgObj);
	}
	return roverImages;
}

export default router;
