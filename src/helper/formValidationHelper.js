
export function registerFormValidation(event,error){
    event.preventDefault();
    const parentDiv = event.target.parentNode;
    // get password and confirm password
   // const password = event.target.password.value;
   // const password = parentDiv.querySelector('#password').value;
//const inputVal = parseInt(parentDiv.childNodes[1].dataset.value);
    const form = event.target;
    const name = form.name;
    const value = form.value.trim();
    const passwordVal = "";
    let errorObj = null;
    switch (name) {
       
        case 'fname':
            if (value.length < 2) {
                // errorObj.fnameError = 'First name must be at least 2 characters long';
                errorObj= {
                    ...error,
                    fnameError: 'First name must be at least 2 characters long'
                    }
            }
            break;
        case 'lname':
            if (value.length < 3) {
                // errorObj.lnameError = "Last Name must be at least 3 characters";
                errorObj= {
                    ...error,
                    lnameError : "Last Name must be at least 3 characters"
                    }
            }
            break;
        case 'email':
            if (!value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)) {
                // errorObj.emailError = 'Email is not valid';
                errorObj= {
                    ...error,
                    emailError : 'Email is not valid'
                    }
            }
            break;
        case 'password':
            const uppercaseRegExp   = /(?=.*?[A-Z])/;
            const lowercaseRegExp   = /(?=.*?[a-z])/;
            const digitsRegExp      = /(?=.*?[0-9])/;
            const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
            const minLengthRegExp   = /.{8,}/;
            if (!uppercaseRegExp.test(value)) {
                // errorObj.passwordError = 'Password must contain at least one uppercase letter';
                errorObj= {
                    ...error,
                    passwordError : 'Password must contain at least one uppercase letter'
                }
            }
            else if (!lowercaseRegExp.test(value)) {
                // errorObj.passwordError = 'Password must contain at least one lowercase letter';
                errorObj= {
                    ...error,
                    passwordError : 'Password must contain at least one lowercase letter'
                }
            }
            else if (!digitsRegExp.test(value)) {
                // errorObj.passwordError = 'Password must contain at least one digit';
                errorObj= {
                    ...error,
                    passwordError : 'Password must contain at least one digit'
                }
            }
            else if (!specialCharRegExp.test(value)) {
                // errorObj.passwordError = 'Password must contain at least one special character';
                errorObj= {
                    ...error,
                    passwordError : 'Password must contain at least one special character'
                }
            }
            else if (!minLengthRegExp.test(value)) {
                // errorObj.passwordError = 'Password must be at least 8 characters long';
                errorObj= {
                    ...error,
                    passwordError : 'Password must be at least 8 characters long'
                }
            }

            break;
        case 'confirmPassword':

            if (value != passwordVal) {
                // errorObj.confirmPasswordError = 'Passwords do not match';
                errorObj= {
                    ...error,
                    confirmPasswordError : 'Passwords do not match'
                    }
            }
            break;
    }
   return errorObj;
}

export function confirmPasswordValidation(event,password) {
    event.preventDefault();
    const form = event.target;
    const name = form.name;
    const value = form.value.trim();
   
       let confirmPasswordError = "";
   
    if (value != password) {
        confirmPasswordError = 'Passwords do not match';
    }
    return confirmPasswordError;

}