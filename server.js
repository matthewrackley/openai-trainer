import express from 'express';
import open from 'open'
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';
import { headers } from './lib/js/events/csp.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const url = process.env.URL;
const port = process.env.PORT;
const srvpath = process.env.SRV_PATH;
const clientpath = url + ':' + port + process.env.CLIENT_PATH;
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, './')));

app.get('/', (req, res) => {
  res.setHeader(`${ headers.cspV }`, `${ headers.source };`);
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.sendFile(path.join(__dirname, 'index.jsx'));
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${ port }`);
  open(`http://192.168.1.39:${ port }`);
});
