import * as RoverRepository from "../repositories/RoverRepository";
const curiosityCameras = ["FHAZ", "RHAZ", "MAST", "CHEMCAM", "MAHLI", "MARDI", "NAVCAM"];
const spiritOpportunityCameras = ["FHAZ", "RHAZ", "NAVCAM", "PANCAM", "MINITES"];
const rovers = ["curiosity", "opportunity", "spirit"];
export function getRoverCams(rover) {
    if (rover === "curiosity") {
        return curiosityCameras;
    } else {
        return spiritOpportunityCameras;
    }
}
export function getRovers() {
    return rovers;
}
export async function getAllImagesOnSol(rover, sol) {
    const options = {
        sol: sol,
    };

    return await RoverRepository.getPhotosForRover(rover, options);
}
export async function getCameraOnSol(rover, sol, camera) {
    const options = {
        sol: sol,
        camera: camera,
    };

    return await RoverRepository.getPhotosForRover(rover, options);
}
