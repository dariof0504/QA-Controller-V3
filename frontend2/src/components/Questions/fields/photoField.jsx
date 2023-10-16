import { useState } from "react";

export const PhotoField = () => {
  const [urlPhoto, setUrlPhoto] = useState("");
  const [photoFile, setPhotoFile] = useState("");

  const handleFile = (e) => {
    const file = e.target.files[0];
    setUrlPhoto(URL.createObjectURL(file))
    setPhotoFile(file);
  };

  const sendPhoto = (e) => {
    e.preventDefault()

    const formData = new FormData()

    formData.append('arrchivo','asdasd')
    console.log(formData)

  } 


  return (<div>
    <img src={urlPhoto} ></img>
    <input type="file" onChange={e => handleFile(e)} />
    <button onClick={ e => sendPhoto(e)} >Enviar</button>
  </div>);
};
