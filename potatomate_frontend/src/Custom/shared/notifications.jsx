import React from "react";
// @material-ui/icons


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
