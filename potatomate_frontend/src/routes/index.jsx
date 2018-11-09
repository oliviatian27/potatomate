
import HomePage from "Custom/container/HomePage.jsx";
import Custom_Pop_Show from 'Custom/container/Custom_Pop_Show'
import SearchList from 'Custom/container/searchList'
import Friends from 'Custom/container/Friends'
import explore from 'Custom/container/explore'
import profile from 'Custom/container/profile'
import Discover from 'Custom/container/discover'
var indexRoutes = [

  { path: "/", name: "HomePage", component: HomePage },
  { path: "/friends", name: "friends", component: Friends },
  { path: "/discover", name: "discover", component: Discover },
  { path: "/explore/:media_type", name: "explore", component: explore },
  { path: "/profile/:id", name: "ProfilePage", component: profile },
  { path: "/search", name: "Search", component: SearchList },
  {path:"/:media_type/:id",name:'TvmovieShowPage',component:Custom_Pop_Show}

];

export default indexRoutes;
