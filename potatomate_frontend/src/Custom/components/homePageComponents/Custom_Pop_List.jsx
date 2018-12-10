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


import styles from "assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.jsx";

import Pop_Item from './Custom_Pop_Item'


class PopList extends React.Component {


  render() {
    const { classes,list,media_type, ...rest } = this.props;
    return (
      <div {...rest} className="cd-section" id="cards">
      <div className={classes.container}>
                <GridContainer>

                { list&&list.slice(0,6).map(movie=><Pop_Item key={movie.id} media_type={media_type} {...movie} />)}


                </GridContainer>

      </div>
      </div>

    );
  }
}


export default withStyles(styles)(PopList);
