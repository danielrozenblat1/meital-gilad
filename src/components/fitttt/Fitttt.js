import React from 'react';
import styles from './Fitttt.module.css';
import { Check, X } from 'lucide-react';
import Button from '../button/Button';

const CourseSuitability = () => {
  const suitableFor = [
    "את רוצה לבנות עצמאות כלכלית ולהיות אחראית על ההכנסה שלך",
    "קשה לך למצוא איזון בין העבודה למשפחה ואת חולמת על גמישות",
    "יש לך תחושה שיש בך יותר ממה שאת מצליחה לממש היום",
    "את אוהבת את עולם היופי והציפורניים ורוצה להפוך את זה לקריירה",
    "יש לך נכונות להשקיע גם בצד המקצועי וגם בצד האישי שלך"
  ];

  const notSuitableFor = [
    "את מחפשת רק דרך מהירה להרוויח כסף בלי אהבה לתחום",
    "את לא מוכנה להשקיע זמן ומאמץ בלמידה ובבניית העסק שלך",
    "אין לך סבלנות לתהליך שדורש גם עבודה על הביטחון העצמי",
    "את מוותרת בקלות כשנתקלת באתגרים בדרך",
    "את לא רואה את עצמך עובדת באופן עצמאי בטווח הארוך"
  ];

  return <>
    <div className={styles.title}>ושנייה לפני שאנחנו מדברות..</div>
 
    <div className={styles.suitabilityContainer}>
      <div className={styles.suitabilityBox}>
        <h2 className={styles.suitabilityTitle}>
        הקורסים מתאימים לך אם
        </h2>
        <ul className={styles.suitabilityList}>
          {suitableFor.map((item, index) => (
            <li 
              key={`suitable-${index}`} 
              className={styles.suitabilityItem}
              style={{ '--li-index': index }}
            >
              <div className={styles.itemIconWrapper}>
                <Check className={styles.itemIcon} />
              </div>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={`${styles.suitabilityBox} ${styles.notSuitableBox}`}>
        <h2 className={styles.suitabilityTitle}>
         הקורסים פחות מתאימים לך אם
        </h2>
        <ul className={styles.suitabilityList}>
          {notSuitableFor.map((item, index) => (
            <li 
              key={`not-suitable-${index}`} 
              className={styles.suitabilityItem}
              style={{ '--li-index': index }}
            >
              <div className={`${styles.itemIconWrapper} ${styles.notSuitableItemIconWrapper}`}>
                <X className={styles.itemIcon} />
              </div>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <Button text="מיטל אני מתאימה, בואי נדבר!"/>
  </>;
};

export default CourseSuitability;