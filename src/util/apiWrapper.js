import Cookies from "js-cookie";

export const api_host = process.env.REACT_APP_API_HOST
  ? process.env.REACT_APP_API_HOST
  : "localhost";
export const api_port = process.env.REACT_APP_API_PORT
  ? process.env.REACT_APP_API_PORT
  : "8089";

const api_url =
  process.env.NODE_ENV === "production"
    ? `https://${api_host}`
    : `http://${api_host}:${api_port}`;

const methods = ["POST", "PUT", "PATCH"];

const clearDataAndRedirect = () => {
  Cookies.remove("auth_token");
  Cookies.remove("user_role");
  Cookies.remove("user_name");
  Cookies.remove("auth_expires");
  Cookies.remove("org_id");

  localStorage.removeItem("authData");
  localStorage.removeItem("breadCrumbTrail");
  window.location.reload();
};

export default function asyncAPICall(
  api_endpoint,
  method = "GET",
  body = {},
  response_callback_method = null,
  data_callback_method = null,
  catch_callback_method = null,
  signal = null,
  require_auth_token = false,
  headers = null,
  doNotStringifyBody = false
) {
  let auth_token = Cookies.get("auth_token");

  if (require_auth_token) {
    if (!auth_token) {
      console.log("Auth Token Required");
      return false;
    }

    let expiration = Cookies.get("auth_expires");

    if (Date.parse(expiration) < Date.now()) {
      // We have an expired token, so, break
      console.log("Expired Auth Token");

      clearDataAndRedirect();
      return false;
    }
  } else {
    headers = headers ? headers : { "content-type": "application/json" };
  }

  if (auth_token || !require_auth_token) {
    if (!headers) {
      headers = {
        "content-type": "application/json",
        "Auth-Token": auth_token,
      };
    } else if (require_auth_token) {
      if (!("Auth-Token" in headers)) {
        headers["Auth-Token"] = auth_token;
      }
    }

    let payload = { method: method, headers: headers };

    if (methods.includes(method.toUpperCase().trim())) {
      if (doNotStringifyBody) {
        payload.body = body;
      } else {
        payload.body = JSON.stringify(body);
      }
    }

    let response_function = (response) => {
      if (response.ok) {
        return response.json();
      } else if (response.status === 403 || response.status === 401) {
        clearDataAndRedirect();
        return;
      }

      let error = new Error(response.statusText);
      error.response = response;
      throw error;
    };

    if (response_callback_method) {
      response_function = response_callback_method;
    }

    let data_function = (data) => {};

    if (data_callback_method) {
      data_function = data_callback_method;
    }

    let catch_function = (error) => console.log(error);

    if (catch_callback_method) {
      catch_function = catch_callback_method;
    }

    if (signal) {
      payload.signal = signal;
    }

    fetch(`${api_url}${api_endpoint}`, payload)
      .then((response) => response_function(response))
      .then((response) => data_function(response))
      .catch((response) => catch_function(response));

    return true;
  } else {
    return false;
  }
}

export function awaitAPICall(
  api_endpoint,
  method = "GET",
  body = {},
  response_callback_method = null,
  data_callback_method = null,
  catch_callback_method = null,
  signal = null,
  require_auth_token = true
) {
  let auth_token = Cookies.get("auth_token");
  let expiration = Cookies.get("auth_expires");

  if (Date.parse(expiration) < Date.now()) {
    // We have an expired token, so, break
    console.log("Expired Auth Token");
    return false;
  }

  if (auth_token || !require_auth_token) {
    let payload = {
      method: method,
      headers: { "content-type": "application/json" },
    };

    if (auth_token) {
      payload.headers.auth_token = auth_token;
    }

    if (methods.includes(method.toUpperCase().trim())) {
      payload.body = JSON.stringify(body);
    }

    let response_function = (response) => {
      if (response.ok) {
        return response.json();
      } else if (response.status === 403 || response.status === 401) {
        // Cookies.remove('auth_token');
        return;
      }

      let error = new Error(response.statusText);
      error.response = response;
      throw error;
    };

    if (response_callback_method) {
      response_function = response_callback_method;
    }

    let data_function = (data) => {};
    if (data_callback_method) {
      data_function = data_callback_method;
    }

    let catch_function = (error) => console.log(error);

    if (catch_callback_method) {
      catch_function = catch_callback_method;
    }

    if (signal) {
      payload.signal = signal;
    }

    let fetchFromAPI = async () => {
      try {
        let response = await fetch(`${api_url}${api_endpoint}`, payload);
        let results = await response_function(response);
        await data_function(results);
      } catch (error) {
        catch_function(error);
        return false;
      }
    };

    fetchFromAPI();

    return true;
  } else {
    return false;
  }
}
