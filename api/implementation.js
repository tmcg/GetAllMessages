"use strict";
(function (exports) {

    var { ExtensionCommon } = ChromeUtils.import("resource://gre/modules/ExtensionCommon.jsm");

    class GetAllMessagesAPI extends ExtensionCommon.ExtensionAPI {

        getAPI(context) {
            return {
                GetAllMessagesAPI: {
                    getAllMessages: async function (windowId) {
                        let wnd = context.extension.windowManager.get(windowId).window;
                        if (wnd) {
                            wnd.GetMessagesForAllAuthenticatedAccounts();
                        }
                    },
                },
            };
        }
    };

  exports.GetAllMessagesAPI = GetAllMessagesAPI;

})(this)