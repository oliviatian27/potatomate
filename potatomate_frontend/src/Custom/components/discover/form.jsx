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

class broadcastForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liveDemo: false,
      content:'',
      rating:3,
      share:true
    };
  }

  handleChange=(e)=>{
    this.setState({content:e.target.value})
  }



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
      image:`https://image.tmdb.org/t/p/w500/${this.props.tv_movies.currentItem.backdrop_path}`
    }
    this.props.submitReview(obj)
    this.setState({content:'',rating:''})
  }


  render() {
    const { classes } = this.props;
    return (
      <div>
      <Card>

      <CustomInput
        labelText="Your Review"
        id="message"
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


        </Card>

      </div>
    );
  }
}

export default withStyles(modalStyle)(broadcastForm);
