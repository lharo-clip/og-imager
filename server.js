
// server.js
require('dotenv/config') // require the dotenv/config at beginning of file
const express = require("express");
const generateImage = require("./utils/generateImage");
const { getCompiledHTML } = require("./utils/compileTemplate");

const app = express();
const port = process.env.PORT || 3000;

const opengraph = process.env.OPENGRAPH_LOGO
const dns = process.env.IMAGE_DNS

app.get('/', (req, res) => {
  const compiledHTML = getCompiledHTML(req.query);

  res.status(200).send(compiledHTML);
})

app.get('/ogimage', async (req, res) => {
  try {
    const { proxy_merchant_id, img } = req.query;
    console.log('req.query', req.query)
    const compiledHTML = getCompiledHTML({
      ...req.query,
      og_background: opengraph,
      logo_image: `${dns}/${proxy_merchant_id}/${img}`,
    });
  
    const image = await generateImage({
      content: compiledHTML
    });
      
    res.writeHead(200, { 'Content-Type': 'image/png', 'Cache-Control': `public, immutable, no-transform, s-max-age=2592000, max-age=2592000` });
    res.end(image);
  } catch(e) {
    console.log(e);
    res.status(500).send('Internal Server Error!')
  }
});


app.listen(port, () => {
  console.log(`app listening at ${port}`)
});