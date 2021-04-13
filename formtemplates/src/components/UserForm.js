import React, { useState } from 'react';
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";

function UserForm() {

    const [detailForm, setDetailForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });
    const [personalForm, setPersonalForm] = useState({
        occupation: '',
        city: '',
        bio: ''
    });


    const [step, setStep] = useState(1);

    const nextStep = () => {
        console.log("Continue has been clicked");
        setStep(step + 1);
        
    }

    const prevStep = () => {
        console.log("Back has been clicked");
        setStep(step - 1);
    }



    switch(step){
        case 1:
        return(
            <FormUserDetails 
                nextStep={nextStep}
                form={detailForm}
                setForm={setDetailForm}
                
            />
        )
        case 2:
        return(
            <FormPersonalDetails 
                nextStep={nextStep}
                prevStep={prevStep}
                form={personalForm}
                details = {detailForm}
                setForm={setPersonalForm}
            />
        )    
        case 3:
        return(
            <Confirm 
                personalData={detailForm}
                details={personalForm}
                nextStep={nextStep}
                prevStep={prevStep}
            />
        )
        case 4:
        return(
            <Success />
        )    
        default:
        return(<></>)
    }
    
    
}

export default UserForm;
