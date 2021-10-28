import got from "got";
import { nasaKey } from "../config";
export function buildQuery(resource, options) {
    const baseURL = "https://api.nasa.gov/mars-photos/api/v1/rovers/";
    const withResource = baseURL + resource + `?api_key=${nasaKey}`;
    let optionString = "";
    for (const key in options) {
        const option = options[key];
        optionString += `&${key}=${option}`;
    }
    const withOptions = withResource + optionString;

    return withOptions;
}
export async function doQuery(url) {
    const body = await got(url).json();
    return body;
}
export async function getPhotosForRover(rover, options) {
    const query = RoverRepository.buildQuery(`${rover}/photos`, options);
    const result = await RoverRepository.doQuery(query);

    return result;
}
