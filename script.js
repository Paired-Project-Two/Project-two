const jobApp = {};

jobApp.init = function()  {
  //jobApp.grabData();
  jobApp.captureUserInput();
}
const submitButton = document.querySelector(".searchButton")
const category = document.querySelector(".jobCategory")
const level = document.querySelector(".userLevel")
const resultsDiv = document.querySelector('.results');

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
<<<<<<< HEAD
    const jobLocation = category.locations.forEach((jobLocation) => {
      console.log(jobLocation)
    })
    console.log(jobLocation)
    const results = document.querySelector('.results');
=======
    
    
   
   
>>>>>>> c476f0d8a65c8e72099774b9636eb2ab3f7b07fe
    
    const listings = document.querySelector('.listings');

    const listing = document.createElement('li');

    listing.innerHTML = 
    `
    <h3 class='jobTitle'> ${category.name} </h3>

    <p class='jobDescription'> ${category.contents} </p>
    <p class='jobURL'>Job Portal: <a href="${category.refs.landing_page}">Portal Link</a></p>
    <p class='jobLocation'>Primary Location: </p>

    `

    listings.appendChild(listing)
    category.locations.forEach((jobLocation) => {
      listing.innerHTML += `<p>${jobLocation.name}.  </p>`
    })

  }) 
  
  // jobApp.displayResults(listings);
}

// jobApp.displayResults = (listingsObjects) => {
  // console.log(listingsObjects)

// }

jobApp.init();