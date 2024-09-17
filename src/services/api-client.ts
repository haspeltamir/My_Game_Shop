// /*
// here we will create a new instance of axios client
// with a custom configuration

// * in headers we can set the content type to application/json, and api-key and authorization token
// */
// import axios, { CanceledError } from "axios";
// // import axios from "axios";

// // axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
// // axios.defaults.headers.post["Content-Type"] = "application/json";
// // export default axios ;

// export default axios.create({
//   // baseURL: "DB.json",
//   baseURL: "/",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// export { CanceledError };

/*************************************************************************/
import axios from "axios";

export default axios.create({
  // baseURL: "https://api.rawg.io/api",
  baseURL: import.meta.env.VITE_SERVER_URL,
  params: {
    // key: import.meta.env.Private_Key,
    key: import.meta.env.VITE_Private_Key_For_My_Game_Shop,
  },
});

/*************************************************************************/
// import axios from "axios";

// const isDevelopment = process.env.NODE_ENV === "development";
// // the DB is in the public folder, so we can access it directly
// const localBaseURL = isDevelopment ? "/" : "https://api.rawg.io/api";

// export default axios.create({
//   baseURL: localBaseURL,
//   // Remove params if you are not using them for local JSON
// });

/*************************************************************************/

// import axios from "axios";

// const apiClient = axios.create({
//   baseURL: "http://localhost:3000",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// export default apiClient;

/*************************************************************************/

// import axios, { CanceledError } from "axios";

// export default axios.create({
//   baseURL: "/api", // This should match the proxy entry in vite.config.js
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// export { CanceledError };
