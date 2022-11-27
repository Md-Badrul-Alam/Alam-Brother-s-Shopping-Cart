document.getElementById('button-login').addEventListener('click', function(){
    
    const enterUsernameFile = document.getElementById('enter-username');
    const enterUsername = enterUsernameFile.value;

    const enterPasswordFile = document.getElementById('enter-password');
    const enterPassword = enterPasswordFile.value;

    if(enterUsername == 'badal' && enterPassword == 123456){
        window.location.href = 'shopping.html';
    }
    
})