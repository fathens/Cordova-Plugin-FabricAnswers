import _ from "lodash";
import { Logger } from "log4ts";
import { AnswersClient } from "./client";

const plugin = (window as any).plugin;

const logger = new Logger("S3File");

function isDef(typedec) {
    return !_.isEqual(typedec, 'undefined');
}
const hasPlugin = isDef(typeof plugin) && isDef(typeof plugin.Fabric) && isDef(typeof plugin.Fabric.Answers);

export class Answers implements AnswersClient {
    constructor() {
        this.client = hasPlugin ? plugin.Fabric.Answers : null;
    }

    private client: AnswersClient;

    async eventLogin(params: {
        method?: string,
        success?: boolean,
        custom?: { [key: string]: string; }
    }): Promise<void> {
        if (this.client) {
            return this.client.eventLogin(params);
        } else {
            logger.info(() => `No Fabric here ! set event Login: ${params}`);
        }
    }

    async eventSignUp(params: {
        method?: string,
        success?: boolean,
        custom?: { [key: string]: string; }
    }): Promise<void> {
        if (this.client) {
            return this.client.eventSignUp(params);
        } else {
            logger.info(() => `No Fabric here ! set event SignUp: ${params}`);
        }
    }

    async eventInvite(params: {
        method?: string,
        custom?: { [key: string]: string; }
    }): Promise<void> {
        if (this.client) {
            return this.client.eventInvite(params);
        } else {
            logger.info(() => `No Fabric here ! set event Invite: ${params}`);
        }
    }

    async eventLevelStart(params: {
        levelName?: string,
        custom?: { [key: string]: string; }
    }): Promise<void> {
        if (this.client) {
            return this.client.eventLevelStart(params);
        } else {
            logger.info(() => `No Fabric here ! set event LevelStart: ${params}`);
        }
    }

    async eventLevelEnd(params: {
        levelName?: string,
        success?: boolean,
        custom?: { [key: string]: string; }
    }): Promise<void> {
        if (this.client) {
            return this.client.eventLevelEnd(params);
        } else {
            logger.info(() => `No Fabric here ! set event LevelEnd: ${params}`);
        }
    }

    async eventPurchase(params: {
        itemPrice?: number,
        currency?: string,
        itemName?: string,
        itemType?: string,
        itemId?: string,
        success?: boolean,
        custom?: { [key: string]: string; }
    }): Promise<void> {
        if (this.client) {
            return this.client.eventPurchase(params);
        } else {
            logger.info(() => `No Fabric here ! set event Purchase: ${params}`);
        }
    }

    async eventAddToCart(params: {
        itemPrice?: number,
        currency?: string,
        itemName?: string,
        itemType?: string,
        itemId?: string,
        custom?: { [key: string]: string; }
    }): Promise<void> {
        if (this.client) {
            return this.client.eventAddToCart(params);
        } else {
            logger.info(() => `No Fabric here ! set event AddToCart: ${params}`);
        }
    }

    async eventStartCheckout(params: {
        totalPrice?: number,
        currency?: string,
        itemCount?: number,
        custom?: { [key: string]: string; }
    }): Promise<void> {
        if (this.client) {
            return this.client.eventStartCheckout(params);
        } else {
            logger.info(() => `No Fabric here ! set event StartCheckout: ${params}`);
        }
    }

    async eventContentView(params: {
        contentName?: string,
        contentType?: string,
        contentId?: string,
        custom?: { [key: string]: string; }
    }): Promise<void> {
        if (this.client) {
            return this.client.eventContentView(params);
        } else {
            logger.info(() => `No Fabric here ! set event ContentView: ${params}`);
        }
    }

    async eventShare(params: {
        method?: string,
        contentName?: string,
        contentType?: string,
        contentId?: string,
        custom?: { [key: string]: string; }
    }): Promise<void> {
        if (this.client) {
            return this.client.eventShare(params);
        } else {
            logger.info(() => `No Fabric here ! set event Share: ${params}`);
        }
    }

    async eventRating(params: {
        rating?: number,
        contentName?: string,
        contentType?: string,
        itemType?: string,
        custom?: { [key: string]: string; }
    }): Promise<void> {
        if (this.client) {
            return this.client.eventRating(params);
        } else {
            logger.info(() => `No Fabric here ! set event Rating: ${params}`);
        }
    }

    async eventCustom(params: {
        name?: string,
        attributes?: { [key: string]: string; }
    }): Promise<void> {
        if (this.client) {
            return this.client.eventCustom(params);
        } else {
            logger.info(() => `No Fabric here ! set event Custom: ${params}`);
        }
    }
}
