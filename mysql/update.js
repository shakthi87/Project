const db = require("../config");

const updateUser = (id, name, email, address, city, state, callback) => {
  const query1 = `update user set name='${name}',email='${email}'where id='${id}'`;
  const query2 = `update addresses set address='${address}',city='${city}',state='${state}' where user_id='${id}'`;
  db.query(query1, (error, result) => {
    if (error) {
      callback(error, null);
      return;
    }
    db.query(query2, (error, result) => {
      if (error) {
        callback(error, null);
        return;
      }
      callback(null, result);
    });
  });
};

module.exports = updateUser;
