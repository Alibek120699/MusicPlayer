import { DataTypes } from "./Types";

const protocol = "http";
const hostname = "localhost";
const port = 3500;

export const RestUrls = {
    [DataTypes.SONGS]: `${protocol}://${hostname}:${port}/api/songs`,
    [DataTypes.CATEGORIES]: `${protocol}://${hostname}:${port}/api/categories`,
}