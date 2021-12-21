const jobApp = {};



jobApp.proxiedUrl =
  "https://www.themuse.com/api/public/jobs?category=Software%20Engineer&location=Toronto%2C%20Canada&page=1&descending=true";

const url = new URL("http://proxy.hackeryou.com");
url.search = new URLSearchParams({
  reqUrl: jobApp.proxiedUrl,
  "params[key]":
    "f183955631a281249d35061e86b24e1e3faac9f48568a46b70341a667946b131",
  // "params[page]": 1,
  // "params[descending]": true,
  "proxyHeaders[header]": "GET",
});

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

jopApp.populateSelect = () => {
  
}