import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { ImagesGallery } from "./components/ImagesGallery";
import Loader from "./components/loader";


function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("random");

  const fetchUrl = `https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_API_KEY}&query=${query}`;


  const fetchImages = () => {
    axios
      .get(fetchUrl, {
        headers: {},
      })
      .then((response) => {
        
     
         setTimeout(() => {
          setData(response.data.results);
         }, 2000);
       
      })
      .catch((error) => {
        console.log(error);
      });
    
  };

  
  const searchImages = (e) => {
    if (e.keyCode === 13) {
      setQuery(e.target.value);
      setData([]);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [query]);


  console.log(data)

  return (
    <div>
      {
        data.length!==0? (

          <div className="App flex">
          <input
            type="text"
            onKeyDown={(e) => searchImages(e)}
            placeholder="Search For Images "
          />
          <div className="imagegall">
          <ImagesGallery all_data={data}   />
            </div>
        </div>
        ):(
          <div><Loader/></div>
        )
      }
    </div>
    
  );
}

export default App;
