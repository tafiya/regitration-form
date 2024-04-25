import  { useState } from 'react';
import './RegistrationForm.css';
import useFormValidation from '../assets/hooks/useFormValidation';
import toast, { Toaster } from 'react-hot-toast';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    password: '',
    confirmPassword: ''
  });

  const { errors, validateForm } = useFormValidation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm(formData);
    if (isValid) {
        toast.success('Successfully Register!')
      console.log(formData);
         // Clear form fields
    setFormData({
        firstName: '',
        lastName: '',
        email: '',
        contact: '',
        password: '',
        confirmPassword: ''
      });
    } else {
      console.log('Form validation failed');
    }
  };

  return (
    <div className=''>
         <div className="container">
      <div className='heading'>Registration Form</div>
      <div className="form">
        <div className='divider'>
        <div className="form-group">
          <input
          className='input'
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
          />
          {errors.firstName && <p className="error-message">{errors.firstName}</p>}
        </div>
        <div className="form-group">
          <input
          className='input'
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
          
          />
          {errors.lastName && <p className="error-message">{errors.lastName}</p>}
        </div>

        </div>
    
     
        <div className="form-group">
          <input
          className='input'
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        <div className="form-group">
          <input
          className='input'
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Contact"
          />
          {errors.contact && <p className="error-message">{errors.contact}</p>}
        </div>
        <div className="form-group">
          <input
          className='input'
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />
          {errors.password && <p className="error-message">{errors.password}</p>}
        </div>
        <div className="form-group">
          <input
          className='input'
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
          />
          {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
        </div>
        <button className="login-button"  onClick={handleSubmit}>Submit</button>
      </div>
    </div>
    <Toaster
            position="top-center"
            reverseOrder={false}
          /> 
    </div>
   
  );
};

export default RegistrationForm;
