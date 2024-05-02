const pb = new PocketBase("http://127.0.0.1:8090");
pb.admins.authWithPassword("gaoqi7@gmail.com", "2020Jul03-pb");
let flightRecordForm = document.getElementById("flightRecordForm");

flightRecordForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let cadetID = document.getElementById("cadetID").value;
  let record = document.getElementById("record").value;
  const data = {
    cadetID: cadetID,
    record: record,
  };
  pb.collection("evafta_tr").create(data);
});
let trSearchByID = document.getElementById("trSearchByID");

trSearchByID.addEventListener("submit", (e) => {
  e.preventDefault();
  let queryID = document.getElementById("queryID").value;
  console.log(queryID);
  quaryResult = pb
    .collection("evafta_tr")
    .getList(1, 10, {
      filter: `cadetID = '${queryID}'`,
    })
    .then((data) => {
      document.getElementById("queryResultID").innerHTML = `${queryID}`;
      document.getElementById("queryResultRecord").innerHTML = `${data.items[0].record}`;
    });
});
