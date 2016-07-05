export default class Repository {
  constructor() {
    this.collection = new Map()
    this.listeners = []
  }

  subscribe(listener) {
    this.listeners.push(listener)
  }

  notifyListeners() {
    this.listeners.slice().forEach(listener => listener())
  }

  find(pk) {

  }

  all() {
    return Array.from(this.collection.values())
  }

  create(model) {
    model.setRepository(this)
    this.collection.set(model.id, model)
    this.notifyListeners()
  }

  destroy(model) {
    model.removeRepository()
    this.collection.delete(model.id)
    this.notifyListeners()
  }

  update(model) {
    this.collection.set(model.id, model)
    this.notifyListeners()
  }
}
