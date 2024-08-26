import { useState } from 'react';
import styles from '../../styles/Home.module.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export default function HomeSliderController() {
  // State to manage the slider value
  const [value, setValue] = useState(5);

  // Marks for the slider
  const marks = {
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    10: '10',
  };

  // Handler for slider value change
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className={styles.slider}>
        <Slider
          defaultValue={5}
          min={0}
          max={10}
          value={value}
          onChange={handleChange}
          trackStyle={{ backgroundColor: '#DEA5C5', height: 15 }}
          railStyle={{ backgroundColor: '#eae8e4', height: 15 }}
          handleStyle={{
            borderColor: 'white',
            opacity: 1,
            height: 30,
            width: 30,
            marginLeft: 0,
            marginTop: -7.5,
            backgroundColor: 'white'
          }}
        />
      </div>
      <div className={styles.sliderValue}>{value}/10</div>
    </>
  );
}