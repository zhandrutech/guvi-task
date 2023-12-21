import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [age, setAge] = useState();
    // const [gender, setGender] = useState();
    const [selectedOption, setSelectedOption] = useState("Male")  
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    function onValueChange(event){
        // Updating the state with the selected radio button's value
        setSelectedOption(event.target.value)
    }
  
    // Function to handle the form submission
    function formSubmit(event) {
      // Preventing the default form submission behaviour
      event.preventDefault();
      
      // Logging the selected option
      console.log(selectedOption)
      
      // Alerting the user with the selected option
      alert("Your gender is " + selectedOption)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        axios.post( 'http://localhost:3001/register', {name, email, password ,age,selectedOption})
        .then(result => {
            console.log(result);
            if(result.data === "Already registered"){
                alert("E-mail already registered! Please Login to proceed.");
                navigate('/login');
            }
            else{
                alert("Registered successfully! Please Login to proceed.")
                navigate('/login');
            }
            
        })
        .catch(err => console.log(err));
    }


    return (
        <div>
            <div className="d-flex justify-content-center align-items-center text-center vh-100" style= {{backgroundImage: "linear-gradient(#c5cae9, #81d4fa)"

}}>
                <div className="bg-white p-3 rounded" style={{width : '40%'}}>
                    <h2 className='mb-3 text-primary'>Welcome to Registration Page</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                <strong >Name</strong>
                            </label>
                            <input 
                                type="text"
                                placeholder="Enter Name"
                                className="form-control" 
                                id="exampleInputname" 
                                autoFocus
                                onChange={(event) => setName(event.target.value)}
                                required
                            /> 
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                <strong>Email Id</strong>
                            </label>
                            <input 
                                type="email" 
                                placeholder="Enter Email"
                                className="form-control" 
                                id="exampleInputEmail1" 
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            /> 
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                <strong>Age</strong>
                            </label>
                            <input 
                                type="number" 
                                placeholder="Enter Age"
                                className="form-control" 
                                id="exampleInputEmail11" 
                                onChange={(event) => setAge(event.target.value)}
                                required
                            /> 
                            </div>
                            <div className="d-flex justify-content-left align-items-center text-center vh-50"  > 
                       <label>
                        <strong>Gender</strong>
          <input
            type="radio"
            value="Male"
            // Checking this radio button if the selected option is "Male"
            checked={selectedOption === "Male"}
            onChange={onValueChange}/>
          Male
        </label>
        <br/>
        
        {/* Radio button for "Female" */}
        <label>
          <input
            type="radio"
            value="Female"
            // Checking this radio button if the selected option is "Female"
            checked={selectedOption === "Female"}
            onChange={onValueChange}/>
          Female
        </label>
        <br/>
        
        {/* Radio button for "Other" */}
        <label>
          <input
            type="radio"
            value="Other"
            // Checking this radio button if the selected option is "Other"
            checked={selectedOption === "Other"}
            onChange={onValueChange}/>
          Other
        </label>
        <br/>
        <br/>
        
        {/* Displaying the selected option */}
        <div>
          Selected option is : {selectedOption}
        </div>
        </div>
        <br/>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                <strong>Password</strong>
                            </label>
                            <input 
                                type="password" 
                                placeholder="Enter Password"
                                className="form-control" 
                                id="exampleInputPassword1" 
                                onChange={(event) => setPassword(event.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Register</button>
                    </form>

                    <p className='container my-2'>Already have an account ?</p>
                    <Link to='/login' className="btn btn-secondary">Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Register