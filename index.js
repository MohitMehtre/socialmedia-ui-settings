// SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');
const home = document.querySelector('.home');

// MESSAGES
const messagesNotifications = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');
const category = document.querySelectorAll('.cat');

// THEME
const theme =  document.querySelector('#theme');
const themeModal =  document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');

var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');


const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');



//================================== SIDEBAR================================


// REMOVE ACTIVE CLASS FROM ALL MENU ITEMS
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
        
        
    });
}


menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if (item.id != 'notifications') {
            document.querySelector('.notification-popup')
            .style.display= 'none';
            
        } else {
            document.querySelector('.notification-popup')
            .style.display= 'block';
            document.querySelector('#notifications .notification-count').style.display= 'none';
        }
    })
    
});

// ====================================MESSAGES=================================================

//SEARCHES CHAT
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    // console.log(val);
    message.forEach(chat => {
        let name = chat.querySelectorAll('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1) {
            chat.style.display = 'flex';          
        } else{
            chat.style.display  = 'none';
        }
    });
}



//SEARCH MESSAGE
messageSearch.addEventListener('keyup', searchMessage);


// REMOVE ACTIVE CLASS OF CATEGORY
const removecategory = () => {

    category.forEach(cat => {
        
    cat.classList.remove('active');
});

}


//PRIMARY GENERAL REQUEST HIGHLIGHT
category.forEach(cat => {
    cat.addEventListener('click', () => {
        removecategory();
        cat.classList.add('active');
    })    
});



//HIGHLIGHT MESSAGE CARD
messagesNotifications.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotifications.querySelector('.notification-count').style.display= 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
        changeActiveItem();
        home.classList.add('active');

    }, 2000);
    
})

//========================================================= THEME CUSTOMIZATION======================================================================

// OPENS MODAL
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}


// CLOSES MODAL
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';  
        changeActiveItem();
        home.classList.add('active');


    }
   
}


// CLOSE MODAL
themeModal.addEventListener('click', closeThemeModal);


// OPEN MODAL
theme.addEventListener('click', openThemeModal);

// FONTS SIZE

// REMOVE ACTIVE 
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');        
    });
}



fontSizes.forEach(size => {

    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');

        if (size.classList.contains('font-size-1')) {
            fontSize = '10px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '5.4rem');
            document.querySelector('.left').style.setProperty('height', '100vh')
        }else if (size.classList.contains('font-size-2')) {
            fontSize = '13px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '-7rem');
            document.querySelector('.left').style.setProperty('height', '100vh')
        } else if (size.classList.contains('font-size-3')) {
            fontSize = '16px';
            root.style.setProperty('--sticky-top-left', '-2rem');
            root.style.setProperty('--sticky-top-right', '-17rem');
            document.querySelector('.left').style.setProperty('height', '100vh')
            
        }else if (size.classList.contains('font-size-4')) {
            fontSize = '19px';
            root.style.setProperty('--sticky-top-left', '-5rem');
            root.style.setProperty('--sticky-top-right', '-25rem');
            document.querySelector('.left').style.setProperty('height', '82vh')
            
        }else if (size.classList.contains('font-size-5')) {
            fontSize = '22px';
            root.style.setProperty('--sticky-top-left', '-12rem');
            root.style.setProperty('--sticky-top-right', '-35rem');
            document.querySelector('.left').style.setProperty('height', '82vh')
        }


        // CHANGING MAIN HTML FONT SIZE
        document.querySelector('html').style.fontSize = fontSize;
    
    })

  });

// REMOVE ACTIVE CLASS FROM COLOR
const removeColorActive = () =>{
    colorPalette.forEach(color => {
                
        color.classList.remove('active');
    });
}
    



//   CHANGE PRIMARY COLOR

colorPalette.forEach(color => {
    color.addEventListener('click', () =>{
        removeColorActive();

    if (color.classList.contains('color-1')) {
        primaryHue = '252';
    }    else if (color.classList.contains('color-2')) {
        primaryHue = '52';
    }    else if (color.classList.contains('color-3')) {
        primaryHue = '352';
    }    else if (color.classList.contains('color-4')) {
        primaryHue = '152';
    }    else if (color.classList.contains('color-5')) {
        primaryHue = '202';
    }
    color.classList.add('active');
    root.style.setProperty('--color-primary-hue',primaryHue);
})

});

// VALUES OF BACKGROUND

let colorDarkLightness;
let colorLightLightness;
let colorWhiteLightness;


// CHANGE BACKGROUND

const changeBG = () => {
    root.style.setProperty('--color-dark-lightness',colorDarkLightness);
    root.style.setProperty('--color-light-lightness',colorLightLightness);
    root.style.setProperty('--color-white-lightness',colorWhiteLightness);
}


bg1.addEventListener('click', () => {
    colorDarkLightness = '17%';
    colorWhiteLightness = '100%';
    colorLightLightness = '95%';

    // ADD ACTIVE CLASS
    bg1.classList.add('active');
    
    // REMOVE ACTIVE CLASS
    bg2.classList.remove('active');
    bg3.classList.remove('active');
    
    changeBG();
    // window.location.reload();

})

bg2.addEventListener('click', () => {
    colorDarkLightness = '95%';
    colorWhiteLightness = '20%';
    colorLightLightness = '15%';

    // ADD ACTIVE CLASS
    bg2.classList.add('active');
    
    // REMOVE ACTIVE CLASS
    bg1.classList.remove('active');
    bg3.classList.remove('active');
    
    changeBG();

})

bg3.addEventListener('click', () => {
    colorDarkLightness = '95%';
    colorWhiteLightness = '10%';
    colorLightLightness = '0%';

    // ADD ACTIVE CLASS
    bg3.classList.add('active');
    
    // REMOVE ACTIVE CLASS
    bg1.classList.remove('active');
    bg2.classList.remove('active');
    
    changeBG();

})
