import React from 'react';
import styles from './Me.module.css';
import meital from "../../images/מיטל גלעד תמונת תדמית.png";
import Works from '../recommends/Works';
import Recommendations from '../recommends/Recommends';

const AboutMe = () => {
  return (
    <>
      <div className={styles.header} id="מי אני">נעים מאוד</div>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={meital} alt="מיטל גלעד" className={styles.image} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>מיטל גלעד</h1>
          <div className={styles.subtitle}>"אני כאן לא רק כדי ללמד אותך את התחום - אני כאן גם כדי לספק לך את הבטחון להשאר ולהתמיד בו"</div>
          <p className={styles.description}>
            התחלתי את הדרך שלי בתחום עוד בילדות - הייתי עושה לק ג'ל לכל הילדות בשכונה, הרגשתי שזה הייעוד שלי לכל חיים - נכנסתי לתחום בסערה ועברתי כמה וכמה קורסים כושלים אחד אחרי השני!!! משהו שגרם לי להכנס לתחום ולצאת ממנו - הרגשתי שאני עדיין לא מספיק טובה ושיש עוד אלפים כמוני
          </p>
          <p className={styles.description}>
            למרות הפחדים עשיתי צעד - התחלתי בקטן - עם שולחן פשוט בחדר השינה שלי. ומפה? רק צמחתי. תוך זמן קצר היומן התמלא ועם השנים הבנתי מה עסק מצליח בתחום הביוטי דורש.          </p>

            <p className={styles.description}>אחרי עשור בתחום החלטתי לקחת את התשוקה שלי, את כל הידע שצברתי בעצמי עם הזמן, הבנתי מה הייתי צריכה כשהייתי במקום שלך והיום המטרה שלי היא לחסוך לך את הטעויות שעברתי בעצמי</p>
          <p className={styles.description}> אני רוצה להראות לך שגם את יכולה להצליח - ובגדול!
         היום אני פה בשבילך - לתת לך לא רק את הידע המקצועי, אלא גם את הביטחון והתמיכה שאת צריכה כדי להצליח. כי אני יודעת כמה זה משנה שיש מישהי שמאמינה בך ובדרך שלך.
          </p>
        </div>
      </div>

      <Works />
     <Recommendations/>
    </>
  );
};

export default AboutMe;