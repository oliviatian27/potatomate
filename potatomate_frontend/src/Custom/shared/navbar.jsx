import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Search from "@material-ui/icons/Search";
import Email from "@material-ui/icons/Email";
import Face from "@material-ui/icons/Face";
import Settings from "@material-ui/icons/Settings";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Explore from "@material-ui/icons/Explore";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Header from "components/Header/Header.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import navbarsStyle from "assets/jss/material-kit-pro-react/views/componentsSections/navbarsStyle.jsx";
import { Link } from 'react-router-dom';
import image from "assets/img/bg.jpg";
import profileImage from "assets/img/faces/avatar.jpg";
import { connect } from 'react-redux';
import {searchItem,fetchCurrentUser,logOutUser,notifyNewMessage}  from  'actions/action';
import bg4 from 'assets/img/bg4.jpg'
import SignUp from 'Custom/components/login/signup'
import Login from 'Custom/components/login/login'
import { ActionCable } from 'react-actioncable-provider';
import Popover from "@material-ui/core/Popover";
import popoverStyles from "assets/jss/material-kit-pro-react/popoverStyles.jsx";

import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import MessageContainer from 'Custom/components/navbar'

class SectionNavbars extends React.Component {
  state={
    searchInput:'',
    loginModal: false,
    signupModal:false,
    openBottom: false
  }
  componentDidMount(){
    if (localStorage.getItem('jwt')&&!this.props.user.loggedIn) {
      this.props.fetchCurrentUser()
    }
  }

  handleChange=(e)=>{
    this.setState({searchInput:e.target.value})
  }
  handleClickOpen=(modal)=> {
    var x = [];
    x[modal] = true;
    this.setState(x);
  }
  handleClose=(modal)=> {
    var x = [];
    x[modal] = false;
    this.setState(x);
  }


  handleSearch=(e)=>{
    e.preventDefault()
    if (this.state.searchInput.length>0) {

      this.props.searchItem(this.state.searchInput);
      this.props.history.push('/search')
      this.setState({searchInput:''})
    }
  }

  handleDropDown=(e)=>{

    switch (e) {
      case "My Profile":
        this.props.history.push(`/profile/${this.props.user.user.id}`)
        break
      case "Sign out":
        localStorage.clear()
        this.props.history.push('/')
        this.props.logOutUser()
      default:
        return
    }
  }



  render() {
    const { classes } = this.props;
    const handleChange=this.handleChange
    const avatar=this.props.user.user?this.props.user.user.avatar:profileImage
    const name=this.props.user.user?this.props.user.user.username:''

    return (
      <div >
            <Header

              brand="Potato Mate"
              fixed
              color="white"
              links={
                <List className={classes.list + " " + classes.mlAuto}>
                <div className={classes.mlAuto}>
                  <CustomInput
                    black
                    inputRootCustomClasses={classes.inputRootCustomClasses}
                    formControlProps={{
                      className: classes.formControl
                    }}
                    inputProps={{
                      placeholder: "Search",
                      inputProps: {
                        "aria-label": "Search",
                        className: classes.searchInput,
                        onChange:handleChange
                      }
                    }}
                  />
                  <Button color="white" justIcon round onClick={this.handleSearch}>
                    <Search className={classes.searchIcon} />
                  </Button>
                </div>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="/discover"
                      className={classes.navLink}
                      color="transparent"
                    >
                      News Feed
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="/explore/movie"
                      className={classes.navLink}
                      color="transparent"
                    >
                      Movie
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="/explore/tv"
                      className={classes.navLink}
                      color="transparent"
                    >
                      Tv
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                  {this.props.user.user?<Button
                    href="/friends"
                    className={classes.navLink}
                    color="transparent"
                  >
                    Friends
                  </Button>:null}

                  </ListItem>
                  {this.props.user.user&&this.props.user.user.allMessages.length>0?
                    <ListItem className={classes.listItem}>
                     <MessageContainer messages={this.props.user.user.allMessages}/>
                    </ListItem>:null}

                  <ListItem className={classes.listItem}>
                  {!this.props.user.loggedIn? <Button

                    className={classes.registerNavLink}
                    onClick={() => this.handleClickOpen("signupModal")}
                    color="rose"
                    round
                  >
                    Register
                  </Button> :null}

                  {!this.props.user.loggedIn? <Button

                    className={classes.registerNavLink}
                    onClick={() => this.handleClickOpen("loginModal")}
                    color="rose"
                    round
                  >
                    Login
                  </Button> :null}


                    <SignUp signupModal={this.state.signupModal} handleClose={this.handleClose}/>
                    <Login loginModal={this.state.loginModal} handleClose={this.handleClose} />
                  </ListItem>
                  <ListItem className={classes.listItem}>
                  {this.props.user.loggedIn?
                    <CustomDropdown
                      left
                      caret={false}
                      hoverColor="dark"
                      dropdownHeader={name}
                      onClick={this.handleDropDown}
                      buttonText={
                        <img
                          src={avatar}
                          className={classes.img}
                          alt="profile"
                        />
                      }
                      buttonProps={{
                        className:
                          classes.navLink + " " + classes.imageDropdownButton,
                        color: "transparent"
                      }}
                      dropdownList={[
                        "My Profile",
                        "Sign out"
                      ]}
                    />:null}
                  </ListItem>
                </List>
              }
            />

            <ActionCable
                key={this.props.user.user&&this.props.user.user.id}
                channel={{ channel: 'ConversationsChannel', user: this.props.user.user&&this.props.user.user.id }}
                onReceived={(res)=>{
                  this.props.notifyNewMessage(res)
                }}
              />


      </div>
    );
  }
}

export default connect(({user})=>({user}),{searchItem,fetchCurrentUser,logOutUser,notifyNewMessage})(withStyles(navbarsStyle)(SectionNavbars));


// <List >
// {this.props.user.user&&this.props.user.user.allMessages.map((message,idx)=>(
// <span key={idx}>
//   <a href={`/profile/${message.user.id}`}>
//    <ListItem button>
//      <ListItemText primary={`${message.user.username}:${message.content}`} />
//    </ListItem>
//    <Divider />
//    </a>
//  </span>
// ))}
//
//
//
//     </List>
