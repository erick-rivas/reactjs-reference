/*
__Seed builder__v1.0
  (Read_only) Builder helper
*/


const mut = (model, query) =>
``
mutation{
    addTodo(type: $type) {
      id
      type
    }
  }

`


object


