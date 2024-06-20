var socket = io();

let btn = document.getElementById('btn');
let inputing = document.getElementById('newmsg');
let msglist = document.getElementById('msglist');

btn.onclick = function exec(){
    socket.emit('msg_send', {
        msg: inputing.value
    });
}

socket.on('msg_rcvd', (data) => {
    let limsg = document.createElement('li');
    limsg.innerText = data.msg;
    msglist.appendChild(limsg);
})