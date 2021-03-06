import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// core components
import Header from "components/Header/Header.jsx";



import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
// sections for this page
import SectionDescription from "views/PresentationPage/Sections/SectionDescription.jsx";
import SectionComponents from "views/PresentationPage/Sections/SectionComponents.jsx";
import SectionCards from "views/PresentationPage/Sections/SectionCards.jsx";
import SectionContent from "views/PresentationPage/Sections/SectionContent.jsx";
import SectionSections from "views/PresentationPage/Sections/SectionSections.jsx";
import SectionExamples from "views/PresentationPage/Sections/SectionExamples.jsx";
import SectionFreeDemo from "views/PresentationPage/Sections/SectionFreeDemo.jsx";
import SectionOverview from "views/PresentationPage/Sections/SectionOverview.jsx";
import SectionPricing from "views/PresentationPage/Sections/SectionPricing.jsx";
import bg4 from 'assets/img/bg4.jpg'
import presentationStyle from "assets/jss/material-kit-pro-react/views/presentationStyle.jsx";



class footer extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <div style={{backgroundImage:`url(${bg4})`,backgroundSize:"cover"}}>

        <Footer


          content={
            <div>
              <div className={classes.left}>
                <a
                  href="https://github.com/oliviatian27"
                  className={classes.footerBrand}
                >
                  Potato Mate
                </a>
              </div>
              <div className={classes.pullCenter}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://github.com/oliviatian27"
                      className={classes.block}
                    >
                      Contact Us
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://github.com/oliviatian27"
                      className={classes.block}
                    >
                      blog
                    </a>
                  </ListItem>

                </List>
              </div>

            </div>
          }
        />
      </div>
    );
  }
}

export default withStyles(presentationStyle)(footer);
