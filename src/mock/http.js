import axios from 'axios';
import { initializeAxiosMockAdapter, isMockEnabled } from './mock.config';

let instance = axios.create({
  // baseURL: "http://localhost:8008",
  headers: { 'Content-type': 'application/json' }
});
if (isMockEnabled()) {
  initializeAxiosMockAdapter(instance);
}

export const http = instance;
