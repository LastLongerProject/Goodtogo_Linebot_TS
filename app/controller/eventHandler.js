"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logFactory = require('../api/logFactory')('linebot:eventHandler');
const client = require('./clientDelegate');
function isMobilePhone(phone) {
    var reg = /^[09]{2}[0-9]{8}$/;
    var res = reg.test(phone);
    if (res)
        return true;
    else
        return false;
}
function isVerificationCode(code) {
    var reg = /[0-9]{6}/;
    var res = reg.test(code);
    if (res)
        return true;
    else
        return false;
}
function recordPostback(event) {
    logFactory.log('Event: postback');
}
function followEvent(event) {
    logFactory.log('Event: added or blocked');
    const message = '感謝您將本帳號加為好友！\n如果是初次使用請先輸入手機號碼以綁定line帳號\綁定完成後即可使用本帳號提供的服務！';
    client.textMessage(event, message);
}
function unfollowOrUnBoundEvent(event) {
    if (event.type === 'unfollow')
        logFactory.log('Event: unfollowed');
    else
        logFactory.log('Event: delete bind');
}
function getContributionEvent(event) {
    logFactory.log('Event: get contribution');
}
function getRecordEvent(event) {
    logFactory.log('Event: get record');
}
function getQRCodeEvent(event) {
    logFactory.log('Event: get QRCode');
}
function getContactWayEvent(event) {
    logFactory.log('Event: get contact way');
    const message = "好盒器工作室: (06)200-2341\n" +
        "FB: https://www.facebook.com/good.to.go.tw";
    client.textMessage(event, message);
}
function bindingEvent(event) {
    logFactory.log('Event: binding');
}
function registerEvent(event) {
    logFactory.log('Event: register');
}
function yesNoEvent(event) {
    logFactory.log('Event: yes no');
}
module.exports = {
    bot: function (event) {
        if ((event.type !== 'message' || event.message.type !== 'text') && event.type !== 'follow' && event.type !== 'unfollow' &&
            event.type !== 'postback') {
            logFactory.error('Event Type: Wrong Type');
            return Promise.resolve(null);
        }
        if (event.type === 'postback') {
            // recordPostback(event);
        }
        if (event.type === 'follow') {
            followEvent(event);
        }
        else if (event.type === 'unfollow' || event.message.text === '取消') {
            unfollowOrUnBoundEvent(event);
        }
        else if (event.message.text === "功德") {
            getContributionEvent(event);
        }
        else if (event.message.text === "使用") {
            console.log('use');
            getRecordEvent(event);
        }
        else if (event.message.text === "QRcode") {
            getQRCodeEvent(event);
        }
        else if (event.message.text === "聯絡客服") {
            getContactWayEvent(event);
        }
        else if (event.message.text === "綁定") {
            bindingEvent(event);
            // client.textMessage(event, "請輸入手機號碼");
        }
        else if (event.message.text === "註冊") {
            registerEvent(event);
        }
        else if (event.message.text === "是" || event.message.text === "否") {
            yesNoEvent(event);
        }
        else if (isMobilePhone(event.message.text)) {
            logFactory.log('is mobile');
            // bindLineId(event);
        }
        else if (isVerificationCode(event.message.text)) {
            logFactory.log('is verification');
            // request.registerVerification(event);
        }
        else {
            logFactory.log("Event: not our business");
            // client.textMessage(event, "如果有需要任何服務請點選下列表單哦!");
        }
    }
};
//# sourceMappingURL=eventHandler.js.map