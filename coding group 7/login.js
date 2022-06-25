$(document).ready(function(){
    if (!localStorage.datacount || localStorage.datacount == null)
    localStorage.datacount=0;
});

var link3 = crossroads.addRoute('', function() {
    datalength = localStorage.datacount;
    htmlText = "";
    if (datalength > 0){
        for (var i = 1; i <= datalength; i++){
            myData = localStorage.getItem("data" + i);
            myData = JSON.parse(myData);
            htmlText = htmlText + "<tr onclick='trClick(this," +i+ ")'><td>" + myData.nickName + "</td><tr>";
        }
    }
    else{
        htmlText = htmlText + "<tr><td> no data found </td><tr>";
    }
        $('#maintable tbody').html(htmlText);
        $("#masterC").show();
        $("#divFrmAddKenalan").hide();
        $("#divFrmEditKenalan").hide();
});

var link4 = crossroads.addRoute('btnAddKenalan', function(){
    $("#masterC").hide();
    $("#divFrmAddKenalan").show();
    $("#divFrmEditKenalan").hide();
});

$(document).ready(function(){
    $("#frmAddKenalan").submit(function(e){
        e.preventDefault();
        e.stopPropagation();
        var nickName = $("#nickname").val();
        var userName = $("#username").val();
        var password = $("#password").val();
    
        myData={};
        myData.nickname=nickName;
        myData.username-userName;
        myData.password=password;
        console.log(JSON.stringify(myData));
        var i = localStorage.datacount
        i++;
        localStorage.setItem("data"+i, JSON.stringify(myData));
        localStorage.datacount=i;
    
        alert('New data added');

        $("#masterC").show();
        $("#divFrmAddKenalan").hide();
        $("#divFrmEditKenalan").hide();
    });

    function parseHash(newHash,oldHash){
        crossroads.parse(newHash);
    }
    hasher.initialiazed.add(parseHash);
    hasher.changed.add(parseHash);
    hasher.init();
});