// 字体放大和缩小
fontzoom.zoomin = function() {
    if (fontzoom.layerwidth * fontzoom.zoom > fontzoom.layerposwidth) {
        fontzoom.layer.style.width = fontzoom.layerposwidth + "px";
    } else {
        fontzoom.layer.style.width = fontzoom.layerwidth * fontzoom.zoom + "px";
    }
    if (fontzoom.layerheight * fontzoom.zoom > fontzoom.layerposheight) {
        fontzoom.layer.style.height = fontzoom.layerposheight + "px";
    } else {
        fontzoom.layer.style.height = fontzoom.layerheight * fontzoom.zoom + "px";
    }
    fontzoom.layer.style.left = fontzoom.layerx - (fontzoom.layer.offsetWidth - fontzoom.layerwidth) / 2 + "px";
    fontzoom.layer.style.top = fontzoom.layery - (fontzoom.layer.offsetHeight - fontzoom.layerheight) / 2 + "px";
    fontzoom.layerwidth = fontzoom.layer.offsetWidth;
    fontzoom.layerheight = fontzoom.layer.offsetHeight;
    fontzoom.layerx = fontzoom.layer.offsetLeft;
    fontzoom.layery = fontzoom.layer.offsetTop;
}

