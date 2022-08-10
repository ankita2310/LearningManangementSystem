import React from "react";
import { useAuth } from "../utility/auth";
import { useNavigate } from "react-router-dom";
import react, { useState } from 'react';
import { useEffect } from 'react';
import { LinkContainer } from "react-router-bootstrap";
import { Button} from "react-bootstrap";
import LoggedInUser from "../utility/loggedInUser";


export const AdminDashboard = () => {

    const navigate = useNavigate();
  
    const handleCreate = () => {
        navigate('/createcourse');
      };

      const handleAllCourses = () => {
        navigate('/allcourses');
      };
      const handleDelete = () => {
        navigate('/deletecourse');
      };

      const handleLogOut=()=>{
        localStorage.removeItem('token');
        LoggedInUser.setLoggedUser('','','','');
            navigate('/')
    }

      const user=useState(LoggedInUser.getLoggedUser().name)
      
    return (
       
        <div>
            <div className="row">
            <div className="col">
             <h3 className="fs-2 title-color">Welcome {user}</h3>
            </div>
            <div className="col-auto">
                <button className="btn btn-primary pull-right" onClick={handleLogOut}>Logout</button>
            </div>
           
            </div>
            <div class="columns">
                <ul class="price">
                    <li class="header">Creating a New Course</li>
                    <li class="grey">Only Admin has access to create a course</li>
                    {/* <li>50 Courses</li> */}

                     <li class="grey"><button className="btn btn-success"
                        onClick={handleCreate}>CREATE
                    </button></li> 
                    {/* <LinkContainer to="/createcourse" className="bg-">
                    <Button variant="secondary">CREATE</Button>
                    </LinkContainer> */}
                    
                 
           
                </ul>
            </div>


            <div class="columns">
                <ul class="price">
                    <li class="header">Editing a Course</li>
                    <li class="grey">Admin has access to edit a course</li>
                    {/* <li>100 Courses</li> */}
                    <li class="grey"><button className="btn btn-success"
                        onClick={handleAllCourses}>EDIT
                    </button></li> 


                </ul>

                <br></br>
                <br></br>

                <li class="grey"><a href="#/profile" class="button"> Welcome Admin </a></li>

            </div>


            <div class="columns">
                <ul class="price">
                    <li class="header">Delete a Course</li>
                    <li class="grey">Admin has access to delete a course</li>
                    {/* <li>200 Courses</li> */}

                    <li class="grey"><button className="btn btn-success"
                        onClick={handleDelete}>DELETE
                    </button></li> 
                </ul>
            </div>


        </div>

    )
}
