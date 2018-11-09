import React from 'react'
import FriendsItem from 'Custom/components/friendsComponents/friendsItem'
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "components/Grid/GridContainer.jsx";
import styles from "assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.jsx";
import {connect} from 'react-redux'
import {fetchFriends} from  'actions/action';
class Friends extends React.Component {


  componentDidUpdate(prevProps) {
      if (!!this.props.user && !prevProps.user) {
        this.props.fetchFriends(this.props.user.id)
      }
    }

  render(){
    const { classes, ...rest } = this.props;
    return (
      <div className={classes.container} style={{marginTop:"5%"}}>
        <GridContainer >
        {this.props.friendsList.map(friend=><FriendsItem key={friend.user.id} friend={friend}/>)}

         </GridContainer>
      </div>

    )
  }
}


export default connect(state=>({user:state.user.user,friendsList:state.user.friendsList}),{fetchFriends}) (withStyles(styles)(Friends))
