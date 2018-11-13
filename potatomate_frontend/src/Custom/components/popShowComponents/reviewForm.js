import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import FormControlLabel from "@material-ui/core/FormControlLabel";

// core components
import Star from "@material-ui/icons/Star";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import { Rating } from 'material-ui-rating'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import contactsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/contactsStyle.jsx";
import {connect} from 'react-redux'
import {submitReview}  from  'actions/action';
import Rater from 'react-rater'
import ReviewFormModal from 'Custom/components/popShowComponents/reviewFormModal'

class Custom_Review extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { classes,type,tv_movies,user,submitReview,...rest } = this.props;

    const selfReview=this.props.tv_movies&&this.props.user.user&&this.props.tv_movies.currentItemReviews.filter(review=>review.user.id===this.props.user.user.id)
  console.log(selfReview);
    return (
      <div className="cd-section" {...rest} style={{"marginTop":"70px"}} >
        {/* Contact us 1 START */}

          <div className={classes.container}  >
            <GridContainer >
              <GridItem xs={12} sm={1} md={1}>
              </GridItem>
              <GridItem xs={12} sm={10} md={10}>
                {selfReview&&selfReview.length>0?
                <Card style={{"textAlign":"center"}}>
                  <CardHeader color="primary">You Reviewed this {type} before </CardHeader>
                  <CardBody>

                     {[...Array(selfReview[0].rating/2)].map((e, i) => <span  key={i}><Star nativeColor="#f98f3e"/></span>)}
                   <h5 className={classes.cardTitle}>{selfReview[0].content.slice(0,70)}...</h5>

                </CardBody>
              </Card>
                  : <ReviewFormModal tv_movies={tv_movies} user={user} submitReview={submitReview}/>}

              </GridItem>
              <GridItem xs={12} sm={1} md={1}>
              </GridItem>
            </GridContainer>

        </div>
        {/* Contact us 1 END */}

      </div>
    );
  }
}

export default connect(({user,tv_movies})=>({user,tv_movies}),{submitReview})(withStyles(contactsStyle)(Custom_Review));
