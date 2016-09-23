var Promise = require("bluebird");

var r =require('rethinkdb');

const dbConfig = {
	host: 'localhost',
	port: 28015,
	db: 'test'
};

const connect = ()  => {
  return new Promise((resolve, reject) => {
    r.connect({
      host: dbConfig.host,
      port: dbConfig.port
    }).then((connection)=>{
      resolve(connection);
    }).catch((e) =>{
      reject(e);
    });
  })
};

const getUsers = () => {
  return new Promise( (resolve, reject ) => {
    connect().then( (connection) => {
      r.db('test').table('users').run(connection).then((cursor) => {
         return cursor.toArray()
       }).then( (result) => {
          resolve(result);
       }).then(() => {
           connection.close();
       }).catch((err) => {
          connection.close();
          reject(err);
       });
    }).catch((error) => {
      console.log("Connection error: ", error);
      reject(error);
    });
  });
}

exports.getUsers = getUsers;
