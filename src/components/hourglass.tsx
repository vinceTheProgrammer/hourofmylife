import { createSignal, onCleanup } from "solid-js";

export default function HourglassProgressBar(props: { progress: any; }) {

  const hourglassSectionHeight = 50;

  // Transform the progress prop, for example, ensuring it's a number and clamping it between 0 and 100
  const getTransformedProgress = () => {
    const numericProgress = Number(props.progress);
    const clampedValue = Math.min(Math.max(numericProgress, 0), 100);
    const normalizedValue = clampedValue / 100; // Normalizes the value to range 0 to 1
    return Math.pow(normalizedValue, 2) * 100;
  };

  return (
    <div style={{ position: 'relative', width: '100px', height: `${hourglassSectionHeight * 4 + 10}px`, margin: '20px auto' }}>
      <svg style={{height: '215px'}}>
        <use href="/hourglass.svg#svg1" />
      </svg>
        <div style={{
        position: 'absolute',
        bottom: `${hourglassSectionHeight * 2 + 10}px`,
        left: '0',
        width: '100%',
        height: `${((100 - getTransformedProgress()) / 100) * hourglassSectionHeight - 2}%`,
        "clip-path": `polygon(50px 110%, ${getTransformedProgress() / 2}% 0px, ${Math.min(105 - getTransformedProgress() / 2, 100)}% 0px)`,
        background: 'rgba(255,255,255,0.5)',
        }} />
        <div style={{
        position: 'absolute',
        bottom: `${0}px`,
        left: '0',
        width: '100%',
        height: `${((getTransformedProgress()) / 100) * hourglassSectionHeight}%`,
        "clip-path": `polygon(0px 110%, 100px 110%, ${100 - getTransformedProgress() / 2}% 0px, ${Math.min(getTransformedProgress() / 2, 100)}% 0px)`,
        background: 'rgba(255,255,255,0.5)',
        }} />
    </div>
  );
}
