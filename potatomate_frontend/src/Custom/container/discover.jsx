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

import BroadcastForm from '../components/discover/form'
import SelectTwitter from '../components/discover/selectTwitter'
import Twitter from '../components/discover/twitter'
import twitter from "assets/img/twitter.jpg";
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
        image="https://images.unsplash.com/photo-1534236874052-bef0ac071a50?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=995bc6a8ecd965de85fdf788f7528cd2&auto=format&fit=crop&w=1950&q=80"

        className={classes.parallax}
      />

      <div className={classNames(classes.main, classes.mainRaised)}  style={{"backgroundColor":"#f3f3f3"}}>
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
