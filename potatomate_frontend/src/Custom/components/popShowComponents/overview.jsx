import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Success from "components/Typography/Success.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.jsx";

class SectionProduct extends React.Component {
  render() {
    const { currentItem,classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={8} md={8}>
          <div className={`${classes.title} ${classes.textCenter}`}>
            <h2>Over View</h2>
          </div>
            <h5 >
              {currentItem.overview}...          
            </h5>
          </GridItem>
        </GridContainer>

      </div>
    );
  }
}

export default withStyles(productStyle)(SectionProduct);
