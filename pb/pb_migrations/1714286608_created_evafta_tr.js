/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "5ctmr5fq7qqno26",
    "created": "2024-04-28 06:43:28.811Z",
    "updated": "2024-04-28 06:43:28.811Z",
    "name": "evafta_tr",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "bswtp5zz",
        "name": "cadetID",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 6,
          "max": 6,
          "pattern": ""
        }
      }
    ],
    "indexes": [
      "CREATE UNIQUE INDEX `idx_9R59TP4` ON `evafta_tr` (`cadetID`)"
    ],
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
  const collection = dao.findCollectionByNameOrId("5ctmr5fq7qqno26");

  return dao.deleteCollection(collection);
})
