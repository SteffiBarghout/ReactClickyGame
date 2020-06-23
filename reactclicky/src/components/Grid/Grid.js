import React from "react";
import Grid from '@material-ui/core/Grid';

const Background = props =>
<Grid {...props}>
    {props.children}
</Grid>

export default Background;