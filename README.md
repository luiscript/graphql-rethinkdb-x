## graphql-rethinkdb-x  


Basic example of graphql server resolving rethinkdb data.  

### What is this for

If you're starting with graphql and you want to connect with a rethinkdb database. This is a good place to start. Nothing fancy just a basic boilerplate.

### Instructions

Install [rethinkdb](https://www.rethinkdb.com/docs/install/)  

run rethinkdb:
```
rethinkdb
```


Create `users` table in rethinkdb.  

Run project  

```
npm install && npm start
```

You will see this in the console:

```
> node index.js
Client Request:
```

type your graphql query:
```
{ usersCount }
```


and you will get:

```
Server Anwswer:  { usersCount: 0 }
```

Insert new documents into `users` table in rethinkdb data explorer and try again.



### Contribute

I'm looking to implement the best practices for working with graphql and rethinkdb. This is a very basic example but if you feel that you can improve it, please send a PR.

### License

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)
