const validationFunc = (index, validationText) => {
  switch (index) {
    case "name":
      if (validationText.length > 0) {
        return true;
      } else {
        return false;
      }

    case "enterprise":
      if (validationText.length > 0) {
        return true;
      } else {
        return false;
      }
    case "email":
      const emailRegex =
        /^([a-zA-Z0-9])+([a-zA-Z0-9._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9._-]+)+$/;
      if (validationText.length > 0) {
        if (validationText.match(emailRegex)) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    case "phone":
      if (validationText.length > 0) {
        return true;
      } else {
        return false;
      }
    case "address":
      if (validationText.length > 0) {
        return true;
      } else {
        return false;
      }
    default:
      return false;
  }

  // let validationAll = false;

  // let emailValidation = false;
  // let lengthValidation = false;
  // const emailRegex =
  //   /^([a-zA-Z0-9])+([a-zA-Z0-9._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9._-]+)+$/;
  // if (
  //   name.length > 0 &&
  //   email.length > 0 &&
  //   enterprise.length > 0 &&
  //   phone.length > 0 &&
  //   address.length > 0
  // ) {
  //   lengthValidation = true;
  // } else {
  //   lengthValidation = false;
  // }

  // if (email.match(emailRegex)) {
  //   emailValidation = true;
  // } else {
  //   emailValidation = false;
  // }

  // if (lengthValidation === true && emailValidation === true) {
  //   validationAll = true;
  // } else {
  //   validationAll = false;
  // }

  // if (validationAll === true) {
  //   return true;
  // } else {
  //   return false;
  // }
};

export default validationFunc;
