import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Button from 'components/CustomButtons/Button.jsx';

import Custom_Pop_Movie from 'Custom/components/homePageComponents/Custom_Pop_Movie'
import { Link } from 'react-router-dom'
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

// import React from "react";
// // @material-ui/core components
// import withStyles from "@material-ui/core/styles/withStyles";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// // @material-ui/icons
// import Favorite from "@material-ui/icons/Favorite";
// // core components
// import Header from "components/Header/Header.jsx";
// import HeaderLinks from "components/Header/HeaderLinks.jsx";
// import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
// import Parallax from "components/Parallax/Parallax.jsx";
// // sections for this page
// import SectionPills from "./Sections/SectionPills.jsx";
// import SectionInterested from "./Sections/SectionInterested.jsx";
// import SectionImage from "./Sections/SectionImage.jsx";
// import SubscribeLine from "./Sections/SubscribeLine.jsx";

import blogPostsPageStyle from "assets/jss/material-kit-pro-react/views/blogPostsPageStyle.jsx";

import styles from "assets/jss/material-kit-pro-react/views/componentsSections/preFooter.jsx";
import presentationStyle from "assets/jss/material-kit-pro-react/views/presentationStyle.jsx";

import { connect } from 'react-redux';
import {fetchMovie}  from  'actions/action';


class PresentationPage extends React.Component {
  componentDidMount() {
    this.props.fetchMovie("movie",'','pop','popularity.desc',1)
    this.props.fetchMovie("movie",'&with_genres=28','action','popularity.desc',1)
    this.props.fetchMovie("movie",'&with_genres=80','crime','popularity.desc',1)
    this.props.fetchMovie("movie",'&with_genres=35','comedy','popularity.desc',1)
    this.props.fetchMovie("movie",'&with_genres=10749','romance','popularity.desc',1)
    this.props.fetchMovie("movie",'&with_genres=878','scifi','popularity.desc',1)
    this.props.fetchMovie("movie",'&with_genres=18','drama','popularity.desc',1)
    this.props.fetchMovie("tv",'','pop','popularity.desc',1)
    this.props.fetchMovie("tv",'&with_genres=10751','family','popularity.desc',1)
    this.props.fetchMovie("tv",'&with_genres=10765','scifi','popularity.desc',1)
    this.props.fetchMovie("tv",'&with_genres=35','comedy','popularity.desc',1)
    this.props.fetchMovie("tv",'&with_genres=18','drama','popularity.desc',1)
    this.props.fetchMovie("tv",'&with_genres=80','crime','popularity.desc',1)
    this.props.fetchMovie("tv",'&with_genres=16','animation','popularity.desc',1)
    window.scrollTo(0, 0)

  }
  render() {
    const { classes } = this.props;
    return (
      <div>
      <Parallax image="https://images.unsplash.com/photo-1540205082-e56e180508e6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7cc8260f6b8370c4e32ab6bfc1034254&auto=format&fit=crop&w=2389&q=80"  small>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
                <h2 className={classes.title}>
                  A Place for You to Share and Discover New Movies and Tv Shows
                </h2>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classes.main}>
          <div className={classes.container}>
            <Custom_Pop_Movie />
            </div>
            </div>


      </div>
    );
  }
}

export default connect(null,{fetchMovie})(withStyles(blogPostsPageStyle)(PresentationPage));
