let mailList = ['giorgio99@gmail.com','fabio77@gmail.com','davide44@gmail.com'];

console.log(mailList)

function submit(){
    
    let mailName = document.getElementById('inputMail').value;
    let mailCheck = false;

    for(i = 0; i < mailList.length; i++){
        
        if(mailList[i] == mailName){
            mailCheck = true;
        }
    }

    if(mailCheck == true){
        console.log('presente')
    }else{
        console.log('non è presente')
    }
}
