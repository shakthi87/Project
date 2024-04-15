const db = require("../config");

/*function insertquery(name,email,user_id,address,city,state){
    return new Promise((resolve,reject)=>{
        const sql1=`insert into user (name,email)values('${name}','${email}')`;
        db.query(sql1,(error,result1)=>{
            if(error){
                console.log('error in table1',error)
            }else{
                console.log(result1)
            }
        })
        const insertid=result1.id
        const sql2=`insert into adresses (user_id,address,city,state)values('${insertid}','${address}','${city}','${state}')`
        db.query(sql2,(error))
})
}*/
/*const insert = (name, email, address, city, state, callback) => {
  const query = `insert into user (name,email)values('${name}','${email}');
    insert into addresses(user_id,address,city,state)values(LAST_INSERT_ID(),'${address}','${city}','${state}');`;
  db.query(query, (error, result) => {
    if (error) {
      callback(error, null);
      return;
    }
    console.log(result);
    callback(null, result);
  });
};*/
/*const insert = (name, email, address, city, state, callback) => {
  const query1 = `insert into user (name,email)values ('${name}','${email}')`;
  db.query(query1, (error, result) => {
    if (error) {
      db.rollback(() => {
        callback(error, null);
      });
      return;
    }
    const userID = result.id;
    const query2 =
      "insert into addresses (user_id,address,city,state)values(?,?,?,?)";
    db.query(query2, [userID, address, city, state], (error, result) => {
      if (error) {
        console.log(error);
        db.rollback(() => {
          callback(error, null);
        });
        return;
      }
      console.log(result);
    });
  });
};*/
const insert = (name, email, address, city, state, callback) => {
  const query1 = `INSERT INTO user (name, email) VALUES (?, ?)`;
  db.query(query1, [name, email], (err, result) => {
    if (err) {
      callback(err, null);
      return;
    }
    const userId = result.insertId; // Get the ID of the inserted row in table1
    const query2 = `INSERT INTO addresses (user_id, address, city, state) VALUES (?, ?, ?, ?)`;
    db.query(query2, [userId, address, city, state], (err, result) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, result);
    });
  });
};

module.exports = insert;
