import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import TrendingUp from "@material-ui/icons/TrendingUp";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Info from "components/Typography/Info.jsx";
import Danger from "components/Typography/Danger.jsx";
import Success from "components/Typography/Success.jsx";
import Button from "components/CustomButtons/Button.jsx";

import blogsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.jsx";

import cardBlog4 from "assets/img/examples/card-blog4.jpg";
import office2 from "assets/img/office2.jpg";
import blog5 from "assets/img/examples/blog5.jpg";
import blog6 from "assets/img/examples/blog6.jpg";
import blog7 from "assets/img/examples/blog7.jpg";
import blog8 from "assets/img/examples/blog8.jpg";
import bg5 from "assets/img/bg5.jpg";
import { Link } from 'react-router-dom';


function searchListItem({ ...props }) {
  const { classes, info,...rest } = props;
  return (
    <GridItem
      xs={12}
      sm={10}
      md={10}
      className={`${classes.mlAuto} ${classes.mrAuto}`}
    >

      <Card plain blog className={classes.card}>
        <GridContainer>
          <GridItem xs={12} sm={5} md={5}>
           <Link to={`/${info.media_type}/${info.id}`} >
            <CardHeader image plain>
                <img src={`https://image.tmdb.org/t/p/w500/${info.backdrop_path}`} alt="..." />
              <div
                className={classes.coloredShadow}
                style={{
                  backgroundImage: `url(${`https://image.tmdb.org/t/p/w500/${info.backdrop_path}`})`,
                  opacity: "1"
                }}
              />
            </CardHeader>
            </Link>
          </GridItem>
          <GridItem xs={12} sm={7} md={7}>
            <Info>
              <h6 className={classes.cardCategory}>{info.media_type}</h6>
            </Info>
            <h3 className={classes.cardTitle}>
              <Link key={info.id} to={`/${info.media_type}/${info.id}`} >
                {info.name}
                {info.title}
                 {"        "}
                  <Success>
                  <h2 className={classes.cardCategory }>
                    {info.vote_average}
                  </h2>
                  </Success>

                </Link>
            </h3>

            <p className={classes.cardCategory}>
              {info.overview.slice(0,230)}{" "}
              <a href={`/${info.media_type}/${info.id}`} >

                Know More{" "}
              </a>
            </p>
            <p className={classes.author}>

              {" "}
              {info.media_type==='tv'?<span><b>First Air Date:{'  '}</b>{info.first_air_date}</span>:<span><b>Release Date:{'  '}</b>{info.release_date}</span>}


            </p>
          </GridItem>
        </GridContainer>
      </Card>

    </GridItem>
  );
}

export default withStyles(blogsStyle)(searchListItem);
