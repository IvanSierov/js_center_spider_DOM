"use strict";
document.addEventListener("DOMContentLoaded", ()=>{
    const wall = document.querySelector(".wall");
    const spider = document.querySelector(".spider");
    function centerSpider() {
        const spiderRect = spider.getBoundingClientRect();
        const centerX = (wall.clientWidth - spiderRect.width) / 2;
        const centerY = (wall.clientHeight - spiderRect.height) / 2;
        spider.style.left = `${centerX}px`;
        spider.style.top = `${centerY}px`;
    }
    centerSpider();
    window.addEventListener("resize", centerSpider);
});

//# sourceMappingURL=index.f75de5e1.js.map
