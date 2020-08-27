import React from 'react';
import MainContainer from './MainContainer/MainContainer';
import Sidebar from './Sidebar/Sidebar';
import './App.css';
import classes from './App.module.css';


//i have made it a class base component

class App extends React.Component{             //we create a class named app and extends it to inheritence(means take the property of parent) the React.component
  constructor(props){                          //we use constructor func which is used to create object and props are parametrs passed on 
    super(props);

    this.state ={                               //state is used to when we make any changes in the ui

    }
  }
  render(){                                       //render just return the ui  as class cant return so we use render
    return(
      <div className={classes.App}>
      <section className={classes.LandingSection}>
         <MainContainer/>
         <Sidebar/>
         <div className={classes.Sidebar}></div>
      </section>
        

    </div>
    )
  }
}


// function App() {
//   return (
//     <div className={classes.App}>
//       <section className={classes.LandingSection}>
//          <MainContainer/>
//          <Sidebar/>
//          <div className={classes.Sidebar}></div>
//       </section>
        

//     </div>
//   );
// }

export default App;
