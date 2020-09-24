const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('./db/db.json')
const db = low(adapter)

// db.defaults({ products: [], orders: [], count: 0 })
//  .write()

module.exports = { db };