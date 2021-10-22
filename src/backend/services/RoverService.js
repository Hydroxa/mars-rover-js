import RoverRepository from "../repositories/RoverRepository";
class RoverService {
    static getRoverCams(rover) {
        if (rover === "curiosity") {
            return ["FHAZ", "RHAZ", "MAST", "CHEMCAM", "MAHLI", "MARDI", "NAVCAM"];
        } else {
            return ["FHAZ", "RHAZ", "NAVCAM", "PANCAM", "MINITES"];
        }
    }
    static getRovers() {
        const rovers = {
            Curiosity: "curiosity",
            Opportunity: "opportunity",
            Spirit: "spirit",
        };
        return rovers;
    }
    static async getAllImagesOnDate(rover, date) {
        const options = {
            earth_date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
        };
        const query = RoverRepository.buildQuery(`${rover}/photos`, options);
        const result = await RoverRepository.doQuery(query);

        return result;
    }
    static async getAllImagesOnSol(rover, sol) {
        const options = {
            sol: sol,
        };
        const query = RoverRepository.buildQuery(`${rover}/photos`, options);
        const result = await RoverRepository.doQuery(query);

        return result;
    }
    static async getCameraOnDate(rover, date, camera) {
        const options = {
            earth_date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
            camera: camera,
        };
        const query = RoverRepository.buildQuery(`${rover}/photos`, options);
        const result = await RoverRepository.doQuery(query);

        return result;
    }
    static async getCameraOnSol(rover, sol, camera) {
        const options = {
            sol: sol,
            camera: camera,
        };
        const query = RoverRepository.buildQuery(`${rover}/photos`, options);
        const result = await RoverRepository.doQuery(query);

        return result;
    }
}

export default RoverService;
