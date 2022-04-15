var validfName1 = "";
var validlName1 = "";
var validID1 = "";
var validfName2 = "";
var validlName2 = "";
var validID2 = "";
var validBuilding = "";
var validRoom = "";
var validTime = "";
var validType = "";
var validSkill = "";
var validInst = "";

var warningColor = "rgba(255, 0, 0, 0.2)";
var validColor = "rgba(0, 255, 0, 0.2)";
var letters = /^[A-Za-z_ ]+$/;
var lettersNumbers = /^[0-9a-zA-Z]+$/;
var numbers = /^[0-9]+$/;
var standardTime = /^\s*(0?\d|1[0-2]):[0-5]\d(\s+(AM|PM))?\s*$/i;

function show(){
    document.getElementById("student_2").style.display = "block";
}

function hide() {
    document.getElementById("student_2").style.display = "none";
}

function ClearForm(){
    document.getElementById("first_name").style.backgroundColor = "white";
    document.getElementById("last_name").style.backgroundColor = "white";
    document.getElementById("student_id").style.backgroundColor = "white";
    document.getElementById("first_name_2").style.backgroundColor = "white";
    document.getElementById("last_name_2").style.backgroundColor = "white";
    document.getElementById("student_id_2").style.backgroundColor = "white";
    document.getElementById("building").style.backgroundColor = "white";
    document.getElementById("room").style.backgroundColor = "white";
    document.getElementById("time").style.backgroundColor = "white";

    document.getElementById("fname1Warning").innerHTML = "";
    document.getElementById("lname1Warning").innerHTML = "";
    document.getElementById("id1Warning").innerHTML = "";
    document.getElementById("buildingWarning").innerHTML = "";
    document.getElementById("roomWarning").innerHTML = "";
    document.getElementById("timeWarning").innerHTML = "";
    document.getElementById("typeWarning").innerHTML = "";
    document.getElementById("skillWarning").innerHTML = "";
    document.getElementById("InstWarning").innerHTML = "";

    document.getElementById("first_name").focus();
}

function ValidateFisrtName() {
    var fname1 = document .getElementById("first_name");
    
    if(!fname1.value.match(letters)){
        document.getElementById("fname1Warning").innerHTML = "Enter a Valid First Name";
        document.getElementById("fname1Warning").style.color = "Red";
        document.getElementById("first_name").style.backgroundColor = warningColor;
        validfName1 = "";
    } else {
        document.getElementById("fname1Warning").innerHTML = "";
        document.getElementById("first_name").style.backgroundColor = validColor;
        validfName1 = "Valid";
    }
}

function ValidateLastName() {
    var lname1 = document .getElementById("last_name");
    
    if(!lname1.value.match(letters)){
        document.getElementById("lname1Warning").innerHTML = "Enter a Valid Last Name";
        document.getElementById("lname1Warning").style.color = "Red";
        document.getElementById("last_name").style.backgroundColor = warningColor;
        validlName1 = "";
    } else {
        document.getElementById("lname1Warning").innerHTML = "";
        document.getElementById("last_name").style.backgroundColor = validColor;
        validlName1 = "Valid";
    }
}

function ValidateID() {
    var id1 = document .getElementById("student_id");
    
    if(!id1.value.match(lettersNumbers)){
        document.getElementById("id1Warning").innerHTML = "Enter a Valid Last Name";
        document.getElementById("id1Warning").style.color = "Red";
        document.getElementById("student_id").style.backgroundColor = warningColor;
        validID1 = "";
    } else {
        document.getElementById("id1Warning").innerHTML = "";
        document.getElementById("student_id").style.backgroundColor = validColor;
        validID1 = "Valid";
    }
}

function ValidateFisrtName2() {
    var fname2 = document .getElementById("first_name_2");
    
    if(!fname2.value.match(letters)){
        document.getElementById("fname2Warning").innerHTML = "Enter a Valid First Name";
        document.getElementById("fname2Warning").style.color = "Red";
        document.getElementById("first_name_2").style.backgroundColor = warningColor;
        validfName2 = "";
    } else {
        document.getElementById("fname2Warning").innerHTML = "";
        document.getElementById("first_name_2").style.backgroundColor = validColor;
        validfName2 = "Valid";
    }
}

function ValidateLastName2() {
    var lname2 = document .getElementById("last_name_2");
    
    if(!lname2.value.match(letters)){
        document.getElementById("lname2Warning").innerHTML = "Enter a Valid Last Name";
        document.getElementById("lname2Warning").style.color = "Red";
        document.getElementById("last_name_2").style.backgroundColor = warningColor;
        validlName2 = "";
    } else {
        document.getElementById("lname2Warning").innerHTML = "";
        document.getElementById("last_name_2").style.backgroundColor = validColor;
        validlName2 = "Valid";
    }
}

function ValidateID2() {
    var id2 = document .getElementById("student_id_2");
    
    if(!id2.value.match(lettersNumbers)){
        document.getElementById("id2Warning").innerHTML = "Enter a Valid Last Name";
        document.getElementById("id2Warning").style.color = "Red";
        document.getElementById("student_id_2").style.backgroundColor = warningColor;
        validID2 = "";
    } else {
        document.getElementById("id2Warning").innerHTML = "";
        document.getElementById("student_id_2").style.backgroundColor = validColor;
        validID2 = "Valid";
    }
}

function ValidateBuilding() {
    var building = document .getElementById("building");

    if(!building.value.match(letters)){
        document.getElementById("buildingWarning").innerHTML = "Enter a Valid Building Name";
        document.getElementById("buildingWarning").style.color = "Red";
        document.getElementById("building").style.backgroundColor = warningColor;
        validBuilding = "";
    } else {
        document.getElementById("buildingWarning").innerHTML = "";
        document.getElementById("building").style.backgroundColor = validColor;
        validBuilding = "Valid";
    }
}

function ValidateRoom() {
    var room = document .getElementById("room");

    if(!room.value.match(numbers)){
        document.getElementById("roomWarning").innerHTML = "Enter a Valid Room Number";
        document.getElementById("roomWarning").style.color = "Red";
        document.getElementById("room").style.backgroundColor = warningColor;
        validRoom = "";
    } else {
        document.getElementById("roomWarning").innerHTML = "";
        document.getElementById("room").style.backgroundColor = validColor;
        validRoom = "Valid";
    }
}

function ValidateTime() {
    var time = document .getElementById("time");

    if(!time.value.match(standardTime)){
        document.getElementById("timeWarning").innerHTML = "Enter a Valid Time";
        document.getElementById("timeWarning").style.color = "Red";
        document.getElementById("time").style.backgroundColor = warningColor;
        validTime = "";
    } else {
        document.getElementById("timeWarning").innerHTML = "";
        document.getElementById("time").style.backgroundColor = validColor;
        validTime = "Valid";
    }
}

function checkSelection() {
    var checked_type = document.querySelector("input[name = 'performance']:checked");
    var checked_skill = document.querySelector("input[name = 'skill']:checked");
    var checked_instrument = document.querySelector("input[name = 'instrument']:checked");

    if(checked_type == null){
        validType = "";
        document.getElementById("typeWarning").innerHTML = "Please Select a Type";
        document.getElementById("typeWarning").style.color = "red";
    }else if(checked_skill == null){
        validSkill = "Valid";
        document.getElementById("skillWarning").innerHTML = "Please Select a SKill";
        document.getElementById("skillWarning").style.color = "red";
    }else if(checked_instrument == null) {
        validInst = "";
        document.getElementById("InstWarning").innerHTML = "Please Select an Instrument";
        document.getElementById("InstWarning").style.color = "red";
    }else{
        checkValidation(); 
    }
}

function checkValidation() {
    document.getElementById("typeWarning").innerHTML = "";
    document.getElementById("skillWarning").innerHTML = "";
    document.getElementById("InstWarning").innerHTML = "";

    var student2 = document.getElementById("student_2").style.display;

    var fname1 = document.getElementById("first_name");
    var lname1 = document.getElementById("last_name");
    var id1 = document .getElementById("student_id");
    var fname2 = document.getElementById("first_name_2");
    var lname2 = document.getElementById("last_name_2");
    var id2 = document.getElementById("student_id_2");
    var building = document.getElementById("building");
    var room = document.getElementById("room");
    var time = document.getElementById("time");
    if(fname1.value == "" || fname1.value == null){
        document.getElementById("first_name").focus(); 
    }else if (lname1.value == "" || lname1.value == null) {
        document.getElementById("last_name").focus();
    }else if (id1.value == "" || id1.value == null) {
        document.getElementById("student_id").focus();
    }else if (student2 == "block" && fname2.value == "" || fname2.value == null){
        document.getElementById("first_name_2").focus();
    }else if (student2 == "block" && lname2.value == "" || lname2.value == null){
        document.getElementById("last_name_2").focus();
    }else if (student2 == "block" && id2.value == "" || id2.value == null){
        document.getElementById("student_id_2").focus();
    }else if (building.value == "" || building.value == null) {
        document.getElementById("building").focus();
    }else if (room.value == "" || room.value == null) {
        document.getElementById("room").focus();
    }else if (time.value == "" || time.value == null) {
        document.getElementById("time").focus();
    }else {
        verifyIfVisible();
    }
}

function verifyIfVisible() {
    var student2 = document.getElementById("student_2").style.display;

    if (student2 != "block") {
        validfName2 = "Valid";
        validlName2 = "Valid";
        validID2 = "Valid";
    }
    finalValidation();
}

function finalValidation() {
    if (validfName1 == "Valid" && validlName1 == "Valid" && validID1 == "Valid" && validfName2 == "Valid" && validlName2 == "Valid" && validID2 == "Valid" && validBuilding == "Valid" && validRoom == "Valid" && validTime == "Valid") {
            sendData();
        }
}

function pageLoad() {
    var xhttp = new XMLHttpRequest();
    var url = './data/data.json';
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var data = JSON.parse(xhttp.responseText);
            console.log(data.length);
            displayData(data);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}


function sendData() {
    var xhttp = new XMLHttpRequest();
    var url = "assign13.php";
    // Variables to send to PHP file
    var type = document.querySelector("input[name = 'performance']:checked").value;
    var skill = document.querySelector("input[name = 'skill']:checked").value;
    var instrument = document.querySelector("input[name = 'instrument']:checked").value;
    var fname1 = document.getElementById("first_name").value;
    var lname1 = document.getElementById("last_name").value;
    var id1 = document.getElementById("student_id").value;
    var fname2 = document.getElementById("first_name_2").value;
    var lname2 = document.getElementById("last_name_2").value;
    var id2 = document.getElementById("student_id_2").value;
    var building = document.getElementById("building").value;
    var room = document.getElementById("room").value;
    var time = document.getElementById("time").value;
    var suffex = document.getElementById("suffex").value;

    var txt = "type=" + type + "&skill=" + skill + "&instrument=" + instrument + "&fname1=" + fname1 + "&lname1=" + lname1 + "&id1=" + id1 + 
        "&fname2=" + fname2 + "&lname2=" + lname2 + "&id2=" + id2 + "&building=" + building + "&room=" + room + "&time=" + time + "&suffex=" + suffex;
    xhttp.open("POST", url, true);

    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var data = JSON.parse(xhttp.responseText);
            console.log(data);
            displayData(data);
        }
    };
    
    xhttp.send(txt);
}

function displayData(obj) {
    myArray = obj;
    console.log(myArray);
    buildTable(myArray);
}

function buildTable(data) {
    var tableBody = document.getElementById("myTable");

    for(let i = 0; i < data.length; i++){
        var row = '<tr>' +
            '<td>' + data[i].firstname + '</td>' +
            '<td>' + data[i].lastname + '</td>' +
            '<td>' + data[i].studentid + '</td>' +
            '<td>' + data[i].firstname2 + '</td>' +
            '<td>' + data[i].lastname2 + '</td>' +
            '<td>' + data[i].studentid2 + '</td>' +
            '<td>' + data[i].type + '</td>' +
            '<td>' + data[i].skill + '</td>' +
            '<td>' + data[i].instrument + '</td>' +
            '<td>' + data[i].building + '</td>' +
            '<td>' + data[i].room + '</td>' +
            '<td>' + data[i].time + '</td>' +
            '<td>' + data[i].suffex + '</td>' +
            '</tr>';
        tableBody.innerHTML += row;
    }
    document.getElementById("myForm").reset();
}

