import React, { useState } from 'react';
import { ChevronDown, Sparkles, Scissors, Brush, Gift, Award, Heart, Coffee, BookOpen, Star, ShoppingBag, Book, Clock, Calendar, CircleCheck } from 'lucide-react';
import Button from '../button/Button';
import styles from './Silabus.module.css';

const CourseAccordion = () => {
  // State to track which course is open
  const [openCourse, setOpenCourse] = useState(null);

  // Toggle function for opening/closing courses
  const toggleCourse = (courseId) => {
    if (openCourse === courseId) {
      setOpenCourse(null);
    } else {
      setOpenCourse(courseId);
    }
  };

  // Method item component with icon
  const MethodItem = ({ text, index }) => {
    // Array of icons to use for method items
    const icons = [
      <BookOpen size={16} />,
      <Award size={16} />,
      <Star size={16} />,
      <CircleCheck size={16} />,
      <Coffee size={16} />,
      <Heart size={16} />,
      <Clock size={16} />,
      <Calendar size={16} />
    ];
    
    // Get icon based on index (cycle through if more items than icons)
    const icon = icons[index % icons.length];
    
    return (
      <li key={index} style={{"--li-index": index}} className={styles.methodItem}>
        <span className={styles.methodIcon}>{icon}</span>
        <span>{text}</span>
      </li>
    );
  };

  // Course data based on the syllabi
  const courses = [
    {
      id: 1,
      title: "הרמת גבות וריסים",
      duration: "מפגש אחד | 4 שעות",
      description: "קורס מקצועי המכשיר אותך בטכניקות מתקדמות להרמת גבות וריסים. במפגש אחד מרוכז תלמדי את כל הטכניקות הדרושות, מהתיאוריה ועד לתרגול המעשי, בבוקר או בערב לפי בחירתך.",
      icon: <Scissors />,
      methods: [
        "תיאוריה והכרות עם התחום - יתרונות וחסרונות",
        "מבנה השערה והשפעת חומרי ההרמה",
        "סקירת תהליך העבודה שלב אחרי שלב",
        "הכרת החומרים והציוד - סקירת הערכות בשוק",
        "אמצעי זהירות, היגיינה ובטיחות",
        "זיהוי תגובות אלרגיות והתמודדויות עם רגישויות",
        "כיצד לאחסן את המוצרים",
        "הדגמה על מודליסטית - הכנה נכונה של העור והשערות",
        "בחירת רולים (סיליקונים) לפי סוג העין או הריס",
        "מריחת חומרים לפי שלבים וזמנים מדויקים",
        "טיפים לעבודה מדויקת",
        "תרגול מעשי על מודליסטית בליווי צמוד"
      ]
    },
    {
      id: 2,
      title: "עיצוב גבות",
      duration: "3 מפגשים | 3 שעות כל מפגש",
      description: "הגבות הן המסגרת של הפנים, והעיצוב שלהן יכול לשדרג כל מראה וליצור הרמוניה מושלמת. במהלך קורס זה תקבלי ידע מעמיק, טכניקות מדויקות וניסיון מעשי שיאפשרו לך להפוך למעצבת גבות מקצועית.",
      icon: <Brush />,
      methods: [
        "לימוד טכניקת עיצוב הגבה (חוט, פינצטה ומספריים)",
        "שיקום גבות ושמירה על מבנה טבעי",
        "התאמת עיצוב הגבות למבנה הפנים ולרצון הלקוחה",
        "כלים לאבחון סוגי שיער ופתרונות לעיצוב נכון",
        "עבודה עם שיער עבה, דליל או צמיחה הפוכה",
        "טיפים לעבודה מקצועית, סטרילית ומהירה",
        "שמירה על סימטריה ותיקוני גבות",
        "צביעת גבות מקצועית",
        "עבודה מהירה ויעילה (איך לחסוך זמן בלי לוותר על איכות)",
        "תרגול מעשי על מודליסטיות בליווי אישי"
      ]
    },
    {
      id: 3,
      title: "הדבקת ריסים קרה",
      duration: "2 מפגשים | 4 שעות כל מפגש",
      description: "קורס הדבקת ריסים קרה נועד להקנות ידע מעמיק ומיומנויות מקצועיות תוך דגש על שיטות עבודה נכונות, חווית לקוח ושמירה על הבריאות של הריסים והעיניים.",
      icon: <Sparkles />,
      methods: [
        "היכרות עם עולם הריסים - תיאוריה ותרגול ראשוני",
        "ההבדלים בין הדבקה חמה לקרה",
        "אנטומיה של הריסים ומחזור חיים",
        "כלי עבודה - הכרת הציוד המקצועי",
        "כללי זהירות ושמירה על בריאות העין",
        "הצגת שלבי העבודה - הכנת הלקוחה",
        "הדבקת ריסים בתצורות שונות",
        "סידור נכון של הריסים בהתאם לצורת העין",
        "התאמת סוג ריסים לפי מבנה העין",
        "שמירה על הריסים הקרים לאורך זמן",
        "טיפול נכון אחרי ההדבקה",
        "תרגול מעשי על לקוחות"
      ]
    },
    {
      id: 4,
      title: "לק ג'ל BASIC",
      duration: "4 מפגשים | 4 שעות כל מפגש",
      description: "הקורס שיקפיץ אותך לרמה מקצועית בעולם הציפורניים! במהלך הקורס תלמדי את כל הידע הדרוש כדי להפוך למקצוענית אמיתית, עם יסודות חזקים וטכניקות עבודה מתקדמות.",
      icon: <Gift />,
      methods: [
        "אנטומיית הציפורן - מבנה טבעי לעבודה מדויקת",
        "תהליך עבודה מקצועי - שיטות מובנות וטכניקות מתקדמות",
        "זיהוי וטיפול בתופעות נפוצות בציפורניים",
        "היגיינה ובטיחות בעבודה",
        "הכרת מכונת שיוף ומנורת ייבוש",
        "סוגי ראשי שיוף ומניקור",
        "תיקון מבנה אנטומי של הציפורן",
        "עבודה מעשית על מודליסטית",
        "השלמת ציפורן בעזרת פוליג'ל",
        "יסודות ניהול העסק והשיווק"
      ]
    },
    {
      id: 5,
      title: "לק ג'ל ברגליים",
      duration: "3 מפגשים | 3-4 שעות כל מפגש",
      description: "קורס המלמד באופן יסודי ומעשי את כל שלבי העבודה עם לק ג'ל ברגליים משלב ההכנה ועד גימור מקצועי, תוך שימת דגש על היגיינה, סטריליזציה, דיוק ומהירות.",
      icon: <ShoppingBag />,
      methods: [
        "היכרות עם התחום והכנה תיאורטית",
        "מבנה כף הרגל, עור וציפורניים",
        "זיהוי בעיות ומחלות נפוצות - מתי לא לטפל",
        "סטריליזציה והיגיינה - כללים הכרחיים",
        "שלבי הכנה לפני מריחת הג'ל",
        "הכנת סביבת העבודה בצורה בטיחותית",
        "חיטוי הרגליים ובחירת גישה מותאמת ללקוחה",
        "מריחת בסיס נכון - איך להימנע מקילופים",
        "טכניקת מריחה אחידה ומדויקת",
        "שימוש נכון במנורת LED/UV",
        "הסרה נכונה וטיפול לאחר הסרה",
        "תרגול מעשי מלא על מודליסטית"
      ]
    },
    {
      id: 6,
      title: "קורס קישוטים",
      duration: "מפגש אחד | 4 שעות",
      description: "קורס קישוטים לציפורניים המיועד למקצועיות שרוצות להרחיב את ארגז הכלים שלהן, להתבלט בתחום ולהעניק ללקוחות חוויה משודרגת. קישוטי ציפורניים הם לא רק תוספת עיצובית, הם דרך לבטא סגנון, יצירתיות ואישיות.",
      icon: <Star />,
      methods: [
        "טכניקות מגוונות של קישוטים - מדוגמאות קלאסיות ועד לעיצובים מיוחדים",
        "שימוש במגוון חומרים ייחודיים",
        "שילובי צבעים אומנותיים",
        "עבודה עם מכחולים מקצועיים",
        "שימוש בחותמות",
        "עבודה עם אבקות שונות",
        "יישום מדבקות מקצועיות",
        "טכניקות איירבראש",
        "התאמת קישוט לפי סגנון ומבנה ציפורן",
        "שיטה פרקטית וממוקדת",
        "תרגול מעשי מלווה בהסברים"
      ]
    },
    {
      id: 7,
      title: "LEVEL UP - השתלמות",
      duration: "מפגש אחד | 5 שעות",
      description: "השתלמות מקצועית המתמקדת בדיוק, מקצועיות ומהירות - המפתחות להצלחה שלך! מפגש ממוקד שיעזור לך להגיע לתוצאות מושלמות בזמן עבודה קצר יותר.",
      icon: <Award />,
      methods: [
        "חידוד טכניקות עבודה מדויקות",
        "שיטות מתקדמות מבוססות ניסיון",
        "טכניקות ממיטב המאסטריות בתחום",
        "שדרוגים שהוכיחו את עצמם בשטח",
        "אופטימיזציה של זמן העבודה",
        "שיפור דיוק והשגת תוצאות מושלמות",
        "עבודה מעשית על מודליסטית",
        "טיפים מקצועיים לניהול זמן עבודה",
        "שיטות עבודה יעילות יותר",
        "פתרון בעיות נפוצות במהירות"
      ]
    }
  ];

  return (
    <div className={styles.courseContainer}>
      {courses.map((course) => (
        <div key={course.id} className={styles.courseWrapper}>
          <button 
            className={`${styles.courseButton} ${openCourse === course.id ? styles.active : ''}`}
            onClick={() => toggleCourse(course.id)}
          >
            <div className={styles.titleContainer}>
              <div className={styles.iconWrapper}>
                <div className={styles.icon}>{course.icon}</div>
              </div>
              <div className={styles.titleContent}>
                <h2 className={styles.courseTitle}>{course.title}</h2>
                <div className={styles.courseDuration}>{course.duration}</div>
              </div>
            </div>
            <ChevronDown 
              className={`${styles.toggleIcon} ${openCourse === course.id ? styles.active : ''}`} 
            />
          </button>
          
          <div className={`${styles.contentWrapper} ${openCourse === course.id ? styles.open : ''}`}>
            <div className={styles.content}>
              <div className={styles.courseContent}>
                <p>{course.description}</p>
                
                <div className={styles.methodBox}>
                  <h3 className={styles.methodTitle}>
                    <BookOpen className={styles.methodTitleIcon} />
                    מה תלמדי בקורס
                  </h3>
                  <ul className={styles.methodList}>
                    {course.methods.map((method, index) => (
                      <MethodItem key={index} text={method} index={index} />
                    ))}
                  </ul>
                </div>
                
                <div className={styles.buttonContainer}>
                  <Button 
                    text="לעוד פרטים" 
                    message={`היי מיטל הגעתי מהדף! אשמח לשמוע עוד לגבי: ${course.title}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseAccordion;