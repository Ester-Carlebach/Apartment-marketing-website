import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
// import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Outlet } from 'react-router';
// import {deleteCar} from './Action'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const myCard=({apartment}) =>{
 
  return (
    <Card sx={{ width:310}}>
     
      <CardHeader
        title='details'
        //אפשרות להורדת שורה
        subheader={apartment.name}
      />
      <CardMedia
        component="img"
        height="200"
        // image={`${process.env.PUBLIC_URL}/${img}`}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
       
        </Typography>
      </CardContent>
      {<Outlet></Outlet>}

      <CardActions disableSpacing>
        {/* <img src={`${process.env.PUBLIC_URL}/movePic/${m}.jpg`}></img> */}
{/* 
        <ExpandMore
        //   expand={expanded}
        //   onClick={handleExpandClick}
        //   aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon /> */}
        {/* </ExpandMore>/ */}
      </CardActions>
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit> */}
        <CardContent>
          <Typography paragraph>
          </Typography>
          <Typography paragraph>
          </Typography>
          <Typography paragraph>
          </Typography>
        </CardContent>
      {/* </Collapse> */}
    </Card>
  );
}
