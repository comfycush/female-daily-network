import { createEpic } from "../helpers";
import { getDataAsync } from "./dataActions";

export const getDataEpic = createEpic(getDataAsync, "data", "getData");
