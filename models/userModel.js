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

module.exports = { checkIfEmailExists, insertUser };
