function clock(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    document.getElementsByTagName("h1")[0].innerText= time
    return time
}



setInterval(()=>{clock()},1000);