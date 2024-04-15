const db = require("../config");

const selectIDUser = (id, callback) => {
  const query = `select user.name,user.email, addresses.address,addresses.city,addresses.state from user inner join addresses on user.id=addresses.user_id where user.id ='${id}'`;
  db.query(query, (error, result) => {
    if (error) {
      console.log(error);
      callback(error, null);
      return;
    }
    callback(null, result);
  });
};

module.exports = selectIDUser;
