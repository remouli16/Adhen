
import axios from "axios";
axios.get('http://api.aladhan.com/v1/timingsByCity', {
    params: {
      country: "DZ",
      city: "Souk Ahras"
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
   