import React from 'react'
import skills from '../images/skills.jpg'
import jess from '../images/jessica.jpg'
import skills2 from '../images/skills2.png'
import './style.css'

export const AboutUs=()=>{
    return (
      <div>
         <div class='row'>
       
        <div class='column'>
            <div class='card'>
              <img src={jess} class='img-class' alt='Jessica' />
              <div class='container'>
                <h2>Jessica Fang</h2>
                <p class='title'>CEO Director</p>
                <p>My mission is simple: connect the world’s professionals to make them more productive and successful..</p>
                <p>jess@skills.com</p>
                <p>
                  <button class='button'>Contact</button>
                </p>
              </div>
            </div>
          </div>

          <div class='column'>
        <div class='about-section'>
          <h1>About Us</h1>
          <p>Welcome!, We're world's largest professional skill development application in more than 200 countries and territories worldwide.</p>
          <p>
          Our Vision is to Create economic opportunity for every member of the global workforce
          </p>
        </div>
        <div class='card'>
              <img src={skills} class='img-class' alt='Skills' />
              <div class='container'>
                <h2>Skill Platform</h2>
                <p class='title'>Behavorial Skills</p>
                <p>Enhance your skills with help of expertise</p>
                <p>
                  <button class='button'>View Course</button>
                </p>
              </div>
            </div>
        
        </div>

        <div class='column'>
            <div class='card'>
              <img src={skills2} class='img-class' alt='Growth' />
              <div class='container'>
                <h2>Elevate to Next Orbit</h2>
                <p class='title'>Career Path</p>
                <p>Economic opportunity for every member.</p>
                <p>All sorts of jobs listings are posted on LinkedIn everyday by employers, that you can fill out to get better-tailored job listings.</p>
                <p>
                  <button class='button'>View Jobs</button>
                </p>
              </div>
            </div>
          </div>
         
          </div>
          
     
      </div>
    )
    }

