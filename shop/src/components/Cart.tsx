import React from "react";
import {RecordInCart} from "./RecordInCart";
import {Box, Button, Card, CardContent, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    paperStyle: {
        minHeight: "20vh",
        width: "60vw",
        outlineColor: "blue",
        border: "darkslategray 4px solid",
        paddingTop: "0.5%",
        paddingBottom: "1vh",
        margin: "5vh 0vh 5vh 0vh",
    },
}));


export const Cart: React.FC = props => {
    const classes = useStyles();
    return (
        <Box
            display="flex"
            alignSelf="center"
            alignItems="center"
            flexDirection="column"
            justifyContent="center"
            style={{minHeight: "90vh"}}
        >
            <Typography variant="h3" className="titleStyle">
                Twój Koszyk
            </Typography>

            <Card className={classes.paperStyle} variant="outlined">
                <Box style={{minHeight: "18vh"}}>
                    <RecordInCart />
                    <RecordInCart />
                </Box>

                <div style={{marginTop: "5%"}}>
                    <Button
                        variant="outlined"
                        color="secondary"
                        size="small"
                        style={{marginRight: "5%"}}
                        //component={Link}
                        //to="/"
                    >
                        Anuluj
                    </Button>

                    <Button variant="contained" size="medium" color="primary">
                        Kup
                    </Button>
                </div>
            </Card>
        </Box>
    );
}