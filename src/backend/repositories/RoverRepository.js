import got from "got";
import { nasaKey } from "../config";
class RoverRepository {
    static buildQuery(resource, options) {
        const baseURL = "https://api.nasa.gov/mars-photos/api/v1/rovers/";
        const withResource = baseURL + resource + `?key=${nasaKey}`;
        let optionString = "";
        for (const key in options) {
            const option = options[key];
            optionString += `&${key}=${option}`;
        }
        const withOptions = withResource + optionString;

        return withOptions;
    }
    static async doQuery(url) {
        const body = await got(url).json();
        return body;
    }
}
