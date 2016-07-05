import Model from 'framework/Model'

export default class Publisher extends Model {
  static fields = {
    name: "String"
  }

  static hasMany = {
    books: "Collection"
  }
}
