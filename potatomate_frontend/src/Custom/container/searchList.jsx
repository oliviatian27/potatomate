import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";

import Button from "components/CustomButtons/Button.jsx";

import blogsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.jsx";
import SearchListItem from '../components/searchList/searchListItem'
import {connect} from 'react-redux'

function SearchList({ ...props }) {
  const { classes,list, ...rest } = props;
  return (
    <div className="cd-section" {...rest}>
      {/* Blogs 1 START */}
      <div className={classes.blog}>
        <div className={classes.container}>
          <h2 className={classes.title}>Search Results</h2>
          <GridContainer>
          {list.results&&list.results.map(item=><SearchListItem key={item.id} info={item}/>)}

          </GridContainer>
        </div>
      </div>
      {/* Blogs 1 END */}

    </div>
  );
}

export default connect(state=>({list:state.tv_movies.searchList}))(withStyles(blogsStyle)(SearchList));
