import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Checkbox from "@material-ui/core/Checkbox";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/core icons
import Person from "@material-ui/icons/Person";
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
import Check from "@material-ui/icons/Check";
import Remove from "@material-ui/icons/Remove";
import Add from "@material-ui/icons/Add";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Reply from "@material-ui/icons/Reply";
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

import avatar from "assets/img/faces/avatar.jpg";
import kendall from "assets/img/faces/kendall.jpg";
import marc from "assets/img/faces/marc.jpg";
import placeholder from "assets/img/placeholder.jpg";
import product1 from "assets/img/product1.jpg";
import product2 from "assets/img/product2.jpg";
import product3 from "assets/img/product3.jpg";

import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";

import imagesStyles from "assets/jss/material-kit-pro-react/imagesStyles.jsx";

import { cardTitle } from "assets/jss/material-kit-pro-react.jsx";
const tweetStyle = {
  ...imagesStyles,
  ...style,
  cardTitle,
  textMuted: {
    color: "#6c757d"
  }
};

class Twitter extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //
    // };

  }

  render() {
    const { classes, ...rest } = this.props;
    // const fillButtons = [
    //   { color: "info", icon: Person },
    //   { color: "success", icon: Edit },
    //   { color: "danger", icon: Close }
    // ].map((prop, key) => {
    //   return (
    //     <Button justIcon size="sm" color={prop.color} key={key}>
    //       <prop.icon />
    //     </Button>
    //   );
    // });
    // const simpleButtons = [
    //   { color: "info", icon: Person },
    //   { color: "success", icon: Edit },
    //   { color: "danger", icon: Close }
    // ].map((prop, key) => {
    //   return (
    //     <Button simple justIcon size="sm" color={prop.color} key={key}>
    //       <prop.icon />
    //     </Button>
    //   );
    // });
    // const roundButtons = [
    //   { color: "info", icon: Person },
    //   { color: "success", icon: Edit },
    //   { color: "danger", icon: Close }
    // ].map((prop, key) => {
    //   return (
    //     <Button round justIcon size="sm" color={prop.color} key={key}>
    //       <prop.icon />
    //     </Button>
    //   );
    // });
    return (
      <div {...rest} className="cd-section" style={{"backgroundColor":"white"}} id="contentAreas">

        <div id="comments">

          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={`${classes.mlAuto} ${classes.mrAuto}`}
            >
              <div>
              <Card >
        <CardBody>
        <Media
          avatar={this.props.tweet.user.avatar}
          avatarLink={`/profile/${this.props.tweet.user.id}`}
          title={
            <span>
              {this.props.tweet.user.username} <small>· {new Date(this.props.tweet.created_at).toDateString()}</small>
            </span>
          }
          body={
            <span>
              <p>
                {this.props.tweet.content}
              </p>
            </span>
          }
          footer={
            <div>
              <Tooltip
                id="tooltip-tina"
                title="Reply to comment"
                placement="top"
                classes={{ tooltip: classes.tooltip }}
              >
                <Button
                  color="primary"
                  simple
                  className={classes.floatRight}
                >
                  <Reply /> Reply
                </Button>
              </Tooltip>
              <Button
                color="danger"
                simple
                className={classes.floatRight}
              >
                <Favorite /> 243
              </Button>
            </div>
          }

      />
      <GridItem
        xs={12}
        sm={8}
        md={8}
        className={`${classes.mlAuto} ${classes.mrAuto}`}
      >

      <CardHeader image blog>
            <img
            src={this.props.tweet.image}
            alt="Card-img-cap"
            />

      </CardHeader>
      </GridItem>
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

export default withStyles(tweetStyle)(Twitter);
