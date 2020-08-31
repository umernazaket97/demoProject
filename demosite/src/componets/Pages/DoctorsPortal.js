import React, { Component } from 'react';
import Portal from '../Common/portal'

class DoctorsPortal extends Component {
    render() {
        return (
          <div>
            <Portal 
            PortalName="Doctor Portal"
            PersonName="Dr. Muhammad Umar"
            
            // Heading 01
            mainoption1="Dashboard"
            smalloption1="Get Report"

            showOption2=""
            smalloption2=""

            showOption3=""
            smalloption3=""

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
            

            uploadImage="true"

            
            />
           
           </div>
        );}
 }
                           
export default DoctorsPortal;