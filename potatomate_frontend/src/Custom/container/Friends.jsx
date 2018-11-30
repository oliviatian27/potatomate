import React from 'react'
import FriendsItem from 'Custom/components/friendsComponents/friendsItem'
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import styles from "assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.jsx";
import {connect} from 'react-redux'
import {fetchFriends} from  'actions/action';
import Divider from '@material-ui/core/Divider';


class Friends extends React.Component {

  constructor(props) {
    super(props);

  }
  componentDidUpdate(prevProps) {
      if (!!this.props.user && !prevProps.user) {
        this.props.fetchFriends(this.props.user.id)
      }
    }


  render(){
    const { friendsList,classes, ...rest } = this.props;
    return (
      <div className={classes.container} style={{marginTop:"2%",minHeight:"960px",textAlign:"center",background:"white"}}>
      <div style={{paddingTop:"60px"}}>
      {friendsList.length>0?<h1>Congrats!{" "}You have {friendsList.length} matched friends</h1>:<h1>You have 0 friends now,review and get more friends :)</h1>}
      </div>
        <GridContainer style={{padding:"50px"}} >
        {friendsList.map(friend=><FriendsItem key={friend.user.id} friend={friend}/>)}
         </GridContainer>
      </div>
    )
  }
}


export default connect(state=>({user:state.user.user,friendsList:state.user.friendsList}),{fetchFriends}) (withStyles(styles)(Friends))
