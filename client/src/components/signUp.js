import React, {Fragment, useState, useEffect} from "react";

const SignUp = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState(0);
    const [nationality, setNationality] = useState([]);
    const [occupation, setOccupation] = useState([]);
    const [education, setEducation] = useState([]);
    const [userNationality, setUserNationalitity] = useState("");
    const [userOccupation, setUserOccupation] = useState("");
    const [userEducation, setUserEducation] = useState("");



    const getAllNationalities = async() => {
        try {
            const response = await fetch("http://localhost:5000/moneygoose/nationality/get", {
                method: "GET",
                headers: { "Content-Type" : "application/json" }
            })
            setNationality(await response.json());
            
        } catch (error) {
            console.error(error.message);
        }
    }

    const getAllOccupation = async() => {
        try {
            const response = await fetch("http://localhost:5000/moneygoose/occupation/get", {
                method: "GET",
                headers: { "Content-Type" : "application/json" }
            })
            setOccupation(await response.json());
        } catch (error) {
            console.error(error.message);
        }
    }

    const getAllEducation = async() => {
        try {
            const response = await fetch ("http://localhost:5000/moneygoose/education/get", {
                method: "GET",
                headers: { "Content-Type" : "application/json" }
            })

            setEducation(await response.json());
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getAllNationalities();
        getAllOccupation();
        getAllEducation();
    }, [])


    return(

        
        
        <Fragment >
            <h1 className = "form-control" style = {{textAlign: "center", fontWeight: "bolder"}}>Sign Up</h1>
            <form style = {{marginLeft : "500px", marginTop : "100px", marginRight : "500px" }}>
                <div className="form-group">
                <label htmlFor="username" style = {{fontWeight: "bold"}}>Username</label>
                <input 
                    type = "text"
                    aria-describedby = "usernameHelp"
                    id = "username"
                    className ="form-control"  
                    placeholder = "Enter username"
                    value = {username}
                    onChange = {e => setUsername(e.target.value)} />
                <small id="usernameHelp" className="form-text text-muted">username must be unique</small>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                    type="text" 
                    aria-describedby = "passwordHelp"
                    className="form-control" 
                    id="password"
                    placeholder="Password"
                    value = {password}
                    onChange = {e => setPassword(e.target.value)} />
                    <small id="passwordHelp" className="form-text text-muted">password must be at least 8 characters long </small>
                    <small id="passwordHelp" className="form-text text-muted">password must contains alphabets and numerals </small>
                    <small id="passwordHelp" className="form-text text-muted">password must contain at least 1 special character and uppercase </small>
                </div>

                <div className = "form-group">
                    <label htmlFor = "date">Date Of Birth</label>
                    <input 
                    id = "date"
                    className="form-control"
                    type = "date"
                    value = {dob}
                    onChange = {e => {setDob(e.target.value)}} />
                </div>
                    
                <div className="form-group">
                    <label htmlFor = "gender">gender</label>
                    < br />
                        <input type="radio" name="male" 
                                   value= "M" 
                                   checked={gender === "M"} 
                                   onChange={e => setGender(e.target.value)}
                                   id = "gender"
                                    /> Male
                                   
                        <input type="radio" name="female" 
                                   value= "F"  
                                   checked={gender === "F"} 
                                   onChange={e => setGender(e.target.value)}
                                   id = "gender"
                                   /> Female
                    
                </div>

                <div className="form-group">
                    <label htmlFor="nationalitySelect">Nationality</label>
                    <select 
                    className="form-control" 
                    id="nationalitySelect"
                    onChange = {e => setUserNationalitity(e.target.value)}
                    >
                        <option value="" selected disabled hidden>Choose here</option>
                    {
                        nationality.map(nationality => (
                            <option key = {nationality.description}>{nationality.description}</option>
                        ))
                    }
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="occupationSelect">Occupation</label>
                    <select 
                    className="form-control" 
                    id="occupationSelect"
                    onChange = {e => setUserOccupation(e.target.value)}
                    value = {userOccupation}
                    >
                        <option value="" selected disabled hidden>Choose here</option>
                    {
                        occupation.map(occupation => (
                            <option key = {occupation.description}>{occupation.description}</option>
                        ))
                    }
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="educationSelect">Education</label>
                    <select 
                    className="form-control" 
                    id="educationSelect"
                    onChange = {e => setUserEducation(e.target.value)}
                    >
                        <option value="" selected disabled hidden>Choose here</option>
                    {
                        education.map(education => (
                            <option key = {education.description}>{education.description}</option>
                        ))
                    }
                    </select>
                </div>
            </form>
        </Fragment>
            
    )
}

export default SignUp;