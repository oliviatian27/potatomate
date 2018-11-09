import React from "react";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Badge from "components/Badge/Badge.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import mariyaGeorgieva from "assets/img/examples/mariya-georgieva.jpg";

import { Link } from 'react-router-dom';
class ReviewCard extends React.Component{


   render(){

  const { classes } = this.props;
  return (

    <GridItem xs={12} sm={12} md={6}>
    <Card
    background
    style={{
      backgroundImage:
      `url(${this.props.review.tvmovie.image})`
    }}
    >

    <CardBody
    background
    className={this.props.classes.cardBody}
    >

            <h4 className={classes.cardTitleWhite}>
            {this.props.review.content}
             </h4>
            <br />
            <Badge
            color="success"
            className={this.props.classes.badge}
            >

           rating:  {this.props.review.rating}
            </Badge>

            <a href={`/${this.props.review.tvmovie.media_type}/${this.props.review.tvmovie.tmdbid}`} >
            <h2 className={this.props.classes.cardTitleWhite}>
            {this.props.review.tvmovie.name}
            </h2>
            </a>
    </CardBody>

    </Card>
    </GridItem>
  )}
}

export default ReviewCard
