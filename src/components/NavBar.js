import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const NavBar = props => {
    return(
        <div>
            <AppBar position = "static" color = "secondary" {...props}>
            <h1 align = "left">Mario Clicky Game</h1>
                <Toolbar>
                    <Typography variant = "headline">
                        <h2 align = "center">Try to click all of the characters without clicking the same one twice</h2>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;
