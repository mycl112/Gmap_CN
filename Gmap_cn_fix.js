// ==UserScript== 
// @name         Google Maps GL CN 
// @namespace    http://tampermonkey.net/ 
// @version      1.2 
// @description  自动为Google Maps/Google地球添加gl=cn参数并刷新，适配earth.google.com、www.google.com/maps、www.google.com.hk/maps 
// @author       You 
// @match        https://earth.google.com/* 
// @match        https://www.google.com/maps/* 
// @match        https://www.google.com.hk/maps/* 
// @grant        none 
// @run-at       document-start  // 提前执行，避免页面无效加载 
// ==/UserScript== 

(function () { 
    "use strict"; 

    // 为URL添加gl=cn参数（核心逻辑：去重后添加，保证唯一） 
    function addGlCnParameter(url) { 
        try {
            // 分离URL的哈希部分
            const [mainUrl, hash] = url.split('#');
            
            // 移除已存在的gl参数（无论值是什么，避免重复/冲突） 
            let cleanUrl = mainUrl.replace(/[?&]gl=[^&]*/g, ""); 
            // 根据是否有其他参数，选择?或&作为分隔符 
            const separator = cleanUrl.includes("?") ? "&" : "?"; 
            const urlWithParam = cleanUrl + separator + "gl=cn";
            
            // 重新拼接哈希部分
            return hash ? urlWithParam + "#" + hash : urlWithParam;
        } catch (error) {
            console.error("处理URL时出错：", error);
            return url; // 出错时返回原URL
        }
    } 

    // 执行重定向刷新 
    function redirectWithGlCn() { 
        try {
            const currentUrl = window.location.href; 
            const newUrl = addGlCnParameter(currentUrl); 
            // 仅当URL变化时才重定向，避免无限刷新 
            if (newUrl !== currentUrl) { 
                console.log("Google Maps添加gl=cn并刷新：", currentUrl, "->", newUrl); 
                window.location.replace(newUrl); // replace避免历史记录冗余 
            } else { 
                console.log("Google Maps已包含gl=cn参数，无需刷新"); 
            }
        } catch (error) {
            console.error("重定向时出错：", error);
        }
    } 

    // 直接执行（@match已做域名过滤，无需额外判断） 
    redirectWithGlCn(); 

})();