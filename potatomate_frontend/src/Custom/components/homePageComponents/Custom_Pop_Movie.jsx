/* eslint-disable */
import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Build from "@material-ui/icons/Build";
import Subject from "@material-ui/icons/Subject";
import FormatPaint from "@material-ui/icons/FormatPaint";
import Code from "@material-ui/icons/Code";
import Dashboard from "@material-ui/icons/Dashboard";
import Timeline from "@material-ui/icons/Timeline";
import Group from "@material-ui/icons/Group";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Muted from "components/Typography/Muted.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import Badge from "components/Badge/Badge.jsx";

import projectsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/projectsStyle.jsx";

import office2 from "assets/img/examples/office2.jpg";
import cardBlog3 from "assets/img/examples/card-blog3.jpg";
import cardProject1 from "assets/img/examples/card-project1.jpg";
import cardProject2 from "assets/img/examples/card-project2.jpg";
import cardProject3 from "assets/img/examples/card-project3.jpg";
import cardProject4 from "assets/img/examples/card-project4.jpg";
import cardProject5 from "assets/img/examples/card-project5.jpg";
import cardProject6 from "assets/img/examples/card-project6.jpg";

import Custom_Pop_List from './Custom_Pop_List'
import { connect } from 'react-redux';


class PopMovie extends React.Component {



  render (){
    const { classes,originalMovieList,originalTvList, ...rest } = this.props;

    return (
      <div className="cd-section" {...rest}>
      {/* Project 1 START */}
       <div className={classes.projects}>
          <div className={classes.container}>
              <GridContainer>
                  <GridItem
                  xs={12}
                  sm={12}
                  md={12}
                  className={`${classes.mlAuto} ${classes.mrAuto} ${
                    classes.textCenter
                  }`}
                  >
                    <h1 className={classes.title + " " + classes.textCenter}>
                        Popular Movies
                     </h1>
                     <br />
                      <NavPills
                      alignCenter
                      color="rose"

                      tabs={[
                        { tabButton: "Popular Movies", tabContent: (<Custom_Pop_List media_type="movie" list={originalMovieList.pop}/>) },
                        { tabButton: "Action", tabContent: (<Custom_Pop_List media_type="movie" list={originalMovieList.action}/>) },
                        { tabButton: "Crime", tabContent: (<Custom_Pop_List media_type="movie" list={originalMovieList.crime}/>) },
                        { tabButton: "Comedy", tabContent: (<Custom_Pop_List media_type="movie" list={originalMovieList.comedy}/>) },
                        { tabButton: "Romance", tabContent: (<Custom_Pop_List media_type="movie" list={originalMovieList.romance}/>) },
                        { tabButton: "Sci-Fi", tabContent: (<Custom_Pop_List media_type="movie" list={originalMovieList.scifi}/>) },
                        { tabButton: "Drama", tabContent: (<Custom_Pop_List media_type="movie" list={originalMovieList.drama}/>) }
                      ]}
                      />

                  </GridItem>
                  </GridContainer>

                  <div style={{textAlign: "center",margin:"50px"}}>
                     <Button size="lg" href="/explore/movie" color="twitter" >
                     Discover More Movies
                       </Button>
                   </div>
                   <GridContainer>
                   <GridItem
                   xs={12}
                   sm={12}
                   md={12}
                   className={`${classes.mlAuto} ${classes.mrAuto} ${
                     classes.textCenter
                   }`}
                   >
                   <h1 className={classes.title + " " + classes.textCenter}>
                       Popular Tv Shows
                    </h1>
                       <br />
                       <NavPills
                       alignCenter
                       color="rose"

                       tabs={[
                         { tabButton: "Popular Tv shows", tabContent: (<Custom_Pop_List media_type="tv" list={originalTvList.pop}/>) },
                         { tabButton: "family", tabContent: (<Custom_Pop_List media_type="tv" list={originalTvList.family}/>) },
                         { tabButton: "sci-fi", tabContent: (<Custom_Pop_List media_type="tv" list={originalTvList.scifi}/>) },
                         { tabButton: "comedy", tabContent: (<Custom_Pop_List media_type="tv" list={originalTvList.comedy}/>) },
                         { tabButton: "drama", tabContent: (<Custom_Pop_List media_type="tv" list={originalTvList.drama}/>) },
                         { tabButton: "Crime", tabContent: (<Custom_Pop_List media_type="tv" list={originalTvList.crime}/>) },
                         { tabButton: "animation", tabContent: (<Custom_Pop_List media_type="tv" list={originalTvList.animation}/>) }
                       ]}
                       />

                   </GridItem>
              </GridContainer>
              <div style={{textAlign: "center",margin:"50px"}}>
                 <Button size="lg" href="/explore/tv" color="twitter" >
                 Discover More TV shows
                   </Button>
               </div>
          </div>
       </div>
      {/* Project 1 END */}


      </div>
    );


  }
}

export default connect(state=>({originalMovieList:state.tv_movies.originalMovieList,
    originalTvList:state.tv_movies.originalTvList})) (withStyles(projectsStyle)(PopMovie));
