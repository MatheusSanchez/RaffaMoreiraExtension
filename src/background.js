console.log("Hey Bro ss Mano !");

chrome.browserAction.onClicked.addListener(callback); // tab criada

function callback(tab){

	let msg = {
		txt: "Hi Mano"
	}
	chrome.tabs.sendMessage(tab.id,msg);
	
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.cmd == "any command") {
      sendResponse({ result: "any response from background" });
    } else {
      sendResponse({ result: "error", message: `Invalid 'cmd'` });
    }
    // Note: Returning true is required here!
    //  ref: http://stackoverflow.com/questions/20077487/chrome-extension-message-passing-response-not-sent
    return true; 
});