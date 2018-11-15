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
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import { Rating } from 'material-ui-rating'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import modalStyle from "assets/jss/material-kit-pro-react/modalStyle.jsx";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// @material-ui/icons
import Check from '@material-ui/icons/Check';

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class ReviewFormModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liveDemo: false,
      content:'',
      rating:0,
      share:true
    };
  }
  handleClickOpen(e,modal) {
    var x = [];
    x[modal] = true;
    this.setState(x);
    this.setState({rating:e})
  }
  handleClose(modal) {
    var x = [];
    x[modal] = false;
    this.setState(x);
  }


  handleChange=(e)=>{
    this.setState({content:e.target.value})
  }
  handleRate=(e)=>{
    this.setState({rating:e})
  }
  handleShare = name => event => {
    this.setState({ [name]: event.target.checked });
  };


  handleSubmit=(e)=>{
    // e.preventDefault()
    console.log(this.props);
    const title=this.props.tv_movies.currentItem.name?this.props.tv_movies.currentItem.name:this.props.tv_movies.currentItem.title
    const obj={content:this.state.content,rating:2*this.state.rating,
      name:title,
      user_id:this.props.user.user.id,tmdbid:this.props.tv_movies.currentItem.id,
      rating_count:this.props.tv_movies.currentItem.vote_count,
      rating_average:this.props.tv_movies.currentItem.vote_average,
      media_type:this.props.type,
      image:`https://image.tmdb.org/t/p/w500/${this.props.tv_movies.currentItem.backdrop_path}`,
    }
    this.props.submitReview(obj,this.state.share)
    this.setState({content:'',rating:''})
  }


  render() {
    const { classes } = this.props;
    return (
      <div style={{textAlign:"center"}}>
      <Card>

      <h2 className={`${classes.textCenter} ${classes.modalTitle }`}>Review Now</h2>
      <MuiThemeProvider>
      <Rating
            value={this.state.rating}
            max={5}
            onChange={(e) => this.handleClickOpen(e,"liveDemo")}

          />
      </MuiThemeProvider>
      <br />

        </Card>
        <Dialog
          classes={{
            root: classes.modalRoot,
            paper: classes.modal
          }}
          open={this.state.liveDemo}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => this.handleClose("liveDemo")}
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
              onClick={() => this.handleClose("liveDemo")}
            >
              {" "}
              <Close className={classes.modalClose} />
            </Button>
            <h2 className={`${classes.textCenter} ${classes.modalTitle }`}>Review Now</h2>
          </DialogTitle>
          <DialogContent
            id="classic-modal-slide-description"
            className={classes.modalBody}
          >

          <MuiThemeProvider>
          <Rating
                value={this.state.rating}
                max={5}
                onChange={this.handleRate}

              />
          </MuiThemeProvider>
          <CustomInput
            labelText="Your Review"
            id="message"
            success
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              multiline: true,
              rows: 4,
              value:this.state.content,
              onChange:this.handleChange
            }}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.share}
                onChange={this.handleShare('share')}
                value="share"
              />
            }
            label="share to my feed"
          />

          </DialogContent>
          <DialogActions className={classes.modalFooter}>
            <Button
              onClick={() => this.handleClose("liveDemo")}
              color="success"
            >
              Close
            </Button>
            <Button color="success" onClick={this.handleSubmit} className="reviewbutton">
            Submit Review</Button>
          </DialogActions>

        </Dialog>
      </div>
    );
  }
}

export default withStyles(modalStyle)(ReviewFormModal);
