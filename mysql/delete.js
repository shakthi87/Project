const db = require("../config");

const deletUser = (id, callback) => {
  const query1 = `delete from user where id='${id}'`;
  const query2 = `delete from addresses where user_id='${id}'`;
  db.query(query1, (error, result) => {
    callback(error, null);
    return;
  });
  db.query(query2, (error, result) => {
    if (error) {
      callback(error, null);
      return;
    }
    callback(null, result);
  });
};
module.exports = deletUser;
