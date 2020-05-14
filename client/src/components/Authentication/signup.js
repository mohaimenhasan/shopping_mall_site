import React, {Component} from 'react';
import Typography from "@material-ui/core/Typography";
import { createMuiTheme } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import axios from 'axios';
import Login from "./login";
import Dash from "../Dashboard/dash";

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

const theme = createMuiTheme({
    typography: {
        fontFamily: '"Apple Color Emoji"'
    },
});

const useStyles = makeStyles({
    root: {
        height: '100vh',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    image: {
        backgroundImage: 'url(https://picsum.photos/id/1016/3844/2563)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
});

function withMyHook(Component){
    return function WrappedComponent(props){
        const classes = useStyles();
        return <Component {...props} classes={classes}/>
    }
}

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            storeName: "",
            employeeNumber: 0,
            leaseNumber: 0,
            rent: 0,
        }
    }

    checkVals(){
        if (this.state.username === "" || this.state.password === "" || this.state.store() === "" ||
            this.state.employeeNumber === "" || this.state.leaseNumber === "" || this.state.rent === ""){
            return false;
        }
        return !(this.state.username === undefined || this.state.password === undefined || this.state.store() === undefined ||
            this.state.employeeNumber === undefined || this.state.leaseNumber === undefined || this.state.rent === undefined);

    }
    handleClick = (event) => {
        if (this.checkVals() === false){
            window.alert("Not all values passed in properly. Please check again");
            return;
        }
        axios
            .post("/users/create", {
                username: this.state.username,
                password: this.state.password,
                storeName: this.state.storeName,
                rent: this.state.rent,
                leaseNumber: this.state.leaseNumber,
                employeeNumber: this.state.employeeNumber
            }).then(res => {
            if (res.status === 200){
                this.props.appContext.setState({
                    currentScreen: <Dash appContext={this.props.appContext}/>
                })
            }
        }).catch( res => {
            window.alert("Bad Request. Please Try Again")
        })
    };

    handleRentChange = (event) => {
        this.setState({
            rent: event.target.value
        })
    };

    handleLeaseNumberChange = (event) => {
        this.setState({
           leaseNumber : event.target.value
        })
    };

    handleEmployeeNumberChange = (event) => {
        this.setState({
            employeeNumber : event.target.value
        })
    };

    handleStoreNameChange = (event) => {
        this.setState({
            storeName: event.target.value
        })
    };

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    };

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    };

    changeToLogin = (event) => {
        this.props.appContext.setState({
            currentScreen: <Login appContext={this.props.appContext}/>
        })
    };

    render(){
        const classes = this.props.classes;
        return(
            <Grid container component="main" className={classes.root}>
                <CssBaseline />
                <Grid item xs={false} sm={4} md={7} className={classes.image} />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign Up
                        </Typography>
                        <br/>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="storeName"
                                    label="Store Name"
                                    name="storeName"
                                    autoFocus
                                    value={this.state.storeName}
                                    onChange = {this.handleStoreNameChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="storeName"
                                    label="Number of Employees"
                                    name="employeeNumber"
                                    type="number"
                                    autoFocus
                                    value={this.state.employeeNumber}
                                    onChange = {this.handleEmployeeNumberChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="leaseNumber"
                                    label="Lease Number"
                                    name="leaseNumber"
                                    type="number"
                                    autoFocus
                                    value={this.state.leaseNumber}
                                    onChange = {this.handleLeaseNumberChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="rent"
                                    label="Monthly Rent"
                                    name="rent"
                                    type="number"
                                    autoFocus
                                    value={this.state.rent}
                                    onChange = {this.handleRentChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    value={this.state.username}
                                    onChange = {this.handleUsernameChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    value={this.state.password}
                                    onChange = {this.handlePasswordChange}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign Up
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link href="#" variant="body2" onClick={(event) => this.changeToLogin(event)}>
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                        <Box mt={5}>
                            <Copyright />
                        </Box>
                    </div>
                </Grid>
            </Grid>
        )

    }
}


SignUp = withMyHook(SignUp);
export default SignUp;