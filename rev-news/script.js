fetch('https://api.geoapify.com/v1/ipinfo?apiKey=')
  .then(response => response.json())
  .then(data => {
    // You can now access the location data in the "data" object
    console.log(data.country.iso_code);
  })