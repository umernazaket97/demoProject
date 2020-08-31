import React, { Component } from 'react';
import Portal from '../Common/portal'
import Copyright from "../Common/Copyright";

class AdminPortal extends Component {
    render() {
        return (
          <div>
            <Portal 
            PortalName="Admin Portal"
            PersonName="Muhammad Umar"
            
            // Heading 01
            mainoption1="Manage Doctor"
            smalloption1="Add Doctor"

            showOption2="true"
            smalloption2="Delete Doctor"

            showOption3="true"
            smalloption3="Doctor History"
            src="/login"

            // Heading 02
            mainoption2="Manage Patients"

            showOption4="true"
            smalloption4="Add Patient"

            showOption5="true"
            smalloption5="Delete Patient"

            showOption6="true"
            smalloption6="Patient History"



            // Heading 03
            mainoption3="Account"
           
            showOption7="true"
            smalloption7="Change Account Info"

            showOption8=""
            smalloption8=""
            

            uploadImage=""

            
            />
        <Copyright />
           
           </div>
        );}
 }
                           
export default AdminPortal;
