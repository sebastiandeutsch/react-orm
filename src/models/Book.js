import Model from 'framework/Model'

export default class Book extends Model {
  static fields = {
    isbn: "String",
    name: "String"
  }

  static belongsTo = {
    publisher: "Object"
  }
}
