function showModal() {
    document.querySelector('.modal').style.visibility = 'visible';
    document.querySelector('.modal').style.opacity = 1;
    document.querySelector('.modal .btn-success').focus();
}

function hideModal() {
    document.querySelector('.modal').style.opacity = 0;
    setTimeout(function () {
        document.querySelector('.modal').style.visibility = 'hidden';
    }, 2000);
}
