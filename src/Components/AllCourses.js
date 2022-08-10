import React from "react";
import logo from '../images/logo.jpg';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import LoggedInUser from "../utility/loggedInUser";
import { Navigate ,useNavigate} from "react-router-dom";
import EditCourse from "./EditCourse";



const useStyles = makeStyles((theme) =>({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2)
      }
}));



class AllCourses extends React.Component {
  
    constructor() {
        super();
    this.state ={
      coursesData: [],
    userAdmin:LoggedInUser.getLoggedUser().isAdmin,
    editFlag:false
    };
    console.log(this.state.userAdmin)
    }
    
   
    
  

 
    componentDidMount() 
    {
        axios.get('http://localhost:4000/lms/getAllCourses', {
                responseType: 'json'
            }).then(response => {
                this.setState( {coursesData: response.data} );
                console.log(this.state.coursesData);
                console.log(this.state.coursesData[0].courseName);
            });}
  
           
     handleEdit = () => {
            this.setState({editFlag:true})
            console.log(this.state.editFlag)
            console.log("inside button")
         
          }; 
  

  render() {

    if(this.state.editFlag){
      console.log(this.state.editFlag)
      return <Navigate to="/editcourse" />
    }
    
     if (this.state.loading) {
      return <div>loading...</div>;
      
    }
    if (!this.state.coursesData.length) {
      return <div>didn't get a course</div>;
    } 

    const data = {
        id: [1]
      };
   

    return (

        <div>
        <br></br>
        <h2 className= "Home">Enhance,Explore and Grow</h2>
        <br></br>

           {data.id.map((elem) => (
             <Grid
             container
             spacing={2}
             direction="row"
             justify="flex-start"
             alignItems="flex-start"
           >
        {this.state.coursesData.map((elem) => (
            <Grid item xs={3} key={this.state.coursesData.indexOf(elem)}>

    <Card>
    
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Skill Name"
          height="400"
          width="500"
          image={logo}
          title="Skill Name"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {elem.courseName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
                {elem.instructor}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size="small" color="primary" disabled={!this.state.userAdmin} >
        Start course
        </Button>
        {/* {this.state.isAdmin ? <Button size="small" color="primary" onClick={this.handleEdit}>
          Edit course
        </Button> : null} */}

        <Button size="small" color="primary" onClick={this.handleEdit} disabled={this.state.userAdmin} >
        Edit course
        </Button>
       
      </CardActions>
       
    </Card>
    </Grid>
    ))}


    </Grid>
   ))}

          
        </div>
        

        
      );
  }
}

export default AllCourses;



