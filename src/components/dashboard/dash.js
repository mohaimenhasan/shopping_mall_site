import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import Typography from "@material-ui/core/Typography";
import {CardContent} from "@material-ui/core";
import { createMuiTheme } from '@material-ui/core/styles';
import Home from '../home.png';
import Button from "@material-ui/core/Button";
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import LockOpenIcon from '@material-ui/icons/LockOpen';

function Copyright() {
	return (
		<Typography variant="body2" color="textPrimary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://www.linkedin.com/in/mohaimenkhan/">
				Mohaimen Khan
			</Link>{' '}
			{new Date().getFullYear()}
		</Typography>
	);
}

const drawerWidth = 240;
const theme = createMuiTheme({
	typography: {
		fontFamily: '"Apple Color Emoji"'
	},
});

const useStyles = makeStyles({
	iframe: {
		marginLeft: '5%',
		borderStyle: 'solid',
		borderWidth: 'thick'
	},
	root: {
		display: 'flex',
		textAlign: "center",
	},
	toolbar: {
		paddingRight: 24, // keep right padding when drawer closed
	},
	toolbarIcon: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: '0 8px',
		...theme.mixins.toolbar,
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
	drawerPaper: {
		position: 'relative',
		whiteSpace: 'nowrap',
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerPaperClose: {
		overflowX: 'hidden',
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		width: theme.spacing(7),
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing(9),
		},
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
	paper: {
		padding: theme.spacing(2),
		display: 'flex',
		overflow: 'auto',
		flexDirection: 'column',
	},
	fixedHeight: {
		height: 500,
	},
	button: {
		margin: theme.spacing(1),
	},
});

function withMyHook(Component){
	return function WrappedComponent(props){
		const classes = useStyles();
		return <Component {...props} classes={classes}/>
	}
}

class Dash extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}

	render(){
		const classes = this.props.classes;
		const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
		return(
			<div className={classes.root}>
				<AppBar position="absolute" className={clsx(classes.appBar, this.state.open && classes.appBarShift)}>
					<Toolbar className={classes.toolbar}>
						<IconButton
							edge="start"
							color="inherit"
							aria-label="open drawer"
							className={clsx(classes.menuButton, this.state.open && classes.menuButtonHidden)}
						>
							<MenuIcon />
						</IconButton>
						<Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
							Dashboard
						</Typography>
					</Toolbar>
				</AppBar>
				<main className={classes.content}>
					<div className={classes.appBarSpacer} />
					<Container maxWidth="lg" className={classes.container}>
						<Grid container spacing={3}>
							<Grid item xs={12} md={12} lg={6}>
								<Card className={classes.root}>
									<CardContent>
										<br/>
										<Typography variant="h4" color="textPrimary" component="p">
											<b>Dr. Ahason Plaza</b>
										</Typography>
										<img style={{marginTop: '5%', height: 140}} alt={"home page icon"} src={Home}/>
										<br/>
										<Typography variant="h6" component="p">
											<b>Location:</b> Kamdia Rd, Gobindogonj (গোবিন্দগঞ্জ), Gaibandha, Bangladesh <br/>
											<b>Contact Number: </b> +8801718023191
										</Typography> <br/>
										<Button
											variant="contained"
											color="primary"
											className={classes.button}
											startIcon={<VpnKeyIcon/>}
											onClick={(event)=>{console.log("Clicked")}}
										>
											Login
										</Button> <br/>
										<Button
											variant="contained"
											color="secondary"
											className={classes.button}
											startIcon={<LockOpenIcon/>}
											onClick={(event)=>{console.log("Clicked")}}
										>
											Sign Up
										</Button>
										<Box pt={2}>
											<Copyright />
										</Box>
									</CardContent>
								</Card>
							</Grid>
							<Grid item xs={12} md={12} lg={6}>
								<Paper className={fixedHeightPaper}>
									<iframe
										className={classes.iframe}
										width="90%"
										height="480"
										frameBorder="0"
										scrolling="no"
										marginHeight="0"
										marginWidth="0"
										title={"Map of shopping mall"}
										src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJpTIYWI_i_DkRCAAGlNBaD5U&key=AIzaSyClGuqvS5S9nLZiy6oxMgEa8n1UfYCtOBw">
									</iframe>
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