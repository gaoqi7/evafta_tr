/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5ctmr5fq7qqno26")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nrgwv0wz",
    "name": "record",
    "type": "number",
    "required": false,
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
  const collection = dao.findCollectionByNameOrId("5ctmr5fq7qqno26")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nrgwv0wz",
    "name": "field",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
})
