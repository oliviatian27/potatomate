import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
// core components
import CustomInput from 'components/CustomInput/CustomInput.jsx';
import Button from "components/CustomButtons/Button.jsx";
import Tooltip from "@material-ui/core/Tooltip";
import modalStyle from "assets/jss/material-kit-pro-react/modalStyle.jsx";
import Edit from "@material-ui/icons/Edit";
import ImageUpload from "components/CustomUpload/ImageUpload.jsx";
import {editUserProfile} from "actions/action"
import {connect} from 'react-redux'

function Transition(props) {
  return <Slide direction="down" {...props} />;
}


class EditProfile extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      editForm: false,
      bio: this.props.user.bio,
      avatar:''
    }
  }



  handleClickOpen(modal) {
    var x = [];
    x[modal] = true;
    this.setState(x);
  }
  handleClose(modal) {
    var x = [];
    x[modal] = false;
    this.setState(x);
  }
  handleChange=(e)=>{
    this.setState({bio:e.target.value})
  }
  handleImage=(file)=>{
    this.setState({avatar:file})
  }
  handleSubmit=(e)=>{
    const file=this.state.avatar
    const formData=new FormData();
    formData.append('file',file)
    formData.append('upload_preset',"zuk87vgw")
    fetch("https://api.cloudinary.com/v1_1/oliviatian/upload",{
      method:"POST",
      body:formData
    }).then(res=>res.json())
    .then(data=>this.setState({avatar:data.secure_url},()=>this.handleFormSubmit(this.state,this.props.user.id)))
  }
  handleFormSubmit=(obj,id)=>{
    this.props.editUserProfile(obj,id)
    this.handleClose("editForm")
  }

  render() {
    const { user,classes } = this.props;
    const username=user?user.username:null

    return (
      <div>
      <Tooltip
        id="tooltip-top"
        title="Edit profile"
        placement="top"
        classes={{ tooltip: classes.tooltip }}
      >
        <Button
          justIcon
          round
          color="success"
          className={classes.followButton}
          onClick={() => this.handleClickOpen("editForm")}
        >
          <Edit style={{ color: "#FFFFFF" }} />
        </Button>
      </Tooltip>

        <Dialog
          classes={{
            root: classes.modalRoot,
            paper: classes.modal
          }}
          open={this.state.editForm}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => this.handleClose("editForm")}
          aria-labelledby="classic-modal-slide-title"
          aria-describedby="classic-modal-slide-description"
        >
          <DialogTitle
            id="classic-modal-slide-title"
            disableTypography
            className={classes.modalHeader}
          >
            <Button
              simple
              className={classes.modalCloseButton}
              key="close"
              aria-label="Close"
              onClick={() => this.handleClose("editForm")}
            >
              {" "}
              <Close className={classes.modalClose} />
            </Button>
            <h4 className={classes.modalTitle}>Edit profile</h4>
          </DialogTitle>
          <DialogContent
            id="classic-modal-slide-description"
            className={classes.modalBody}
          >
          <CustomInput
              labelText="username"
              id="disabled"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                disabled: true,
                value:`${username}`
              }}
            />
          <CustomInput

              labelText="edit your bio"
              id="success"
              success
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                value:this.state.bio,
                onChange:this.handleChange
              }}
            />
            <ImageUpload
              handleImage={this.handleImage}
              addButtonProps={{ round: true }}
              changeButtonProps={{ round: true }}
              removeButtonProps={{ round: true, color: "danger" }}
            />

          </DialogContent>
          <DialogActions className={classes.modalFooter}>
            <Button
              onClick={() => this.handleClose("editForm")}
              color="secondary"
            >
              Close
            </Button>
            <Button color="primary" onClick={this.handleSubmit}>Save changes</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default connect(null,{editUserProfile})(withStyles(modalStyle)(EditProfile));
