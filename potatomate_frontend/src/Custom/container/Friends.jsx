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

      <div className={classes.container} style={{marginTop:"5%",marginBottom:"20px", minHeight:"700px",textAlign:"center"}}>
      <div style={{padding:"20px"}}>
      <h1>Congrats!You get {friendsList.length} matched friends</h1>
      </div>
      
        <GridContainer  >
        {friendsList.map(friend=><FriendsItem key={friend.user.id} friend={friend}/>)}

         </GridContainer>
      </div>





    )
  }
}


export default connect(state=>({user:state.user.user,friendsList:state.user.friendsList}),{fetchFriends}) (withStyles(styles)(Friends))

// <GridContainer style={{marginTop:"5%"}} justify="center">
// <GridItem
// xs={12}
// sm={8}
// md={10}
// className={classes.gridItem}
// >
// <GridContainer>
// {this.props.friendsList.map(friend=><FriendsItem key={friend.user.id} friend={friend}/>)}
// </GridContainer>
// </GridItem>
// </GridContainer>


// <GridItem xs={12} sm={6} md={6} lg={4}>
//   <div className={classes.rotatingCardContainer}>
//     <Card background className={classes.cardRotate}>
//       <div
//         className={`${classes.front} ${
//           classes.wrapperBackground
//         }`}
//         style={{
//           backgroundImage: `url(${cardBlog5})`
//         }}
//       >
//         <CardBody background className={classes.cardBodyRotate}>
//           <h6 className={classes.cardCategoryWhite}>
//             Full Background Card
//           </h6>
//           <a href="#pablo" onClick={e => e.preventDefault()}>
//             <h3 className={classes.cardTitleWhite}>
//               This Background Card Will Rotate on Hover
//             </h3>
//           </a>
//           <p className={classes.cardDescriptionWhite}>
//             Dont be scared of the truth because we need to
//             restart the human foundation in truth And I love you
//             like Kanye loves Kanye I love Rick Owens’ bed design
//             but the back is...
//           </p>
//         </CardBody>
//       </div>
//       <div
//         className={`${classes.back} ${
//           classes.wrapperBackground
//         }`}
//         style={{
//           backgroundImage: `url(${cardBlog5})`
//         }}
//       >
//         <CardBody background className={classes.cardBodyRotate}>
//           <h5 className={classes.cardTitleWhite}>
//             Manage Post
//           </h5>
//           <p className={classes.cardDescriptionWhite}>
//             As an Admin, you have shortcuts to edit, view or
//             delete the posts.
//           </p>
//           <div className={classes.textCenter}>
//             <Button round justIcon color="info">
//               <Subject />
//             </Button>
//             <Button round justIcon color="success">
//               <Icon>mode_edit</Icon>
//             </Button>
//             <Button round justIcon color="danger">
//               <Delete />
//             </Button>
//           </div>
//         </CardBody>
//       </div>
//     </Card>
//   </div>
// </GridItem>
