var lastTab = "";

window.addEventListener('DOMContentLoaded', (event) => {
    if (localStorage.length < 1) {
        setHome();
    } else {
        switch(localStorage.getItem('Last Tab')) {
            case "Home":
                setHome();
                break;
            case "Get Basic Profile":
                setBasicProfile();
                break;
            case "Get Top 3 Liked Posts":
                setLikedPosts();
                break;
            case "Get Last 3 Posts":
                setLastPosts();
                break;
            case "Contact":
                setContact();
                break;
        }
    }
});

const setActive = elem => {
    setLocalTab(elem);

    const list = document.getElementsByClassName('list')[0].getElementsByTagName('li');

    for (let i = 0; i < list.length; i++) {
        if (list[i] == elem) {
            elem.setAttribute('class', 'active');
            elem.style = "color: pink;";
        } else if (list[i].getAttribute('class') != 'trademark') {
            list[i].setAttribute('class', 'nonactive');
            list[i].style = "color: white;"
        }
    }
}

function setHome() {
    document.getElementsByTagName('main')[0].innerHTML = $('main').load('home.html');

    onReload(0);
}

function setBasicProfile() {
    document.getElementsByTagName('main')[0].innerHTML = $('main').load('basicProfile.html');

    onReload(1);
}

function setLikedPosts() {
    document.getElementsByTagName('main')[0].innerHTML = $('main').load('likedPosts.html');
    
    onReload(2);
}

function setLastPosts() {
    document.getElementsByTagName('main')[0].innerHTML = $('main').load('lastPosts.html');

    onReload(3);
}

function setContact() {
    document.getElementsByTagName('main')[0].innerHTML = $('main').load('contact.html');

    onReload(4);
}

function onReload(tab) {
    const list = document.getElementsByClassName('list')[0].getElementsByTagName('li');
    
    for (let i = 0; i < list.length; i++) {
        if (list[i].getAttribute('class') != "trademark" && list[i].getAttribute('class') != "active") {
            list[i].setAttribute('class', 'nonactive');
        }
    }

    list[tab].setAttribute('class', 'active');
    list[tab].style = "color: pink;";
}

function setLocalTab(tab) {
    window.localStorage.setItem('Last Tab', tab.innerText);
}