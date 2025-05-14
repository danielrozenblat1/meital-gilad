import IconTextComponent from "../components/can/Can"
import styles from "./SecondScreen.module.css"
import money from "../icons/wired-lineal-414-money-bag-dollar-hover-shake (2).json" 
import NewBox from "../components/NewBoxx/NewBox"
import wake from "../icons/wired-lineal-633-female-standing-hover-success (1).json"
import business from "../icons/wired-lineal-187-suitcase-morph-open (1).json"
import loop from "../icons/wired-outline-2613-calendar-subscription-hover-click.json"
import manicure from "../icons/wired-outline-1594-manicure-hover-pinch.json"
import meditate from "../icons/wired-outline-628-yoga-female-hover-pinch.json"
const SecondScreen = () => {
  return (
    <>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          <span className={styles.markedTitle}>יש סיבה שאת נמצאת כאן</span>
        </h1>
      </div>
      <div className={styles.description}>אם את כאן סימן שיש לך תשוקה לעולם הביוטי ולאחרונה התחלת להבין שאת יכולה</div>
      <div className={styles.row}>
        <IconTextComponent text="לקום כל בוקר ולעשות את מה שאת הכי אוהבת לעשות" icon={wake}/>
        <IconTextComponent text="להרוויח סכומים שפעם רק יכולת לדמיין בחודש אחד" icon={money}/>
        <IconTextComponent text="להיות הבוס של עצמך ואחראית על הלו״ז שלך" icon={business}/>
      </div>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          <span className={styles.markedTitle}>אני רוצה שתדעי שזה אפשרי</span>
        </h1>
      </div>ֿ
      <div className={styles.description}>עולם הביוטי הוא עולם מאוד רווחי והוא גם לא דורש ממך הרבה כדי להתחיל</div>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          <span className={styles.markedTitle}>אבל כדי להשאר בו לאורך זמן</span>
        </h1>
      </div>ֿ
      <div className={styles.description}>זה ידרוש ממך:</div>
      <div className={styles.row}>

      <NewBox title="תרגול" description="את חייבת להתמקצע כל הזמן ולא להפסיק לתרגל - רק ככה תשארי מקצועית! תמיד לחפש להשתדרג ולנסות דברים חדשים. תאמיני לי, זה המפתח להיות בין הטובות בתחום!" icon={manicure}/>
      <NewBox title="סבלנות" description="להאמין בעצמך גם כשקשה. גם בימים המתסכלים,לזכור גם כשהדברים פחות הולכים שזה עניין של זמן וכל יום מאתגר הוא צעד בדרך להצלחה שלך. תני לעצמך את הזמן לצמוח." icon={meditate}/>
      <NewBox title="נחישות והתמדה" description="תזכרי תמיד - זה עסק לכל דבר ועניין, יהיו ימים מטורפים ויהיו ימים שתעבדי בהם קשה.את בונה משהו משלך,וזה ידרוש ממך להתמיד ולהיות נחושה." icon={loop}/>
      </div>
    </>
  )
}

export default SecondScreen