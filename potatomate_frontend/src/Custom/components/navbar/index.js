import React,{Fragment} from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Popover from "@material-ui/core/Popover";
// core components
import Button from "components/CustomButtons/Button.jsx";

import popoverStyles from "assets/jss/material-kit-pro-react/popoverStyles.jsx";
import Message from 'Custom/components/navbar/message'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width:"300px",
    maxHeight:"300px"
  },
});

class MessageContainer extends React.Component {
  state={
    openBottom: false
  }

  handleClosePopover(state) {
    this.setState({
      [state]: false
    });
  }
  handleClickButton(state) {
    this.setState({
      [state]: true
    });
  }

   render(){
     const { messages,classes } = this.props;
     return (
      <React.Fragment>
       <Button
         buttonRef={node => {
           this.anchorElBottom = node;
         }}
         onClick={() => this.handleClickButton("openBottom")}
         className={classes.navLink}
         color="transparent"
         >
           Messages
         </Button>
         <Popover
           classes={{
             paper: classes.root
           }}
           open={this.state.openBottom}
           anchorEl={this.anchorElBottom}
           anchorReference={"anchorEl"}
           onClose={() => this.handleClosePopover("openBottom")}
           anchorOrigin={{
             vertical: "bottom",
             horizontal: "center"
           }}
           transformOrigin={{
             vertical: "top",
             horizontal: "center"
           }}

           >
            {messages.map(message=> <Message key={message.id} message={message} />)}


           </Popover>
         </React.Fragment>
     )
   }
    }


export default withStyles(styles)(MessageContainer);
