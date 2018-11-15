/* eslint-disable */
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import People from "@material-ui/icons/People";
import Add from "@material-ui/icons/Add";
import InsertChart from "@material-ui/icons/InsertChart";
import Favorite from "@material-ui/icons/Favorite";
// core components

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Badge from "components/Badge/Badge.jsx";
import Muted from "components/Typography/Muted.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Clearfix from "components/Clearfix/Clearfix.jsx";
import Button from "components/CustomButtons/Button.jsx";



import profilePageStyle from "assets/jss/material-kit-pro-react/views/profilePageStyle.jsx";

import {connect} from 'react-redux'
import ReviewCard from 'Custom/components/profile/reviewcard'

import EditProfile from 'Custom/components/profile/editProfile'
import FollowUser from 'Custom/components/profile/followUser'
import Following from 'Custom/components/profile/following'
import Tweets from 'Custom/components/profile/tweets'
import Chat from 'Custom/components/profile/Chat'
import Interest from 'Custom/components/profile/interest.js'
import {fetchProfileUser} from 'actions/action'

class ProfilePage extends React.Component {

  componentDidMount() {

      this.props.fetchProfileUser(this.props.match.params.id)
     window.scrollTo(0, 0)
  }


  componentWillReceiveProps = (nextProps)=>{

    if (nextProps.match.params.id !== this.props.match.params.id ) {
      this.props.fetchProfileUser(nextProps.match.params.id)
    }
  }


  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);


    const canEdit =  this.props.user &&  this.props.user.user && this.props.match.params.id == this.props.user.user.id;
      const user=canEdit?this.props.user.user:this.props.user.profileUser
    const imageUrl=canEdit?this.props.user.user.avatar:this.props.user.profileUser.avatar
    const bio=canEdit?this.props.user.user.bio:this.props.user.profileUser.bio
   const loggedIn=this.props.user.loggedIn
   const common_interest=this.props.user.common_interest
    return (
      <div key={this.props.match.params.id}>

        <Parallax
          image={"https://images.pexels.com/photos/64775/pexels-photo-64775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}

          className={classes.parallax}
        />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>

                    <img src={user.avatar} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>{user.username}</h3>
                  </div>
                </div>
                <div className={classes.follow}>

                {loggedIn?(canEdit?<EditProfile user={user}/>:<FollowUser />):null}

                {loggedIn&&!canEdit?<Chat recipient={user} recipient_id={this.props.match.params.id} sender={this.props.user.user}/>:null}
                </div>
              </GridItem>
            </GridContainer>
            <div
              className={classNames(classes.description, classes.textCenter)}
            >
              <p>
            {user.bio}
              </p>
            </div>
            <div className={classes.profileTabs}>{
              common_interest.length>0?
              <NavPills
              alignCenter
              color="success"
              tabs={[
                {
                  tabButton: "Reviewed Items",
                  tabIcon: Palette,
                  tabContent: (
                    <GridContainer>
                    <GridItem
                    xs={12}
                    sm={12}
                    md={10}
                    className={classes.gridItem}
                    >
                    <h4 className={classes.title}>Latest Reviews</h4>
                    <GridContainer className={classes.collections}>
                    {user.reviews&&user.reviews.map((review,idx)=><ReviewCard key={idx} classes={classes} review={review}/>)}

                    </GridContainer>
                    </GridItem>
                    </GridContainer>
                  )
                },
                {
                  tabButton: "Following",
                  tabIcon: People,
                  tabContent: (
                    <div>
                    <GridContainer justify="center">
                    <GridItem xs={12} sm={1} md={1}>
                    </GridItem>
                    <GridItem xs={12} sm={11} md={11}>
                    <GridContainer >
                    {user.followings&&user.followings.map((following,idx)=><Following key={following.id} following={following}/>)}
                    </GridContainer>
                    </GridItem>
                    </GridContainer>
                    </div>
                  )
                },
                {
                  tabButton: "Tweets",
                  tabIcon: Camera,
                  tabContent: (
                    <GridContainer >
                    {user.tweets&&user.tweets.map((tweet,idx)=><Tweets key={idx} tweet={tweet}/>)}
                    </GridContainer>
                  )
                },{
                  tabButton: "Match",
                  tabIcon: InsertChart,
                  tabContent: (
                    <GridContainer >
                  {common_interest.length>0&&common_interest.map((interest,idx)=><Interest key={idx} profileUser={this.props.user.profileUser} interest={interest}/>)}
                    </GridContainer>
                  )
                }
              ]}
              />:  <NavPills
                  alignCenter
                  color="success"
                  tabs={[
                    {
                      tabButton: "Reviewed Items",
                      tabIcon: Palette,
                      tabContent: (
                        <GridContainer>
                          <GridItem
                            xs={12}
                            sm={12}
                            md={10}
                            className={classes.gridItem}
                          >
                            <h4 className={classes.title}>Latest Reviews</h4>
                            <GridContainer className={classes.collections}>
                            {user.reviews&&user.reviews.map((review,idx)=><ReviewCard key={idx} classes={classes} review={review}/>)}

                        </GridContainer>
                        </GridItem>
                          </GridContainer>
                      )
                    },
                    {
                      tabButton: "Following",
                      tabIcon: People,
                      tabContent: (
                        <div>
                          <GridContainer justify="center">
                          <GridItem xs={12} sm={1} md={1}>
                           </GridItem>
                            <GridItem xs={12} sm={11} md={11}>
                              <GridContainer >
                          {user.followings&&user.followings.map((following,idx)=><Following key={following.id} following={following}/>)}
                               </GridContainer>
                             </GridItem>
                          </GridContainer>
                        </div>
                      )
                    },
                    {
                      tabButton: "Tweets",
                      tabIcon: Camera,
                      tabContent: (
                        <GridContainer >
                        {user.tweets&&user.tweets.map((tweet,idx)=><Tweets key={idx} tweet={tweet}/>)}
                        </GridContainer>
                      )
                    }
                  ]}
                />
            }
            </div>
            <Clearfix />
          </div>
        </div>

      </div>
    );
  }
}

export default connect(({user})=>({user}),{fetchProfileUser})(withStyles(profilePageStyle)(ProfilePage));
