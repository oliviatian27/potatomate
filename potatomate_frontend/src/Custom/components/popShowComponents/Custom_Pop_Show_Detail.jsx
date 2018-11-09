/* eslint-disable */
import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Movie from "@material-ui/icons/Movie";
import Subject from "@material-ui/icons/Subject";
import FormatPaint from "@material-ui/icons/FormatPaint";
import Code from "@material-ui/icons/Code";
import Language from "@material-ui/icons/Language";
import Dashboard from "@material-ui/icons/Dashboard";
import Today from "@material-ui/icons/Today";
import Schedule from "@material-ui/icons/Schedule";
import StarRate from "@material-ui/icons/StarRate";
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
import blog1 from "assets/img/examples/blog1.jpg";
import projectsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/projectsStyle.jsx";
import 'react-rater/lib/react-rater.css'
import ReviewForm from './reviewForm'
import Overview from './overview'
import Reviews from './Reviews'
import {connect} from 'react-redux'
import Recommendations from 'Custom/components/popShowComponents/recommendations'
class  Custom_Pop_Show_Detail extends React.Component {


  render(){
  const { classes,currentItem,type,currentItemRecommendations,currentItemReviews, ...rest } = this.props;
  const genres=currentItem.genres?currentItem.genres.map(g=>g.name).join(','):''
  const countries=currentItem.production_countries?currentItem.production_countries.map(g=>g.name).join(','):''
  const networks=currentItem.networks?currentItem.networks.map(g=>g.name).join(','):''
  const companies=currentItem.production_companies?currentItem.production_companies.map(g=>g.name).join(','):''
  return (
    <div className="cd-section" {...rest}>

      <div className={`${classes.projects} ${classes.projects4}`}>
        <div className={classes.container}>
            <div className={`${classes.title} ${classes.textCenter}`}>
              <h1 style={{fontWeight:"600"}}>{currentItem.title}{currentItem.name}</h1>
            </div>
          <GridContainer>

          <GridItem xs={12} sm={5} md={5} lg={6}>
            <Card blog plain>
              <CardHeader image plain>
                <a href={currentItem.homepage} target="_blank">
                  <img src={`https://image.tmdb.org/t/p/w500/${currentItem.poster_path}`} alt="..." />
                </a>
                <div
                  className={classes.coloredShadow}
                  style={{
                    backgroundImage: `url(${`https://image.tmdb.org/t/p/w500/${currentItem.poster_path}`})`,
                    opacity: "1"
                  }}
                />
              </CardHeader>

            </Card>
          </GridItem>

            <GridItem xs={12} sm={5} md={5} className={classes.mrAuto}>
            <br />
              <InfoArea
                className={classes.info4}
                title={`Rating:${currentItem.vote_average}`}
                description={`${currentItem.vote_count} people rated before`}
                icon={StarRate}
                iconColor="primary"
              />
              <InfoArea
                className={classes.info4}
                title="Genres"
                description={genres}
                icon={Movie}
                iconColor="primary"
              />
              <InfoArea
                className={classes.info4}
                title={type==="movie"?"Release Date":"First Air Date"}
                description={currentItem.release_date||currentItem.first_air_date}
                icon={Today}
                iconColor="primary"
              />
              <InfoArea
                className={classes.info4}
                title={type==="movie"?"runtime":"Last Air Date"}
                description={currentItem.runtime||currentItem.last_air_date}
                icon={Schedule}
                iconColor="primary"
              />
              <InfoArea
                className={classes.info4}
                title={type==="movie"?"Production Country":"Net Works"}
                description={countries||networks}
                icon={Language}
                iconColor="primary"
              />
            
              <InfoArea
                className={classes.info4}
                title="Production Companies"
                description={companies}
                icon={Language}
                iconColor="primary"
              />
              <div>


               <ReviewForm   type={type}/>

              </div>
            </GridItem>
          </GridContainer>

         <Overview currentItem={currentItem}/>
         <div className={classes.container}>
         <div className={`${classes.title} ${classes.textCenter}`}>
           <h2>People who like this {type} also like </h2>
         </div>
           <GridContainer>

             {currentItemRecommendations.slice(0,6).map(rec=><Recommendations key={rec.id} item={rec} type={type}/>)}

          </GridContainer>
          </div>
         <div className={`${classes.title} ${classes.textCenter}`}>
           <h3>{currentItemReviews.length} Reviews</h3>
         </div>

          {currentItemReviews.map(review=> <Reviews review={review} />)}



        </div>
      </div>
      {/* Project 4 END */}
    </div>
  );
  }
}




export default connect(state=>({currentItemReviews:state.tv_movies.currentItemReviews,
   currentItemRecommendations:state.tv_movies.currentItemRecommendations})) (withStyles(projectsStyle)(Custom_Pop_Show_Detail));
