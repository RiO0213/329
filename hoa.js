 function fireworks() {
    new fo(50), setTimeout("new fo(50)", 750), 0 < stopafter && setTimeout("stopfire()", 6e4 * stopafter)
}
document.write('<style type="text/css">body{padding-bottom:0px}</style><img style="position:fixed;z-index:99999;top:0;left:0" src=""/><img style="position:fixed;z-index:99999;top:0;right:0" src=""/><div style="position:fixed;z-index:99999;bottom:-50px;left:0;width:100%;height:104px;background:url() repeat-x bottom left;"></div><img style="position:fixed;z-index:99999;bottom:0px;left:0px" src=""/><img style="position:fixed;z-index:9999;bottom:0px;right:0px" src=""/><div style="position:fixed;z-index:99999;bottom:3px;right:3px; font-size:11px;color:#B7E8FF;"></div>');
var stopafter = 0,
    firestop = [],
    fire = [],
    stdDOM = document.getElementById,
    nsDOM = -1 != navigator.appName.indexOf("Netscape") && 4 == parseInt(navigator.appVersion),
    hD = "0123456789ABCDEF";
layernum = 0, piece = function (t) {
    if (this.elem = null, nsDOM) null == t ? this.elem = new Layer(1) : (this.elem = new Layer(1, t.elem), this.style.visibility = "inherit"), this.parent = t, this.style = this.elem;
    else if (stdDOM) {
        this.parent = null == t ? document.body : t.elem, this.elem = document.createElement("div");
        var e = "xLayer" + layernum++;
        this.elem.setAttribute("id", e), elemc = document.createTextNode("."), this.elem.appendChild(elemc), this.parent.appendChild(this.elem), this.style = this.elem.style, document.getElementById(e).style.lineHeight = "3px", document.getElementById(e).style.color = "#fff", document.getElementById(e).style.position = "absolute"
    }(window[this.elem.id] = this).ay = .1, this.type = 0
}, piece.prototype.moveTo = function (t, e) {
    nsDOM ? this.elem.moveTo(t, e) : (this.style.left = t + "px", this.style.top = e + "px")
}, piece.prototype.setC = function (t) {
    nsDOM ? this.elem.bgColor = t : this.style.backgroundColor = null == t ? "transparent" : t
}, piece.prototype.fire = function (t, e, i) {
    var s = Math.random() * Math.PI * 2;
    this.dx = o * Math.sin(s), this.dy = o * Math.cos(s) - 2, this.x = t, this.y = e, this.moveTo(t, e)
}, piece.prototype.sCol = function (t, e, i) {

}, piece.prototype.animate = function (t, e) {
    var i = 25 < t ? Math.random() * (380 - 5 * t) : 255 - 4 * t,
        s = d2h(i - 112);
    i < 112 && (s = d2h(i)), this.sCol(d2h(i), s, e), this.dy += this.ay, this.x += this.dx, this.y += this.dy, this.moveTo(this.x, this.y)
}, fo = function (t) {
    for (this.id = "fo" + fo.count++, this.sp = new Array, i = 0; i < t; i++) this.sp[i] = new piece, nsDOM ? (this.sp[i].style.clip.top = 0, this.sp[i].style.clip.left = 0, this.sp[i].style.clip.bottom = 3, this.sp[i].style.clip.right = 3) : this.sp[i].style.clip = "rect(0 3 3 0)", this.sp[i].style.visibility = "visible";
    this.step = 0, window[this.id] = this, fire.push(this), firestop.push(setInterval("window." + this.id + ".animate()", 15))
}, fo.count = 0, fo.prototype.animate = function () {
}, window.onload = fireworks; 
