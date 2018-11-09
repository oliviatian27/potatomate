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

import style from "assets/jss/material-kit-pro-react/views/componentsSections/contentAreas.jsx";

import avatar from "assets/img/faces/avatar.jpg";
import kendall from "assets/img/faces/kendall.jpg";
import marc from "assets/img/faces/marc.jpg";
import placeholder from "assets/img/placeholder.jpg";



class SectionContentAreas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [1, 3, 5]
    };

  }

  render() {
    const { classes,review, ...rest } = this.props;

    return (
      <div {...rest} className="cd-section" id="contentAreas">

        <div className={classes.space50} />
        <div id="comments">
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={`${classes.mlAuto} ${classes.mrAuto}`}
            >
              <div>

                <Media
                  avatar={review.user.avatar}
                  title={
                    <span>
                      {review.user.username}<small>· {new Date(review.created_at).toDateString()}</small>
                    </span>
                  }
                  body={
                    <span>
                      <p>
                        {review.content}

                      </p>
                       Rating:{review.rating}
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

             </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(style)(SectionContentAreas);
