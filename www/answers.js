var exec = require("cordova/exec");

var pluginName = "FabricAnswersPlugin";

var names = [
"eventPurchase",
"eventAddToCart",
"eventStartCheckout",
"eventContentView",
"eventSearch",
"eventShare",
"eventRating",
"eventSignUp",
"eventLogin",
"eventInvite",
"eventLevelStart",
"eventLevelEnd",
"eventCustom"
];

var obj = {};

names.forEach(function(methodName) {
    obj[methodName] = function() {
        var args = Array.prototype.slice.call(arguments, 0);
        return new Promise(function(resolve, reject) {
            exec(resolve, reject, pluginName, methodName, args);
        });
    };
});

module.exports = obj;
