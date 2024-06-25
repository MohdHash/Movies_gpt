export const checkLogin = (email, password, name) => {
    const isEmailVaid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordVaid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    const isNameValid = /^[a-zA-Z]+$/.test(name);


    if(!isEmailVaid) return "Email is not valid";
    if(!isPasswordVaid) return "Password is not valid";
    if(!isNameValid) return "Name is not valid";

    return null;
}