import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Timeline from "@material-ui/icons/Timeline";
import Code from "@material-ui/icons/Code";
import Group from "@material-ui/icons/Group";
import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";
import Check from "@material-ui/icons/Check";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import signupPageStyle from "assets/jss/material-kit-pro-react/views/signupPageStyle.jsx";
import BroadcastForm from 'Custom/components/discover/form'
import Twitter from 'Custom/components/discover/twitter'
import image from "assets/img/bg7.jpg";
import {connect} from 'react-redux'
import {fetchOriginalTweets} from 'actions/action'

class Discover extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
      this.props.fetchOriginalTweets()
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>

        <div >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={12}>
                <BroadcastForm />
                {this.props.tweet.originalTweetList.map(tweet=><Twitter key={tweet.id} tweet={tweet} />)}

              </GridItem>
            </GridContainer>
          </div>

        </div>
      </div>
    );
  }
}

export default connect(({tweet})=>({tweet}),{fetchOriginalTweets})(withStyles(signupPageStyle)(Discover));
