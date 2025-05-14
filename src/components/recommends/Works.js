import React from 'react';
import styles from './Recommends.module.css';

// Import your images
import result1 from "../../images/מיטל גלעד עבודות 1.png";
import result2 from "../../images/מיטל גלעד עבודות 2.png";
import result3 from "../../images/מיטל גלעד עבודות 3.png";
import result4 from "../../images/מיטל גלעד עבודות 4.png";
import result5 from "../../images/מיטל גלעד עבודות 5.png";
import result6 from "../../images/מיטל גלעד עבודות 6.png";
import result7 from "../../images/מיטל גלעד עבודות 7.png";
import result8 from "../../images/מיטל גלעד עבודות 8.png";
import result9 from "../../images/מיטל גלעד עבודות 9.png";

import result11 from "../../images/מיטל גלעד עבודות 11.png";
import result12 from "../../images/מיטל גלעד עבודות 12.png";
import result13 from "../../images/מיטל גלעד עבודות 13.png";
import result14 from "../../images/מיטל גלעד עבודות 14.png";
import result15 from "../../images/מיטל גלעד עבודות 15.png";
import result16 from "../../images/מיטל גלעד עבודות 16.png";
import result17 from "../../images/מיטל גלעד עבודות 17.png";
import result18 from "../../images/מיטל גלעד עבודות 18.png";
import result19 from "../../images/מיטל גלעד עבודות 19.png";
import result20 from "../../images/מיטל גלעד עבודות 20.png";
import result21 from "../../images/מיטל גלעד עבודות 21.png";
import result22 from "../../images/מיטל גלעד עבודות 22.png";
import result23 from "../../images/מיטל גלעד עבודות 23.png";
import result24 from "../../images/מיטל גלעד עבודות 24.png";
import result25 from "../../images/מיטל גלעד עבודות 25.png";
import result26 from "../../images/מיטל גלעד עבודות 26.png";
import result27 from "../../images/מיטל גלעד עבודות 27.png";
import result28 from "../../images/מיטל גלעד עבודות 28.png";
import result29 from "../../images/מיטל גלעד עבודות 29.png";
import result30 from "../../images/מיטל גלעד עבודות 30.png";

const Works = () => {
  const images = [
    result1, result2, result3, result4, result5, 
    result6, result7, result8, result9, 
    result11, result12, result13, result14, result15, 
    result16, result17, result18, result19, result20, 
    result21, result22, result23, result24, result25, 
    result26, result27, result28, result29, result30
  ];

  return (
    <>
      <div className={styles.title}>בשנים האחרונות עברו דרכי אלפי נשים</div>

      <div className={styles.container}>
        <div className={styles.scrollTrack}>
          {/* קבוצה ראשונה של תמונות */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`first-${index}`} className={styles.imageWrapper}>
                <img
                  src={img}
                  alt={`המלצה ${index + 1}`}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
          {/* קבוצה שנייה זהה של תמונות */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`second-${index}`} className={styles.imageWrapper}>
                <img
                  src={img}
                  alt={`המלצה ${index + 1}`}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;