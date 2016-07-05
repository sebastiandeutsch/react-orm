let cid = 1

export default class Model {
  constructor(attributes) {
    this.id = cid++
    this.attributes = []

    // process fields
    for(var key in this.constructor.fields) {
      if(attributes[key]) {
        this.attributes[key] = attributes[key]
      } else {
        this[key] = attributes[key]
      }
    }

    // process relations
    for(var key in this.constructor.belongsTo) {
    }

    return new Proxy(this, this)
  }

  get(target, key) {
    if(this.constructor.fields[key]) {
      return this.attributes[key]
    } else {
      return target[key]
    }
  }

  set(target, key, value) {
    if(this.constructor.fields[key]) {
      this.attributes[key] = value
    } else {
      target[key] = value
    }
    return true
  }

  getRepository() {
    return this.repository
  }

  setRepository(repository) {
    this.repository = repository
  }

  removeRepository() {
    this.repository = null
  }

  save() {
    if(this.repository) {
      this.repository.update(this)
    }
  }
}
