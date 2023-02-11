import React, { useState } from 'react';
import Card from './components/Card';
import Profile from './components/Profile';


function App() {
  const data = require('./data.json');
  const [period, setPeriod] = useState("weekly");

  const crd = document.getElementsByClassName("card-main_lower_current");
  const crd1 = document.getElementsByClassName("card-main_lower_previous");

  function handleChange(event) {
    setPeriod(event.currentTarget.textContent.toLowerCase());
    
    // EFFECT 
    const arr = Array.from(crd);
    const arr1 = Array.from(crd1);

    arr.map(x=>x.classList.add("toggleIn"))
    setTimeout(() => {
      arr.map(x=>x.classList.remove("toggleIn"))
    }, 350)

    arr1.map(x=>x.classList.add("toggleInOpa"))
    setTimeout(() => {
      arr1.map(x=>x.classList.remove("toggleInOpa"))
    }, 350)
    
  }

  

  const cards = data.map((elem, index) => {
         return <Card bg={elem.bgColor}
                      img={elem.img}
                      title={elem.title}
                      key={index}
                      current={elem.timeframes[period].current}
                      previous={elem.timeframes[period].previous}
     />})

  return (
    <main>
      <Profile handleChange={handleChange} />
      <div className="cards-container">
        {cards}
      </div>
    </main>
  );
}

export default App;
