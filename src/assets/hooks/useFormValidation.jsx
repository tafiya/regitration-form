import { useState } from 'react';

const useFormValidation = () => {
  const [errors, setErrors] = useState({});

  const validateForm = (formData) => {
    let isValid = true;
    const newErrors = {};

    // Validation rules
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First Name is required';
      isValid = false;
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.contact.trim()) {
      newErrors.contact = 'Contact is required';
      isValid = false;
    }
    else if (!/^01[3-9]\d{8}$/.test(formData.contact)) {
    newErrors.contact = 'Contact number is invalid';
       isValid = false;
     }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    if (formData.confirmPassword.trim() !== formData.password.trim()) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  return { errors, validateForm };
};

export default useFormValidation;