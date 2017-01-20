export interface AnswersClient {
    eventLogin(params: {
        method?: string,
        success?: boolean,
        custom?: { [key: string]: string; }
    }): void;

    eventSignUp(params: {
        method?: string,
        success?: boolean,
        custom?: { [key: string]: string; }
    }): void;

    eventInvite(params: {
        method?: string,
        custom?: { [key: string]: string; }
    }): void;

    eventLevelStart(params: {
        levelName?: string,
        custom?: { [key: string]: string; }
    }): void;

    eventLevelEnd(params: {
        levelName?: string,
        success?: boolean,
        custom?: { [key: string]: string; }
    }): void;

    eventPurchase(params: {
        itemPrice?: number,
        currency?: string,
        itemName?: string,
        itemType?: string,
        itemId?: string,
        success?: boolean,
        custom?: { [key: string]: string; }
    }): void;

    eventAddToCart(params: {
        itemPrice?: number,
        currency?: string,
        itemName?: string,
        itemType?: string,
        itemId?: string,
        custom?: { [key: string]: string; }
    }): void;

    eventStartCheckout(params: {
        totalPrice?: number,
        currency?: string,
        itemCount?: number,
        custom?: { [key: string]: string; }
    }): void;

    eventContentView(params: {
        contentName?: string,
        contentType?: string,
        contentId?: string,
        custom?: { [key: string]: string; }
    }): void;

    eventShare(params: {
        method?: string,
        contentName?: string,
        contentType?: string,
        contentId?: string,
        custom?: { [key: string]: string; }
    }): void;

    eventRating(params: {
        rating?: number,
        contentName?: string,
        contentType?: string,
        itemType?: string,
        custom?: { [key: string]: string; }
    }): void;

    eventCustom(params: {
        name?: string,
        attributes?: { [key: string]: string; }
    }): void;
}
