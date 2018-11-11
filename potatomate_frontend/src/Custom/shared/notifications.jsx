import React from "react";
// @material-ui/icons
import Check from "@material-ui/icons/Check";
import Warning from "@material-ui/icons/Warning";
// core components
import SnackbarContent from "components/Snackbar/SnackbarContent.jsx";
import Clearfix from "components/Clearfix/Clearfix.jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Notifications extends React.Component {
  notify = () => toast("Wow so easy !");

  render(){


  return (
    <div >

          <ToastContainer />

    </div>
  );
}
}

export default Notifications;

  // autoHideDuration="3"
