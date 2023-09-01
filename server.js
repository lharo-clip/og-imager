
// server.js
require('dotenv/config') // require the dotenv/config at beginning of file
const express = require("express");
const generateImage = require("./utils/generateImage");
const { getCompiledHTML } = require("./utils/compileTemplate");

const app = express();
const port = process.env.PORT || 3000;

const opengraph = "https://raw.githubusercontent.com/lharo-clip/Assets/main/OG_img.jpg"

const dns = process.env.IMAGE_DNS

app.get('/', (req, res) => {
  const compiledHTML = getCompiledHTML(req.query);

  res.status(200).send(compiledHTML);
})

app.get('/ogimage', async (req, res) => {
  try {
    const { proxy_merchant_id, img } = req.query;

    const compiledHTML = getCompiledHTML({
      ...req.query,
      og_background: "https://raw.githubusercontent.com/lharo-clip/Assets/main/OG_img.jpg",
      logo_image: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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