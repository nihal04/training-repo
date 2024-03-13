import React from "react";
//import List from "@mui/material/List";
//import TodoItem from "./TodoItem";
import { connect } from "react-redux";
//import { getItems } from "./redux/actions";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function CardDetail(props) {

  return (
    <div className="col-sm">
      <div className="card mb-3">
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={props.item.thumbnail}
        title="green iguana"
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="div" style={{fontWeight:"700"}}>
          {props.item.title}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {`${props.item.brand} ${props.item.category}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.item.description}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{fontWeight:"700"}}>
          {`Discount: ${props.item.discountPercentage}%`}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{fontWeight:"600"}}>
          {`Price: $ ${props.item.price}`}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{fontWeight:"600"}}>
          {`Rating: ${props.item.rating}`}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{fontWeight:"600"}}>
          {`Stock: $ ${props.item.stock}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
    </div>
  );
}

// const mapStateToProps = (state) => ({
//   todoList: state.todoList,
// });

// export default connect(mapStateToProps, {getItems})(TodoList);
export default CardDetail;
