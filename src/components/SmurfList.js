import React from 'react';
import Smurf from './Smurf';
import { connect } from 'react-redux'
import { fetchStart, fetchSuccess } from '../actions';

 const SmurfList = (props)=> {
    const isLoading = false;
    const testSmurf = props.fetchSuccess
    const {smurfs} = props

    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    
    return(
    <div className="listContainer">
        {smurfs.map(()=><Smurf smurf={testSmurf}/>)}
    </div>);
}

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.

const mapStateToProps = state => {
    return{
      smurfs: state.smurfs
    }
  }
  
export default connect(mapStateToProps, {fetchStart, fetchSuccess})(SmurfList)