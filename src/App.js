import React, { Component } from 'react';
import FeedbackButtons from './Components/FeedbackButtons';
import buttons from './buttons.json';
// import styles from './Statistics.module.css';



// import './App.css';

class App extends Component{

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = (rating) => {
    this.setState (prevState => ({
      [rating]: prevState[rating] + 1,

    }))
  }
render () {
return (
  <div>
    <h2> Please leave feedback </h2> 
    <div> {buttons.map ((button) => (
      <button type ="button"
      key={button.id}
      onClick={()=>this.addFeedback} >
          {button.rating}
       </button>
    ))
      }
    
    </div>

    <div>
    <h2> Statistics </h2> 
      <span>good: {this.state.good}</span>
      <span>neutral: {this.state.neutral}</span>
      <span>bad: {this.state.bad}</span>
      {/* <span>Total: {total}</span> */}


    </div>

{/* <FeedbackButtons /> */}
</div>


)
}
}

export default App;
