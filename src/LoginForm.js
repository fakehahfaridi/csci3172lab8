import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

function LoginForm(){
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        favoriteSeason: "",
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validate = () => {
        const newErrors = {};
        const nameRegex = /^[A-Za-z]+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])(?=.*[A-Z]).{8,}$/;

        if(!formData.firstName.match(nameRegex)){
            newErrors.firstName = "First name invalid";
        }
        if(!formData.lastName.match(nameRegex)){
            newErrors.lastName = "Last name is invalid";
        }
        if(!formData.email.match(emailRegex)){
            newErrors.email = "Email is invalid";
        }
        if(!formData.password.match(passwordRegex)){
            newErrors.password = "Password must contain 1 uppercase letter, 1 number, 1 special character and 1 alphabet."
        }
        if(!formData.favoriteSeason){
            newErrors.favoriteSeason = "Please select your favorite season";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length ===0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(validate()){
            navigate("/profile", {state: formData});
        }
    };

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    return(
        <div>
            <h1>
                Form
            </h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name: </label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange}
                    />
                    {errors.firstName && <div>{errors.firstName}</div>}
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange}
                    />
                    {errors.firstName && <div>{errors.firstName}</div>}
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    {errors.email && <div>{errors.email}</div>}
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange}/>
                    {errors.password && <div>{errors.password}</div>}
                </div>
                <div>
                    <label>Favorite Season: </label>
                    <select name="favoriteSeason" value={formData.favoriteSeason} onChange={handleChange} >
                    <option value="">--Select--</option>
                    <option value="Spring">Spring</option>
                    <option value="Fall">Fall</option>
                    <option value="Winter">Winter</option>
                    </select>
                    {errors.favoriteSeason && <div>{errors.favoriteSeason}</div>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default LoginForm;