import { MetaProvider, Title } from "@solidjs/meta";
import { createSignal, onCleanup } from "solid-js";
import HourglassProgressBar from './components/hourglass';
import NormalProgressBar from './components/normal';
import "./app.css";

export default function App() {
  const defaultBirthdate = () => {
    const today = new Date();
    today.setFullYear(today.getFullYear() - 20);
    today.setHours(0, 0, 0, 0); // Set to the very start of the day 20 years ago
    return today.toISOString().split('T')[0]; // Returns only the date part
  };

  const defaultBirthtime = () => {
    const today = new Date();
    today.setFullYear(today.getFullYear() - 20);
    today.setHours(0, 0, 0, 0); // Set to the very start of the day 20 years ago
    return today.toTimeString().split(' ')[0]; // Returns only the time part
  };
  
  const [useNormalProgressBar, setUseNormalProgressBar] = createSignal(false);
  const [use12HourFormat, setUse12HourFormat] = createSignal(true);
  const [showMilliseconds, setShowMilliseconds] = createSignal(false);
  const [showSeconds, setShowSeconds] = createSignal(false);

  const [progress, setProgress] = createSignal(0);
  const [birthdate, setBirthdate] = createSignal(defaultBirthdate());
  const [birthtime, setBirthtime] = createSignal(defaultBirthtime());
  const [lifeExpectancy, setLifeExpectancy] = createSignal(80);
  const [currentTime, setCurrentTime] = createSignal(Date.now());

  function calculateTimeEquivalent(birthdate: string, birthtime: string, expectancy: number) {
    const birthDateTime = new Date(`${birthdate}T${birthtime}`);
    const birthTime = birthDateTime.getTime();
    const ageInMilliseconds = currentTime() - birthTime;
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
    const totalHours = (ageInYears / expectancy) * 24;
    const daysPast = Math.floor(totalHours / 24); // Calculate full days past the single day
    const hours = totalHours % 24;
    const minutes = (totalHours % 1) * 60;
    const seconds = (minutes % 1) * 60;
    const milliseconds = (seconds % 1) * 1000;
    const period = hours >= 12 ? 'PM' : 'AM';
    const formatHours = use12HourFormat() ? (Math.floor(hours % 12) === 0 ? 12 : hours % 12) : hours;

    let formattedTime = `${Math.floor(formatHours)}:${Math.floor(minutes).toString().padStart(2, '0')}`;
    if (showSeconds()) {
      formattedTime += `:${Math.floor(seconds).toString().padStart(2, '0')}`;
    }
    if (showMilliseconds()) {
      formattedTime += `.${Math.floor(milliseconds).toString().padStart(3, '0')}`;
    }
    formattedTime += use12HourFormat() ?  ` ${period}` : ``;

    // Update progress based on the time of day
    const totalMinutes = hours * 60 + minutes + seconds / 60;
    setProgress((totalMinutes / 1440) * 100); // 1440 minutes in a day

    return {
      ageInYears: Math.floor(ageInYears),
      hours: Math.floor(hours) === 0 ? 12 : Math.floor(hours), // Adjust 0 hour to 12 for 12-hour clock
      formatHours: formatHours,
      minutes: Math.floor(minutes),
      seconds: Math.floor(seconds),
      milliseconds: Math.floor(milliseconds),
      period,
      daysPast, // Include days past in the return object
      formattedTime,
    };
  }

  // Update current time every second
  const intervalId = setInterval(() => {
    setCurrentTime(Date.now());
  }, 1000);

  // Cleanup the interval on component unmount
  onCleanup(() => {
    clearInterval(intervalId);
  });

  return (
    <MetaProvider>
      <Title>HourOfMyLife</Title>
      <main style={{ "text-align": 'center' }}>
        <div>
          {(() => {
            const time = calculateTimeEquivalent(birthdate(), birthtime(), lifeExpectancy());
            const dayNotice = time.daysPast > 0 ? ` (+${time.daysPast} days)` : '';
            return `If you are ${time.ageInYears} years old, the analogous time of day for a life expectancy of ${lifeExpectancy()} years would be${dayNotice}...`;
          })()}
        </div>
        <h1>
          {(() => {
            const time = calculateTimeEquivalent(birthdate(), birthtime(), lifeExpectancy());
            return time.formattedTime;
          })()}
        </h1>
        {useNormalProgressBar() ? <NormalProgressBar progress={progress()}/> : <HourglassProgressBar progress={progress()}/>}
        {/* Toggle buttons for each feature */}
        <button style={{"margin-top": '32px'}} onClick={() => setUseNormalProgressBar(!useNormalProgressBar())}>Switch Progress Bar</button>
        <button onClick={() => setUse12HourFormat(!use12HourFormat())}>Switch Time Format</button>
        <button onClick={() => setShowMilliseconds(!showMilliseconds())}>Toggle Milliseconds</button>
        <button onClick={() => setShowSeconds(!showSeconds())}>Toggle Seconds</button>
        <div style={{"margin-top": '64px'}}>
          <label htmlFor="birthdate" style={{ "font-size": '1.5rem', "color": '#e0e0e0' }}>Birthdate: </label>
          <input
            id="birthdate"
            type="date"
            value={birthdate()}
            onInput={(e) => setBirthdate(e.currentTarget.value)}
            style={{ "font-size": '1.5rem', "text-align": 'center' }}
            autocomplete="off"
          />
          <label htmlFor="birthtime" style={{ "font-size": '1.5rem', "color": '#e0e0e0' }}>Birthtime: </label>
          <input
            id="birthtime"
            type="time"
            value={birthtime()}
            onInput={(e) => setBirthtime(e.currentTarget.value)}
            style={{ "font-size": '1.5rem', "text-align": 'center' }}
            autocomplete="off"
          />
        </div>
        <div>
          <label htmlFor="lifeExpectancy" style={{ "font-size": '1.5rem', "color": '#e0e0e0', "margin-top": '20px' }}>Life Expectancy (years): </label>
         <input
           id="lifeExpectancy"
           type="number"
           value={lifeExpectancy()}
           onInput={(e) => setLifeExpectancy(parseInt(e.currentTarget.value))}
           placeholder="Set Life Expectancy"
           style={{ "font-size": '1.5rem', "text-align": 'center', "margin-top": '10px' }}
           autocomplete="off"
         />
       </div>
      </main>
    </MetaProvider>
  );
}
