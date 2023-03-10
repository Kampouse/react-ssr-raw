import express from 'express';
import { renderToString } from 'react-dom/server';
import App from './src/App';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use('/assets', express.static(path.resolve(__dirname, '../client/assets')));

app.get('/', (req, res) => {
  try {
    const html = fs.readFileSync(
      path.resolve(__dirname, '../client/index.html'),
      {
        encoding: 'utf8',
      }
    );

    const renderedHtml = renderToString(<App />);
    html.replace('<!--ssr-outlet-->', renderedHtml);
    console.log(html);
    console.log(renderedHtml)

    res.status(200).send(html);
  } catch (e) {
    // @ts-ignore
    console.log(e.message);
    res.status(500).send('server error');
  }
});

export default app;
