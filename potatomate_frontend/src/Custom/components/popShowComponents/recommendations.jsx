import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
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
import { Link } from 'react-router-dom';
import styles from "assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.jsx";


class Recommendations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRotate1: "",
      activeRotate2: ""
    };
  }

  render() {
    const { classes,item,type, ...rest } = this.props;
    return (

                <GridItem xs={12} sm={4} md={4}>
                <Link to={`/${type}/${item.id}`} >
                  <Card profile plain style={{marginTop:"10px",marginBottom:"1px"}}>
                    <CardHeader image plain>

                        <img src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} alt="..." />


                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${`https://image.tmdb.org/t/p/w500${item.backdrop_path}`})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                    <CardBody plain>
                      <Info>
                        <h4 className={classes.cardCategory}>{item.title}{item.name}</h4>
                      </Info>
                      <span style={{marginLeft:"10px"}}>
                        <Success >
                            <h3 className={classes.cardCategory }> {item.vote_average}</h3>
                        </Success>
                        </span>
                    </CardBody>

                  </Card>
                  </Link>
                </GridItem>

    );
  }
}

export default withStyles(styles)(Recommendations);
