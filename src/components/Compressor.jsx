// Call react useState module from react...
import React, { useState } from "react";
// Add in the call to browser-image-compressor...
import imageCompression from "browser-image-compression";
// Import card component from bootstrap, just in case required...
import { Card } from "react-bootstrap";
//
//
//
//
//
// ----------------------------------------- FUNCTIONAL LOGIC ---------------------------------------------------
//
//
// This will be the main function for the image compressor.
// This function will be called by the App.jsx file.
function Compressor() {
  // Firstly, we will assign the state variables.
  // State variables allow react components to manage and store data that changes over time.
  // State variables trigger a re-render of the component when their value changes.
  // This dynamic behaviour enables react components to return active data updates.
  // We declare the state variable by using the "useState" hook.
  // The "useState" hook returns an array with two elements...
  // The current state value and a function to update that state value.
  const [compressedLink, setCompressedLink] = useState("");
  const [originalImage, setOriginalImage] = useState("");
  const [originalLink, setOriginalLink] = useState("");
  const [clicked, setClicked] = useState("");
  const [uploadImage, setUploadImage] = useState("");
  const [outputFileName, setOutputFileName] = useState("");
  //
  //
  //
  // Here is a nested function which will handle the uploading of a user image.
  // As the function parameter, we set it to event.
  // The JS event object is created giving us access to its parameters if needed.
  function uploadLink(event) {
    // Get the image file which the user has uploaded.
    // This is done using the file API.
    // The file API allows web content to select local user files and read the content of those files.
    // This can be done either using a HTML <input type="file> or drag and drop"
    // We are using the HTML version included below on line..
    // which is then stored in a variable.
    const imageFile = event.target.files[0];
    // Create a DOMstring containing a URL that represents the imageFile.
    // A DOMstring is an interface for UTF-16 strings.
    // JS already uses UTF-16 strings so any instance of a JS string is automatically a DOMstring.
    // Its use is meant to cover any implementation that does not start with a UTF-16.
    // It is meant as standardiser.
    setOriginalLink(URL.createObjectURL(imageFile));
    // Here is where we set the original image link, name of output file and upload image state.
    setOriginalImage(imageFile);
    setOutputFileName(imageFile.name);
    setUploadImage(true);
  }
  //
  //
  //
  // This function will be called when the user clicks on the compress button.
  // Again we set the parameter to be the event object. In this case being the click of the compress button.
  function click(e) {
    // prevent default is specified here at the start of the code block to catch any unwanted behaviour
    // from happening if the button is clicked for whatever reason before the rest of the code is executed.
    e.preventDefault();
    //
    // Here we initalise an object with a few constraints for our image options.
    const options = {
      maxSizeMB: 4,
      maxWidthOrHeight: 800,
      useWebWorker: true,
    };
    //
    // Here is a conditional to check the uploaded image is of a minimum size and is worth compressing.
    if (options.maxSizeMB >= originalImage.size / 1024) {
      alert("Sorry, you need a larger image");
      return 0;
    }
    //
    // This section of code will compress the image and create a download link for the compressed image.
    let output;
    imageCompression(originalImage, options).then((x) => {
      output = x;
      const downloadLink = URL.createObjectURL(output);
      setCompressedLink(downloadLink);
    });
    setClicked(true);
    return 1;
  }
  //
  //
  //
  //
  //
  // -------------------------------------------------- COMPONENT STYLING ------------------------------------
  //
  //
  // Set a return, to display the component on the page.
  //
  return (
    <div className="top-level-container">
      <div className="upload-container">
        <Card.Img className="image" variant="top" src={originalLink}></Card.Img>
      </div>
      <div className="compress-button"></div>
      <div className="download-container"></div>
    </div>
  );
}

export default Compressor;
