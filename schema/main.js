const db = require('../db');

const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
} = require('graphql');

const queryType = new GraphQLObjectType({
  name: 'RootQuery',
  fields:{
    usersCount: {
      type: GraphQLInt,
      resolve: () => {
        return db.getUsers().then((result) =>{
          return result.length
        });
      }
    }
  }
});

const mySchema = new GraphQLSchema({
    query: queryType
});



module.exports = mySchema;
