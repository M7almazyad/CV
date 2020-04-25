import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SpringLogoH from "../../img/springH.png";

import "./projects.css"
import Grow from "@material-ui/core/Grow";

const useStyles = makeStyles({
    root: {
        maxWidth: 300,
        margin:20
    },
    media: {
        height: 140,
        backgroundSize: 100,

    },
});

export default function Projects(props) {
    const classes = useStyles();

    return (
        <div className=" d-lg-inline-block ">
            <br/>
            <Grow in={true}>
            <h1 className="mb-3">Projects : </h1>
            </Grow>
        <Card className={`${classes.root} myCard  `}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={SpringLogoH}
                    title="Spring boot"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>


            <Card className={`${classes.root} myCard`}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={SpringLogoH}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card className={`${classes.root} myCard`}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={SpringLogoH}
                        title="Spring boot"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>

            </Card>

            <Card className={`${classes.root} myCard`}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={SpringLogoH}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}