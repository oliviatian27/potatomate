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
import Star from "@material-ui/icons/Star";
import style from "assets/jss/material-kit-pro-react/views/componentsSections/contentAreas.jsx";
import Moment from 'react-moment';
import {handleReviewFavorite} from 'actions/action'
import {connect} from 'react-redux'

class SectionContentAreas extends React.Component {
  constructor(props) {
    super(props);

  }
  handleReviewFavorite=(id)=>{
    this.props.handleReviewFavorite(id)
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
                  avatarLink={`/profile/${review.user.id}`}
                  title={
                    <span>
                    <h2 style={{display:"inline"}}>  {review.user.username} </h2>
                      {[...Array(review.rating/2)].map((e, i) => <span  key={i}><Star nativeColor="#f98f3e"/></span>)}

                      <small>· <Moment fromNow>{review.created_at}</Moment></small>
                    </span>
                  }
                  body={
                    <span>
                      <p>
                        {review.content}

                      </p>

                    </span>
                  }
                  footer={
                    <div>

                      <Button
                        color="danger"
                        simple
                        className={classes.floatRight}
                        onClick={()=>this.handleReviewFavorite(review.id)}
                      >
                        <Favorite /> {review.like}
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

export default connect(null,{handleReviewFavorite})(withStyles(style)(SectionContentAreas));
