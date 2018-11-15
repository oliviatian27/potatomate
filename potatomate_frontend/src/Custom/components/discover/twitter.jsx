import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/core ic
import Favorite from "@material-ui/icons/Favorite";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Table from "components/Table/Table.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Media from "components/Media/Media.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Paginations from "components/Pagination/Pagination.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import style from "assets/jss/material-kit-pro-react/views/componentsSections/contentAreas.jsx";
import cardsStyle from "assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import imagesStyles from "assets/jss/material-kit-pro-react/imagesStyles.jsx";
import Star from "@material-ui/icons/Star";
import { cardTitle } from "assets/jss/material-kit-pro-react.jsx";
import Moment from 'react-moment';
import {connect} from 'react-redux'
import {handleFavorite} from 'actions/action'
import { Link } from 'react-router-dom';
const newStyle={
  ...style,
  ...cardsStyle,
  ...imagesStyles
}

class Twitter extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //
    // };

  }
  handleClick=(e)=>{
    this.props.handleFavorite(this.props.tweet.id)
  }

  render() {
    const { tweet,classes, ...rest } = this.props;

    return (
      <div {...rest} className="cd-section" id="contentAreas">

        <div id="comments">

          <GridContainer>
            <GridItem
              xs={12}
              sm={12}
              md={12}
              className={`${classes.mlAuto} ${classes.mrAuto}`}
            >
              <div>
              <Card >
        <CardBody>
        <Media
          avatar={tweet.user.avatar}
          style={{marginBottom:"30px"}}
          avatarLink={`/profile/${tweet.user.id}`}
          title={
            <span>
              {tweet.user.username} <small>· <Moment fromNow>{tweet.created_at}</Moment></small>
            </span>
          }
          body={
            <span>
              <p>
                {tweet.content}
              </p>
            </span>
          }
          footer={
            <div>

              <Button
                color="danger"
                simple
                className={classes.floatRight}
                onClick={this.handleClick}
              >
                <Favorite /> {tweet.like}
              </Button>
            </div>
          }

      />
      {this.props.tweet.tvmovie?<GridItem
        xs={12}
        sm={10}
        md={10}
        className={`${classes.mlAuto} ${classes.mrAuto}`}
       style={{marginBottom:"30px"}}
      >
      <Link to={`/${tweet.tvmovie.media_type}/${tweet.tvmovie.tmdbid}`} >
      <Card style={{backgroundColor:"#e0e4e0"}}>
      <GridContainer>
      <GridItem
        xs={12}
        sm={6}
        md={6}
        className={classes.textCenter}

      >
      <h2>{tweet.tvmovie.name}</h2>
      <h3>Rating:{tweet.tvmovie.rating_average}</h3>
       {[...Array(Math.round(tweet.tvmovie.rating_average/2))].map((e, i) => <span  key={i}><Star nativeColor="#f98f3e"/></span>)}
      </GridItem>
      <GridItem
        xs={12}
        sm={6}
        md={6}
        className={`${classes.mlAuto} ${classes.mrAuto}`}
        style={{padding:"30px"}}
      >

        <CardHeader image plain>
              <img
              src={tweet.image}
              alt="Card-img-cap"
              />
              <div
                className={classes.coloredShadow}
                style={{
                  backgroundImage: `url(${tweet.image})`,
                  opacity: "1"
                }}
              />

        </CardHeader>

      </GridItem>
      </GridContainer>
      </Card>
      </Link>
      </GridItem>: <GridItem
          xs={12}
          sm={8}
          md={8}
          className={`${classes.mlAuto} ${classes.mrAuto}`}
         style={{marginBottom:"30px"}}
        >

        <CardHeader image plain>
              <img
              src={tweet.image}
              alt="Card-img-cap"
              />
              <div
                className={classes.coloredShadow}
                style={{
                  backgroundImage: `url(${tweet.image})`,
                  opacity: "1"
                }}
              />

        </CardHeader>
        </GridItem>}

        </CardBody>
      </Card>


              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default connect(null,{handleFavorite})(withStyles(newStyle)(Twitter));
