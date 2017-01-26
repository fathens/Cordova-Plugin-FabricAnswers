import _ from "lodash";
import { Logger } from "log4ts";
import { AnswersClient, Currency } from "./client";

const logger = new Logger("Answers");

export class Answers {
    private static _client: AnswersClient;
    private static get client(): AnswersClient {
        function isDef(typedec) {
            return !_.isEqual(typedec, 'undefined');
        }
        if (!Answers._client) {
            const plugin = (window as any).plugin;
            if (isDef(typeof plugin) && isDef(typeof plugin.Fabric) && isDef(typeof plugin.Fabric.Answers)) {
                Answers._client = plugin.Fabric.Answers;
            }
        }
        return Answers._client;
    }

    static async eventLogin(params: {
        method?: string,
        success?: boolean,
        custom?: { [key: string]: string; }
    }): Promise<void> {
        if (Answers.client) {
            return Answers.client.eventLogin(params);
        } else {
            logger.info(() => `No Fabric! eventLogin: ${JSON.stringify(params, null, 4)}`);
        }
    }

    static async eventSignUp(params: {
        method?: string,
        success?: boolean,
        custom?: { [key: string]: string; }
    }): Promise<void> {
        if (Answers.client) {
            return Answers.client.eventSignUp(params);
        } else {
            logger.info(() => `No Fabric! eventSignUp: ${JSON.stringify(params, null, 4)}`);
        }
    }

    static async eventInvite(params: {
        method?: string,
        custom?: { [key: string]: string; }
    }): Promise<void> {
        if (Answers.client) {
            return Answers.client.eventInvite(params);
        } else {
            logger.info(() => `No Fabric! eventInvite: ${JSON.stringify(params, null, 4)}`);
        }
    }

    static async eventLevelStart(params: {
        levelName?: string,
        custom?: { [key: string]: string; }
    }): Promise<void> {
        if (Answers.client) {
            return Answers.client.eventLevelStart(params);
        } else {
            logger.info(() => `No Fabric! eventLevelStart: ${JSON.stringify(params, null, 4)}`);
        }
    }

    static async eventLevelEnd(params: {
        levelName?: string,
        success?: boolean,
        custom?: { [key: string]: string; }
    }): Promise<void> {
        if (Answers.client) {
            return Answers.client.eventLevelEnd(params);
        } else {
            logger.info(() => `No Fabric! eventLevelEnd: ${JSON.stringify(params, null, 4)}`);
        }
    }

    static async eventPurchase(params: {
        itemPrice?: number,
        currency?: Currency,
        itemName?: string,
        itemType?: string,
        itemId?: string,
        success?: boolean,
        custom?: { [key: string]: string; }
    }): Promise<void> {
        if (Answers.client) {
            return Answers.client.eventPurchase(params);
        } else {
            logger.info(() => `No Fabric! eventPurchase: ${JSON.stringify(params, null, 4)}`);
        }
    }

    static async eventAddToCart(params: {
        itemPrice?: number,
        currency?: Currency,
        itemName?: string,
        itemType?: string,
        itemId?: string,
        custom?: { [key: string]: string; }
    }): Promise<void> {
        if (Answers.client) {
            return Answers.client.eventAddToCart(params);
        } else {
            logger.info(() => `No Fabric! eventAddToCart: ${JSON.stringify(params, null, 4)}`);
        }
    }

    static async eventStartCheckout(params: {
        totalPrice?: number,
        currency?: Currency,
        itemCount?: number,
        custom?: { [key: string]: string; }
    }): Promise<void> {
        if (Answers.client) {
            return Answers.client.eventStartCheckout(params);
        } else {
            logger.info(() => `No Fabric! eventStartCheckout: ${JSON.stringify(params, null, 4)}`);
        }
    }

    static async eventContentView(params: {
        contentName?: string,
        contentType?: string,
        contentId?: string,
        custom?: { [key: string]: string; }
    }): Promise<void> {
        if (Answers.client) {
            return Answers.client.eventContentView(params);
        } else {
            logger.info(() => `No Fabric! eventContentView: ${JSON.stringify(params, null, 4)}`);
        }
    }

    static async eventSearch(params: {
        query?: string,
        custom?: { [key: string]: string; }
    }): Promise<void> {
        if (Answers.client) {
            return Answers.client.eventSearch(params);
        } else {
            logger.info(() => `No Fabric! eventSearch: ${JSON.stringify(params, null, 4)}`);
        }
    }

    static async eventShare(params: {
        method?: string,
        contentName?: string,
        contentType?: string,
        contentId?: string,
        custom?: { [key: string]: string; }
    }): Promise<void> {
        if (Answers.client) {
            return Answers.client.eventShare(params);
        } else {
            logger.info(() => `No Fabric! eventShare: ${JSON.stringify(params, null, 4)}`);
        }
    }

    static async eventRating(params: {
        rating?: number,
        contentName?: string,
        contentType?: string,
        itemType?: string,
        custom?: { [key: string]: string; }
    }): Promise<void> {
        if (Answers.client) {
            return Answers.client.eventRating(params);
        } else {
            logger.info(() => `No Fabric! eventRating: ${JSON.stringify(params, null, 4)}`);
        }
    }

    static async eventCustom(params: {
        name?: string,
        attributes?: { [key: string]: string; }
    }): Promise<void> {
        if (Answers.client) {
            return Answers.client.eventCustom(params);
        } else {
            logger.info(() => `No Fabric! eventCustom: ${JSON.stringify(params, null, 4)}`);
        }
    }
}
