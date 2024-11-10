export const validateUsername = (username) => {
    if (!username) return 
    const usernameRegex = /^[a-zA-Z0-9]{3,20}$/;
    if (!usernameRegex.test(username)) {
      return "Username must be 3-20 characters long and contain only letters and numbers.";
    }
    return "";
  };
  
  export const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return "Invalid email address.";
    }
    return "";
  };
  
  export const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[#?!@$%^&*-]).{8,}$/;
    if (!passwordRegex.test(password)) {
      return "Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, one number, and one special character.";
    }
    return "";
  };
  
  export const validateConfirmPassword = (password, confirmPassword) => {
    if (password !== confirmPassword) {
      return "Passwords do not match.";
    }
    return "";
  };
  
  
  export const validatePhoneNumber = (phone) => {
    if (!phone) return;
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      return "Phone number must be exactly 10 digits.";
    }
    return "";
  };