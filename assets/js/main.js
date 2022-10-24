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
        document.getElementById('mailVerification').innerHTML = `<p>L'indirizzo e-mail è presente</p>`  
    }else{
        document.getElementById('mailVerification').innerHTML = `<p>L'indirizzo e-mail non è presente</p>` 
    }
}


function diceButton(){

    userDie = Math.round(Math.random() * 5) + 1;
    cpuDie = Math.round(Math.random() * 5) + 1;

    if(userDie > cpuDie){
        console.log('hai vinto')
        console.log(`${userDie} ${cpuDie}`)
        document.getElementById('userDie').innerHTML = `Il risultato del tuo dado è ${userDie}` 
        document.getElementById('cpuDie').innerHTML = `Il risultato del dado avversario è ${cpuDie}`
        document.getElementById('gameResult').innerHTML = `Hai vinto!`
    }else if(userDie < cpuDie){
        console.log('hai perso')
        console.log(`${userDie} ${cpuDie}`)
        document.getElementById('userDie').innerHTML = `Il risultato del tuo dado è ${userDie}` 
        document.getElementById('cpuDie').innerHTML = `Il risultato del dado avversario è ${cpuDie}`
        document.getElementById('gameResult').innerHTML = `Hai perso`
    }else{
        console.log('pareggio')
        console.log(`${userDie} ${cpuDie}`)
        document.getElementById('userDie').innerHTML = `Il risultato del tuo dado è ${userDie}` 
        document.getElementById('cpuDie').innerHTML = `Il risultato del dado avversario è ${cpuDie}`
        document.getElementById('gameResult').innerHTML = `Hai pareggiato`
    }
        
    
}
