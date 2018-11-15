import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import imagesStyles from "assets/jss/material-kit-pro-react/imagesStyles.jsx";
import Star from "@material-ui/icons/Star";
import { cardTitle } from "assets/jss/material-kit-pro-react.jsx";

const style = {
  ...imagesStyles,
  cardTitle,
  textMuted: {
    color: "#6c757d"
  }
};

function Interest(props) {
  const {interest,profileUser, classes } = props;
  return (
    <GridItem xs={12} sm={12} md={4} >

      <Card style={{backgroundColor:"#e2e0e1"}}>
        <CardBody color>
          <h3 className={classes.cardTitle}>{interest.tvmovie.name}</h3>
          <h4 className={classes.cardTitle}>Your Rating</h4>
             {[...Array(Math.round(interest.selfRating/2))].map((e, i) => <span  key={i}><Star nativeColor="#f98f3e"/></span>)}
          <h4 className={classes.cardTitle}>{profileUser.username}'s rating</h4>
             {[...Array(Math.round(interest.friendRating/2))].map((e, i) => <span  key={i}><Star nativeColor="#f98f3e"/></span>)}
        </CardBody>
       <CardBody>
        <img
          className={classes.imgCardBottom}
          src={interest.tvmovie.image}
          alt="Card-img-cap"
        />
        <div
          className={classes.coloredShadow}
          style={{
            backgroundImage: `url(${interest.tvmovie.image})`,
            opacity: "1"
          }}
        />
      </CardBody>
      </Card>
    </GridItem>
  );
}

export default withStyles(style)(Interest);
