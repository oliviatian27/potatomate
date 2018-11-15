import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import imagesStyles from "assets/jss/material-kit-pro-react/imagesStyles.jsx";
import Moment from 'react-moment';
import { cardTitle } from "assets/jss/material-kit-pro-react.jsx";

const style = {
  ...imagesStyles,
  cardTitle,
  textMuted: {
    color: "#6c757d"
  }
};

function Tweets(props) {
  const { tweet,classes } = props;
  return (
    <GridItem xs={12} sm={12} md={4} >

      <Card style={{height:'18vw',backgroundColor:"#bed8be"}} >
        <CardBody>

          <p>
          {tweet.content}
          </p>
          <p>
            <small className={classes.textMuted}>
               <Moment fromNow>{tweet.created_at}</Moment>

            </small>
          </p>
        </CardBody>
        <CardBody style={{height:'12vw'}}>
        <img
          className={classes.imgCardBottom}
          src={tweet.image}
          alt="Card-img-cap"
          style={{maxHeight:'10vw'}}

        />
        </CardBody>
      </Card>
    </GridItem>
  );
}

export default withStyles(style)(Tweets);
