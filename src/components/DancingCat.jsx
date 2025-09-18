import { useAnimation } from '../hooks/useAnimation';
import catSvg from '../assets/images/cat.svg';
import './DancingCat.css';
import '../styles/animations.css';

function DancingCat() {
  const { isAnimating, animationType, isAutoMode, toggleAnimation } = useAnimation();

  const getSpeechText = () => {
    if (isAutoMode) {
      return `🔀 자동모드로 ${animationType} 춤을 춰요! 🎵`;
    }
    if (isAnimating) {
      return `🎵 ${animationType} 춤을 춰요! 🎵`;
    }
    return '클릭하거나 스페이스바를 눌러 춤춰주세요! 🐾';
  };

  return (
    <div className="dancing-cat-container">
      <div
        className={`cat ${isAnimating ? `animate-${animationType}` : ''} ${isAutoMode ? 'auto-mode' : ''}`}
        onClick={toggleAnimation}
        style={{ animationDuration: isAnimating ? '1s' : 'none' }}
      >
        <img src={catSvg} alt="Dancing Cat" />
      </div>
      <div className="cat-speech">
        {getSpeechText()}
      </div>
    </div>
  );
}

export default DancingCat;