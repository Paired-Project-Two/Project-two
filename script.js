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
    const cityChoice = city;
    
    const levelChoice = level.value;
    console.log(levelChoice);
    
    if (categoryChoice === "null") {
      document.querySelector("#category_error").style.display = "block";
      categoryError = "Please select a category";
      document.getElementById("category_error").innerHTML = categoryError;
      formError = "Search missing information, please review selections";
      document.getElementById("form_error").innerHTML = formError;
      return;
    } else {
      formApproved = "";
      document.getElementById("location_error").innerHTML = formApproved;
      document.getElementById("form_error").innerHTML = formApproved;
      document.getElementById("category_error").innerHTML = formApproved;
    }

    if (cityChoice === null) {
      
      cityError = "Please select a city";
      document.getElementById("location_error").innerHTML = cityError;
      formError = "Search missing information, please review selections";
      document.getElementById("form_error").innerHTML = formError;
      return; 
    } else {
        formApproved = "";
        document.getElementById("location_error").innerHTML = formApproved;
        document.getElementById("form_error").innerHTML = formApproved;
        document.getElementById("category_error").innerHTML = formApproved; 
    }
    console.log(cityChoice.value)
    const emptyDiv = "";
    document.querySelector(".listings").innerHTML = emptyDiv;
    jobApp.insertUserInput(categoryChoice, levelChoice, cityChoice.value);
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