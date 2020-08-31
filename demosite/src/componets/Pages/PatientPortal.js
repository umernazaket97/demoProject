import React, { Component } from 'react';
import Portal from '../Common/portal'

class DoctorsPortal extends Component {
    render() {
        return (
          <div>
            <Portal 
            PortalName="Patient Portal"
            PersonName="Umar Rajpoot"
            
            // Heading 01
            mainoption1="Report"

            smalloption1="View Report"

            showOption2="true"
            smalloption2="View History"

            showOption3=""
            smalloption3=""

            // Heading 02
            mainoption2="Manage Account"

            showOption4="true"
            smalloption4="Account Details"

            showOption5=""
            smalloption5=""

            showOption6=""
            smalloption6=""



            // Heading 03
            mainoption3=""
           
            showOption7=""
            smalloption7=""

            showOption8=""
            smalloption8=""
            

            uploadImage=""
            />
           
           </div>
        );}
 }
                           
export default DoctorsPortal;