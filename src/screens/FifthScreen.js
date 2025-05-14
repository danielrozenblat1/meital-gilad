import BenefitCard from "../components/bonuses/Bonus"
import Button from "../components/button/Button"
import FAQItem from "../components/questions/Questions"
import styles from "./FifthScreen.module.css"

const FifthScreen = () => {
  return <>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          <span className={styles.markedTitle}>כל הקורסים כוללים:</span>
        </h1>
      </div>
<BenefitCard/>
  </>
}

export default FifthScreen