const body = document.body;

const queryString = window.location.search
const urlParams = new URLSearchParams(queryString);
const uuid = urlParams.get('uuid');

/**
 * 58ebdb2f-f7a7-4bf1-898a-f0370c1c008f (Download Posters).
*/

const uuids = ['58ebdb2f-f7a7-4bf1-898a-f0370c1c008f']

var UUIDisValid = false;

body.onload = () => {
    if(uuid === uuids[0]) {
        UUIDisValid = true;
        if (UUIDisValid === true) {
            var downloadbtn = document.createElement('button');
            downloadbtn.setAttribute('value="F"')
        }
    }
}