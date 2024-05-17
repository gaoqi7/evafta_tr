/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xiusaoyt6a6tnyb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "i2kj1cdj",
    "name": "nth",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": null,
      "noDecimal": true
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bzxhf5jb",
    "name": "amount",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xiusaoyt6a6tnyb")

  // remove
  collection.schema.removeField("i2kj1cdj")

  // remove
  collection.schema.removeField("bzxhf5jb")

  return dao.saveCollection(collection)
})
