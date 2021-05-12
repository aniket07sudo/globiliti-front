import React , {useEffect} from 'react';
import {Route,Switch} from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Dashboard from './Components/Dashboard';
import { ToastContainer} from 'react-toastify';
import "./Styles/main.scss";
import 'react-toastify/dist/ReactToastify.css';
import { AutoSign } from './Store/Action/auth';
import { connect } from 'react-redux';

function App(props) {

  useEffect(() => {
    props.Autosign();
  },[])

  return (
    <div className="App">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
      <Switch>
      {/* <Route path="/" component={Dashboard} exact  /> */}
      <Route path="/login" component={Login} exact  />
      <Route path="/signup" component={Signup} exact  />
      <Dashboard />
      </Switch>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    Autosign:() => dispatch(AutoSign())
  }
}

export default connect(null,mapDispatchToProps)(App);
