export default function validateInfo(values) {
    let errors = {};  
    if (!values.user) {
      errors.user = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.user)) {
      errors.user = 'Email address is invalid';
    }
    return errors;
  }