import React, {Component} from 'react';
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu"
import Dash from './components/dashboard/dash';

const useStyles = makeStyles({
  title:{
    paddingLeft: 100,
    textAlign: "center"
  },
  appBar:{
    position: "relative"
  }
});

function withMyHook(Component){
  return function WrappedComponent(props){
    const classes = useStyles();
    return <Component {...props} classes={classes}/>
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScreen: []
    }
  }

  componentWillMount() {
    let homePage=[];
    homePage.push(<Dash appContext={this}/>);
    this.setState({currentScreen: homePage})
  }

  render(){
    const classes = this.props.classes;
    return(
      <div>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title}>
            </Typography>
          </Toolbar>
        </AppBar>
        <div>
          {this.state.currentScreen}
        </div>
      </div>
      )
  }
}

App = withMyHook(App);
export default App;