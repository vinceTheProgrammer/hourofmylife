import { createSignal, onCleanup, createEffect } from "solid-js";

const hourglassSectionHeight = 50;

export default function HourglassProgressBar(props: { progress: any; }) {

  

  // Transform the progress prop, for example, ensuring it's a number and clamping it between 0 and 100
  const getTransformedProgress = () => {
    const numericProgress = Number(props.progress);
    const clampedValue = Math.min(Math.max(numericProgress, 0), 100);
    const normalizedValue = clampedValue / 100; // Normalizes the value to range 0 to 1
    return Math.pow(normalizedValue, 2) * 100;
  };

  createEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fallingSand {
        0% { transform: translateY(-100%); }
        100% { transform: translateY(${hourglassSectionHeight * 2}px); }
      }
    `;
    document.head.appendChild(style);

    // Cleanup function to remove the style when the component unmounts
    onCleanup(() => {
      document.head.removeChild(style);
    });
  });

  return (
    <div style={{ position: 'relative', width: '100px', height: `${hourglassSectionHeight * 4 + 10}px`, margin: '20px auto' }}>
      <svg style={{height: '215px'}}>
        <use href="hourglass.svg#svg1" />
      </svg>
        <div style={{
        position: 'absolute',
        bottom: `${hourglassSectionHeight * 2 + 10}px`,
        left: '0',
        width: '100%',
        height: `${Math.max(((100 - getTransformedProgress()) / 100) * hourglassSectionHeight - 2, 0)}%`,
        "clip-path": `polygon(50px 110%, ${getTransformedProgress() / 2}% 0px, ${Math.min(105 - getTransformedProgress() / 2, 100)}% 0px)`,
        background: 'rgba(255,255,255,1)',
        }} />
        <div style={{
          position: 'absolute',
          bottom: `${hourglassSectionHeight * 2}px`,
          left: '49px',
          width: '5px',
          height: `5px`,
          background: 'rgba(255,255,255,1)',
          animation: 'fallingSand 2s ease-in infinite',
        }}>

        </div>
        <div style={{
        position: 'absolute',
        bottom: `${0}px`,
        left: '0',
        width: '100%',
        height: `${((getTransformedProgress()) / 100) * hourglassSectionHeight}%`,
        "clip-path": `polygon(0px 110%, 105px 110%, ${100 - getTransformedProgress() / 2}% 0px, ${Math.min(getTransformedProgress() / 2, 100)}% 0px)`,
        background: 'rgba(255,255,255,1)',
        }} />
    </div>
  );
}
