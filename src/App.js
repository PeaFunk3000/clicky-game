import "./App.css";
import { useState } from "react";

const cats = [
  `${process.env.PUBLIC_URL}/images/Garfield.png`,
  `${process.env.PUBLIC_URL}/images/Catdog.png`,
  `${process.env.PUBLIC_URL}/images/Cheshire.png`,
  `${process.env.PUBLIC_URL}/images/Felix.png`,
  `${process.env.PUBLIC_URL}/images/Meowth.png`,
  `${process.env.PUBLIC_URL}/images/RandS.png`,
  `${process.env.PUBLIC_URL}/images/Seuss.png`,
  `${process.env.PUBLIC_URL}/images/Sylvester.png`,
  `${process.env.PUBLIC_URL}/images/Tigger.png`,
  `${process.env.PUBLIC_URL}/images/Tom.png`,
  `${process.env.PUBLIC_URL}/images/Tommy.png`,
  `${process.env.PUBLIC_URL}/images/Topcat.png`,
];

export default function App() {

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const [catsGallery, setCatsGallery] = useState(cats);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [selectedCats, setSelectedCats] = useState([]);

  return (
    <div>
      {catsGallery.map((cat) => (
          <img key={Math.random()}
            onClick={(e) => {
              if (selectedCats.includes(cat)) {
                console.log("YOU LOSE")
                setSelectedCats([]);
              } else {
              const shuffledCats = shuffle([...catsGallery]);
              setCatsGallery(shuffledCats);
              const copySelectedCats = [...selectedCats, cat];
              setSelectedCats(copySelectedCats);
              console.log(copySelectedCats);
            }}}
            src={cat}
          />
        ))}
    </div>
  );
}
