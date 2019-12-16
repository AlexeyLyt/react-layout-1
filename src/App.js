import React from 'react';
// import Game from './components/Calc';
import Navigation from './components/TaskMain/Navigation';
import FirstSection from './components/TaskMain/FirstSection';
import SecondSection from './components/TaskMain/SecondSection';
import ThirdSection from './components/TaskMain/ThirdSection';
import FourthSection from './components/TaskMain/FourthSection';
import FifthSection from './components/TaskMain/FifthSection';
import Footer from './components/TaskMain/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
      <Footer />
    </div>
  );
}

export default App;
