function isStrong(password) {
    var rules = {
        'capital' : /[A-Z]/,
        'digit'   : /[0-9]/,
        'except'  : /[aeiou]/,
        'all'    : /^[@#][A-Za-z0-9]{7,14}$/
    };
    return rules.capital.test(password) && rules.digit.test(password) && !rules.except.test(password) && 
          rules.all.test(password);
}
export default function validateInfo(values) {
    let errors = {};  
    if (!values.user) {
      errors.user = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.user)) {
      errors.user = 'Email address is invalid';
    }
    if (!values.password) {
        errors.password = 'Password required';
      } else if (!isStrong(values.password)) {
        errors.password = 'This password is weak!';
      }
    if (values.confirm_password && values.confirm_password!==values.password ) {
      errors.confirm_password = 'Confirm password is invalid';
    }
    return errors;
  }