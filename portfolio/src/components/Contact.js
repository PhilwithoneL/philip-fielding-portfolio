import React, { useEffect } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';

const Contact = () => {

    useEffect(() => {

        M.AutoInit();
  
      },[]);

    return (
        <div className = "contact-section">
            
            <div className = "contact">

            <h2 className = "contact-header">Contact</h2>
            <div className ="about-text">Have any questions, opportunities or just want to say hi, drop me a message and I'll try to get back to you as quickly as possible!</div>

             <div class="row form">

                <div className = "col  s1"></div>
                    <form class="col  s10">
                        <div class="row">
                            <div class="input-field col m6 s12">
                            <input placeholder="First Name" id="first_name" type="text" class="validate"></input>
                            <label for="first_name"></label>
                            </div>
                            <div class="input-field col m6 s12">
                            <input id="last_name" type="text" class="validate" placeholder="Last Name"></input>
                            <label for="last_name"></label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                            <textarea id="textarea1" class="materialize-textarea" placeholder= "Message"></textarea>
                            <label for="textarea1"></label>
                            </div>
                        </div>

                        <div className = "row">
                            <label className ="input-field inline upload-btn">
                                <input type="file" id = "myFile"></input>
                                Upload file
                            </label>
                        </div>

                        <div class="row">
                            <div class="col s12">
                            <div className="input-field inline">
                                <input id="email_inline" type="email" class="validate" placeholder="Email"></input>
                                <label for="email_inline"></label>
                                <span class="helper-text" data-error="wrong" data-success="right"></span>
                            </div>
                            </div>
                        </div>

                        <div className = "row submit-btn-container">
                            
                            <div className ="center-div"><div className ="submit-btn center-div">Submit</div></div>
                        
                        </div>
                    </form>
                <div className = "col s1"></div>
            </div>

            </div>
        </div>
    )
}

export default Contact
