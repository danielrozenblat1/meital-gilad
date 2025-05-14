import React, { useEffect, useRef } from 'react';
import styles from './Bonus.module.css';
import ScrollReveal from 'scrollreveal';
import { Player } from '@lordicon/react';
import kit from "../../icons/wired-lineal-272-two-female-avatars-hover-nodding.json";
import shake from "../../icons/wired-lineal-633-female-standing-morph-jump.json";
import practice from "../../icons/wired-lineal-406-study-graduation-hover-pinch (2).json";
import finish from "../../icons/wired-lineal-981-consultation-hover-conversation.json";
import business from "../../icons/wired-lineal-187-suitcase-hover-pinch.json";

const BenefitCard = () => {
  const benefits = [
    {
      id: "01",
      title: "קבוצות קטנות ויחס אישי",
      description: "כל קורס מכיל מקסימום שתי תלמידות בכל קורס, כדי שאוכל להקדיש לך את תשומת הלב המלאה שמגיעה לך ושתבטיח את ההצלחה שלך",
      icon: kit
    },
    {
      id: "02",
      title: "תהליך העצמה וביטחון",
      description: "אצלי אין רק לימוד טכני, אלא מסע של חיזוק הביטחון העצמי שלך כאישה וכבעלת עסק, שיאפשר לך להאמין ביכולות שלך",
      icon: shake
    },
    {
      id: "03",
      title: "שיטת לימוד מדויקת ומוכחת",
      description: "שיטות מיוחדות שפיתחתי לאורך השנים, שמקצרות תהליכים ועוזרות לך לעבוד נכון מההתחלה, בלי לבזבז זמן או חומרים",
      icon: practice
    },
    {
      id: "04",
      title: "תמיכה וליווי ללא הגבלה",
      description: "גם אחרי שהקורס מסתיים, אני כאן בשבילך. מספר הטלפון שלי זמין לך לכל שאלה, התלבטות או חשש שיעלה בדרך",
      icon: finish
    },
    {
      id: "05",
      title: "הכנה מלאה לעולם העסקי",
      description: "את תצאי ממני עם לימוד מקיף של כל מה שצריך כדי להצליח כעצמאית - שיווק, צילום, תמחור נכון ונהלי עבודה שיבנו לך בסיס חזק ויציב לעסק משגשג",
      icon: business
    }
];

  const playerRefs = useRef(benefits.map(() => React.createRef()));

  const handleComplete = (index) => {
    setTimeout(() => {
      if (playerRefs.current[index]?.current) {
        playerRefs.current[index].current.playFromBeginning();
      }
    }, 2500);
  };

  // Initial animation play
  useEffect(() => {
    playerRefs.current.forEach(ref => {
      if (ref.current) {
        ref.current.playFromBeginning();
      }
    });
  }, []);

  // ScrollReveal animations
  useEffect(() => {
    // Configure ScrollReveal
    const sr = ScrollReveal({
      distance: '30px',
      duration: 1000,
      easing: 'ease-out',
      reset: false,
      viewFactor: 0.2,
      interval: 300,
      delay: 200,
      scale: 1,
    });

    // Title animation
    sr.reveal(`.${styles.title}`, {
      origin: 'right'
    });

    // Card animations
    sr.reveal(`.${styles.card}`, {
      origin: 'bottom',
      interval: 200
    });

    // Description animations
    sr.reveal(`.${styles.cardDescription}`, {
      origin: 'bottom',
      delay: 300
    });

    // Icon animations
    sr.reveal(`.${styles.icon}`, {
      origin: 'top',
      delay: 200
    });

    // Cleanup
    return () => sr.destroy();
  }, []);

  return (
    <div className={styles.benefitContainer}>
     
      
      <div className={styles.cardsGrid}>
        {benefits.map((benefit, index) => (
          <div key={benefit.id} className={styles.card}>
            <div className={styles.icon}>
              <Player 
                icon={benefit.icon}
                ref={playerRefs.current[index]}
                size="100%"
                onComplete={() => handleComplete(index)}
  
              />
            </div>
            <h3 className={styles.cardTitle}>
              {benefit.title}
            </h3>
            <p className={styles.cardDescription}>
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitCard;