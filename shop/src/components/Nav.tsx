import React from "react";
import {Box, Typography} from "@material-ui/core"
import {Link} from "react-router-dom"
export const Nav: React.FC = props => {
    return (
        <Box style={{display:"flex", alignItems:"space-around", width: "100%", padding:"2vh 0vh 0vh 0vh", backgroundColor: "grey"}}>
            <Link to={"/"}>
                <Typography variant={"h5"}>Home</Typography>
            </Link>
        </Box>
    )
}