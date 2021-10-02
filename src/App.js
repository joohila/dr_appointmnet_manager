import './App.css';
import Dashboard from './Dashboard';
import { Avatar } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Confirmation  from './Confirmation';
function App() {
  return (
    <div className="App">
        <div className="app_header">
        
        <div className="app_header_left">
        <Avatar alt={'JM'} src='' />
        <h4 style={{padding:'10px'}}>Joohila Mohammad</h4>
        </div>

        <div className="app_header_right">
        <h3>My Portfolio</h3>
        </div>

      </div>
      <div className="app_docs">
      <Router>
        <Switch>
          <Route exact path="/">
            <Dashboard/>
          </Route>
          {/* <Route path="/AppointmentConfirmation">
           <Confirmation/>
          </Route> */}
          <Route 
           path="/AppointmentConfirmation"
           render={(props) => <Confirmation {...props} />} 
          />
        </Switch>
    </Router>
      </div>
    </div>
  );
}

export default App;
