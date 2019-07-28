const bcrypt = require("bcryptjs");

const createHashedPassword = password => {
  const salt = bcrypt.genSaltSync(10);
  password = bcrypt.hashSync(password, salt);
  return password;
};

export default createHashedPassword;
