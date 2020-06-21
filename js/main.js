// Copyright Nargizyan Hovhannes
// Designer Nargizyan Hovhannes
// Web-Developer Nargizyan Hovhannes

var data = {
    id: ["100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112"],
    id2: ["113", "114", "115", "116", "117", "118", "119", "120", "121", "122", "123", "124", "125"],
    id3: ["126", "127", "128", "129", "130", "131", "132", "133", "134", "135", "136", "137", "138"],
    id4: ["139", "140", "141", "142", "143", "144", "145", "146", "147", "148", "149", "150", "151"],
    title: ["Скриптонит", "104, Скриптонит, Miyagi", "Morgenshtern & Элджей", "Miyagi & Andy Panda", "The Weeknd", "Surf Mesa ft. Emilee", "bbno$ prod. Lentra", "Lil Mosey", "Future ft. Drake", "YNW Melly", "Travis Scott", "Billie Eilish", "Скриптонит"],
    name: ["Москва любит...", "Не жаль", "Cadillac", "Кассандра", "Blinding lights", "Ily", "Sriracha", "Blueberry Faygo", "Life Is Good", "Murder On My Mind", "Highest In The Room", "Everything I wanted", "Положение(Izzamuzzic remix)"],
    songSrc: ["music/2.mp3", "music/7.mp3", "music/3.mp3", "music/4.mp3", "music/5.mp3", "music/6.mp3", "music/8.mp3", "music/10.mp3", "music/9.mp3", "music/12.mp3", "music/11.mp3", "music/1.mp3", "music/13.mp3"],
    posterBack: ["url(img/2.png)", "url(img/7.png)", "url(img/3.png)", "url(img/4.png)", "url(img/5.png)", "url(img/6.png)", "url(img/8.png)", "url(img/10.png)", "url(img/9.png)", "url(img/12.png)", "url(img/11.png)", "url(img/1.png)", "url(img/13.png)"],
    poster: ["img/2.jpg", "img/7.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg", "img/6.jpg", "img/8.jpg", "img/10.jpg", "img/9.jpg", "img/12.jpg", "img/11.jpg", "img/1.jpg", "img/13.jpg"],
};

dispN();

var Artist;
var int;
var musicName;
var song;

song = new Audio();
console.log(song);

window.onload = function () {
    playSong();
};

int = Math.floor(Math.random() * 13);

function playSong() {
    song.src = data.songSrc[int];
    var artist;
    artist = document.getElementById("ArtistName");
    artist.innerHTML = data.title[int];
    var musName;
    musName = document.getElementById("MusicName");
    musName.innerHTML = data.name[int];
    var $Back;
    $Back = document.getElementById("back");
    $Back.style.backgroundImage = data.posterBack[int];
    $Back.style.backgroundSize = "100%, 100%";
    $Back.style.backgroundRepeat = "no-repeat";
    var mini;
    mini = document.getElementById("jpg");
    mini.setAttribute("src", data.poster[int]);
    var mini1;
    mini1 = document.getElementById("img");
    mini1.setAttribute("src", data.poster[int]);
    let play = document.getElementById("play");
    play.setAttribute("class", "fas fa-play");
}

function playOrPauseSong() {
    let play = document.getElementById("play");
    let play1 = document.getElementById("play1");

    if (song.paused) {
        song.play();
        play1.setAttribute("class", "fas fa-pause");
        play.setAttribute("class", "fas fa-pause");
    } else {
        song.pause();
        play1.setAttribute("class", "fas fa-play");
        play.setAttribute("class", "fas fa-play");
    }
}

function playOrPauseSong1() {
    let play1 = document.getElementById("play1");
    let play = document.getElementById("play");

    if (song.paused) {
        song.play();
        play1.setAttribute("class", "fas fa-pause");
        play.setAttribute("class", "fas fa-pause");
    } else {
        song.pause();
        play1.setAttribute("class", "fas fa-play");
        play.setAttribute("class", "fas fa-play");
    }
}

song.addEventListener("timeupdate", function () {
    let range = document.getElementById("range");
    let position = song.currentTime / song.duration;
    range.value = position * 100;

    convertTime(song.currentTime);

    if (song.ended) {
        next();
    }
});

function convertTime(seconds) {
    let currentTime = document.getElementById("currentTime");
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    currentTime.innerHTML = min + ":" + sec;
    totalTime(Math.round(song.duration));
}

function totalTime(seconds) {
    var min = Math.floor(seconds / 60);
    var sec = Math.floor(seconds % 60);
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    currentTime.innerHTML += " / " + min + ":" + sec;
}

function next() {
    int++;
    if (int >= data.songSrc.length) {
        int = 0;
    }
    playSong();
    song.play();

    let play1;
    play1 = document.getElementById("play1");
    play1.setAttribute("class", "fas fa-pause");
    let play;
    play = document.getElementById("play");
    play.setAttribute("class", "fas fa-pause");
    let sirt;
    sirt = document.getElementById("heart");
    sirt.style.color = "#B9B7AF";
}

function prev() {
    int--;
    if (int < 0) {
        int = data.songSrc.length - 1;
    }
    playSong();
    song.play();

    let play1;
    play1 = document.getElementById("play1");
    play1.setAttribute("class", "fas fa-pause");
    let play;
    play = document.getElementById("play");
    play.setAttribute("class", "fas fa-pause");
    let sirt;
    sirt = document.getElementById("heart");
    sirt.style.color = "#B9B7AF";
}

function volUp() {
    if (song.volume > 0.9) {
        song.volume == 1;
    } else {
        song.volume += 0.1;
    }
}

function volDown() {
    if (song.volume < 0.1) {
        song.volume == 0;
    } else {
        song.volume -= 0.1;
    }
}

var HP;
HP = document.getElementById("homePage");

setInterval(function () {
    var randomColor;
    randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

    function getNewColor() {
        var symbols;
        var color;
        var i;
        symbols = "0123456789ABCDEF";
        color = "#";
        i = 0;

        while (i < 6) {
            color = color + symbols[Math.floor(Math.random() * 16)];
            i++;
        }
        HP.style.color = randomColor;
    }

    getNewColor();
}, 500);

function range0() {}

function dispB() {
    var info;
    info = document.getElementById("info");
    info.setAttribute("class", "col-7");
    var footerBtn;
    footerBtn = document.getElementById("footerBtn");
    footerBtn.style.display = "block";
    let miniImg;
    miniImg = document.getElementById("img");
    miniImg.style.display = "none";
}

function dispN() {
    var info;
    info = document.getElementById("info");
    info.setAttribute("class", "col-8");
    var footerBtn;
    footerBtn = document.getElementById("footerBtn");
    footerBtn.style.display = "none";
}

function allTracks() {
    dispB();
    let content;
    content = document.getElementById("back");
    content.innerHTML = '<div class = "container" id = "cont"></div>';
    let Cont;
    Cont = document.getElementById("cont");
    Cont.setAttribute("class", "backOfText");
    for (i = 0; i < data.title.length; i++) {
        let row;
        row = document.createElement("div");
        row.setAttribute("class", "row setMt setOp");
        row.style.marginLeft = "10px";
        row.setAttribute("id", i);
        Cont.appendChild(row);
    }
    for (y = 0; y < data.title.length; y++) {
        let col1;
        col1 = document.createElement("div");
        col1.setAttribute("class", "col-1 my-auto setFont");
        col1.setAttribute("id", data.id[y]);
        let col2;
        col2 = document.createElement("div");
        col2.setAttribute("class", "col-4 my-auto setFont");
        col2.setAttribute("id", data.id2[y]);
        let col3;
        col3 = document.createElement("div");
        col3.setAttribute("class", "col-4 my-auto setFont");
        col3.setAttribute("id", data.id3[y]);
        let Row;
        Row = document.getElementById(y);
        Row.appendChild(col1);
        Row.appendChild(col2);
        let slash;
        slash = document.createElement("p");
        slash.innerHTML = " - ";
        slash.setAttribute("class", "my-auto setFont");
        Row.appendChild(slash);
        Row.appendChild(col3);
        let t11;
        t11 = document.getElementById(data.id[y]);
        t11.innerHTML = y + 1 + ". ";
        let t22;
        t22 = document.getElementById(data.id2[y]);
        t22.innerHTML = data.title[y];
        let t33;
        t33 = document.getElementById(data.id3[y]);
        t33.innerHTML = data.name[y];
    }
    var $Back;
    $Back = document.getElementById("back");
    $Back.style.backgroundImage = data.posterBack[int];
    $Back.style.backgroundSize = "100%, 100%";
    $Back.style.backgroundRepeat = "no-repeat";
}

function toHome() {
    dispN();
    let $back;
    $back = document.getElementById("back");
    $back.innerHTML =
        '<div class="col music-img"><div class="container-fluid h-100"><div class="row justify-content-center text-center" style="max-width: 1000px;"><div class="col-5 playerCard"><img id="jpg" style="margin-top: 1rem; width: 200px; margin-left: auto; margin-right: auto; border-radius: 3px;" /><br /><p id="time" style="margin-top: 10px;"><span id="currentTime"></span><span id="totTime"></span></p><input type="range" class="level" id="range" value="0" min="0" style="width: 100%;" /><div class="buttons" style="text-align: center;"><i class="fas fa-backward" id="pre" style="font-size: 35px;" onclick="prev()"></i><i class="fas fa-play" id="play" style="font-size: 35px; margin-left: 35px;" onclick="playOrPauseSong()"></i><i class="fas fa-forward" id="skip" style="font-size: 35px; margin-left: 35px;" onclick="next()"></i></div></div></div></div></div>';
    $back.style.backgroundImage = data.posterBack[int];
    var _mini;
    _mini = document.getElementById("jpg");
    _mini.setAttribute("src", data.poster[int]);

    if (song.paused) {
        play.setAttribute("class", "fas fa-play");
    } else {
        play.setAttribute("class", "fas fa-pause");
    }
}

function topOfWeek() {
    dispB();
    let content;
    content = document.getElementById("back");
    content.innerHTML = '<div class = "container" id = "cont"></div>';
    let Cont;
    Cont = document.getElementById("cont");
    Cont.setAttribute("class", "backOfText");
    let header;
    header = document.createElement("h2");
    header.innerHTML = "Top 10 of the week";
    header.style.marginLeft = "25px";
    Cont.appendChild(header);
    for (i = 0; i < 10; i++) {
        let row;
        row = document.createElement("div");
        row.setAttribute("class", "row setMt setOp");
        row.style.marginLeft = "10px";
        row.setAttribute("id", i);
        Cont.appendChild(row);
    }
    for (y = 0; y < 10; y++) {
        let col1;
        col1 = document.createElement("div");
        col1.setAttribute("class", "col-auto my-auto setFont");
        col1.setAttribute("id", data.id[y]);
        let col2;
        col2 = document.createElement("div");
        col2.setAttribute("class", "col-auto my-auto setFont");
        col2.setAttribute("id", data.id2[y]);
        let col3;
        col3 = document.createElement("div");
        col3.setAttribute("class", "col-auto my-auto setFont");
        col3.setAttribute("id", data.id3[y]);
        let Row;
        Row = document.getElementById(y);
        Row.appendChild(col1);
        Row.appendChild(col2);
        let slash;
        slash = document.createElement("p");
        slash.innerHTML = " - ";
        slash.setAttribute("class", "my-auto setFont");
        Row.appendChild(slash);
        Row.appendChild(col3);
        let t11;
        t11 = document.getElementById(data.id[y]);
        t11.innerHTML = y + 1 + ". ";
        let t22;
        t22 = document.getElementById(data.id2[y]);
        t22.innerHTML = data.title[y];
        let t33;
        t33 = document.getElementById(data.id3[y]);
        t33.innerHTML = data.name[y];
    }
    var $Back;
    $Back = document.getElementById("back");
    $Back.style.backgroundImage = data.posterBack[int];
    $Back.style.backgroundSize = "100%, 10%";
    $Back.style.backgroundRepeat = "no-repeat";
}

function releases() {
    dispB();
    let content;
    content = document.getElementById("back");
    content.innerHTML = '<div class = "container" id = "cont"></div>';
    let Cont;
    Cont = document.getElementById("cont");
    Cont.setAttribute("class", "backOfText1");
    let header;
    header = document.createElement("h2");
    header.style.marginLeft = "25px";
    header.style.marginTop = "50px";
    header.innerHTML = 'We dont have new releases <br><br> <span id="smile">😥😥</span>';
    Cont.appendChild(header);
}

function settings() {
    dispB();
    let content;
    content = document.getElementById("back");
    content.innerHTML = '<div class = "container" id = "cont"></div>';
}

function aler() {
    alert("It's not working");
}

function check() {
    let _1st = "1st";
    let _2nd = "2nd";
    let _3rd = "3rd";
    let _4th = "4th";
    let _5th = "5th";
    let _6th = "6th";
    let _7th = "7th";
    let _8th = "8th";
    let _9th = "9th";
    let _10th = "10th";
    let _11th = "11th";
    let _12th = "12th";
    let _13th = "13th";
    if (int == 0) {
        if (localStorage.getItem(_1st) == " Скриптонит - Москва любит ... ") {
            if (localStorage.getItem(_1st) == " Скриптонит - Москва любит ... " && int == 0) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_2nd) == " Скриптонит - Москва любит ... ") {
            if (localStorage.getItem(_2nd) == " Скриптонит - Москва любит ... " && int == 0) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_2nd) == " Скриптонит - Москва любит ... ") {
            if (localStorage.getItem(_2nd) == " Скриптонит - Москва любит ... " && int == 0) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_3rd) == " Скриптонит - Москва любит ... ") {
            if (localStorage.getItem(_3rd) == " Скриптонит - Москва любит ... " && int == 0) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_4th) == " Скриптонит - Москва любит ... ") {
            if (localStorage.getItem(_4th) == " Скриптонит - Москва любит ... " && int == 0) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_5th) == " Скриптонит - Москва любит ... ") {
            if (localStorage.getItem(_5th) == " Скриптонит - Москва любит ... " && int == 0) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_6th) == " Скриптонит - Москва любит ... ") {
            if (localStorage.getItem(_6th) == " Скриптонит - Москва любит ... " && int == 0) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_7th) == " Скриптонит - Москва любит ... ") {
            if (localStorage.getItem(_7th) == " Скриптонит - Москва любит ... " && int == 0) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_8th) == " Скриптонит - Москва любит ... ") {
            if (localStorage.getItem(_8th) == " Скриптонит - Москва любит ... " && int == 0) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_9th) == " Скриптонит - Москва любит ... ") {
            if (localStorage.getItem(_9th) == " Скриптонит - Москва любит ... " && int == 0) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_10th) == " Скриптонит - Москва любит ... ") {
            if (localStorage.getItem(_10th) == " Скриптонит - Москва любит ... " && int == 0) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_11th) == " Скриптонит - Москва любит ... ") {
            if (localStorage.getItem(_11th) == " Скриптонит - Москва любит ... " && int == 0) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_12th) == " Скриптонит - Москва любит ... ") {
            if (localStorage.getItem(_12th) == " Скриптонит - Москва любит ... " && int == 0) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_13th) == " Скриптонит - Москва любит ... ") {
            if (localStorage.getItem(_13th) == " Скриптонит - Москва любит ... " && int == 0) {
                poxelGuyn();
            } else {
            }
        } else {
        }
    } else if (int == 1) {
        if (localStorage.getItem(_1st) == " 104, Скриптонит, Miyagi - Не жаль ") {
            if (localStorage.getItem(_1st) == " 104, Скриптонит, Miyagi - Не жаль " && int == 1) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_2nd) == " 104, Скриптонит, Miyagi - Не жаль ") {
            if (localStorage.getItem(_2nd) == " 104, Скриптонит, Miyagi - Не жаль " && int == 1) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_2nd) == " 104, Скриптонит, Miyagi - Не жаль ") {
            if (localStorage.getItem(_2nd) == " 104, Скриптонит, Miyagi - Не жаль " && int == 1) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_3rd) == " 104, Скриптонит, Miyagi - Не жаль ") {
            if (localStorage.getItem(_3rd) == " 104, Скриптонит, Miyagi - Не жаль " && int == 1) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_4th) == " 104, Скриптонит, Miyagi - Не жаль ") {
            if (localStorage.getItem(_4th) == " 104, Скриптонит, Miyagi - Не жаль " && int == 1) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_5th) == " 104, Скриптонит, Miyagi - Не жаль ") {
            if (localStorage.getItem(_5th) == " 104, Скриптонит, Miyagi - Не жаль " && int == 1) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_6th) == " 104, Скриптонит, Miyagi - Не жаль ") {
            if (localStorage.getItem(_6th) == " 104, Скриптонит, Miyagi - Не жаль " && int == 1) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_7th) == " 104, Скриптонит, Miyagi - Не жаль ") {
            if (localStorage.getItem(_7th) == " 104, Скриптонит, Miyagi - Не жаль " && int == 1) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_8th) == " 104, Скриптонит, Miyagi - Не жаль ") {
            if (localStorage.getItem(_8th) == " 104, Скриптонит, Miyagi - Не жаль " && int == 1) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_9th) == " 104, Скриптонит, Miyagi - Не жаль ") {
            if (localStorage.getItem(_9th) == " 104, Скриптонит, Miyagi - Не жаль " && int == 1) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_10th) == " 104, Скриптонит, Miyagi - Не жаль ") {
            if (localStorage.getItem(_10th) == " 104, Скриптонит, Miyagi - Не жаль " && int == 1) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_11th) == " 104, Скриптонит, Miyagi - Не жаль ") {
            if (localStorage.getItem(_11th) == " 104, Скриптонит, Miyagi - Не жаль " && int == 1) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_12th) == " 104, Скриптонит, Miyagi - Не жаль ") {
            if (localStorage.getItem(_12th) == " 104, Скриптонит, Miyagi - Не жаль " && int == 1) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_13th) == " 104, Скриптонит, Miyagi - Не жаль ") {
            if (localStorage.getItem(_13th) == " 104, Скриптонит, Miyagi - Не жаль " && int == 1) {
                poxelGuyn();
            } else {
            }
        } else {
        }
    } else if (int == 2) {
        if (localStorage.getItem(_1st) == " Morgenshtern & Элджей - Cadillac ") {
            if (localStorage.getItem(_1st) == " Morgenshtern & Элджей - Cadillac " && int == 2) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_2nd) == " Morgenshtern & Элджей - Cadillac ") {
            if (localStorage.getItem(_2nd) == " Morgenshtern & Элджей - Cadillac " && int == 2) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_2nd) == " Morgenshtern & Элджей - Cadillac ") {
            if (localStorage.getItem(_2nd) == " Morgenshtern & Элджей - Cadillac " && int == 2) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_3rd) == " Morgenshtern & Элджей - Cadillac ") {
            if (localStorage.getItem(_3rd) == " Morgenshtern & Элджей - Cadillac " && int == 2) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_4th) == " Morgenshtern & Элджей - Cadillac ") {
            if (localStorage.getItem(_4th) == " Morgenshtern & Элджей - Cadillac " && int == 2) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_5th) == " Morgenshtern & Элджей - Cadillac ") {
            if (localStorage.getItem(_5th) == " Morgenshtern & Элджей - Cadillac " && int == 2) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_6th) == " Morgenshtern & Элджей - Cadillac ") {
            if (localStorage.getItem(_6th) == " Morgenshtern & Элджей - Cadillac " && int == 2) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_7th) == " Morgenshtern & Элджей - Cadillac ") {
            if (localStorage.getItem(_7th) == " Morgenshtern & Элджей - Cadillac " && int == 2) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_8th) == " Morgenshtern & Элджей - Cadillac ") {
            if (localStorage.getItem(_8th) == " Morgenshtern & Элджей - Cadillac " && int == 2) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_9th) == " Morgenshtern & Элджей - Cadillac ") {
            if (localStorage.getItem(_9th) == " Morgenshtern & Элджей - Cadillac " && int == 2) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_10th) == " Morgenshtern & Элджей - Cadillac ") {
            if (localStorage.getItem(_10th) == " Morgenshtern & Элджей - Cadillac " && int == 2) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_11th) == " Morgenshtern & Элджей - Cadillac ") {
            if (localStorage.getItem(_11th) == " Morgenshtern & Элджей - Cadillac " && int == 2) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_12th) == " Morgenshtern & Элджей - Cadillac ") {
            if (localStorage.getItem(_12th) == " Morgenshtern & Элджей - Cadillac " && int == 2) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_13th) == " Morgenshtern & Элджей - Cadillac ") {
            if (localStorage.getItem(_13th) == " Morgenshtern & Элджей - Cadillac " && int == 2) {
                poxelGuyn();
            } else {
            }
        } else {
        }
    } else if (int == 3) {
        if (localStorage.getItem(_1st) == " Miyagi & Andy Panda - Кассандра ") {
            if (localStorage.getItem(_1st) == " Miyagi & Andy Panda - Кассандра " && int == 3) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_2nd) == " Miyagi & Andy Panda - Кассандра ") {
            if (localStorage.getItem(_2nd) == " Miyagi & Andy Panda - Кассандра " && int == 3) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_2nd) == " Miyagi & Andy Panda - Кассандра ") {
            if (localStorage.getItem(_2nd) == " Miyagi & Andy Panda - Кассандра " && int == 3) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_3rd) == " Miyagi & Andy Panda - Кассандра ") {
            if (localStorage.getItem(_3rd) == " Miyagi & Andy Panda - Кассандра " && int == 3) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_4th) == " Miyagi & Andy Panda - Кассандра ") {
            if (localStorage.getItem(_4th) == " Miyagi & Andy Panda - Кассандра " && int == 3) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_5th) == " Miyagi & Andy Panda - Кассандра ") {
            if (localStorage.getItem(_5th) == " Miyagi & Andy Panda - Кассандра " && int == 3) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_6th) == " Miyagi & Andy Panda - Кассандра ") {
            if (localStorage.getItem(_6th) == " Miyagi & Andy Panda - Кассандра " && int == 3) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_7th) == " Miyagi & Andy Panda - Кассандра ") {
            if (localStorage.getItem(_7th) == " Miyagi & Andy Panda - Кассандра " && int == 3) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_8th) == " Miyagi & Andy Panda - Кассандра ") {
            if (localStorage.getItem(_8th) == " Miyagi & Andy Panda - Кассандра " && int == 3) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_9th) == " Miyagi & Andy Panda - Кассандра ") {
            if (localStorage.getItem(_9th) == " Miyagi & Andy Panda - Кассандра " && int == 3) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_10th) == " Miyagi & Andy Panda - Кассандра ") {
            if (localStorage.getItem(_10th) == " Miyagi & Andy Panda - Кассандра " && int == 3) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_11th) == " Miyagi & Andy Panda - Кассандра ") {
            if (localStorage.getItem(_11th) == " Miyagi & Andy Panda - Кассандра " && int == 3) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_12th) == " Miyagi & Andy Panda - Кассандра ") {
            if (localStorage.getItem(_12th) == " Miyagi & Andy Panda - Кассандра " && int == 3) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_13th) == " Miyagi & Andy Panda - Кассандра ") {
            if (localStorage.getItem(_13th) == " Miyagi & Andy Panda - Кассандра " && int == 3) {
                poxelGuyn();
            } else {
            }
        } else {
        }
    } else if (int == 4) {
        if (localStorage.getItem(_1st) == " The Weeknd - Blinding lights ") {
            if (localStorage.getItem(_1st) == " The Weeknd - Blinding lights " && int == 4) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_2nd) == " The Weeknd - Blinding lights ") {
            if (localStorage.getItem(_2nd) == " The Weeknd - Blinding lights " && int == 4) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_2nd) == " The Weeknd - Blinding lights ") {
            if (localStorage.getItem(_2nd) == " The Weeknd - Blinding lights " && int == 4) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_3rd) == " The Weeknd - Blinding lights ") {
            if (localStorage.getItem(_3rd) == " The Weeknd - Blinding lights " && int == 4) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_4th) == " The Weeknd - Blinding lights ") {
            if (localStorage.getItem(_4th) == " The Weeknd - Blinding lights " && int == 4) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_5th) == " The Weeknd - Blinding lights ") {
            if (localStorage.getItem(_5th) == " The Weeknd - Blinding lights " && int == 4) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_6th) == " The Weeknd - Blinding lights ") {
            if (localStorage.getItem(_6th) == " The Weeknd - Blinding lights " && int == 4) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_7th) == " The Weeknd - Blinding lights ") {
            if (localStorage.getItem(_7th) == " The Weeknd - Blinding lights " && int == 4) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_8th) == " The Weeknd - Blinding lights ") {
            if (localStorage.getItem(_8th) == " The Weeknd - Blinding lights " && int == 4) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_9th) == " The Weeknd - Blinding lights ") {
            if (localStorage.getItem(_9th) == " The Weeknd - Blinding lights " && int == 4) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_10th) == " The Weeknd - Blinding lights ") {
            if (localStorage.getItem(_10th) == " The Weeknd - Blinding lights " && int == 4) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_11th) == " The Weeknd - Blinding lights ") {
            if (localStorage.getItem(_11th) == " The Weeknd - Blinding lights " && int == 4) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_12th) == " The Weeknd - Blinding lights ") {
            if (localStorage.getItem(_12th) == " The Weeknd - Blinding lights " && int == 4) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_13th) == " The Weeknd - Blinding lights ") {
            if (localStorage.getItem(_13th) == " The Weeknd - Blinding lights " && int == 4) {
                poxelGuyn();
            } else {
            }
        } else {
        }
    } else if (int == 5) {
        if (localStorage.getItem(_1st) == " Surf Mesa ft. Emilee - Ily ") {
            if (localStorage.getItem(_1st) == " Surf Mesa ft. Emilee - Ily " && int == 5) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_2nd) == " Surf Mesa ft. Emilee - Ily ") {
            if (localStorage.getItem(_2nd) == " Surf Mesa ft. Emilee - Ily " && int == 5) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_2nd) == " Surf Mesa ft. Emilee - Ily ") {
            if (localStorage.getItem(_2nd) == " Surf Mesa ft. Emilee - Ily " && int == 5) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_3rd) == " Surf Mesa ft. Emilee - Ily ") {
            if (localStorage.getItem(_3rd) == " Surf Mesa ft. Emilee - Ily " && int == 5) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_4th) == " Surf Mesa ft. Emilee - Ily ") {
            if (localStorage.getItem(_4th) == " Surf Mesa ft. Emilee - Ily " && int == 5) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_5th) == " Surf Mesa ft. Emilee - Ily ") {
            if (localStorage.getItem(_5th) == " Surf Mesa ft. Emilee - Ily " && int == 5) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_6th) == " Surf Mesa ft. Emilee - Ily ") {
            if (localStorage.getItem(_6th) == " Surf Mesa ft. Emilee - Ily " && int == 5) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_7th) == " Surf Mesa ft. Emilee - Ily ") {
            if (localStorage.getItem(_7th) == " Surf Mesa ft. Emilee - Ily " && int == 5) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_8th) == " Surf Mesa ft. Emilee - Ily ") {
            if (localStorage.getItem(_8th) == " Surf Mesa ft. Emilee - Ily " && int == 5) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_9th) == " Surf Mesa ft. Emilee - Ily ") {
            if (localStorage.getItem(_9th) == " Surf Mesa ft. Emilee - Ily " && int == 5) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_10th) == " Surf Mesa ft. Emilee - Ily ") {
            if (localStorage.getItem(_10th) == " Surf Mesa ft. Emilee - Ily " && int == 5) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_11th) == " Surf Mesa ft. Emilee - Ily ") {
            if (localStorage.getItem(_11th) == " Surf Mesa ft. Emilee - Ily " && int == 5) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_12th) == " Surf Mesa ft. Emilee - Ily ") {
            if (localStorage.getItem(_12th) == " Surf Mesa ft. Emilee - Ily " && int == 5) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_13th) == " Surf Mesa ft. Emilee - Ily ") {
            if (localStorage.getItem(_13th) == " Surf Mesa ft. Emilee - Ily " && int == 5) {
                poxelGuyn();
            } else {
            }
        } else {
        }
    } else if (int == 6) {
        if (localStorage.getItem(_1st) == " bbno$ prod. Lentra - Sriracha ") {
            if (localStorage.getItem(_1st) == " bbno$ prod. Lentra - Sriracha " && int == 6) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_2nd) == " bbno$ prod. Lentra - Sriracha ") {
            if (localStorage.getItem(_2nd) == " bbno$ prod. Lentra - Sriracha " && int == 6) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_2nd) == " bbno$ prod. Lentra - Sriracha ") {
            if (localStorage.getItem(_2nd) == " bbno$ prod. Lentra - Sriracha " && int == 6) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_3rd) == " bbno$ prod. Lentra - Sriracha ") {
            if (localStorage.getItem(_3rd) == " bbno$ prod. Lentra - Sriracha " && int == 6) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_4th) == " bbno$ prod. Lentra - Sriracha ") {
            if (localStorage.getItem(_4th) == " bbno$ prod. Lentra - Sriracha " && int == 6) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_5th) == " bbno$ prod. Lentra - Sriracha ") {
            if (localStorage.getItem(_5th) == " bbno$ prod. Lentra - Sriracha " && int == 6) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_6th) == " bbno$ prod. Lentra - Sriracha ") {
            if (localStorage.getItem(_6th) == " bbno$ prod. Lentra - Sriracha " && int == 6) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_7th) == " bbno$ prod. Lentra - Sriracha ") {
            if (localStorage.getItem(_7th) == " bbno$ prod. Lentra - Sriracha " && int == 6) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_8th) == " bbno$ prod. Lentra - Sriracha ") {
            if (localStorage.getItem(_8th) == " bbno$ prod. Lentra - Sriracha " && int == 6) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_9th) == " bbno$ prod. Lentra - Sriracha ") {
            if (localStorage.getItem(_9th) == " bbno$ prod. Lentra - Sriracha " && int == 6) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_10th) == " bbno$ prod. Lentra - Sriracha ") {
            if (localStorage.getItem(_10th) == " bbno$ prod. Lentra - Sriracha " && int == 6) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_11th) == " bbno$ prod. Lentra - Sriracha ") {
            if (localStorage.getItem(_11th) == " bbno$ prod. Lentra - Sriracha " && int == 6) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_12th) == " bbno$ prod. Lentra - Sriracha ") {
            if (localStorage.getItem(_12th) == " bbno$ prod. Lentra - Sriracha " && int == 6) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_13th) == " bbno$ prod. Lentra - Sriracha ") {
            if (localStorage.getItem(_13th) == " bbno$ prod. Lentra - Sriracha " && int == 6) {
                poxelGuyn();
            } else {
            }
        } else {
        }
    } else if (int == 7) {
        if (localStorage.getItem(_1st) == " Lil Mosey - Blueberry Faygo ") {
            if (localStorage.getItem(_1st) == " Lil Mosey - Blueberry Faygo " && int == 7) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_2nd) == " Lil Mosey - Blueberry Faygo ") {
            if (localStorage.getItem(_2nd) == " Lil Mosey - Blueberry Faygo " && int == 7) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_2nd) == " Lil Mosey - Blueberry Faygo ") {
            if (localStorage.getItem(_2nd) == " Lil Mosey - Blueberry Faygo " && int == 7) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_3rd) == " Lil Mosey - Blueberry Faygo ") {
            if (localStorage.getItem(_3rd) == " Lil Mosey - Blueberry Faygo " && int == 7) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_4th) == " Lil Mosey - Blueberry Faygo ") {
            if (localStorage.getItem(_4th) == " Lil Mosey - Blueberry Faygo " && int == 7) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_5th) == " Lil Mosey - Blueberry Faygo ") {
            if (localStorage.getItem(_5th) == " Lil Mosey - Blueberry Faygo " && int == 7) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_6th) == " Lil Mosey - Blueberry Faygo ") {
            if (localStorage.getItem(_6th) == " Lil Mosey - Blueberry Faygo " && int == 7) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_7th) == " Lil Mosey - Blueberry Faygo ") {
            if (localStorage.getItem(_7th) == " Lil Mosey - Blueberry Faygo " && int == 7) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_8th) == " Lil Mosey - Blueberry Faygo ") {
            if (localStorage.getItem(_8th) == " Lil Mosey - Blueberry Faygo " && int == 7) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_9th) == " Lil Mosey - Blueberry Faygo ") {
            if (localStorage.getItem(_9th) == " Lil Mosey - Blueberry Faygo " && int == 7) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_10th) == " Lil Mosey - Blueberry Faygo ") {
            if (localStorage.getItem(_10th) == " Lil Mosey - Blueberry Faygo " && int == 7) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_11th) == " Lil Mosey - Blueberry Faygo ") {
            if (localStorage.getItem(_11th) == " Lil Mosey - Blueberry Faygo " && int == 7) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_12th) == " Lil Mosey - Blueberry Faygo ") {
            if (localStorage.getItem(_12th) == " Lil Mosey - Blueberry Faygo " && int == 7) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_13th) == " Lil Mosey - Blueberry Faygo ") {
            if (localStorage.getItem(_13th) == " Lil Mosey - Blueberry Faygo " && int == 7) {
                poxelGuyn();
            } else {
            }
        } else {
        }
    } else if (int == 8) {
        if (localStorage.getItem(_1st) == " Future ft. Drake - Life Is Good ") {
            if (localStorage.getItem(_1st) == " Future ft. Drake - Life Is Good " && int == 8) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_2nd) == " Future ft. Drake - Life Is Good ") {
            if (localStorage.getItem(_2nd) == " Future ft. Drake - Life Is Good " && int == 8) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_2nd) == " Future ft. Drake - Life Is Good ") {
            if (localStorage.getItem(_2nd) == " Future ft. Drake - Life Is Good " && int == 8) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_3rd) == " Future ft. Drake - Life Is Good ") {
            if (localStorage.getItem(_3rd) == " Future ft. Drake - Life Is Good " && int == 8) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_4th) == " Future ft. Drake - Life Is Good ") {
            if (localStorage.getItem(_4th) == " Future ft. Drake - Life Is Good " && int == 8) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_5th) == " Future ft. Drake - Life Is Good ") {
            if (localStorage.getItem(_5th) == " Future ft. Drake - Life Is Good " && int == 8) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_6th) == " Future ft. Drake - Life Is Good ") {
            if (localStorage.getItem(_6th) == " Future ft. Drake - Life Is Good " && int == 8) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_7th) == " Future ft. Drake - Life Is Good ") {
            if (localStorage.getItem(_7th) == " Future ft. Drake - Life Is Good " && int == 8) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_8th) == " Future ft. Drake - Life Is Good ") {
            if (localStorage.getItem(_8th) == " Future ft. Drake - Life Is Good " && int == 8) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_9th) == " Future ft. Drake - Life Is Good ") {
            if (localStorage.getItem(_9th) == " Future ft. Drake - Life Is Good " && int == 8) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_10th) == " Future ft. Drake - Life Is Good ") {
            if (localStorage.getItem(_10th) == " Future ft. Drake - Life Is Good " && int == 8) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_11th) == " Future ft. Drake - Life Is Good ") {
            if (localStorage.getItem(_11th) == " Future ft. Drake - Life Is Good " && int == 8) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_12th) == " Future ft. Drake - Life Is Good ") {
            if (localStorage.getItem(_12th) == " Future ft. Drake - Life Is Good " && int == 8) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_13th) == " Future ft. Drake - Life Is Good ") {
            if (localStorage.getItem(_13th) == " Future ft. Drake - Life Is Good " && int == 8) {
                poxelGuyn();
            } else {
            }
        } else {
        }
    } else if (int == 9) {
        if (localStorage.getItem(_1st) == " YNW Melly - Murder On My Mind ") {
            if (localStorage.getItem(_1st) == " YNW Melly - Murder On My Mind " && int == 9) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_2nd) == " YNW Melly - Murder On My Mind ") {
            if (localStorage.getItem(_2nd) == " YNW Melly - Murder On My Mind " && int == 9) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_2nd) == " YNW Melly - Murder On My Mind ") {
            if (localStorage.getItem(_2nd) == " YNW Melly - Murder On My Mind " && int == 9) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_3rd) == " YNW Melly - Murder On My Mind ") {
            if (localStorage.getItem(_3rd) == " YNW Melly - Murder On My Mind " && int == 9) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_4th) == " YNW Melly - Murder On My Mind ") {
            if (localStorage.getItem(_4th) == " YNW Melly - Murder On My Mind " && int == 9) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_5th) == " YNW Melly - Murder On My Mind ") {
            if (localStorage.getItem(_5th) == " YNW Melly - Murder On My Mind " && int == 9) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_6th) == " YNW Melly - Murder On My Mind ") {
            if (localStorage.getItem(_6th) == " YNW Melly - Murder On My Mind " && int == 9) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_7th) == " YNW Melly - Murder On My Mind ") {
            if (localStorage.getItem(_7th) == " YNW Melly - Murder On My Mind " && int == 9) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_8th) == " YNW Melly - Murder On My Mind ") {
            if (localStorage.getItem(_8th) == " YNW Melly - Murder On My Mind " && int == 9) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_9th) == " YNW Melly - Murder On My Mind ") {
            if (localStorage.getItem(_9th) == " YNW Melly - Murder On My Mind " && int == 9) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_10th) == " YNW Melly - Murder On My Mind ") {
            if (localStorage.getItem(_10th) == " YNW Melly - Murder On My Mind " && int == 9) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_11th) == " YNW Melly - Murder On My Mind ") {
            if (localStorage.getItem(_11th) == " YNW Melly - Murder On My Mind " && int == 9) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_12th) == " YNW Melly - Murder On My Mind ") {
            if (localStorage.getItem(_12th) == " YNW Melly - Murder On My Mind " && int == 9) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_13th) == " YNW Melly - Murder On My Mind ") {
            if (localStorage.getItem(_13th) == " YNW Melly - Murder On My Mind " && int == 9) {
                poxelGuyn();
            } else {
            }
        } else {
        }
    } else if (int == 10) {
        if (localStorage.getItem(_1st) == " Travis Scott - Highest In The Room ") {
            if (localStorage.getItem(_1st) == " Travis Scott - Highest In The Room " && int == 10) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_2nd) == " Travis Scott - Highest In The Room ") {
            if (localStorage.getItem(_2nd) == " Travis Scott - Highest In The Room " && int == 10) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_2nd) == " Travis Scott - Highest In The Room ") {
            if (localStorage.getItem(_2nd) == " Travis Scott - Highest In The Room " && int == 10) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_3rd) == " Travis Scott - Highest In The Room ") {
            if (localStorage.getItem(_3rd) == " Travis Scott - Highest In The Room " && int == 10) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_4th) == " Travis Scott - Highest In The Room ") {
            if (localStorage.getItem(_4th) == " Travis Scott - Highest In The Room " && int == 10) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_5th) == " Travis Scott - Highest In The Room ") {
            if (localStorage.getItem(_5th) == " Travis Scott - Highest In The Room " && int == 10) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_6th) == " Travis Scott - Highest In The Room ") {
            if (localStorage.getItem(_6th) == " Travis Scott - Highest In The Room " && int == 10) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_7th) == " Travis Scott - Highest In The Room ") {
            if (localStorage.getItem(_7th) == " Travis Scott - Highest In The Room " && int == 10) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_8th) == " Travis Scott - Highest In The Room ") {
            if (localStorage.getItem(_8th) == " Travis Scott - Highest In The Room " && int == 10) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_9th) == " Travis Scott - Highest In The Room ") {
            if (localStorage.getItem(_9th) == " Travis Scott - Highest In The Room " && int == 10) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_10th) == " Travis Scott - Highest In The Room ") {
            if (localStorage.getItem(_10th) == " Travis Scott - Highest In The Room " && int == 10) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_11th) == " Travis Scott - Highest In The Room ") {
            if (localStorage.getItem(_11th) == " Travis Scott - Highest In The Room " && int == 10) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_12th) == " Travis Scott - Highest In The Room ") {
            if (localStorage.getItem(_12th) == " Travis Scott - Highest In The Room " && int == 10) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_13th) == " Travis Scott - Highest In The Room ") {
            if (localStorage.getItem(_13th) == " Travis Scott - Highest In The Room " && int == 10) {
                poxelGuyn();
            } else {
            }
        } else {
        }
    } else if (int == 11) {
        if (localStorage.getItem(_1st) == " Billie Eilish - Everything I wanted  ") {
            if (localStorage.getItem(_1st) == " Billie Eilish - Everything I wanted  " && int == 11) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_2nd) == " Billie Eilish - Everything I wanted  ") {
            if (localStorage.getItem(_2nd) == " Billie Eilish - Everything I wanted  " && int == 11) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_2nd) == " Billie Eilish - Everything I wanted  ") {
            if (localStorage.getItem(_2nd) == " Billie Eilish - Everything I wanted  " && int == 11) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_3rd) == " Billie Eilish - Everything I wanted  ") {
            if (localStorage.getItem(_3rd) == " Billie Eilish - Everything I wanted  " && int == 11) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_4th) == " Billie Eilish - Everything I wanted  ") {
            if (localStorage.getItem(_4th) == " Billie Eilish - Everything I wanted  " && int == 11) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_5th) == " Billie Eilish - Everything I wanted  ") {
            if (localStorage.getItem(_5th) == " Billie Eilish - Everything I wanted  " && int == 11) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_6th) == " Billie Eilish - Everything I wanted  ") {
            if (localStorage.getItem(_6th) == " Billie Eilish - Everything I wanted  " && int == 11) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_7th) == " Billie Eilish - Everything I wanted  ") {
            if (localStorage.getItem(_7th) == " Billie Eilish - Everything I wanted  " && int == 11) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_8th) == " Billie Eilish - Everything I wanted  ") {
            if (localStorage.getItem(_8th) == " Billie Eilish - Everything I wanted  " && int == 11) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_9th) == " Billie Eilish - Everything I wanted  ") {
            if (localStorage.getItem(_9th) == " Billie Eilish - Everything I wanted  " && int == 11) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_10th) == " Billie Eilish - Everything I wanted  ") {
            if (localStorage.getItem(_10th) == " Billie Eilish - Everything I wanted  " && int == 11) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_11th) == " Billie Eilish - Everything I wanted  ") {
            if (localStorage.getItem(_11th) == " Billie Eilish - Everything I wanted  " && int == 11) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_12th) == " Billie Eilish - Everything I wanted  ") {
            if (localStorage.getItem(_12th) == " Billie Eilish - Everything I wanted  " && int == 11) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_13th) == " Billie Eilish - Everything I wanted  ") {
            if (localStorage.getItem(_13th) == " Billie Eilish - Everything I wanted  " && int == 11) {
                poxelGuyn();
            } else {
            }
        } else {
        }
    } else if (int == 12) {
        if (localStorage.getItem(_1st) == " Billie Eilish - Everything I wanted  ") {
            if (localStorage.getItem(_1st) == " Billie Eilish - Everything I wanted  " && int == 12) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_2nd) == " Скриптонит - Положение(Izzamuzzic remix) ") {
            if (localStorage.getItem(_2nd) == " Скриптонит - Положение(Izzamuzzic remix) " && int == 12) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_2nd) == " Скриптонит - Положение(Izzamuzzic remix) ") {
            if (localStorage.getItem(_2nd) == " Скриптонит - Положение(Izzamuzzic remix) " && int == 12) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_3rd) == " Скриптонит - Положение(Izzamuzzic remix) ") {
            if (localStorage.getItem(_3rd) == " Скриптонит - Положение(Izzamuzzic remix) " && int == 12) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_4th) == " Скриптонит - Положение(Izzamuzzic remix) ") {
            if (localStorage.getItem(_4th) == " Скриптонит - Положение(Izzamuzzic remix) " && int == 12) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_5th) == " Скриптонит - Положение(Izzamuzzic remix) ") {
            if (localStorage.getItem(_5th) == " Скриптонит - Положение(Izzamuzzic remix) " && int == 12) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_6th) == " Скриптонит - Положение(Izzamuzzic remix) ") {
            if (localStorage.getItem(_6th) == " Скриптонит - Положение(Izzamuzzic remix) " && int == 12) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_7th) == " Скриптонит - Положение(Izzamuzzic remix) ") {
            if (localStorage.getItem(_7th) == " Скриптонит - Положение(Izzamuzzic remix) " && int == 12) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_8th) == " Скриптонит - Положение(Izzamuzzic remix) ") {
            if (localStorage.getItem(_8th) == " Скриптонит - Положение(Izzamuzzic remix) " && int == 12) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_9th) == " Скриптонит - Положение(Izzamuzzic remix) ") {
            if (localStorage.getItem(_9th) == " Скриптонит - Положение(Izzamuzzic remix) " && int == 12) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_10th) == " Скриптонит - Положение(Izzamuzzic remix) ") {
            if (localStorage.getItem(_10th) == " Скриптонит - Положение(Izzamuzzic remix) " && int == 12) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_11th) == " Скриптонит - Положение(Izzamuzzic remix) ") {
            if (localStorage.getItem(_11th) == " Скриптонит - Положение(Izzamuzzic remix) " && int == 12) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_12th) == " Скриптонит - Положение(Izzamuzzic remix) ") {
            if (localStorage.getItem(_12th) == " Скриптонит - Положение(Izzamuzzic remix) " && int == 12) {
                poxelGuyn();
            } else {
            }
        } else if (localStorage.getItem(_13th) == " Скриптонит - Положение(Izzamuzzic remix) ") {
            if (localStorage.getItem(_13th) == " Скриптонит - Положение(Izzamuzzic remix) " && int == 12) {
                poxelGuyn();
            } else {
            }
        } else {
        }
    }
}

setInterval(function () {
    check();
}, 100);

function poxelGuyn() {
    let sirt;
    sirt = document.getElementById("heart");
    sirt.style.color = "crimson";
}

function createInfo() {
    let number;
    number = int;
    if (localStorage.getItem("1st") == null) {
        if (number == 0) {
            localStorage.setItem("1st", " Скриптонит - Москва любит ... ");
        } else if (number == 1) {
            localStorage.setItem("1st", " 104, Скриптонит, Miyagi - Не жаль ");
        } else if (number == 2) {
            localStorage.setItem("1st", " Morgenshtern & Элджей - Cadillac ");
        } else if (number == 3) {
            localStorage.setItem("1st", " Miyagi & Andy Panda - Кассандра ");
        } else if (number == 4) {
            localStorage.setItem("1st", " The Weeknd - Blinding lights ");
        } else if (number == 5) {
            localStorage.setItem("1st", " Surf Mesa ft. Emilee - Ily ");
        } else if (number == 6) {
            localStorage.setItem("1st", " bbno$ prod. Lentra - Sriracha ");
        } else if (number == 7) {
            localStorage.setItem("1st", " Lil Mosey - Blueberry Faygo ");
        } else if (number == 8) {
            localStorage.setItem("1st", " Future ft. Drake - Life Is Good ");
        } else if (number == 9) {
            localStorage.setItem("1st", " YNW Melly - Murder On My Mind ");
        } else if (number == 10) {
            localStorage.setItem("1st", " Travis Scott - Highest In The Room ");
        } else if (number == 11) {
            localStorage.setItem("1st", " Billie Eilish - Everything I wanted  ");
        } else if (number == 12) {
            localStorage.setItem("11th", " Скриптонит - Положение(Izzamuzzic remix) ");
        } else {
        }
    } else if (localStorage.getItem("2nd") == null) {
        if (number == 0) {
            localStorage.setItem("2nd", " Скриптонит - Москва любит ... ");
        } else if (number == 1) {
            localStorage.setItem("2nd", " 104, Скриптонит, Miyagi - Не жаль ");
        } else if (number == 2) {
            localStorage.setItem("2nd", " Morgenshtern & Элджей - Cadillac ");
        } else if (number == 3) {
            localStorage.setItem("2nd", " Miyagi & Andy Panda - Кассандра ");
        } else if (number == 4) {
            localStorage.setItem("2nd", " The Weeknd - Blinding lights ");
        } else if (number == 5) {
            localStorage.setItem("2nd", " Surf Mesa ft. Emilee - Ily ");
        } else if (number == 6) {
            localStorage.setItem("2nd", " bbno$ prod. Lentra - Sriracha ");
        } else if (number == 7) {
            localStorage.setItem("2nd", " Lil Mosey - Blueberry Faygo ");
        } else if (number == 8) {
            localStorage.setItem("2nd", " Future ft. Drake - Life Is Good ");
        } else if (number == 9) {
            localStorage.setItem("2nd", " YNW Melly - Murder On My Mind ");
        } else if (number == 10) {
            localStorage.setItem("2nd", " Travis Scott - Highest In The Room ");
        } else if (number == 11) {
            localStorage.setItem("2nd", " Billie Eilish - Everything I wanted  ");
        } else if (number == 12) {
            localStorage.setItem("11th", " Скриптонит - Положение(Izzamuzzic remix) ");
        } else {
        }
    } else if (localStorage.getItem("3rd") == null) {
        if (number == 0) {
            localStorage.setItem("3rd", " Скриптонит - Москва любит ... ");
        } else if (number == 1) {
            localStorage.setItem("3rd", " 104, Скриптонит, Miyagi - Не жаль ");
        } else if (number == 2) {
            localStorage.setItem("3rd", " Morgenshtern & Элджей - Cadillac ");
        } else if (number == 3) {
            localStorage.setItem("3rd", " Miyagi & Andy Panda - Кассандра ");
        } else if (number == 4) {
            localStorage.setItem("3rd", " The Weeknd - Blinding lights ");
        } else if (number == 5) {
            localStorage.setItem("3rd", " Surf Mesa ft. Emilee - Ily ");
        } else if (number == 6) {
            localStorage.setItem("3rd", " bbno$ prod. Lentra - Sriracha ");
        } else if (number == 7) {
            localStorage.setItem("3rd", " Lil Mosey - Blueberry Faygo ");
        } else if (number == 8) {
            localStorage.setItem("3rd", " Future ft. Drake - Life Is Good ");
        } else if (number == 9) {
            localStorage.setItem("3rd", " YNW Melly - Murder On My Mind ");
        } else if (number == 10) {
            localStorage.setItem("3rd", " Travis Scott - Highest In The Room ");
        } else if (number == 11) {
            localStorage.setItem("3rd", " Billie Eilish - Everything I wanted  ");
        } else if (number == 12) {
            localStorage.setItem("11th", " Скриптонит - Положение(Izzamuzzic remix) ");
        } else {
        }
    } else if (localStorage.getItem("4th") == null) {
        if (number == 0) {
            localStorage.setItem("4th", " Скриптонит - Москва любит ... ");
        } else if (number == 1) {
            localStorage.setItem("4th", " 104, Скриптонит, Miyagi - Не жаль ");
        } else if (number == 2) {
            localStorage.setItem("4th", " Morgenshtern & Элджей - Cadillac ");
        } else if (number == 3) {
            localStorage.setItem("4th", " Miyagi & Andy Panda - Кассандра ");
        } else if (number == 4) {
            localStorage.setItem("4th", " The Weeknd - Blinding lights ");
        } else if (number == 5) {
            localStorage.setItem("4th", " Surf Mesa ft. Emilee - Ily ");
        } else if (number == 6) {
            localStorage.setItem("4th", " bbno$ prod. Lentra - Sriracha ");
        } else if (number == 7) {
            localStorage.setItem("4th", " Lil Mosey - Blueberry Faygo ");
        } else if (number == 8) {
            localStorage.setItem("4th", " Future ft. Drake - Life Is Good ");
        } else if (number == 9) {
            localStorage.setItem("4th", " YNW Melly - Murder On My Mind ");
        } else if (number == 10) {
            localStorage.setItem("4th", " Travis Scott - Highest In The Room ");
        } else if (number == 11) {
            localStorage.setItem("4th", " Billie Eilish - Everything I wanted  ");
        } else if (number == 12) {
            localStorage.setItem("11th", " Скриптонит - Положение(Izzamuzzic remix) ");
        } else {
        }
    } else if (localStorage.getItem("5th") == null) {
        if (number == 0) {
            localStorage.setItem("5th", " Скриптонит - Москва любит ... ");
        } else if (number == 1) {
            localStorage.setItem("5th", " 104, Скриптонит, Miyagi - Не жаль ");
        } else if (number == 2) {
            localStorage.setItem("5th", " Morgenshtern & Элджей - Cadillac ");
        } else if (number == 3) {
            localStorage.setItem("5th", " Miyagi & Andy Panda - Кассандра ");
        } else if (number == 4) {
            localStorage.setItem("5th", " The Weeknd - Blinding lights ");
        } else if (number == 5) {
            localStorage.setItem("5th", " Surf Mesa ft. Emilee - Ily ");
        } else if (number == 6) {
            localStorage.setItem("5th", " bbno$ prod. Lentra - Sriracha ");
        } else if (number == 7) {
            localStorage.setItem("5th", " Lil Mosey - Blueberry Faygo ");
        } else if (number == 8) {
            localStorage.setItem("5th", " Future ft. Drake - Life Is Good ");
        } else if (number == 9) {
            localStorage.setItem("5th", " YNW Melly - Murder On My Mind ");
        } else if (number == 10) {
            localStorage.setItem("5th", " Travis Scott - Highest In The Room ");
        } else if (number == 11) {
            localStorage.setItem("5th", " Billie Eilish - Everything I wanted  ");
        } else if (number == 12) {
            localStorage.setItem("11th", " Скриптонит - Положение(Izzamuzzic remix) ");
        } else {
        }
    } else if (localStorage.getItem("6th") == null) {
        if (number == 0) {
            localStorage.setItem("6th", " Скриптонит - Москва любит ... ");
        } else if (number == 1) {
            localStorage.setItem("6th", " 104, Скриптонит, Miyagi - Не жаль ");
        } else if (number == 2) {
            localStorage.setItem("6th", " Morgenshtern & Элджей - Cadillac ");
        } else if (number == 3) {
            localStorage.setItem("6th", " Miyagi & Andy Panda - Кассандра ");
        } else if (number == 4) {
            localStorage.setItem("6th", " The Weeknd - Blinding lights ");
        } else if (number == 5) {
            localStorage.setItem("6th", " Surf Mesa ft. Emilee - Ily ");
        } else if (number == 6) {
            localStorage.setItem("6th", " bbno$ prod. Lentra - Sriracha ");
        } else if (number == 7) {
            localStorage.setItem("6th", " Lil Mosey - Blueberry Faygo ");
        } else if (number == 8) {
            localStorage.setItem("6th", " Future ft. Drake - Life Is Good ");
        } else if (number == 9) {
            localStorage.setItem("6th", " YNW Melly - Murder On My Mind ");
        } else if (number == 10) {
            localStorage.setItem("6th", " Travis Scott - Highest In The Room ");
        } else if (number == 11) {
            localStorage.setItem("6th", " Billie Eilish - Everything I wanted  ");
        } else if (number == 12) {
            localStorage.setItem("11th", " Скриптонит - Положение(Izzamuzzic remix) ");
        } else {
        }
    } else if (localStorage.getItem("7th") == null) {
        if (number == 0) {
            localStorage.setItem("7th", " Скриптонит - Москва любит ... ");
        } else if (number == 1) {
            localStorage.setItem("7th", " 104, Скриптонит, Miyagi - Не жаль ");
        } else if (number == 2) {
            localStorage.setItem("7th", " Morgenshtern & Элджей - Cadillac ");
        } else if (number == 3) {
            localStorage.setItem("7th", " Miyagi & Andy Panda - Кассандра ");
        } else if (number == 4) {
            localStorage.setItem("7th", " The Weeknd - Blinding lights ");
        } else if (number == 5) {
            localStorage.setItem("7th", " Surf Mesa ft. Emilee - Ily ");
        } else if (number == 6) {
            localStorage.setItem("7th", " bbno$ prod. Lentra - Sriracha ");
        } else if (number == 7) {
            localStorage.setItem("7th", " Lil Mosey - Blueberry Faygo ");
        } else if (number == 8) {
            localStorage.setItem("7th", " Future ft. Drake - Life Is Good ");
        } else if (number == 9) {
            localStorage.setItem("7th", " YNW Melly - Murder On My Mind ");
        } else if (number == 10) {
            localStorage.setItem("7th", " Travis Scott - Highest In The Room ");
        } else if (number == 11) {
            localStorage.setItem("7th", " Billie Eilish - Everything I wanted  ");
        } else if (number == 12) {
            localStorage.setItem("11th", " Скриптонит - Положение(Izzamuzzic remix) ");
        } else {
        }
    } else if (localStorage.getItem("8th") == null) {
        if (number == 0) {
            localStorage.setItem("8th", " Скриптонит - Москва любит ... ");
        } else if (number == 1) {
            localStorage.setItem("8th", " 104, Скриптонит, Miyagi - Не жаль ");
        } else if (number == 2) {
            localStorage.setItem("8th", " Morgenshtern & Элджей - Cadillac ");
        } else if (number == 3) {
            localStorage.setItem("8th", " Miyagi & Andy Panda - Кассандра ");
        } else if (number == 4) {
            localStorage.setItem("8th", " The Weeknd - Blinding lights ");
        } else if (number == 5) {
            localStorage.setItem("8th", " Surf Mesa ft. Emilee - Ily ");
        } else if (number == 6) {
            localStorage.setItem("8th", " bbno$ prod. Lentra - Sriracha ");
        } else if (number == 7) {
            localStorage.setItem("8th", " Lil Mosey - Blueberry Faygo ");
        } else if (number == 8) {
            localStorage.setItem("8th", " Future ft. Drake - Life Is Good ");
        } else if (number == 9) {
            localStorage.setItem("8th", " YNW Melly - Murder On My Mind ");
        } else if (number == 10) {
            localStorage.setItem("8th", " Travis Scott - Highest In The Room ");
        } else if (number == 11) {
            localStorage.setItem("8th", " Billie Eilish - Everything I wanted  ");
        } else if (number == 12) {
            localStorage.setItem("11th", " Скриптонит - Положение(Izzamuzzic remix) ");
        } else {
        }
    } else if (localStorage.getItem("9th") == null) {
        if (number == 0) {
            localStorage.setItem("9th", " Скриптонит - Москва любит ... ");
        } else if (number == 1) {
            localStorage.setItem("9th", " 104, Скриптонит, Miyagi - Не жаль ");
        } else if (number == 2) {
            localStorage.setItem("9th", " Morgenshtern & Элджей - Cadillac ");
        } else if (number == 3) {
            localStorage.setItem("9th", " Miyagi & Andy Panda - Кассандра ");
        } else if (number == 4) {
            localStorage.setItem("9th", " The Weeknd - Blinding lights ");
        } else if (number == 5) {
            localStorage.setItem("9th", " Surf Mesa ft. Emilee - Ily ");
        } else if (number == 6) {
            localStorage.setItem("9th", " bbno$ prod. Lentra - Sriracha ");
        } else if (number == 7) {
            localStorage.setItem("9th", " Lil Mosey - Blueberry Faygo ");
        } else if (number == 8) {
            localStorage.setItem("9th", " Future ft. Drake - Life Is Good ");
        } else if (number == 9) {
            localStorage.setItem("9th", " YNW Melly - Murder On My Mind ");
        } else if (number == 10) {
            localStorage.setItem("9th", " Travis Scott - Highest In The Room ");
        } else if (number == 11) {
            localStorage.setItem("9th", " Billie Eilish - Everything I wanted  ");
        } else if (number == 12) {
            localStorage.setItem("11th", " Скриптонит - Положение(Izzamuzzic remix) ");
        } else {
        }
    } else if (localStorage.getItem("10th") == null) {
        if (number == 0) {
            localStorage.setItem("10th", " Скриптонит - Москва любит ... ");
        } else if (number == 1) {
            localStorage.setItem("10th", " 104, Скриптонит, Miyagi - Не жаль ");
        } else if (number == 2) {
            localStorage.setItem("10th", " Morgenshtern & Элджей - Cadillac ");
        } else if (number == 3) {
            localStorage.setItem("10th", " Miyagi & Andy Panda - Кассандра ");
        } else if (number == 4) {
            localStorage.setItem("10th", " The Weeknd - Blinding lights ");
        } else if (number == 5) {
            localStorage.setItem("10th", " Surf Mesa ft. Emilee - Ily ");
        } else if (number == 6) {
            localStorage.setItem("10th", " bbno$ prod. Lentra - Sriracha ");
        } else if (number == 7) {
            localStorage.setItem("10th", " Lil Mosey - Blueberry Faygo ");
        } else if (number == 8) {
            localStorage.setItem("10th", " Future ft. Drake - Life Is Good ");
        } else if (number == 9) {
            localStorage.setItem("10th", " YNW Melly - Murder On My Mind ");
        } else if (number == 10) {
            localStorage.setItem("10th", " Travis Scott - Highest In The Room ");
        } else if (number == 11) {
            localStorage.setItem("10th", " Billie Eilish - Everything I wanted  ");
        } else if (number == 12) {
            localStorage.setItem("11th", " Скриптонит - Положение(Izzamuzzic remix) ");
        } else {
        }
    } else if (localStorage.getItem("11th") == null) {
        if (number == 0) {
            localStorage.setItem("11th", " Скриптонит - Москва любит ... ");
        } else if (number == 1) {
            localStorage.setItem("11th", " 104, Скриптонит, Miyagi - Не жаль ");
        } else if (number == 2) {
            localStorage.setItem("11th", " Morgenshtern & Элджей - Cadillac ");
        } else if (number == 3) {
            localStorage.setItem("11th", " Miyagi & Andy Panda - Кассандра ");
        } else if (number == 4) {
            localStorage.setItem("11th", " The Weeknd - Blinding lights ");
        } else if (number == 5) {
            localStorage.setItem("11th", " Surf Mesa ft. Emilee - Ily ");
        } else if (number == 6) {
            localStorage.setItem("11th", " bbno$ prod. Lentra - Sriracha ");
        } else if (number == 7) {
            localStorage.setItem("11th", " Lil Mosey - Blueberry Faygo ");
        } else if (number == 8) {
            localStorage.setItem("11th", " Future ft. Drake - Life Is Good ");
        } else if (number == 9) {
            localStorage.setItem("11th", " YNW Melly - Murder On My Mind ");
        } else if (number == 10) {
            localStorage.setItem("11th", " Travis Scott - Highest In The Room ");
        } else if (number == 11) {
            localStorage.setItem("11th", " Billie Eilish - Everything I wanted  ");
        } else if (number == 12) {
            localStorage.setItem("11th", " Скриптонит - Положение(Izzamuzzic remix) ");
        } else {
        }
    } else if (localStorage.getItem("12th") == null) {
        if (number == 0) {
            localStorage.setItem("12th", " Скриптонит - Москва любит ... ");
        } else if (number == 1) {
            localStorage.setItem("12th", " 104, Скриптонит, Miyagi - Не жаль ");
        } else if (number == 2) {
            localStorage.setItem("12th", " Morgenshtern & Элджей - Cadillac ");
        } else if (number == 3) {
            localStorage.setItem("12th", " Miyagi & Andy Panda - Кассандра ");
        } else if (number == 4) {
            localStorage.setItem("12th", " The Weeknd - Blinding lights ");
        } else if (number == 5) {
            localStorage.setItem("12th", " Surf Mesa ft. Emilee - Ily ");
        } else if (number == 6) {
            localStorage.setItem("12th", " bbno$ prod. Lentra - Sriracha ");
        } else if (number == 7) {
            localStorage.setItem("12th", " Lil Mosey - Blueberry Faygo ");
        } else if (number == 8) {
            localStorage.setItem("12th", " Future ft. Drake - Life Is Good ");
        } else if (number == 9) {
            localStorage.setItem("12th", " YNW Melly - Murder On My Mind ");
        } else if (number == 10) {
            localStorage.setItem("12th", " Travis Scott - Highest In The Room ");
        } else if (number == 11) {
            localStorage.setItem("12th", " Billie Eilish - Everything I wanted  ");
        } else if (number == 12) {
            localStorage.setItem("12th", " Скриптонит - Положение(Izzamuzzic remix) ");
        } else {
        }
    } else if (localStorage.getItem("13th") == null) {
        if (number == 0) {
            localStorage.setItem("13th", " Скриптонит - Москва любит ... ");
        } else if (number == 1) {
            localStorage.setItem("13th", " 104, Скриптонит, Miyagi - Не жаль ");
        } else if (number == 2) {
            localStorage.setItem("13th", " Morgenshtern & Элджей - Cadillac ");
        } else if (number == 3) {
            localStorage.setItem("13th", " Miyagi & Andy Panda - Кассандра ");
        } else if (number == 4) {
            localStorage.setItem("13th", " The Weeknd - Blinding lights ");
        } else if (number == 5) {
            localStorage.setItem("13th", " Surf Mesa ft. Emilee - Ily ");
        } else if (number == 6) {
            localStorage.setItem("13th", " bbno$ prod. Lentra - Sriracha ");
        } else if (number == 7) {
            localStorage.setItem("13th", " Lil Mosey - Blueberry Faygo ");
        } else if (number == 8) {
            localStorage.setItem("13th", " Future ft. Drake - Life Is Good ");
        } else if (number == 9) {
            localStorage.setItem("13th", " YNW Melly - Murder On My Mind ");
        } else if (number == 10) {
            localStorage.setItem("13th", " Travis Scott - Highest In The Room ");
        } else if (number == 11) {
            localStorage.setItem("13th", " Billie Eilish - Everything I wanted  ");
        } else if (number == 12) {
            localStorage.setItem("13th", " Скриптонит - Положение(Izzamuzzic remix) ");
        } else {
        }
    } else {
    }
}

function liked() {
    let heart;
    heart = document.getElementById("heart");
    if (heart.style.color == "crimson") {
    } else {
        let heart;
        heart = document.getElementById("heart");
        heart.style.color = "crimson";
        alert("If you won't to delete the music from favorites go to 'My Favorite' page");
        createInfo();
    }
}

function myFav() {
    dispB();
    let content;
    content = document.getElementById("back");
    content.innerHTML = '<div class = "container" id = "cont"></div>';
    let Cont;
    Cont = document.getElementById("cont");
    Cont.setAttribute("class", "backOfText");
    for (t = 0; t < data.title.length; t++) {
        let row;
        row = document.createElement("div");
        row.setAttribute("class", "row setMt setOp");
        row.style.marginLeft = "10px";
        row.setAttribute("id", t);
        Cont.appendChild(row);
    }
    let $0 = document.getElementById("0");
    let $col0 = document.createElement("div");
    $col0.setAttribute("class", "col-auto my-auto setFont");
    $col0.innerHTML = localStorage.getItem("1st");
    $0.appendChild($col0);
    let $1 = document.getElementById("1");
    let $col1 = document.createElement("div");
    $col1.setAttribute("class", "col-auto my-auto setFont");
    $col1.innerHTML = localStorage.getItem("2nd");
    $1.appendChild($col1);
    let $2 = document.getElementById("2");
    let $col2 = document.createElement("div");
    $col2.setAttribute("class", "col-auto my-auto setFont");
    $col2.innerHTML = localStorage.getItem("3rd");
    $2.appendChild($col2);
    let $3 = document.getElementById("3");
    let $col3 = document.createElement("div");
    $col3.setAttribute("class", "col-auto my-auto setFont");
    $col3.innerHTML = localStorage.getItem("4th");
    $3.appendChild($col3);
    let $4 = document.getElementById("4");
    let $col4 = document.createElement("div");
    $col4.setAttribute("class", "col-auto my-auto setFont");
    $col4.innerHTML = localStorage.getItem("5th");
    $4.appendChild($col4);
    let $5 = document.getElementById("5");
    let $col5 = document.createElement("div");
    $col5.setAttribute("class", "col-auto my-auto setFont");
    $col5.innerHTML = localStorage.getItem("6th");
    $5.appendChild($col5);
    let $6 = document.getElementById("6");
    let $col6 = document.createElement("div");
    $col6.setAttribute("class", "col-auto my-auto setFont");
    $col6.innerHTML = localStorage.getItem("7th");
    $6.appendChild($col6);
    let $7 = document.getElementById("7");
    let $col7 = document.createElement("div");
    $col7.setAttribute("class", "col-auto my-auto setFont");
    $col7.innerHTML = localStorage.getItem("8th");
    $7.appendChild($col7);
    let $8 = document.getElementById("8");
    let $col8 = document.createElement("div");
    $col8.setAttribute("class", "col-auto my-auto setFont");
    $col8.innerHTML = localStorage.getItem("9th");
    $8.appendChild($col8);
    let $9 = document.getElementById("9");
    let $col9 = document.createElement("div");
    $col9.setAttribute("class", "col-auto my-auto setFont");
    $col9.innerHTML = localStorage.getItem("10th");
    $9.appendChild($col9);
    let $10 = document.getElementById("10");
    let $col10 = document.createElement("div");
    $col10.setAttribute("class", "col-auto my-auto setFont");
    $col10.innerHTML = localStorage.getItem("11th");
    $10.appendChild($col10);
    let $11 = document.getElementById("11");
    let $col11 = document.createElement("div");
    $col11.setAttribute("class", "col-auto my-auto setFont");
    $col11.innerHTML = localStorage.getItem("12th");
    $11.appendChild($col11);
    let $12 = document.getElementById("12");
    let $col12 = document.createElement("div");
    $col12.setAttribute("class", "col-auto my-auto setFont");
    $col12.innerHTML = localStorage.getItem("13th");
    $12.appendChild($col12);
    var $Back;
    $Back = document.getElementById("back");
    $Back.style.backgroundImage = data.posterBack[int];
    $Back.style.backgroundSize = "100%, 100%";
    $Back.style.backgroundRepeat = "no-repeat";
}
