const db = require('../config/dbConnector');

const checkIfEmailExists = async (email) => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM user WHERE email = ?';

    db.query(query, [email], (err, results) => {
      if (err) {
        return reject(err);
      }
      if (results.length > 0) {
        resolve(results[0]);
      } else {
        resolve(null);
      }
    });
  });
};

const insertUser = async (data) => {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO user (name, email, password) VALUES (?, ?, ?)';
    const values = [data.name, data.email, data.password];

    db.query(query, values, (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results);
    });
  });
};


const profileById = async(userId)=>{
  return new Promise((resolve, reject) => { // Wrap the db.query in a Promise
    const query = 'SELECT * FROM user WHERE id = ?';

    db.query(query, [userId], (err, results) => {
      if (err) {
        return reject(err); // Reject the promise with the error if one occurs
      }
      if (results.length > 0) {
        resolve(results[0]); // Resolve the promise with the user data
      } else {
        resolve(null); // No user found, resolve with null
      }
    });
  });


}
module.exports = { checkIfEmailExists, insertUser,profileById };
