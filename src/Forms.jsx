import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const Forms = props => {
  const { title, imgSrc } = props;
  return (
    <Card marginTop = {20}>
      <CardHeader action={<IconButton aria-label="settings" />} 
      title={title} 
      />
      
      <CardMedia style={{ height: "150px" }} image={imgSrc} />
      <CardContent>
        <Typography color="textSecondary" gutterBottom />
      </CardContent>
      <CardActions>
        <Button size="small">
          <AddIcon />
        </Button>
      </CardActions>
    </Card>
  );
};
export default Forms;
