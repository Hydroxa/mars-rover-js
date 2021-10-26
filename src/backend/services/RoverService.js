import RoverRepository from "../repositories/RoverRepository";
const curiosityCameras = ["FHAZ", "RHAZ", "MAST", "CHEMCAM", "MAHLI", "MARDI", "NAVCAM"];
const spiritOpportunityCameras = ["FHAZ", "RHAZ", "NAVCAM", "PANCAM", "MINITES"];
const rovers = ["curiosity", "opportunity", "spirit"];
class RoverService {
    static getRoverCams(rover) {
        if (rover === "curiosity") {
            return curiosityCameras;
        } else {
            return spiritOpportunityCameras;
        }
    }
    static getRovers() {
        return rovers;
    }
    static async getAllImagesOnSol(rover, sol) {
        const options = {
            sol: sol,
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
