
import React from "react";
import imageCompression from "browser-image-compression";
import { Card, Button } from "react-bootstrap";

class imageCompressor extends React.Component {
  constructor() {
    // The super() keyword forces the parent constructor to be initialised, so we can then use an object status like the this. keyword.
    super();
    this.state = {
      // Compressed link will store the link of the compressed image.
      compressedLink: "Http",
      // Original is empty by default and will update when user chooses a photo.
      originalImage: "",
      originalLink: "",
      clicked: false,
      uploadImage: false,
    };
  }

  // This is a handler function....
  handle = (e) => {
    const imageFile = e.target.files[0];
    // event.target.files allows you to access a list of uploaded files. We can then get the first file since we process an image at a time using e.target.files[0]. To change the state we use setState to set the originalLink, originalImage, output filename, and upload image state as shown above.
    this.setState({
      originalLink: URL.createObjectURL(imageFile),
      originalImage: imageFile,
      outputFileName: imageFile.name,
      uploadImage: true,
    });
  };
}


