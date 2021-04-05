var picNameArr = ["Dragon_eye.jpg", "elephant.jpeg", "flaming_skull.jpg", "hand_and_rose.jpg", "jellyfish.jpg", "many_tentacles.jpg", "skeleton_face_2.jpeg", "skeleton_face.jpg", "tentacle.jpg", "oogieboogie.jpg"];
var picAltArr = ["Dragon's Eye", "Elephant looking up the the sky", "Flaming Skull", "Skeleton hand holding a rose", "A jellyfish", "A horde of tentacles reaching towards the moon" , "A skeleton's face", "A skeleton's face", "A single tentacle", "oogie boogie from the nightmare before Christmas"];
 arrCount = 10;
 randDriver();

function randNum() {
    return Math.floor(Math.random() * arrCount);
}

function savePic(int) {
    var ss = sessionStorage.getItem("picsUsed");
    if (ss == null || ss == "" || ss == "null")
        ss = int;
    else
        ss += "|" + int;
    sessionStorage.setItem("picsUsed", ss);
}

function getPicInts() {
    var ss = sessionStorage.getItem("picsUsed");
    if (ss != null)
        return split(ss, "|");
    ss = [];
    return ss;
}

function split(string, charStr) {
    var strArray = string.split('');
    var stringBuilt = "";
    var strArrayRebuilt = [];
    for (var i = 0; i < strArray.length; i++) {
        var temp = strArray[i];
        if (i + 1 == strArray.length) {
            stringBuilt += temp;
            strArrayRebuilt.push(stringBuilt);
            stringBuilt = "";
        }
        else if (temp != charStr)
            stringBuilt += temp;
        else {
            strArrayRebuilt.push(stringBuilt);
            stringBuilt = "";
            if (strArray[i + 1] == ' ')
                i++;
        }
    }
    return strArrayRebuilt;
}

function randDriver() {
    var arrOfPics = getPicInts();
    if (arrOfPics.length >= 9) {
        sessionStorage.clear();
        arrOfPics = [];
    }
    var num = randNum()
    var temp = 0;
    if (arrOfPics.length != 0) {
        for (var i = 0; i < arrOfPics.length; i++) {
            temp = arrOfPics[i];
            if (num == temp) {
                i = -1;
                num = randNum();
            }
        }
    }
    savePic(num);
    var img = document.getElementById("rand-img");
    img.src = "../resources/gallery_images/" + picNameArr[num];
    img.alt = picAltArr[num];
}