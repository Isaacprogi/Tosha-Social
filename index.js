//SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');

//remeove active class from all menu Items
const changeActiveItem = () =>{
    menuItems.forEach(item =>{
    item.classList.remove('active');
    })
}


//messages
const messageNotification = document.querySelector('#messages-notification');
const message = document.querySelector('.messages');





//notification pop up
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notification-popup').style.display = 'none';
            
        } else{
            document.querySelector('.notification-popup').
            style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
       
    })
});

//message box shadow
messageNotification.addEventListener('click', () => {
    message.style.boxShadow = '0 0 1rem var(--color-primary)';
    setTimeout(()=>{
    message.style.boxShadow = 'none'; 
    }, 2000);
})