import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// import Star from "@material-ui/icons/Star";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import Share from "@material-ui/icons/Share";
import ChatBubble from "@material-ui/icons/ChatBubble";
import Schedule from "@material-ui/icons/Schedule";
import TrendingUp from "@material-ui/icons/TrendingUp";
import Subject from "@material-ui/icons/Subject";
import WatchLater from "@material-ui/icons/WatchLater";
import People from "@material-ui/icons/People";
import Business from "@material-ui/icons/Business";
import Check from "@material-ui/icons/Check";
import Close from "@material-ui/icons/Close";
import Delete from "@material-ui/icons/Delete";
import Bookmark from "@material-ui/icons/Bookmark";
import Refresh from "@material-ui/icons/Refresh";
import Receipt from "@material-ui/icons/Receipt";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import Info from "components/Typography/Info.jsx";
import Danger from "components/Typography/Danger.jsx";
import Success from "components/Typography/Success.jsx";
import Warning from "components/Typography/Warning.jsx";
import Rose from "components/Typography/Rose.jsx";
import Button from "components/CustomButtons/Button.jsx";

import styles from "assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.jsx";


import { Link } from 'react-router-dom';

class SectionCards extends React.Component {
  render() {
    const { classes, media_type,id,vote_average,title,name,poster_path,backdrop_path } = this.props;
    return (
                  <GridItem xs={12} sm={6} md={6} lg={4} >
                  <Link key={id} to={`/${media_type}/${id}`} >
                    <Card blog style={{maxHeight:"300px"}}>
                      <CardHeader image>

                          <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt="..." />

                        <div
                          className={classes.coloredShadow}
                          style={{
                            backgroundImage: `url(${`https://image.tmdb.org/t/p/w500${backdrop_path}`})`,
                            opacity: "1"
                          }}
                        />
                      </CardHeader>
                      <CardBody>
                         <Info >
                           <h3 className={classes.cardCategory} >{title}{name}</h3>
                           </Info>
                            <div className={classes.mlAuto}>
                              <Success>
                                  <h2 className={classes.cardCategory }>{vote_average}</h2>
                              </Success>
                           </div>

                      </CardBody>

                    </Card>
                   </Link>
                  </GridItem>


    );
  }
}

export default withStyles(styles)(SectionCards);
