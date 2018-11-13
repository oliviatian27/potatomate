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

import classNames from "classnames";
// core components

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import CustomInput from "components/CustomInput/CustomInput.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import BroadcastForm from 'Custom/components/discover/form'
import SelectTwitter from 'Custom/components/discover/selectTwitter'
import Twitter from 'Custom/components/discover/twitter'
import image from "assets/img/bg7.jpg";
import {connect} from 'react-redux'
import {fetchOriginalTweets} from 'actions/action'
import profilePageStyle from "assets/jss/material-kit-pro-react/views/profilePageStyle.jsx";

class Discover extends React.Component {
  constructor(props) {
    super(props);

  }
  componentDidMount(){
    this.props.fetchOriginalTweets("all")

  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
      <Parallax
        image="https://images.unsplash.com/photo-1540205082-e56e180508e6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7cc8260f6b8370c4e32ab6bfc1034254&auto=format&fit=crop&w=2378&q=80"

        className={classes.parallax}
      />

      <div className={classNames(classes.main, classes.mainRaised)}  style={{"backgroundColor":"#f2fcf6"}}>
        <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={10} md={10}>
              {this.props.user.loggedIn? <BroadcastForm />:null}
                {this.props.user.loggedIn?<SelectTwitter />:null}

                {this.props.tweet.originalTweetList.map((tweet,idx)=><Twitter key={idx} tweet={tweet} />)}

              </GridItem>
            </GridContainer>
          </div>

        </div>
      </div>
    );
  }
}

export default connect(({user,tweet})=>({user,tweet}),{fetchOriginalTweets})(withStyles(profilePageStyle)(Discover));
