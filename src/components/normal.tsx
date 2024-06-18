import { createSignal } from "solid-js";

export default function NormalProgressBar(props: { progress: number }) {
  const clampedProgress = Math.min(Math.max(props.progress, 0), 100);
  
  function getProgress() {
    const numericProgress = Number(props.progress);
    const clampedValue = Math.min(Math.max(numericProgress, 0), 100);
    return clampedValue;
  }
  return (
    <div style={{
      width: '60%',
      height: '30px',
      background: 'transparent',
      "border-radius": '5px',
      border: '3px solid #e0e0e0',
      overflow: 'hidden',
      margin: '20px auto' // Changed from '20px 0' to '20px auto' to center the div
    }}>
      <div style={{
        width: `${getProgress()}%`,
        height: '100%',
        background: '#e0e0e0',
        "border-radius": '5px 0 0 5px',
        transition: 'width 0.3s ease-in-out'
      }} />
    </div>
  );
}
