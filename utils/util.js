var t = function(t) {
    return (t = t.toString())[1] ? t : "0" + t;
};

module.exports = {
    formatTime: function(e) {
        var r = e.getFullYear(), n = e.getMonth() + 1, o = e.getDate(),f = e.getHours() ,g=e.getMinutes() ,k=e.getSeconds();
        //e.getHours(), e.getMinutes(), e.getSeconds();
        return [ r, n, o , f , g , k ].map(t).join("");
    }
};