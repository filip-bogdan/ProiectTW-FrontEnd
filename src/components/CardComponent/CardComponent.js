import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import jobimage from "../../icons/job-image-default.png";
import "./cardcomponent.css";

export default function CardComponent(props) {
  return (
    <Card sx={{ maxWidth: 545 }}>
      <CardMedia
        component="img"
        alt="job image"
        height="170"
        image={jobimage}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2">
          {props.descr}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <p className="button-text">Learn More</p>
        </Button>
      </CardActions>
    </Card>
  );
}
