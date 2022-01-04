const jobApp = {};

jobApp.init = function()  {
  //jobApp.grabData();
  jobApp.captureUserInput();
}
const submitButton = document.querySelector(".searchButton")
const category = document.querySelector(".jobCategory")
const level = document.querySelector(".userLevel")


jobApp.captureUserInput = () => {
  submitButton.addEventListener("click", () => {
    const city = document.querySelector('input[name="city"]:checked');
    const categoryChoice = category.value;
    console.log(categoryChoice);
    const cityChoice = city.value;
    console.log(cityChoice)
    const levelChoice = level.value;
    console.log(levelChoice);
    jobApp.insertUserInput(categoryChoice, levelChoice, cityChoice);
  })
}

jobApp.insertUserInput = (category, level, city) => {
  jobApp.proxiedUrl =
    `https://www.themuse.com/api/public/jobs?page=1&category=${category}&location=${city}&level=${level}&descending=`;

  const url = new URL("http://proxy.hackeryou.com");
  url.search = new URLSearchParams({
    reqUrl: jobApp.proxiedUrl,
    "params[key]":
      "f183955631a281249d35061e86b24e1e3faac9f48568a46b70341a667946b131",
    // "params[page]": 1,
    // "params[descending]": true,
    "proxyHeaders[header]": "GET",
  
  })
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results);
       jobApp.filterResults(data.results);
    });
}


jobApp.filterResults = (results) => {

  results.filter((category) => {
    // console.log(category.levels[0].name);
    const jobLocation = category.locations.forEach((jobLocation) => {
      return jobLocation
    })
    console.log(jobLocation)
    const results = document.querySelector('.results');
    
    const listings = document.querySelector('.listings');

    const listing = document.createElement('li');

    listing.innerHTML = 
    `
    <h3 class='jobTitle'> ${category.name} </h3>

    <p class='jobDescription'> ${category.contents} </p>

    <p class='jobLocation'> ${jobLocation} </p>

    `

    listings.appendChild(listing)


  }) 
  
  // jobApp.displayResults(listings);
}

// jobApp.displayResults = (listingsObjects) => {
  // console.log(listingsObjects)

// }

jobApp.init();