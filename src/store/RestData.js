import Axios from "axios";
import { DataTypes } from "./Types";

const protocol = "https";
const hostname = "api.sunrise-sunset.org";
const baseUrl = `${protocol}://${hostname}`;

const RestUrl = {
  [DataTypes.SUNRISESUNSET]: `${baseUrl}/json`,
};

export const GetData = (dataType, params) =>
    Axios.get(RestUrl[dataType], params);