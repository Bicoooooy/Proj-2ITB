function validateCheckbox(){
    
    var checkboxes = document.getElementsByName("checkBox");
    var y = 0;

    for(var x = 0; x < checkboxes.length; x++){  
        
        if(checkboxes[x].checked)  
            a++;  
    }
    
    if(y < 1){  
        
        alert("Please check at least one option.");  
    
    }  

}

function validateDropbox(){
   
        var dropbox = document.getElementsByName("type");
        var selected = dropbox.options[dropbox.selectedIndex].value;
        var selected = dropbox.options[dropbox.selectedIndex].text;
        
        if(selected == 0){

            alert("Please choose one");
        
        }

    }

function validateTextbox(){
    
    if (document.getElementById("1").value == "") {
        alert("Event Title is empty.");
    
    } 
    
    else if (document.getElementById("11").value == "") {
        alert("The date is empty.");
    
    }
    
    else if (document.getElementById("2").value == "") {
        alert("The date is empty.");
    
    }
    else if (document.getElementById("22").value == "") {
        alert("The posting date is empty.");
    
    }

}


function validate(){

    var a = document.getElementById("self").value;
    var b = document.getElementById("Events").value;
    var c = document.getElementById("1").value;
    var d = document.getElementById("11").value;
    var e = document.getElementById("2").value;
    var f = document.getElementById("22").value; 
    
    if(a|b|c|d|e|f != ""){
    alert("Successful Validation");
        alert("Event Type: " + " " + b + "\n" + "Event Title is" + " " + c + "\n" + "Event dates: " + " " 
        + d + " " + " To " + e + "\n" + "Posting Dates: " + f)
        
        a = document.getElementByName("checkBox").value = "";
        b = document.getElementById("Events").value = "";
        c = document.getElementById("1").value = "";
        d = document.getElementById("11").value = "";
        e = document.getElementById("2").value = "";
        f = document.getElementById("22").value = "";
    
    }
    
    else{
    
        validateCheckbox();
    
        validateTextbox();
    
        validateDropbox();
        
    
    } 

}