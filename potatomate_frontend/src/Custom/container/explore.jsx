import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Button from 'components/CustomButtons/Button.jsx';
import GridContainer from "components/Grid/GridContainer.jsx";
import { Link } from 'react-router-dom'
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import ExploreItem  from 'Custom/components/exploreComponents/exploreItem'
import ExploreButton  from 'Custom/components/exploreComponents/button'

import styles from "assets/jss/material-kit-pro-react/views/componentsSections/preFooter.jsx";
import presentationStyle from "assets/jss/material-kit-pro-react/views/presentationStyle.jsx";
import blogsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.jsx";
import { connect } from 'react-redux';
import {fetchMovie}  from  'actions/action';


class Explore extends React.Component {
  state={
    genreId:'',
    sortType: "popularity.desc",
    page:1
  }
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.media_type,'','pop',this.state.sortType,this.state.page)
  }
  fetchItem=(page)=>{
    const media_type=this.props.match.params.media_type
    const sortType=this.state.sortType
    this.state.genreId==="1"?this.props.fetchMovie(media_type,'','pop',sortType,page):this.props.fetchMovie(media_type,`&with_genres=${this.state.genreId}`,'pop',sortType,page)
  }

  handleClick=(e)=>{
    this.setState({genreId:e.currentTarget.name},()=>this.fetchItem(1))
    console.log(this.state);
  }
  handleRadio=(e)=>{
    this.setState({ sortType: e.target.value },()=>this.fetchItem(1))
  }
  handleMore=(e)=>{
    this.setState(prev=>({page:prev.page+1}),()=>this.fetchItem(this.state.page))
  }

  render() {
    const { classes,originalMovieList,fetchMovie,originalTvList, ...rest } = this.props;

    return (
      <div className="cd-section" {...rest}>
        {/* Blogs 1 START */}
        <div className={classes.blog}>
          <div className={classes.container} style={{textAlign:"center"}}>
            <h2 className={classes.title}>{this.props.match.params.media_type}</h2>
              <ExploreButton handleClick={this.handleClick} handleRadio={this.handleRadio} sortType={this.state.sortType} media_type={this.props.match.params.media_type} />
              <GridContainer>
              {originalMovieList.pop&&originalMovieList.pop.map(item=>< ExploreItem key={item.id} item={item} media_type={this.props.match.params.media_type}/>)}
              {originalTvList.pop&&originalTvList.pop.map(item=>< ExploreItem key={item.id} item={item} media_type={this.props.match.params.media_type}/>)}
             </GridContainer>
              <div style={{textAlign: "center"}}>

                  <Button onClick={this.handleMore} size="lg" color="dribbble" >
                   More
                    </Button>

             </div>
      </div>
      </div>
</div>
    );
  }
}

export default connect(state=>({originalMovieList:state.tv_movies.originalMovieList,
   originalTvList:state.tv_movies.originalTvList}),{fetchMovie})(withStyles(blogsStyle)(Explore));
