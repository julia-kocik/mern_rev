export const getDate = () => {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    return today
}

export const formatTime = (seconds) => {
    //let h = Math.floor(seconds / 3600);
    let m = Math.floor((seconds % 3600) / 60);
    let s = Math.round(seconds % 60);
    //if (h < 10) {h = "0"+h;}
    if (m < 10) {m = "0"+ m;}
    if (s < 10) {s = "0"+ s;}
    let t = m+":"+s;
    return t;
}