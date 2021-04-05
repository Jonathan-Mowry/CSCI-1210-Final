//Programmer: Jon Mowry
//Date Created: 04/05/2021
//Last Updated: 04/05/2021

//Array that holds the file name for a given picture.
var picNameArr = ["Dragon_eye.jpg", "elephant.jpeg", "flaming_skull.jpg", "hand_and_rose.jpg", "jellyfish.jpg", "many_tentacles.jpg", "skeleton_face_2.jpeg", "skeleton_face.jpg", "tentacle.jpg", "oogieboogie.jpg"];
//Array that holds the alt for each picture.
var picAltArr = ["Dragon's Eye", "Elephant looking up the the sky", "Flaming Skull", "Skeleton hand holding a rose", "A jellyfish", "A horde of tentacles reaching towards the moon" , "A skeleton's face", "A skeleton's face", "A single tentacle", "oogie boogie from the nightmare before Christmas"];
//total number of files
 arrCount = 10;
 randDriver();
//returns a number between 0 and 9 (0 indexing)
function randNum() {
    return Math.floor(Math.random() * arrCount);
}
//Saves the given picture number to sessionStorage.
function savePic(int) {
    var ss = sessionStorage.getItem("picsUsed");
    if (ss == null)
        ss = int;
    else
        ss += "|" + int;
    sessionStorage.setItem("picsUsed", ss);
}
//Retrieve an array of currently used picture numbers
function getPicInts() {
    var ss = sessionStorage.getItem("picsUsed");
    if (ss != null)
        return split(ss, "|");
    ss = [];
    return ss;
}
//Splits the string on |
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
//Main driver function, checks
function randDriver() {
    var arrOfPics = getPicInts();
    if (arrOfPics.length >= 10) { //checks if all pics have been used.
        sessionStorage.clear();
        arrOfPics = [];
    }
    var num = randNum()
    var temp = 0;
    if (arrOfPics.length != 0) {
        for (var i = 0; i < arrOfPics.length; i++) { //loops to check if current random number has been used.
            temp = arrOfPics[i];
            if (num == temp) { //number found
                i = -1;
                num = randNum();
            }
        }
    }
    savePic(num);
    var img = document.getElementById("rand-img"); //update picture info
    img.src = "../resources/gallery_images/" + picNameArr[num];
    img.alt = picAltArr[num];
}