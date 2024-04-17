const gsID = "1fQMVt7QOhwGNvLtzAlEc-HyiQU7xAY0YoKvGj2gU_Qo"
const gsTabRecord = "tr"

let flightRecordForm = document.getElementById("flightRecordForm")

flightRecordForm.addEventListener("submit",(e)=>{

    e.preventDefault();
    let cadetID = document.getElementById("cadetID").value
    let record = document.getElementById("record").value
    console.log(`this student ${cadetID} 's record is ${record}`)

})