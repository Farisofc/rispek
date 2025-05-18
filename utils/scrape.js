const axios = require("axios");

const clean = e => (e = e.replace(/(<br?\s?\/>)/gi, " \n")).replace(/(<([^>] )>)/gi, "");

async function shortener(e) {
  return e;
}
