const settingBtn = document.getElementById('settingBtn');
const addAdminBtn = document.getElementById('addAdminBtn');
const resetPwBtn = document.getElementById('resetPwBtn');
const hidden = document.getElementById('hidden');

settingBtn.addEventListener('click', showDiv);

hideAll();

function hideAll(){
    document.getElementById('hidden').style.display = 'none';
    document.getElementById('addAdmin').style.display = 'none';
    document.getElementById('resetPassword').style.display = 'none';
}

function hideAddAdmin(){
    if(document.getElementById('addAdmin').style.display === "block"){
        document.getElementById('addAdmin').style.display = "none";
    }
}

function hideResetPw(){
    if(document.getElementById('resetPassword').style.display === "block"){
        document.getElementById('resetPassword').style.display = "none";
    }
}

function showDiv(e) {
    hideAddAdmin();
    hideResetPw();
    if (document.getElementById('hidden').style.display === 'block') {
        document.getElementById('hidden').style.display = 'none';
    }

    else {
        document.getElementById('hidden').style.display = 'block';
    }

    e.preventDefault();
}



addAdminBtn.addEventListener('click', function (e) {
    hideResetPw();
    if (document.getElementById('addAdmin').style.display === 'block') {
        document.getElementById('addAdmin').style.display = 'none';
    }

    else {
        document.getElementById('addAdmin').style.display = 'block';
    }

    e.preventDefault();
});
resetPwBtn.addEventListener('click', function (e) {
    hideAddAdmin();
    if (document.getElementById('resetPassword').style.display === 'block') {
        document.getElementById('resetPassword').style.display = 'none';
    }

    else {
        document.getElementById('resetPassword').style.display = 'block';
    }

    e.preventDefault();
});

hidden.addEventListener('click',function(e){
    console.log(e.target);
});