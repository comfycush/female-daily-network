import { api } from "./helpers";

export const getData = () =>
  api("/hqms/FDN-WP/0.1/wp", "GET", undefined, undefined, undefined);
