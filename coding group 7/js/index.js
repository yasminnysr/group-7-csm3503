$(function()
{
    if (!localStorage.datacount || localStorage.datacount == null)
        localStorage.datacount = 0;

    var link3 = crossroads.addRoute('', function() {
        dataLength = localStorage.datacount;
        htmlText = "";
        if (dataLength > 0) {
            for (var i = 1; i <= dataLength; i++) {
                //i = index of list (start with 1)
                myData = localStorage.getItem("data" + i);
                myData = JSON.parse(myData);
                htmlText = htmlText + "<tr><td><a href='login.html#btnDisplay/"+i+"'>" + myData.nickname + "</a></td></tr>";
            }
        }
        else {
            htmlText = htmlText + "<tr><td> no data found </td></tr>";
        }

        $('#maintable tbody').html(htmlText);

        //show main menu with table and Add Button
        $("#divmokdebtn").show();
        $("#masterC").show();
        $("#divFrmAddKenalan").hide();
        $("#divFrmViewKenalan").hide();
        $("#divFrmEditKenalan").hide();
        $("#divaddbutton").show();
        $("#divAbout").hide();
        $("#divDisplay").hide();
        $("#divEdit").hide();

    });    

    //btn add kenalan
    var link4 = crossroads.addRoute('btnAddKenalan', function() {
        $("#divmokdebtn").hide();
        $("#masterC").hide();
        $("#divFrmAddKenalan").show();
        $("#divFrmViewKenalan").hide();
        $("#divFrmEditKenalan").hide();
        $("#divaddbutton").hide();
        $("#divAbout").hide();
        $("#divDisplay").hide();
        $("#divEdit").hide();

    });

    //Display by clicking the nickname
    var link5 = crossroads.addRoute('btnDisplay/{id}', function(id) {
        //display data in table

        //get item from localstorage
        myData = localStorage.getItem("data" + id);
        console.log("getdataa " + myData);
        myData = JSON.parse(myData);
        console.log("pass : " +myData.password);

        //kosongkan, baru masukkan data
        htmlText = "";
        htmlText = htmlText + "<tr><td>ID : " + id + "</td></tr><tr><td>Nickname : " 
                        + myData.nickname + "</td></tr><tr><td>Username : "
                        + myData.username + "</td></tr><tr><td>Password : " 
                        + myData.password + "</td></tr>";
            
        //change data in table
        $('#maintable2').html(htmlText);

        var editlink = "#btnEditsKenalan/" + id;
        $('#btnEdit').html(" <input type='checkbox' id='check'>" +
                            "<label class='chat-btn save' for='check'>" +
                            "<button class='btn-save' type='submit' onclick=\"location.href=' " + editlink + "' \"> <i class='fa fa-edit'></i> </button>" 
                            );

        //hide and show DIV
        $("#divmokdebtn").hide();
        $("#masterC").hide();
        $("#divFrmAddKenalan").hide();
        $("#divFrmViewKenalan").hide();
        $("#divFrmEditKenalan").hide();
        $("#divaddbutton").hide();
        $("#divAbout").hide();
        $("#divDisplay").show();
        $("#divEdit").hide();

    });

    //Add kenalan
    $("#frmAddKenalan").submit(function(e) {
        e.preventDefault();
        e.stopPropagation();
        var nickName = $("#nickname").val();
        var userName = $("#username").val();
        var passWord = $("#password").val();

        myData = {};
        myData.nickname = nickName;
        myData.username = userName;
        myData.password = passWord;

        var i = localStorage.datacount
        i++;
        localStorage.setItem("data" + i, JSON.stringify(myData));
        localStorage.datacount = i;
        console.log("data" + i, JSON.stringify(myData));

        alert('New data added!');

        $('#maintable tbody').html(htmlText);
        //go to original link
        window.location = 'login.html';

        //show main menu with table and Add Button
        $("#divmokdebtn").show();
        $("#masterC").show();
        $("#divFrmAddKenalan").hide();
        $("#divFrmViewKenalan").hide();
        $("#divFrmEditKenalan").hide();
        $("#divaddbutton").show();
        $("#divAbout").hide();
        $("#divDisplay").hide();
        $("#divEdit").hide();
        
    });

    //edit kenalan
    $("#frmEditsKenalan").submit(function(e) {
        e.preventDefault();
        e.stopPropagation();
        var id       = $("#idEdit").val();
        var nickName = $("#nicknameEdit").val();
        var userName = $("#usernameEdit").val();
        var passWord = $("#passwordEdit").val();

        myData = {};
        myData.nickname = nickName;
        myData.username = userName;
        myData.password = passWord;

        //var i = localStorage.datacount
        //i++;
        localStorage.setItem("data" + id, JSON.stringify(myData));
        console.log("data" + id + " Updated: ", JSON.stringify(myData));

        alert('Data edited!');

        window.location = 'login.html';

        $('#maintable tbody').html(htmlText);

        //show main menu with table and Add Button
        $("#divmokdebtn").show();
        $("#masterC").show();
        $("#divFrmAddKenalan").hide();
        $("#divFrmViewKenalan").hide();
        $("#divFrmEditKenalan").hide();
        $("#divaddbutton").show();
        $("#divAbout").hide();
        $("#divDisplay").hide();
        $("#divEdit").hide();
        
    });

    //btn edit kenalan
    var link6 = crossroads.addRoute('btnEditsKenalan/{id}', function(id) {

        //get item from localstorage
        myData = localStorage.getItem("data" + id);
        myData = JSON.parse(myData);

        $("#idEdit").val(id) ;
        $("#nicknameEdit").val(myData.nickname);
        $("#usernameEdit").val(myData.username);
        $("#passwordEdit").val(myData.password);



        $("#divmokdebtn").hide();
        $("#masterC").hide();
        $("#divFrmAddKenalan").hide();
        $("#divFrmViewKenalan").hide();
        $("#divFrmEditKenalan").hide();
        $("#divaddbutton").hide();
        $("#divAbout").hide();
        $("#divDisplay").hide();
        $("#divEdit").show();

    });

    //go to #about
    var link7 = crossroads.addRoute('btnAbout', function() {
        $("#divmokdebtn").hide();
        $("#masterC").hide();
        $("#divFrmAddKenalan").hide();
        $("#divFrmViewKenalan").hide();
        $("#divFrmEditKenalan").hide();
        $("#divaddbutton").hide();
        $("#divAbout").show();
        $("#divDisplay").hide();
        $("#divEdit").hide();

    });

    function parseHash(newHash, oldHash) {
        crossroads.parse(newHash);
    }

    hasher.initialized.add(parseHash);
    hasher.changed.add(parseHash);
    hasher.init();

    function trClick(x, y) {
        alert("Row index is: " + x.rowIndex);
    }


    // -------- #About ------------
    // Initialize Variables
	var closePopup = document.getElementById("popupclose_About");
	var overlay = document.getElementById("overlay_About");
	var popup = document.getElementById("popup_About");
	var button = document.getElementById("button_About");
	// Close Popup Event
	closePopup.onclick = function() {
	  overlay.style.display = 'none';
	  popup.style.display = 'none';
	};
	// Show Overlay and Popup
	button.onclick = function() {
	  overlay.style.display = 'block';
	  popup.style.display = 'block';
	}
});
    




