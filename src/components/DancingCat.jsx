import { useState } from 'react';
import catImage from '../assets/images/cat.svg';
import './DancingCat.css';

function DancingCat() {
  const [isAnimating, setIsAnimating] = useState(true);

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };

  return (
    <div className="dancing-cat-container">
      <h1 className="title">춤추는 고양이</h1>
      <div className={`cat-wrapper ${isAnimating ? 'dancing' : ''}`}>
        <img src={catImage} alt="Dancing Cat" className="cat-image" />
      </div>
      <button className="control-button" onClick={toggleAnimation}>
        {isAnimating ? '멈추기' : '춤추기'}
      </button>
    </div>
  );
}

export default DancingCat;
