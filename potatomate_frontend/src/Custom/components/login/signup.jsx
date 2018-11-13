import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
import Assignment from "@material-ui/icons/Assignment";
import Mail from "@material-ui/icons/Mail";
import Face from "@material-ui/icons/Face";
// core components
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import {connect} from 'react-redux'
import {handleSignUp} from 'actions/action'
import javascriptStyles from "assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx";
import SnackbarContent from "components/Snackbar/SnackbarContent.jsx";
function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginModal: false,
      username:'',
      email:'',
      password:'',
      avatar:"https://res.cloudinary.com/oliviatian/image/upload/v1541514410/WechatIMG1.jpg"
    };
  }
  handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }
  handleSubmit=(e)=>{
     const username=this.state.username
     const email=this.state.email
     const password=this.state.password
     const avatar=this.state.avatar
     this.props.handleSignUp({username,email,password,avatar})
     this.props.handleClose("signupModal")
  }

  render() {
    const { user,classes } = this.props;
    return (
      <div>
  
        <Dialog
          classes={{
            root: classes.modalRoot,
            paper: classes.modal + " " + classes.modalLogin
          }}
          open={this.props.signupModal}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => this.props.handleClose("signupModal")}
          aria-labelledby="login-modal-slide-title"
          aria-describedby="login-modal-slide-description"
        >
          <Card plain className={classes.modalLoginCard}>
            <DialogTitle
              id="login-modal-slide-title"
              disableTypography
              className={classes.modalHeader}
            >
              <CardHeader
                plain
                color="primary"
                className={`${classes.textCenter} ${classes.cardLoginHeader}`}
              >
                <Button
                  simple
                  className={classes.modalCloseButton}
                  key="close"
                  aria-label="Close"
                  onClick={() => this.props.handleClose("signupModal")}
                >
                  {" "}
                  <Close className={classes.modalClose} />
                </Button>
                <h5 className={classes.cardTitleWhite}>Sign Up Now</h5>

              </CardHeader>
            </DialogTitle>
            <DialogContent
              id="login-modal-slide-description"
              className={classes.modalBody}
            >
              <form>

                <CardBody className={classes.cardLoginBody}>
                  <CustomInput
                    id="login-modal-first"

                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Face className={classes.icon} />
                        </InputAdornment>
                      ),
                      placeholder: "User Name...",
                      name:"username",
                      value:this.state.username,
                      onChange:this.handleChange
                    }}
                  />
                  <CustomInput
                    id="login-modal-email"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Mail className={classes.icon} />
                        </InputAdornment>
                      ),
                      placeholder: "Email...",
                      name:"email",
                      value:this.state.email,
                      onChange:this.handleChange
                    }}
                  />
                  <CustomInput
                    id="login-modal-password"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Icon className={classes.icon}>lock_outline</Icon>
                        </InputAdornment>
                      ),
                      placeholder: "Password...",
                      name:"password",
                      value:this.state.password,
                      onChange:this.handleChange,
                      type:"password"
                    }}
                  />
                </CardBody>
              </form>
            </DialogContent>
            <DialogActions
              className={`${classes.modalFooter} ${
                classes.justifyContentCenter
              }`}
            >
              <Button color="primary" simple size="lg" onClick={this.handleSubmit}>
                Get started
              </Button>

            </DialogActions>
          </Card>
        </Dialog>
      </div>
    );
  }
}

export default connect(({user})=>({user}),{handleSignUp})(withStyles(javascriptStyles)(SignUp));
