import { useState } from 'react';
import styles from '../../styles/Home.module.css'
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export default function SliderController() {
  const [value, setValue] = useState(5);

  const handleChange = (value) => {
    setValue(value);
  };

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

  return (
    <>
      <div className={styles.slider}>
      <Slider
      defaultValue={5}
      min={0}
      max={10} 
      value={value}
      // marks={marks}
      onChange={handleChange}
      trackStyle={{ backgroundColor: "#DEA5C5", height: 15 }}
      railStyle={{ backgroundColor: "#eae8e4", height: 15 }}
      handleStyle={{
        borderColor: "white",
        opacity: 1,
        height: 30,
        width: 30,
        marginLeft: 0,
        marginTop: -7.5,
        backgroundColor: "white"
      }}
      />
      </div>
      <div className= {styles.sliderValue }>{value}/10</div>

    </>
  );
};
