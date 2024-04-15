const db = require("../config");
const selectUser = (callback) => {
  const query = `select user.name,user.email,addresses.address,addresses.city,addresses.state from user inner join addresses on user.id=addresses.user_id`;
  db.query(query, (err, result) => {
    if (err) {
      callback(err, null);
      return;
    }
    callback(null, result);
  });
};

module.exports = selectUser;
