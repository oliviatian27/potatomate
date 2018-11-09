import React from 'react';
// @material-ui/core components
import Button from 'components/CustomButtons/Button.jsx';
import withStyles from "@material-ui/core/styles/withStyles";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// @material-ui/icons
import FiberManualRecord from '@material-ui/icons/FiberManualRecord';
// core components
import styles from "assets/jss/material-kit-pro-react/customCheckboxRadioSwitchStyle.jsx";

import {connect} from 'react-redux'
import {fetchMovie}  from  'actions/action';
import {Genres} from 'Custom/data/tvmoviedata'

class RadioExample extends React.Component{


  render(){
    const { media_type,classes } = this.props;
    return (
      <div>
          <div style={{marginBottom:"20px"}}>
            {Genres[media_type].map((genre,idx)=><Button type="button" className="ExploreButton" key={idx} color="dribbble" name={genre.id} onClick={this.props.handleClick}>{genre.name}</Button>)}

          </div>
          <div style={{marginBottom:"20px"}}>
          <FormControlLabel
            control={
              <Radio
                checked={this.props.sortType === "popularity.desc"}
                  onChange={this.props.handleRadio}
                value="popularity.desc"
                name="radio button enabled"
                aria-label="A"
                icon={<FiberManualRecord className={classes.radioUnchecked}/>}
                checkedIcon={<FiberManualRecord className={classes.radioChecked}/>}
                classes={{
                  checked: classes.radio,
                  root: classes.radioRoot
                }}
              />
            }
            classes={{
              label: classes.label
            }}
            label="Sort By Popularity"
          />

          <FormControlLabel
            control={
              <Radio
                checked={this.props.sortType === "vote_average.desc"}
                onChange={this.props.handleRadio}
                value="vote_average.desc"
                name="radio button enabled"
                aria-label="B"
                icon={<FiberManualRecord className={classes.radioUnchecked}/>}
                checkedIcon={<FiberManualRecord className={classes.radioChecked}/>}
                classes={{
                  checked: classes.radio,
                  root: classes.radioRoot
                }}
              />
            }
            classes={{
              label: classes.label
            }}
            label="Sort By Rating"
          />

       </div>
      </div>
    );
  }
}
export default connect(null,{fetchMovie})(withStyles(styles)(RadioExample));
