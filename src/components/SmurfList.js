import React from 'react';
import Smurf from './Smurf';
import { connect } from 'react-redux'
import { fetchStart, fetchSmurfs } from '../actions';

 const SmurfList = (props)=> {
    const isLoading = props.fetchStart;
    const testSmurf = props.fetchSmurfs()

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return(<div className="listContainer">
        <Smurf smurf={testSmurf}/>
    </div>);
}

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.

const mapStateToProps = state => {
    return{
      fetchStart: state.fetchStart,
      fetchSmurfs: state.fetchSmurfs
    }
  }
  
export default connect(mapStateToProps, {fetchStart, fetchSmurfs})(SmurfList)