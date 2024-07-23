import "./App.css";
import Container from "./components/Container";
import Header from "./components/Header";
import PhotosList from "./components/PhotosList";
import { Ellipsis } from "react-spinners-css";
import { usePhoto } from "./hooks/usePhoto";
import Modal from "./components/Modal";
import { useState } from "react";
import axios from "axios";

function App() {
  const { photos, isLoading, isError, handleRandomClick } = usePhoto();
  const [showModal, setShowModal] = useState(false);
  const [quote, setQuote] = useState({});

  const handlePhotoClick = () => {
    axios
      .get("https://api.quotable.io/random")
      .then((res) => {
        setQuote(res.data);
        setShowModal(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <Header handleRandomClick={handleRandomClick} />
      {isLoading && <Ellipsis color="#E5E7EB" size={80} />}
      {isError && (
        <h2 className="text-2xl text-red-900 x">
          Sorry, An error has been occurred!
        </h2>
      )}
      {!isLoading && !isError && (
        <PhotosList photos={photos} handlePhotoClick={handlePhotoClick} />
      )}
      <Modal show={showModal} quote={quote} close={() => setShowModal(false)} />
    </Container>
  );
}

export default App;
