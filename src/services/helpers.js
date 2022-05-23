import { ajax } from "rxjs/ajax";
import { isEmpty } from "lodash";
import { stringify } from "qs";

const API_URL = "https://virtserver.swaggerhub.com";

export const api = (
  path,
  method = "GET",
  payload,
  params,
  token = "",
  header = "json"
) => {
  const options = {
    url: API_URL + path,
    method: method.toUpperCase(),
    headers: {},
  };

  if (!isEmpty(params)) {
    options["url"] =
      options["url"] + stringify(params, { addQueryPrefix: true });
  }

  if (payload) {
    options["body"] = payload;
  }

  if (token) {
    options["headers"]["Authorization"] = "Bearer " + token;
  }

  if (header === "json") {
    options["headers"]["Content-Type"] = "application/json";
    options["headers"]["Access-Control-Allow-Origin"] = "*";
  }
  console.log("In Api", method);
  return ajax(options);
};
