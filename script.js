const jobApp = {};

jobApp.init = function()  {
  jobApp.grabData();
}

jobApp.proxiedUrl =
  "https://www.themuse.com/api/public/jobs?page=1&descending=";

const url = new URL("http://proxy.hackeryou.com");
url.search = new URLSearchParams({
  reqUrl: jobApp.proxiedUrl,
  "params[key]":
    "f183955631a281249d35061e86b24e1e3faac9f48568a46b70341a667946b131",
  // "params[page]": 1,
  // "params[descending]": true,
  "proxyHeaders[header]": "GET",
});


jobApp.grabData = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data.results);
      jobApp.filterResults(data.results);
    });
  
}

jobApp.filterResults = (results) => {
  results.filter((category) => {
    // console.log(category.sr_name);
    return category.name = "Software Engineer";
    
  }) 
  console.log(results)
}
jobApp.init();