import React, { useEffect, useRef } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';
import emailjs from '@emailjs/browser';

const Contact = () => {

    useEffect(() => {

        M.AutoInit();
  
      },[]);
    
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();    
        
        console.log(form.current)

        if(e.target.from_name.value === "" || e.target.Company.value === "" || e.target.Message.value === "" || e.target.Email.value === "") {
            alert('Please enter all information before you send');
        } else {
            emailjs.sendForm('service_zou5uon', 'template_daozfqo', form.current , 'user_V6NRqpoBcAF9DM8pV3Aq1')
            
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

            e.target.reset()
        }

        
    }

    return (
        <div className = "contact-section">
            
            <div className = "contact">

            <h2 className = "contact-header">Contact</h2>
            <div className ="about-text">Have any questions, opportunities or just want to say hi, drop me a message and I'll try to get back to you as soon as possible!</div>

             <div class="form" >

                <div className = "col s1"></div>
                    <form  class="col s10" onSubmit={sendEmail} ref = {form} enctype="multipart/form-data">
                        <div class="row" >
                            <div class="input-field col m6 s12">
                            <input placeholder="Name" type="text" class="validate" name="from_name"></input>
                            <label for="name"></label>
                            </div>
                            <div class="input-field col m6 s12">
                            <input id="last_name" type="text" class="validate" placeholder="Company" name="Company"></input>
                            <label for="company"></label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                            <textarea id="textarea1" class="materialize-textarea" placeholder= "Message" name="Message"></textarea>
                            <label for="textarea1"></label>
                            </div>
                        </div>

                        {/* <div className = "row">
                            <label className ="input-field inline upload-btn">
                                <input type="file" id = "myFile" name="my_file"></input>
                                Upload file
                            </label>
                        </div> */}

                        <div class="row">
                            <div class="col s12">
                            <div className="input-field">
                                <input id="email_inline" type="email" class="validate" placeholder="Email" name="Email"></input>
                                <label for="email_inline"></label>
                                <span class="helper-text" data-error="Please enter a valid Email address" data-success="Correct"></span>
                            </div>
                            </div>
                        </div>

                        <div className = "row submit-btn-container">
                            
                            <div className ="center-div" >
                                <input type="submit" value="Send" className ="submit-btn submit-btn-pos center-div"/>
                                {/* <input className ="submit-btn center-div" type ="submit" value="Send">Submit</input> */}
                            </div>
                        
                        </div>
                    </form>
                <div className = "col s1"></div>
            </div>

            </div>
        </div>
    )
}

export default Contact
