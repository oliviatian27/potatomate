import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "components/CustomButtons/Button.jsx";
import Add from "@material-ui/icons/Add";
import profilePageStyle from "assets/jss/material-kit-pro-react/views/profilePageStyle.jsx";
import {connect} from 'react-redux'
import {followUser} from 'actions/action'

class FollowUser extends React.Component {

  handleClick=(e)=>{
    console.log(this.props.user);
    this.props.followUser({follower_id:this.props.user.user.id,followee_id:this.props.user.profileUser.id})
  }

   render(){
     const { classes, ...rest } = this.props;

     const canFollow=this.props.user.user&&this.props.user.user.followings&&this.props.user.profileUser&&this.props.user.user.followings.find(person=>(person.id===this.props.user.profileUser.id))

     return (
       <span>

       {!!canFollow?
       <Button color="success" round disabled>Following</Button>
       :<Tooltip
            id="tooltip-top"
            title="Follow this user"
            placement="top"
            classes={{ tooltip: classes.tooltip }}
          >
         <Button
           justIcon
           round
           onClick={this.handleClick}
           color="success"
           className={classes.followButton}
         >
           <Add className={classes.followIcon} />
         </Button>
       </Tooltip>
       }
     </span>
     )
   }


}
export default connect(({user})=>({user}),{followUser}) (withStyles(profilePageStyle)(FollowUser));
