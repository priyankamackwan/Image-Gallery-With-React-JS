import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { ImagesGallery } from "./components/ImagesGallery";


function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("random");

  const fetchUrl = `https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_API_KEY}&query=${query}`;

  console.log(process.env.REACT_APP_API_KEY)
  const fetchImages = () => {
    axios
      .get(fetchUrl, {
        headers: {},
      })
      .then((response) => {
        
        setData(response.data.results);
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


  return (
    <div className="App flex">
      <input
        type="text"
        onKeyDown={(e) => searchImages(e)}
        placeholder="Search For Images "
      />
      <ImagesGallery all_data={data} />
    </div>
  );
}

export default App;
