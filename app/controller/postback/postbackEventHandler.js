﻿"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const tool_1 = require("../../api/tool");
const request = __importStar(require("../../api/request"));
const client = __importStar(require("../delegate/client"));
const flexMessage_1 = require("../../etl/models/flexMessage");
const event_1 = require("../delegate/event");
function postbackHandler(event, postbackData) {
    if (tool_1.isMobilePhone(postbackData)) {
        logFactory.log(postbackData);
        return request.register(event, postbackData);
    }
    else if (postbackData === "Don't wanna become our member" /* NO */) {
        let message = '期待您成為好合器會員！';
        return client.textMessage(event, message);
    }
    else if (postbackData === "get more record from database" /* GET_MORE_RECORD */.toString() ||
        postbackData === "in used" /* IN_USED */.toString() ||
        postbackData === "record" /* RECORD */.toString() ||
        postbackData === "get more in used container from database" /* GET_MORE_INUSED */.toString()) {
        return event_1.getDataEvent(event, postbackData);
    }
    else if (postbackData === "lottery" /* LOTTERY */ ||
        postbackData === "redeem" /* REDEEM */) {
        return getRewardImage(event, postbackData);
    }
}
exports.postbackHandler = postbackHandler;
function getRewardImage(event, type) {
    let lotteryImage = 'https://i.imgur.com/MwljlRm.jpg';
    let redeemImgae = 'https://imgur.com/l2xiXxb.jpg';
    let url = type === "lottery" /* LOTTERY */ ? lotteryImage : redeemImgae;
    let image = {
        type: flexMessage_1.FlexMessage.ComponetType.image,
        originalContentUrl: url,
        previewImageUrl: url,
    };
    return client.customMessage(event, image);
}
//# sourceMappingURL=postbackEventHandler.js.map