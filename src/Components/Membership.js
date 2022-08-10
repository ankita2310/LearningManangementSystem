import React from "react";
import '../styles/styles.css';

export const Membership = () => {
    return (

        <div>

            <div class="columns">
                <ul class="price">
                    <li class="header">Basic</li>
                    <li class="grey">$ 9.99 / year</li>
                    <li>50 Courses</li>
                    <li>No interaction with experts</li>
                    <li>Accessible on only Mobiles</li>
                    <li>No Projects</li>
                    {/* <li class="grey"><a href="#" class="button">Sign Up</a></li> */}
                </ul>
            </div>


            <div class="columns">
                <ul class="price">
                    <li class="header">Pro</li>
                    <li class="grey">$ 24.99 / year</li>
                    <li>100 Courses</li>
                    <li>24/7 Interaction with experts</li>
                    <li>Accessible on only Mobiles/Laptops</li>
                    <li>2 Projects</li>
                </ul>

                <br></br>
                <br></br>

                <li class="grey"><a href="#/login" class="button"> Login </a></li>

            </div>


            <div class="columns">
                <ul class="price">
                    <li class="header">Premium</li>
                    <li class="grey">$ 49.99 / year</li>
                    <li>200 Courses</li>
                    <li>24/7 Interaction with experts</li>
                    <li>Accessible on only Mobiles/Laptops</li>
                    <li>5 Projects</li>
                    {/* <li class="grey"><a href="#" class="button">Sign Up</a></li> */}
                </ul>
            </div>



        </div>


    )
}