import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const OpenTickets = props =>  {
  const { title} = props;


  return (
    <div>
    <Card  variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2" title ={title} >
          {title}
        </Typography>
        <Typography variant="body2" component="p">
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View</Button>
      </CardActions>
    </Card>
  </div>
  );
}

export default OpenTickets;
