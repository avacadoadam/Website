//Golbal vars
var slt1, input_fields,input_fields_counter,label_fields, names, email, phone,Get_Quote_Prompt;  
slt1 = document.getElementById("options");  
input_fields = document.getElementsByClassName("quota");
label_fields = document.getElementsByClassName("label");
input_fields_counter = 0;
names = document.getElementById("names");
email = document.getElementById("email");
phone = document.getElementById("phone");
//error handling
var Name_Error, Email_Error ,Phone_Error;
Name_Error = document.getElementById("Name_error");
Email_Error = document.getElementById("Email_error");
Phone_Error = document.getElementById("Number_error");
//Get your quote button
Get_Quote_Prompt = document.getElementById("start");
//otherarea
 otherTextArea = document.getElementsByClassName("other_ticked");

function Check_Options() {
    "use strict";
    var i;
        
    i = 0;
    if (slt1.value === "Other") {
               for (i; i < otherTextArea.length; i++) {
                    otherTextArea[i].style.display = 'block';
                    otherTextArea[i].style.textAlign = 'center';
               }
           } else if (slt1.value === "House Move"  || slt1.value === "Commerical Move")  {
                  for (i; i < otherTextArea.length; i++) {
                       ClearCurrentTile();
                     input_fields_counter++;
                     alert(input_fields_counter);
                      StartAnimation();
                  }
          
            }    
                    }


//check if all feilds are filled
function Submit_check() {
     "use strict";
    var i = 0;
    for (i ; i < input_fields.length; i++) {
        if (input_fields[i].value === "") {
            var temp = input_fields[i].id;
            if (temp === "names") {
               Name_Error.style.display = 'block';
               } else if (temp === "email")  {
                       Email_Error.style.display = 'block';
                        } else if (temp === "phone") {
                               Phone_Error.style.display ='block';
                                 }
           
        } else {
             var temp = input_fields[i].id;
             if (temp === "names") {
              Name_Error.style.display='none';
               }else if(temp === "email") {
                       Email_Error.style.display='none';
                        }else if(temp === "phone") {
                               Phone_Error.style.display = 'none';
                                 }
        }
    }
    
}

function Check_Name(event){
    if(event.keyCode === 13){
    var temp = input_fields[input_fields_counter];
    if(temp.value === ""){
        Name_Error.style.display = 'block';
       }else{
           Name_Error.style.display = 'none';
           next_forum(event);
       }
}
}

function Check_Email(event){
    
    if(event.keyCode === 13){
    
        var temp = input_fields[input_fields_counter];
        if(temp.value === ""){
           Email_Error.style.display = 'block';
           }else{
               Email_Error.style.display = 'none';
               next_forum(event);
           }
       }
}

function Check_Phone(event){
  
    if(event.keyCode === 13){
       
       var temp = input_fields[input_fields_counter];
        if(temp.value === ""){
           Phone_Error.style.display = 'block';
           }else{
               Phone_Error.style.display = 'none';
               next_forum(event);
           }
       }
}

function StartAnimation(){
   alert(input_fields_counter);
   Get_Quote_Prompt.style.display = "none";
    input_fields[input_fields_counter].style.display = "inline-block";
    label_fields[input_fields_counter].style.display = "block";
}

function ClearCurrentTile(){
    input_fields[input_fields_counter].style.display = "none";
    label_fields[input_fields_counter].style.display = "none";
     
}

function next_forum(event){
    if(event.keyCode === 13){
    event.preventDefault();
       
            ClearCurrentTile();
        input_fields_counter++;
            
          
            StartAnimation();
    }
    
}
function next_forum(event){
    if(event.keyCode === 13){
    event.preventDefault();
       
            ClearCurrentTile();
        input_fields_counter++;
            
          
            StartAnimation();
    }
    
}

function next_forum_NonEvent(){
     ClearCurrentTile();
    input_fields_counter++; 
    StartAnimation();
    
}

function Back_forum_NonEvent(){
   ClearCurrentTile();
    input_fields_counter--;
    alert(input_fields_counter);
     StartAnimation();
}
//arrows

//Checks Whick slide the user is on
//And skips or goes back in turn with wa arrow they selected
function CheckSlide_Foward(){
    if(input_fields_counter === 0){
                             var temp = input_fields[input_fields_counter];
                            if(temp.style.display === "inline-block"){
                                if(temp.value === ""){
                                    Name_Error.style.display = 'block';
                                   }else{
                                       Name_Error.style.display = 'none';
                                       next_forum_NonEvent(); }}
        }else if(input_fields_counter === 1){
                       var temp = input_fields[input_fields_counter];
                        if(temp.value === ""){
                           Email_Error.style.display = 'block';
                           }else{
                               Email_Error.style.display = 'none';
                               next_forum_NonEvent();
                           }
                           }else if(input_fields_counter === 2){
                                    var temp = input_fields[input_fields_counter];
                    if(temp.value === ""){
                       Phone_Error.style.display = 'block';
                       }else{
                           Phone_Error.style.display = 'none';
                           next_forum_NonEvent();
                       }
                                    
                }else if(input_fields_counter === 3){
                    var temp = input_fields[input_fields_counter];
                    if(temp.value === ""){
                       Phone_Error.style.display = 'block';
                       }else{
                           Phone_Error.style.display = 'none';
                           next_forum_NonEvent();
                       }
                         }else if(input_fields_counter === 4){
                                Check_Options();
                                  }
}

//Go Back On forum
function CheckSlide_BackWards(){
    var temp = input_fields[input_fields_counter];
      if(input_fields_counter === 0){
        
      }else if(input_fields_counter === 1){

          Back_forum_NonEvent();
      }else if(input_fields_counter === 2){
          Back_forum_NonEvent();
      }else if(input_fields_counter === 3){
          Back_forum_NonEvent();
      }else if(input_fields_counter === 4){
          Back_forum_NonEvent();
      }else if(input_fields_counter === 5){
          Back_forum_NonEvent();
      }else if(input_fields_counter === 6){
          Back_forum_NonEvent();
      }else{
        alert("error");
      }
}


//qos of other_Clicked

        