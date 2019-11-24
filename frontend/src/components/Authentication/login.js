import React, {Component} from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {CardContent} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Home from "../home.png";
import Card from "@material-ui/core/Card";
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div style={{
                marginTop: "3%",
                marginLeft: "38%",
                position: "center",
                alignItems: "center",
                width: "25%"
            }}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="first"
                    label="First Name"
                    name="first"
                    autoFocus
                    onChange={this.handleFirstChange}
                />
                <br/>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="last"
                    label="Last Name"
                    name="last"
                    autoFocus
                    onChange={this.handleLastChange}
                />
                <br/>
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
                    onChange={this.handleEmailChange}
                />
                <br/>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="interests"
                    label="Interests"
                    name="interests"
                    autoFocus
                    onChange={this.handleInterestChange}
                />
                <br/>
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
                    onChange={this.handlePasswordChange}
                />
                <br/>
                <Button variant="contained" color="primary" onClick={(event) => this.handleClick(event,this.props.role)} style={{
                    marginTop: "5%",
                    marginLeft: "30%"
                }}>
                    Sign Up
                </Button>
            </div>
        )
    }
}

export default Login;