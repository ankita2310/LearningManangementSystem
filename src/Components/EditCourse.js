import React, { Component } from "react";
import LoggedInUser from "../utility/loggedInUser"

class EditCourse extends Component {

    constructor() {
        super();
    
        this.state = {
          courseId: "",
          courseName: "",
          instructor: "",
          level:"",
          enrollment:0
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleCreate = this.handleCreate.bind(this);
      }

      handleChange(event) {
        let target = event.target;
        let value = target.type === "checkbox" ? target.checked : target.value;
        let name = target.name;
    
        this.setState({
          [name]: value
        });
      }
 

      handleCreate(event){
        event.preventDefault();
        
        console.log("The form was submitted with the following data:");
        console.log(this.state);
        const { courseId, courseName, instructor,level,enrollment } = this.state;
            const courseDetails = {
                courseId,
                courseName,
                instructor,
                level,
                enrollment
            };

            console.log(`coursedeatils is ${this.courseDetails}`);
            this.create(courseDetails)
            .then(data => {
                if(data.error){
                    this.setState({error:data.error})
                } 
                else{
                  console.log("Test1--")
                  console.log(data)
                  console.log(LoggedInUser.getLoggedUser)
                } 
              })
    }

    create = courseDetails => {
        const token = JSON.parse(localStorage.getItem('token')); 
        console.log(`state passed ${this.state}`)
        console.log(courseDetails.courseId)
        console.log(`t is ${token}`)
        return fetch("http://localhost:4000/lms/createCourse", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `token ${token}`
            },
            body: JSON.stringify({
              "courseId": courseDetails.courseId,
              "courseName": courseDetails.courseName,
              "instructor": courseDetails.instructor,
              "level": courseDetails.level,
              "enrollment": 0
          })
            
        })
            .then(response => {
                return response.json();
            })
            .catch(err => console.log(err));
    }

   render (){
    const { courseId, courseName, instructor,level,enrollment } = this.state;
  

    return (
      <form>
        <h3 className="text-white">Create Course</h3>
        <div className="mb-3">
          <label>Course Id</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Course Id"
            id="courseId"
            name="courseId"
           // value={this.state.courseName}
             onChange={this.handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Course Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Course name"
            id="courseName"
            name="courseName"
           // value={this.state.courseName}
             onChange={this.handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Course Instructor</label>
          <input type="text" className="form-control" placeholder="Enter Instructor" id="instructor" name="instructor"//value={this.state.instructor}
               onChange={this.handleChange}
              />
        </div>
        <div className="mb-3">
          <label>Course Level</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Course Level"
            id="level"
            name="level"
            // value={this.state.level}
              onChange={this.handleChange}
          />
        </div>
        
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={this.handleCreate}>
            Create
          </button>
        </div>
        
      </form>
    );
   }

  
}

export default EditCourse;
