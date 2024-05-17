/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "xiusaoyt6a6tnyb",
    "created": "2024-05-17 21:36:47.280Z",
    "updated": "2024-05-17 21:36:47.280Z",
    "name": "evafta_fr",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ijdgvifr",
        "name": "cadetID",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("xiusaoyt6a6tnyb");

  return dao.deleteCollection(collection);
})
