import React from 'react';

import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import {fetchOriginalTweets} from 'actions/action'
import {connect} from 'react-redux'
import styles from "assets/jss/material-kit-pro-react/customSelectStyle.jsx";

class selectTwitter extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      simpleSelect: "all"
    };
  }


  handleSimple = event => {

    this.setState({ [event.target.name]: event.target.value },()=>{
      this.props.fetchOriginalTweets(this.state.simpleSelect,this.props.user.user.id)
    });
  };

  render(){
    const { classes } = this.props;
    return (
      <Card>
        <CardBody>
      <GridContainer justify="center">
        <GridItem xs={12} sm={8} md={8} lg={8}>
          <h4> Select all the posts or people you're following  </h4>
          <FormControl
            fullWidth
            className={classes.selectFormControl}>

            <Select
              MenuProps={{
                className: classes.selectMenu
              }}
              classes={{
                select: classes.select
              }}
              value={this.state.simpleSelect}
              onChange={this.handleSimple}
              inputProps={{
                name: "simpleSelect",
                id: "simple-select"
              }}>
              <MenuItem
                classes={{
                  root: classes.selectMenuItem,
                  selected: classes.selectMenuItemSelected
                }}
                value="all">
                All the posts
              </MenuItem>
              <MenuItem
                classes={{
                  root: classes.selectMenuItem,
                  selected: classes.selectMenuItemSelected
                }}
                value="followings">
                following
              </MenuItem>

            </Select>
          </FormControl>
        </GridItem>

      </GridContainer>
    </CardBody>
  </Card>
    );
  }
}

export default connect (({user})=>({user}),{fetchOriginalTweets})(withStyles(styles)(selectTwitter));
