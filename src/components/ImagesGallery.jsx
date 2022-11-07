import React, { useEffect } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

export const ImagesGallery = ({all_data}) => {
  const [images, setImages] = React.useState(null);
  
  React.useEffect(() => {
    let shouldCancel = false;
    setImages([]);
    const call =  () => {
      const response = all_data;
      console.log(response)
            
      if (!shouldCancel && response && response.length > 0) {
        setImages(
          response.map((data)=> ({
            original:data.urls.regular,
            thumbnail:data.urls.regular
          }))
        );
      }
    };

      call((all_data))
  
    return () => (shouldCancel = true);
  }, [all_data]);



  console.log(all_data)

  return( images ? <ImageGallery items={images}  /> : null);

};



