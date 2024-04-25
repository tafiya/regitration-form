# Registration Form Component

This React component implements a user registration form with various input fields such as First Name, Last Name, Email, Contact, Password, and Confirm Password. It provides form validation and responsiveness for all devices.

## How it Works

### Component Structure
The **RegistrationForm** component is structured as follows:

- It utilizes React's `useState` hook to manage form input state.
- It implements a custom hook `useFormValidation` for form validation.
- It handles form submission and displays form data in the console.

### Validation
The form validation checks for the following:

- First Name, Last Name, Email, Contact, and Password fields are required.
- Email must be in a valid format.
- Contact number  must be a valid Bangladeshi Contact number.
- Password must be at least 6 characters long.
- Confirm Password must match Password.

### Responsiveness
The form is designed to be 100% responsive for all devices. This is achieved by using CSS media queries and flexible layout techniques.

### Form Submission
Upon successful form submission, the form data is logged to the console. Additionally, the input fields are cleared to provide a better user experience.

### Why it is Unique

- **Elegant Design:** The form is styled with CSS to create an elegant and eye-catching design. It uses modern design principles to enhance the user experience.
- **Custom Hook for Validation:** The form validation logic is encapsulated in a custom hook, `useFormValidation`, making it reusable and easy to maintain.
- **Toast Message:** After successful submission, there is a successful message.
- **Clear Form Fields:** After successful submission, the form fields are cleared automatically, improving usability.
- **Responsiveness:** The form is designed to be fully responsive across all devices, ensuring a consistent user experience.


## Live Link

You can view the live demo of this Registration Form [here](https://662acdd893e33c1e42f90044--soft-rugelach-35759f.netlify.app/).

