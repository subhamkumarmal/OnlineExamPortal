import React from 'react';
import Covid from './components/Covid19';
import ExamPage from './components/ExamPage';
import {Switch,Route} from 'react-router-dom';
import Submit from './components/Submit';
import Am from './Am';




const App = () =>{
    return(
        <>
        <Switch>
            <Route exact path="/" component={Covid} />
            <Route exact path="/exampage" component={ExamPage}/>
            <Route exact path="/submit" component={Submit}/>
            <Route exact path="/am" component={Am}/>
         
        </Switch>
        </>
    )
}

export default App;