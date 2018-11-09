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

import presentationStyle from "assets/jss/material-kit-pro-react/views/presentationStyle.jsx";
import profilePageStyle from "assets/jss/material-kit-pro-react/views/profilePageStyle.jsx";

import Custom_Pop_Show_Detail from 'Custom/components/popShowComponents/Custom_Pop_Show_Detail'

import { connect } from 'react-redux';
import {fetchItem}  from  'actions/action';


class Custom_Pop_Show extends React.Component {
  componentDidMount() {
    this.props.fetchItem(this.props.match.params.media_type,this.props.match.params.id)
  }
  componentDidUpdate(prevProps, prevState) {
      if (prevProps.match.params.id !== this.props.match.params.id) {
        this.props.fetchItem(this.props.match.params.media_type,this.props.match.params.id)
        window.scrollTo(0, 0)
      }
    }

  render() {
    const { currentItem,classes,...rest } = this.props;
    return (
      <div >
      <Parallax
        image="https://images.unsplash.com/photo-1496715976403-7e36dc43f17b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c8df2caeb47cf27eae792735019e072f&auto=format&fit=crop&w=2100&q=80"

        className={classes.parallax}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer justify="center">


      <Custom_Pop_Show_Detail currentItem={currentItem} type={this.props.match.params.media_type}/>



             </GridContainer>
         </div>
       </div>
      </div>
    );
  }
}

export default connect(state=>({currentItem:state.tv_movies.currentItem,
     currentItemRecommendations:state.tv_movies.currentItemRecommendations
   }),{fetchItem})(withStyles(profilePageStyle)(Custom_Pop_Show));
