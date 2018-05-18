/**
 * connector between the client and the server.
 *
 * Promise based HTTP client for the browser and node.js
 */
import axios from 'axios';

export default() => axios.create({
  baseURL: 'http://localhost:8081',
});
