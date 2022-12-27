
browser.browserAction.onClicked.addListener(function (tab) {
    browser.GetAllMessagesAPI.getAllMessages(tab.windowId);
});
