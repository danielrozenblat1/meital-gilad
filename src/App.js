import logo from './logo.svg';
import './App.css';
import GelNailSyllabus from './components/silabus/Silabus';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import AboutMe from './components/me/Me';
import CourseAccordion from './components/silabus/Silabus';
import CourseSuitability from './components/fitttt/Fitttt';
import ThirdScreen from './screens/ThirdScreen';
import ByMe from './components/ByMe/ByMe';
import ForthScreen from './screens/ForthScreen';

function App() {
  return <>
<FirstScreen/>
<SecondScreen/>
<AboutMe/>
<ThirdScreen/>
<CourseAccordion/>
<CourseSuitability/>
<ForthScreen/>
<ByMe/>
  </>
}

export default App;
