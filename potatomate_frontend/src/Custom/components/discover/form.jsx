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
import ImageUpload from 'components/CustomUpload/ImageUpload.jsx';
import ImageUploader from 'react-images-upload';
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import {connect} from 'react-redux'
import {postTweet} from 'actions/action'
const Cloud_Url="https://api.cloudinary.com/v1_1/oliviatian/upload"
const Preset="zuk87vgw"

class TweetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image:'',
      content:''

    };
  }

  handleChange=(e)=>{
    this.setState({content:e.target.value})
  }

  onDrop=(file) =>{

        this.setState({image:file[0]});
    }

  handleSubmit=(e)=>{
    const file=this.state.image
    const formData=new FormData();
    formData.append('file',file)
    formData.append('upload_preset',Preset)
    fetch(Cloud_Url,{
      method:"POST",
      body:formData
    }).then(res=>res.json())
    .then(data=>this.setState({image:data.secure_url},()=>{
      this.props.postTweet({...this.state,...{user_id:this.props.user.user.id}})
      this.setState({content:'',image:''})
    }
    ))
  }


  render() {
    const { classes } = this.props;
    const linkProps = {target: '_blank', rel: 'noreferrer'}
    return (
      <div>
      <Card style={{"textAlign":"center"}}>
      <CardBody>
      <h2 className={classes.cardTitle}>share something to the world </h2>

      <CustomInput
        labelText="share something you like"
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
      <GridContainer >
      <GridItem xs={12} sm={6} md={6} style={{"textAlign":"right"}}>

      <ImageUploader
      label=''
      withIcon={false}
      onChange={this.onDrop}
      imgExtension={['.jpg', '.gif', '.png', '.jpeg','.gif']}
      maxFileSize={5242880}
      withPreview={true}
      />
      </GridItem>
      <GridItem xs={12} sm={6} md={6} >
      <br />
      <Button type="button" color="success" onClick={this.handleSubmit}>Post</Button>
      </GridItem>
      </GridContainer >
       </CardBody>


        </Card>

      </div>
    );
  }
}

export default connect(({user})=>({user}),{postTweet})(withStyles(modalStyle)(TweetForm));
