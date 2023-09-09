import {
  RouterProvider,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { connect } from 'react-redux';
import router from './router';
import './App.less';
import ProgressSpinner from "./components/ProgressSpinner";

const App = (props:any) => {
  const [spinnerShow, setSpinnerShow] = useState(false);
  
  useEffect(() => {
    setSpinnerShow(props.progressSpinnerShow);
  },[props.progressSpinnerShow]);

  return (
    <>
      <div className="background" />
      {spinnerShow ?
        (<ProgressSpinner />) :
        null
      }
      <RouterProvider router={router} />
    </>
  )
}

const mapStateToProps = (state:any) => ({
  progressSpinnerShow: state.progressSpinnerShow
});

export default connect(mapStateToProps, null)(App);