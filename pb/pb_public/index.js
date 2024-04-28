const pb = new PocketBase("http://127.0.0.1:8090")
    pb.admins.authWithPassword('gaoqi7@gmail.com','2020Jul03-pb')
console.log(pb.authStore.isValid)
console.log(pb.authStore.token)
let flightRecordForm = document.getElementById("flightRecordForm")

flightRecordForm.addEventListener("submit",(e)=>{

    e.preventDefault();
    let cadetID = document.getElementById("cadetID").value
    let record = document.getElementById("record").value
    const data={
        "cadetID": cadetID,
        "record": record
    }
    pb.collection('evafta_tr').create(data)
})