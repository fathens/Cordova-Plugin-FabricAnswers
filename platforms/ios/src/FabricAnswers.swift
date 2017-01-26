import Foundation

extension Dictionary {
    func getString(_ key: Key) -> String? {
        return self[key] as? String
    }

    func getDouble(_ key: Key) -> Double? {
        return self[key].flatMap { $0 as AnyObject }.flatMap { $0.doubleValue }
    }

    func getDecimal(_ key: Key) -> NSDecimalNumber? {
        return getDouble(key).map { NSDecimalNumber(value: $0 as Double) }
    }

    func getBool(_ key: Key) -> Int? {
        return self[key].flatMap { $0 as? Bool }.map { $0 ? 1 : 0 }
    }
}

@objc(FabricAnswers)
class FabricAnswers: CDVPlugin {

    // MARK: - Cordova Commands

    @objc(eventPurchase:)
    func eventPurchase(command: CDVInvokedUrlCommand) {
        frame(command) { dict, attributes in
            let price = dict?.getDecimal("itemPrice")
            let currency = dict?.getString("currency")
            let success = dict?.getBool("success")
            let name = dict?.getString("itemName")
            let type = dict?.getString("itemType")
            let id = dict?.getString("itemId")
            Answers.logPurchase(withPrice: price, currency: currency, success: success as NSNumber?, itemName: name, itemType: type, itemId: id, customAttributes: attributes)
        }
    }

    @objc(eventAddToCart:)
    func eventAddToCart(command: CDVInvokedUrlCommand) {
        frame(command) { dict, attributes in
            let price = dict?.getDecimal("itemPrice")
            let currency = dict?.getString("currency")
            let name = dict?.getString("itemName")
            let type = dict?.getString("itemType")
            let id = dict?.getString("itemId")
            Answers.logAddToCart(withPrice: price, currency: currency, itemName: name, itemType: type, itemId: id, customAttributes: attributes)
        }
    }

    @objc(eventStartCheckout:)
    func eventStartCheckout(command: CDVInvokedUrlCommand) {
        frame(command) { dict, attributes in
            let price = dict?.getDecimal("totalPrice")
            let currency = dict?.getString("currency")
            let count = dict?.getDouble("itemCount")
            Answers.logStartCheckout(withPrice: price, currency: currency, itemCount: count as NSNumber?, customAttributes: attributes)
        }
    }

    @objc(eventContentView:)
    func eventContentView(command: CDVInvokedUrlCommand) {
        frame(command) { dict, attributes in
            let name = dict?.getString("contentName")
            let type = dict?.getString("contentType")
            let id = dict?.getString("contentId")
            Answers.logContentView(withName: name, contentType: type, contentId: id, customAttributes: attributes)
        }
    }

    @objc(eventSearch:)
    func eventSearch(command: CDVInvokedUrlCommand) {
        frame(command) { dict, attributes in
            let query = dict?.getString("query")
            Answers.logSearch(withQuery: query, customAttributes: attributes)
        }
    }

    @objc(eventShare:)
    func eventShare(command: CDVInvokedUrlCommand) {
        frame(command) { dict, attributes in
            let method = dict?.getString("method")
            let name = dict?.getString("contentName")
            let type = dict?.getString("contentType")
            let id = dict?.getString("contentId")
            Answers.logShare(withMethod: method, contentName: name, contentType: type, contentId: id, customAttributes: attributes)
        }
    }

    @objc(eventRating:)
    func eventRating(command: CDVInvokedUrlCommand) {
        frame(command) { dict, attributes in
            let rating = dict?.getDouble("rating")
            let name = dict?.getString("contentName")
            let type = dict?.getString("contentType")
            let id = dict?.getString("contentId")
            Answers.logRating(rating as NSNumber?, contentName: name, contentType: type, contentId: id, customAttributes: attributes)
        }
    }

    @objc(eventSignUp:)
    func eventSignUp(command: CDVInvokedUrlCommand) {
        frame(command) { dict, attributes in
            let method = dict?.getString("method")
            let success = dict?.getBool("success")
            Answers.logSignUp(withMethod: method, success: success as NSNumber?, customAttributes: attributes)
        }
    }

    @objc(eventLogin:)
    func eventLogin(command: CDVInvokedUrlCommand) {
        frame(command) { dict, attributes in
            let method = dict?.getString("method")
            let success = dict?.getBool("success")
            Answers.logLogin(withMethod: method, success: success as NSNumber?, customAttributes: attributes)
        }
    }

    @objc(eventInvite:)
    func eventInvite(command: CDVInvokedUrlCommand) {
        frame(command) { dict, attributes in
            let method = dict?.getString("method")
            Answers.logInvite(withMethod: method, customAttributes: attributes)
        }
    }

    @objc(eventLevelStart:)
    func eventLevelStart(command: CDVInvokedUrlCommand) {
        frame(command) { dict, attributes in
            let name = dict?.getString("levelName")
            Answers.logLevelStart(name, customAttributes: attributes)
        }
    }

    @objc(eventLevelEnd:)
    func eventLevelEnd(command: CDVInvokedUrlCommand) {
        frame(command) { dict, attributes in
            let name = dict?.getString("levelName")
            let score = dict?.getDouble("score")
            let success = dict?.getBool("success")
            Answers.logLevelEnd(name, score: score as NSNumber?, success: success as NSNumber?, customAttributes: attributes)
        }
    }

    @objc(eventCustom:)
    func eventCustom(command: CDVInvokedUrlCommand) {
        frame(command) { dict, attributes in
            let name = dict?.getString("name")
            Answers.logCustomEvent(withName: name == nil ? "NoName": name!, customAttributes: attributes)
        }
    }

    // MARK: - Private Utillities

    fileprivate func fork(_ proc: @escaping () -> Void) {
        DispatchQueue.global(qos: DispatchQoS.QoSClass.utility).async(execute: proc)
    }

    fileprivate func frame(_ command: CDVInvokedUrlCommand, _ proc: @escaping (Dictionary<String, AnyObject>?, Dictionary<String, AnyObject>?) throws -> Void) {
        fork {
            do {
                let dict = command.arguments.first.flatMap { $0 as? Dictionary<String, AnyObject> }
                let attributes = dict?["attributes"] as? Dictionary<String, AnyObject>

                try proc(dict, attributes)
                self.commandDelegate!.send(CDVPluginResult(status: CDVCommandStatus_OK), callbackId: command.callbackId)
            } catch (let ex) {
                self.commandDelegate!.send(CDVPluginResult(status: CDVCommandStatus_ERROR, messageAs: ex.localizedDescription), callbackId: command.callbackId)
            }
        }
    }
}
