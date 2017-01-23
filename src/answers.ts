import _ from "lodash";
import { Logger } from "log4ts";
import { AnswersClient } from "./client";

const plugin = (window as any).plugin;

const logger = new Logger("S3File");

function isDef(typedec) {
    return !_.isEqual(typedec, 'undefined');
}
const hasPlugin = isDef(typeof plugin) && isDef(typeof plugin.Fabric) && isDef(typeof plugin.Fabric.Answers);
const client: AnswersClient = hasPlugin ? plugin.Fabric.Answers : null;

export class Answers {
    static async eventLogin(params: {
        method?: string,
        success?: boolean,
        custom?: { [key: string]: string; }
    }): Promise<void> {
        if (client) {
            return client.eventLogin(params);
        } else {
            logger.info(() => `No Fabric here ! set event Login: ${params}`);
        }
    }

    static async eventSignUp(params: {
        method?: string,
        success?: boolean,
        custom?: { [key: string]: string; }
    }): Promise<void> {
        if (client) {
            return client.eventSignUp(params);
        } else {
            logger.info(() => `No Fabric here ! set event SignUp: ${params}`);
        }
    }

    static async eventInvite(params: {
        method?: string,
        custom?: { [key: string]: string; }
    }): Promise<void> {
        if (client) {
            return client.eventInvite(params);
        } else {
            logger.info(() => `No Fabric here ! set event Invite: ${params}`);
        }
    }

    static async eventLevelStart(params: {
        levelName?: string,
        custom?: { [key: string]: string; }
    }): Promise<void> {
        if (client) {
            return client.eventLevelStart(params);
        } else {
            logger.info(() => `No Fabric here ! set event LevelStart: ${params}`);
        }
    }

    static async eventLevelEnd(params: {
        levelName?: string,
        success?: boolean,
        custom?: { [key: string]: string; }
    }): Promise<void> {
        if (client) {
            return client.eventLevelEnd(params);
        } else {
            logger.info(() => `No Fabric here ! set event LevelEnd: ${params}`);
        }
    }

    static async eventPurchase(params: {
        itemPrice?: number,
        currency?: string,
        itemName?: string,
        itemType?: string,
        itemId?: string,
        success?: boolean,
        custom?: { [key: string]: string; }
    }): Promise<void> {
        if (client) {
            return client.eventPurchase(params);
        } else {
            logger.info(() => `No Fabric here ! set event Purchase: ${params}`);
        }
    }

    static async eventAddToCart(params: {
        itemPrice?: number,
        currency?: string,
        itemName?: string,
        itemType?: string,
        itemId?: string,
        custom?: { [key: string]: string; }
    }): Promise<void> {
        if (client) {
            return client.eventAddToCart(params);
        } else {
            logger.info(() => `No Fabric here ! set event AddToCart: ${params}`);
        }
    }

    static async eventStartCheckout(params: {
        totalPrice?: number,
        currency?: string,
        itemCount?: number,
        custom?: { [key: string]: string; }
    }): Promise<void> {
        if (client) {
            return client.eventStartCheckout(params);
        } else {
            logger.info(() => `No Fabric here ! set event StartCheckout: ${params}`);
        }
    }

    static async eventContentView(params: {
        contentName?: string,
        contentType?: string,
        contentId?: string,
        custom?: { [key: string]: string; }
    }): Promise<void> {
        if (client) {
            return client.eventContentView(params);
        } else {
            logger.info(() => `No Fabric here ! set event ContentView: ${params}`);
        }
    }

    static async eventShare(params: {
        method?: string,
        contentName?: string,
        contentType?: string,
        contentId?: string,
        custom?: { [key: string]: string; }
    }): Promise<void> {
        if (client) {
            return client.eventShare(params);
        } else {
            logger.info(() => `No Fabric here ! set event Share: ${params}`);
        }
    }

    static async eventRating(params: {
        rating?: number,
        contentName?: string,
        contentType?: string,
        itemType?: string,
        custom?: { [key: string]: string; }
    }): Promise<void> {
        if (client) {
            return client.eventRating(params);
        } else {
            logger.info(() => `No Fabric here ! set event Rating: ${params}`);
        }
    }

    static async eventCustom(params: {
        name?: string,
        attributes?: { [key: string]: string; }
    }): Promise<void> {
        if (client) {
            return client.eventCustom(params);
        } else {
            logger.info(() => `No Fabric here ! set event Custom: ${params}`);
        }
    }
}
