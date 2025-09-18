import { useAnimation } from '../hooks/useAnimation';
import './AnimationControls.css';

function AnimationControls() {
  const {
    isAnimating,
    animationType,
    isAutoMode,
    animationSpeed,
    toggleAnimation,
    changeAnimationType,
    toggleAutoMode,
    changeAnimationSpeed,
    stopAllAnimations
  } = useAnimation();

  const animationTypes = [
    { key: 'bounce', name: '바운스', emoji: '⬆️', shortcut: '1' },
    { key: 'wiggle', name: '흔들기', emoji: '↔️', shortcut: '2' },
    { key: 'spin', name: '회전', emoji: '🔄', shortcut: '3' },
    { key: 'dance', name: '댄스', emoji: '💃', shortcut: '4' }
  ];

  const speedOptions = [
    { value: 0.5, label: '느림' },
    { value: 1, label: '보통' },
    { value: 1.5, label: '빠름' },
    { value: 2, label: '매우 빠름' }
  ];

  return (
    <div className="animation-controls">
      <div className="main-controls">
        <button
          className={`main-control ${isAnimating ? 'active' : ''}`}
          onClick={toggleAnimation}
          title="스페이스바로도 토글 가능"
        >
          {isAnimating ? '⏸️ 멈추기' : '▶️ 춤추기'}
        </button>

        <button
          className={`auto-control ${isAutoMode ? 'active' : ''}`}
          onClick={toggleAutoMode}
          title="A키로도 토글 가능"
        >
          {isAutoMode ? '🔀 자동모드 ON' : '🔀 자동모드 OFF'}
        </button>

        <button
          className="stop-control"
          onClick={stopAllAnimations}
          title="ESC키로도 정지 가능"
        >
          ⏹️ 모두 정지
        </button>
      </div>

      <div className="animation-types">
        <h3>춤 스타일 선택:</h3>
        <div className="type-buttons">
          {animationTypes.map(type => (
            <button
              key={type.key}
              className={`type-button ${animationType === type.key ? 'active' : ''}`}
              onClick={() => changeAnimationType(type.key)}
              title={`${type.shortcut}키로도 선택 가능`}
            >
              <span className="emoji">{type.emoji}</span>
              <span className="name">{type.name}</span>
              <span className="shortcut">({type.shortcut})</span>
            </button>
          ))}
        </div>
      </div>

      <div className="speed-control">
        <h3>애니메이션 속도:</h3>
        <div className="speed-buttons">
          {speedOptions.map(option => (
            <button
              key={option.value}
              className={`speed-button ${animationSpeed === option.value ? 'active' : ''}`}
              onClick={() => changeAnimationSpeed(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="keyboard-help">
        <h4>⌨️ 키보드 단축키:</h4>
        <div className="help-text">
          <span>스페이스: 시작/정지</span>
          <span>1-4: 춤 스타일</span>
          <span>A: 자동모드</span>
          <span>ESC: 모두 정지</span>
        </div>
      </div>
    </div>
  );
}

export default AnimationControls;