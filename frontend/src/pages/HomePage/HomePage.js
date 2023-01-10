// todo: Add search box and search button
    // Upon user search, use the API #1 to pull videos from Youtube with that search criteria
    // Create onClick event to take user's to "SearchResults" page that gives them the 'related vids' -- API #3
// todo: route the Login button to the <Login> page
    //
// todo: route the 'brand' back to the original home page
    //
    
    // import React from "react";
    // import { useEffect, useState } from "react";
    // import useAuth from "../../hooks/useAuth";
    
    // import axios from "axios";
    
    // const HomePage = () => {
    //   // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
    //   // The "token" value is the JWT token that you will send in the header of any request requiring authentication
    //   //TODO: Add an AddCars Page to add a car for a logged in user's garage
    //   const [user, token] = useAuth();
    //   const [cars, setCars] = useState([]);
    
    //   useEffect(() => {
    //     const fetchCars = async () => {
    //       try {
    //         let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
    //           headers: {
    //             Authorization: "Bearer " + token,
    //           },
    //         });
    //         setCars(response.data);
    //       } catch (error) {
    //         console.log(error.response.data);
    //       }
    //     };
    //     fetchCars();
    //   }, [token]);
    //   return (
    //     <div className="container">
    //       <h1>Home Page for {user.username}!</h1>
    //       {cars &&
    //         cars.map((car) => (
    //           <p key={car.id}>
    //             {car.year} {car.model} {car.make}
    //           </p>
    //         ))}
    //     </div>
    //   );
    // };
    
    // export default HomePage;
    


// try {
//   let response = await axios.get("http://192.168.1.172:3000", {
//     headers: {
//       Authorization: "Bearer " + token,
//     },
//   });
//   setCars(response.data);
// } catch (error) {
//   console.log(error.response.data);
// }
// };
// fetchCars();