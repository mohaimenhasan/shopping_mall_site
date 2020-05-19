import React, {Component} from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Clock from "react-clock";
import Card from "@material-ui/core/Card";
import {CardContent} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Home from "../home.png";
import Button from "@material-ui/core/Button";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import {createMuiTheme, makeStyles} from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import {red} from "@material-ui/core/colors";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import axios from "axios";

const drawerWidth = 240;
const theme = createMuiTheme({
    typography: {
        fontFamily: '"Apple Color Emoji"'
    }
});

const useStyles = makeStyles({
    root: {
        display: 'flex',
        textAlign: "center",
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    appBar: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    paper: {
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 600,
    },
    storeHeight: {
        height: 215
    },
    leftbarHeight:{
        height: 215
    },
    button: {
        width: 200,
        margin: theme.spacing(1),
    },
    avatar: {
        backgroundColor: red[500],
    },
    listSection: {
        paddingTop: 10,
        backgroundColor: 'inherit',
    },
    list:{
      flexDirection: 'column'
    },
    ul: {
        backgroundColor: 'inherit',
        padding: 0,
    }
});
function withMyHook(Component){
    return function WrappedComponent(props){
        const classes = useStyles();
        return <Component {...props} classes={classes}/>
    }
}
class Dash extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username: this.props.username,
            name: "Mohaimen Khan",
            today: new Date(),
            email: this.props.email,
            stores: [],
            storeCount: 0,
            leaseCount: 0
        }
    }

    componentDidMount = async function () {
        await axios
            .get('stores/get_all')
            .then(res => {
                let val = res.data;
                console.log(val);
                let allStores = [];
                const classes = this.props.classes;
                const listPaper = clsx(classes.paper, classes.storeHeight);
                let notCollected = 0;
                let storeCount = 0;
                for (let i=0; i < val['stores'].length; ++i){
                    notCollected+=(val['stores'][i]['leaseAmount'] - val['stores'][i]['leasePaid'])
                    storeCount++;
                }
                allStores.push(
                    <List className={classes.list} subheader={<li />}>
                        {val["stores"].map((sectionId) => (
                            <li key={`section-${sectionId}`} className={classes.listSection}>
                                <ul className={classes.ul}>
                                    <Paper className={listPaper} style={{alignItems: "center"}}>
                                        <Typography variant="h5" color="textSecondary" component="p">
                                            {sectionId['name']}
                                        </Typography> <br/>
                                        <div style={{textAlign: 'left'}}>
                                            <Typography variant="h7" color="textPrimary" component="p">
                                                <b style={{color: 'red'}}>Store Created By: </b> {sectionId['createdBy']}
                                            </Typography>
                                            <Typography variant="h7" color="textPrimary" component="p">
                                                <b>Lease: </b> {sectionId['leaseAmount']} |  <b>Lease Paid: </b> {sectionId['leasePaid']}
                                            </Typography>
                                            <Typography variant="h7" color="textPrimary" component="p">
                                                <b>Monthly Rent: </b> {sectionId['rent']}
                                            </Typography>
                                            <Typography variant="h7" color="textSecondary" component="p">
                                                <b>Lease Start: </b> {new Date(sectionId['leaseStart']).toString()}
                                            </Typography>
                                            <Typography variant="h7" color="textSecondary" component="p">
                                                <b>Lease End: </b> {new Date(sectionId['leaseEnd']).toString()}
                                            </Typography>
                                        </div>
                                        <div style={{display: 'inline'}}>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                className={classes.button}
                                            >
                                                <b>Edit Lease</b>
                                            </Button>
                                            <Button
                                                variant="outlined"
                                                color="secondary"
                                                className={classes.button}
                                            >
                                                <b>View Rent</b>
                                            </Button>
                                        </div>
                                    </Paper>
                                </ul>
                            </li>
                        ))}
                    </List>
                );
                this.setState({
                    storeCount: storeCount,
                    stores: allStores,
                    leaseCount: notCollected
                })
        }).catch( res => {
            window.alert(res);
        });
    }

    render() {
        const classes = this.props.classes;
        const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
        const leftBarPaper = clsx(classes.paper, classes.leftbarHeight);
        return(
            <div className={classes.root}>
                <AppBar position="absolute" className={clsx(classes.appBar, this.state.open && classes.appBarShift)}>
                    <Toolbar className={classes.toolbar}>
                        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                            Dashboard
                        </Typography>
                    </Toolbar>
                </AppBar>
                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Container maxWidth="lg" className={classes.container}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={4} lg={3}>
                                <Paper className={leftBarPaper}>
                                    <Card>
                                        <CardHeader
                                            avatar={
                                                <Avatar aria-label="name" className={classes.avatar}>
                                                    {this.state.name.charAt(0)}
                                                </Avatar>
                                            }
                                            title={<b>{this.state.name}</b>}
                                            subheader={<b>{this.state.today.getDay()+"/"+this.state.today.getMonth()+"/"+this.state.today.getFullYear()}</b>}
                                        />
                                        <CardContent>
                                            <Typography variant="h7" color="textPrimary" component="p">
                                                <b>Number of Stores: </b> {this.state.storeCount}
                                            </Typography>
                                            <Typography variant="h7" color="textPrimary" component="p">
                                                <b style={{color: 'red'}}>Lease Not Collected: </b> ${this.state.leaseCount}
                                            </Typography> <br/>
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                className={classes.button}
                                            >
                                                <b>Add New Store</b>
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={7} lg={7}>
                                <Paper className={fixedHeightPaper}>
                                    {this.state.stores}
                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>
                </main>
            </div>
        )
    }
}

Dash = withMyHook(Dash);
export default Dash;