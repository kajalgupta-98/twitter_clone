import React from 'react'
import { TextField, Button } from "@mui/material"
import SelectComponent from '../../components/Select'
import style from "./register.module.css"
import DefaultSignUp from '../../components/DefaultSignUp'
import {Link} from "react-router-dom"

const Register = () => {

    const [showCreateAccountPage, setShowCreateAccountPage ]= React.useState(false)

    const [name, setName] = React.useState("")
    const [phone, setPhone] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [dob, setDob] = React.useState({})

    const [errors, setErrors] = React.useState({})
    const [showEmailBox, setShowEmailBox] = React.useState(false)


    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const dates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
    const years = [2000, 2001, 2002, 2003, 2004]

    function handleShowCreateAccountPage(){
        setShowCreateAccountPage(true)
    }

    function toggleEmailPhone() {
        setShowEmailBox(!showEmailBox)
    }

    function handleMonthChange(e) {
        dob.month = (e.target.value)

    }

    function handleDateChange(e) {
        dob.date = (e.target.value)

    }
    function handleYearChange(e) {
        dob.year = (e.target.value)

    }


    function handleSubmit(e) {
        setDob(dob)
        e.preventDefault()
        const errors = {}
        if (!name) {
            errors.name = "Name is required"
        }
        if (showEmailBox) {
            if (!email) {
                errors.email = "cannot be empty"
            }
        } else {
            if (!phone && email) {
                errors.phone = "Phone is required"
            } else if (phone.length !== 10) {
                errors.phone = "Invalid Phone Number"
            }
        }


        if (!dob.month || !dob.date || !dob.year) {
            errors.dob = "any field of DOB cannot be empty"
        }

        setErrors(errors)
        if (Object.keys(errors).length === 0) {
            window.alert("form submitted")
            let user = JSON.parse(localStorage.getItem("userDetails"))
            if (user) { }
            else {
                user = []
            }

            showEmailBox ?
                user.push({
                    Name: name,
                    Email: email,
                    DOB: dob
                }) :
                user.push({
                    Name: name,
                    Phone: phone,
                    DOB: dob
                })

            localStorage.setItem("userDetails", JSON.stringify(user));
            console.log(user)
        }
    }
    return (
        <form className={style.regFormContainer} onSubmit={handleSubmit}>
            
                <nav> <Link to={'/'}>X</Link></nav>
          
            
            {showCreateAccountPage? 
            <>
             <h1>Create Your Account</h1>
            <TextField className={style.inputField} id="outlined-basic" label="Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
            {errors.name && <span className={style.error}>{errors.name}</span>}<br />
            {showEmailBox ? <>
                <TextField className={style.inputField} id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} />
                <span onClick={toggleEmailPhone}>Use Phone instead</span>
                {errors.phone && <span className={style.error}>{errors.phone}</span>}
            </> :
                <>   <TextField className={style.inputField} id="outlined-basic" label="Phone" variant="outlined" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    <span onClick={toggleEmailPhone}>Use Email instead</span> </>}
            {errors.email && <span className={style.error}>{errors.email}</span>}




            <label><strong>Date of Birth</strong></label>
            <p>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
            <div className={style.dobContainer}>
                <SelectComponent label="Month" Menuoptions={months} value={dob.month} onchange={handleMonthChange} />
                <SelectComponent label="Date" Menuoptions={dates} value={dob.date} onchange={handleDateChange} />
                <SelectComponent label="Year" Menuoptions={years} value={dob.year} onchange={handleYearChange} />

            </div>
            {errors.dob && <span className={style.error}>{errors.dob}</span>}
            <Button classname={style.submitBtn} variant="contained" type='submit'>Submit</Button>
            </> : <DefaultSignUp onclick={handleShowCreateAccountPage}/> }
           


        </form >
    )

 

export default Register
