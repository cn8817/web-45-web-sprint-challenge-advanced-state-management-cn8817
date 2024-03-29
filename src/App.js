import React, { Component } from "react";

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import { connect } from 'react-redux'
import { fetchSmurfs } from './actions/index'

class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs()
  }
 
  render() {
    return (
      <div className="App">
        <Header />

        <main>
          <SmurfList/>
          <AddForm/>
        </main>
      </div>
    );
  }
}

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.

// const mapActionsToProps = ()=> {
//   return{
//     fetchSmurfs: fetchSmurfs,
//   }
// }

export default connect(null,{fetchSmurfs})(App)