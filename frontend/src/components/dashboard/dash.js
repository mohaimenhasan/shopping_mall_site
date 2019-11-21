import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import Typography from "@material-ui/core/Typography";
import {CardContent} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Home from '../home.png';
import Button from "@material-ui/core/Button";

const theme = createMuiTheme({
	typography: {
		fontFamily: '"Apple Color Emoji"'
	},
});

const useStyles = makeStyles({
	cardStyle: {
		width: "30%",
		display: "inline-block",
		height: '35vw',
		marginLeft: '10%',
		marginTop: '2%',
		textAlign: "center",
		backgroundColor: "rgba(255, 255, 255, 0.5)",
		borderStyle: 'solid',
		borderWidth: 'thick'
	},
	cardTitle: {
		marginTop: '20%'
	},

	iframe: {
		marginLeft: '10%',
		borderStyle: 'solid',
		borderWidth: 'thick'
	},

	button: {
		marginTop: "5%"
	}
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
		return(
			<ThemeProvider theme={theme}>
				<Card className={classes.cardStyle}>
					<CardContent className={classes.cardTitle}>
						<Typography variant="h3" component="h2">
                            <b>Ahsan Plaza</b>
						</Typography>
                        <img style={{marginTop: '5%', height: 140}} alt={"home page icon"} src={Home}/> <br/>
                        <Typography variant="h5" component="h2">
                            <b>Location:</b> Gaibandha district, Bangladesh
                        </Typography>
					</CardContent>
					<Button variant="contained" color="primary" a href="/login" className={classes.button}>
						Log in
					</Button>
				</Card>
				<iframe
					className={classes.iframe}
					width="35%"
					height="480"
					frameBorder="0"
					scrolling="no"
					marginHeight="0"
					marginWidth="0"
					title={"Map of shopping mall"}
					src="https://maps.google.com/maps?q=gaibandha%2C&t=&z=15&ie=UTF8&iwloc=&output=embed">
				</iframe>
			</ThemeProvider>
			)
	}
}


Dash = withMyHook(Dash);
export default Dash;