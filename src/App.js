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

  const [catsGallery, setCats] = useState(cats);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <div>
      {catsGallery.map((cat) => (
          <img key={Math.random()}
            onClick={(e) => {
              const shuffledCats = shuffle([...catsGallery]);
              setCats(shuffledCats);
            }}
            src={cat}
          />
        ))}
    </div>
  );
}
