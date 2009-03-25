var bruceWillis = function () {
	var prefManager = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
	return {
		init : function () {
			gBrowser.addEventListener("load", function () {
				var autoRun = prefManager.getBoolPref("extensions.brucewillis.autorun");
				if (autoRun) {
					bruceWillis.run();
				}
			}, false);
		},
			
		run : function () {
			var head = content.document.getElementsByTagName("head")[0],
				style = content.document.getElementById("bruce-willis-style"),
				h1 = content.document.getElementsByTagName("h1"),
				h2 = content.document.getElementsByTagName("h2"),
				h3 = content.document.getElementsByTagName("h3"),
				h4 = content.document.getElementsByTagName("h4");
			
			if (!style) {
				style = content.document.createElement("link");
				style.id = "brucewillis-style";
				style.type = "text/css";
				style.rel = "stylesheet";
				style.href = "chrome://brucewillis/content/bruce-willis.css";
				head.appendChild(style);
			}	

			for (var i=0, il=h1.length; i<il; i++) {
				h1[i].textContent = "Die Hard 1";
			}
			
			for (var i=0, il=h2.length; i<il; i++) {
				h2[i].textContent = "Die Hard 2";
			}
			
			for (var i=0, il=h3.length; i<il; i++) {
				h3[i].textContent = "Die Hard 3";
			}
			
			for (var i=0, il=h4.length; i<il; i++) {
				h4[i].textContent = "Die Hard 4";
			}
		}
	};
}();
window.addEventListener("DOMContentLoaded", bruceWillis.init, false);