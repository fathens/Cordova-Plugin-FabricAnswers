export interface AnswersClient {
    eventLogin(params: {
        method?: string,
        success?: boolean,
        custom?: { [key: string]: string; }
    }): Promise<void>;

    eventSignUp(params: {
        method?: string,
        success?: boolean,
        custom?: { [key: string]: string; }
    }): Promise<void>;

    eventInvite(params: {
        method?: string,
        custom?: { [key: string]: string; }
    }): Promise<void>;

    eventLevelStart(params: {
        levelName?: string,
        custom?: { [key: string]: string; }
    }): Promise<void>;

    eventLevelEnd(params: {
        levelName?: string,
        success?: boolean,
        score?: number,
        custom?: { [key: string]: string; }
    }): Promise<void>;

    eventPurchase(params: {
        itemPrice?: number,
        currency?: Currency,
        itemName?: string,
        itemType?: string,
        itemId?: string,
        success?: boolean,
        custom?: { [key: string]: string; }
    }): Promise<void>;

    eventAddToCart(params: {
        itemPrice?: number,
        currency?: Currency,
        itemName?: string,
        itemType?: string,
        itemId?: string,
        custom?: { [key: string]: string; }
    }): Promise<void>;

    eventStartCheckout(params: {
        totalPrice?: number,
        currency?: Currency,
        itemCount?: number,
        custom?: { [key: string]: string; }
    }): Promise<void>;

    eventContentView(params: {
        contentName?: string,
        contentType?: string,
        contentId?: string,
        custom?: { [key: string]: string; }
    }): Promise<void>;

    eventSearch(params: {
        query?: string,
        custom?: { [key: string]: string; }
    }): Promise<void>;

    eventShare(params: {
        method?: string,
        contentName?: string,
        contentType?: string,
        contentId?: string,
        custom?: { [key: string]: string; }
    }): Promise<void>;

    eventRating(params: {
        rating?: number,
        contentName?: string,
        contentType?: string,
        contentId?: string,
        custom?: { [key: string]: string; }
    }): Promise<void>;

    eventCustom(params: {
        name?: string,
        attributes?: { [key: string]: string; }
    }): Promise<void>;
}

export type Currency =
  "AED" // United Arab Emirates Dirham
| "AFN" // Afghanistan Afghani
| "ALL" // Albania Lek
| "AMD" // Armenia Dram
| "ANG" // Netherlands Antilles Guilder
| "AOA" // Angola Kwanza
| "ARS" // Argentina Peso
| "AUD" // Australia Dollar
| "AWG" // Aruba Guilder
| "AZN" // Azerbaijan New Manat
| "BAM" // Bosnia and Herzegovina Convertible Marka
| "BBD" // Barbados Dollar
| "BDT" // Bangladesh Taka
| "BGN" // Bulgaria Lev
| "BHD" // Bahrain Dinar
| "BIF" // Burundi Franc
| "BMD" // Bermuda Dollar
| "BND" // Brunei Darussalam Dollar
| "BOB" // Bolivia Bolíviano
| "BRL" // Brazil Real
| "BSD" // Bahamas Dollar
| "BTC" // Bitcoin
| "BTN" // Bhutan Ngultrum
| "BWP" // Botswana Pula
| "BYR" // Belarus Ruble
| "BZD" // Belize Dollar
| "CAD" // Canada Dollar
| "CDF" // Congo/Kinshasa Franc
| "CHF" // Switzerland Franc
| "CLP" // Chile Peso
| "CNY" // China Yuan Renminbi
| "COP" // Colombia Peso
| "CRC" // Costa Rica Colon
| "CUC" // Cuba Convertible Peso
| "CUP" // Cuba Peso
| "CVE" // Cape Verde Escudo
| "CZK" // Czech Republic Koruna
| "DJF" // Djibouti Franc
| "DKK" // Denmark Krone
| "DOP" // Dominican Republic Peso
| "DZD" // Algeria Dinar
| "EGP" // Egypt Pound
| "ERN" // Eritrea Nakfa
| "ETB" // Ethiopia Birr
| "EUR" // Euro Member Countries
| "FJD" // Fiji Dollar
| "FKP" // Falkland Islands (Malvinas) Pound
| "GBP" // United Kingdom Pound
| "GEL" // Georgia Lari
| "GHS" // Ghana Cedi
| "GIP" // Gibraltar Pound
| "GMD" // Gambia Dalasi
| "GNF" // Guinea Franc
| "GTQ" // Guatemala Quetzal
| "GYD" // Guyana Dollar
| "HKD" // Hong Kong Dollar
| "HNL" // Honduras Lempira
| "HRK" // Croatia Kuna
| "HTG" // Haiti Gourde
| "HUF" // Hungary Forint
| "IDR" // Indonesia Rupiah
| "ILS" // Israel Shekel
| "INR" // India Rupee
| "IQD" // Iraq Dinar
| "IRR" // Iran Rial
| "ISK" // Iceland Krona
| "JMD" // Jamaica Dollar
| "JOD" // Jordan Dinar
| "JPY" // Japan Yen
| "KES" // Kenya Shilling
| "KGS" // Kyrgyzstan Som
| "KHR" // Cambodia Riel
| "KMF" // Comoros Franc
| "KPW" // Korea (North) Won
| "KRW" // Korea (South) Won
| "KWD" // Kuwait Dinar
| "KYD" // Cayman Islands Dollar
| "KZT" // Kazakhstan Tenge
| "LAK" // Laos Kip
| "LBP" // Lebanon Pound
| "LKR" // Sri Lanka Rupee
| "LRD" // Liberia Dollar
| "LSL" // Lesotho Loti
| "LYD" // Libya Dinar
| "MAD" // Morocco Dirham
| "MDL" // Moldova Leu
| "MGA" // Madagascar Ariary
| "MKD" // Macedonia Denar
| "MMK" // Myanmar (Burma) Kyat
| "MNT" // Mongolia Tughrik
| "MOP" // Macau Pataca
| "MRO" // Mauritania Ouguiya
| "MUR" // Mauritius Rupee
| "MVR" // Maldives (Maldive Islands) Rufiyaa
| "MWK" // Malawi Kwacha
| "MXN" // Mexico Peso
| "MYR" // Malaysia Ringgit
| "MZN" // Mozambique Metical
| "NAD" // Namibia Dollar
| "NGN" // Nigeria Naira
| "NIO" // Nicaragua Cordoba
| "NOK" // Norway Krone
| "NPR" // Nepal Rupee
| "NZD" // New Zealand Dollar
| "OMR" // Oman Rial
| "PAB" // Panama Balboa
| "PEN" // Peru Sol
| "PGK" // Papua New Guinea Kina
| "PHP" // Philippines Peso
| "PKR" // Pakistan Rupee
| "PLN" // Poland Zloty
| "PYG" // Paraguay Guarani
| "QAR" // Qatar Riyal
| "RON" // Romania New Leu
| "RSD" // Serbia Dinar
| "RUB" // Russia Ruble
| "RWF" // Rwanda Franc
| "SAR" // Saudi Arabia Riyal
| "SBD" // Solomon Islands Dollar
| "SCR" // Seychelles Rupee
| "SDG" // Sudan Pound
| "SEK" // Sweden Krona
| "SGD" // Singapore Dollar
| "SHP" // Saint Helena Pound
| "SLL" // Sierra Leone Leone
| "SOS" // Somalia Shilling
| "SRD" // Suriname Dollar
| "STD" // São Tomé and Príncipe Dobra
| "SVC" // El Salvador Colon
| "SYP" // Syria Pound
| "SZL" // Swaziland Lilangeni
| "THB" // Thailand Baht
| "TJS" // Tajikistan Somoni
| "TMT" // Turkmenistan Manat
| "TND" // Tunisia Dinar
| "TOP" // Tonga Pa’anga
| "TRY" // Turkey Lira
| "TTD" // Trinidad and Tobago Dollar
| "TVD" // Tuvalu Dollar
| "TWD" // Taiwan New Dollar
| "TZS" // Tanzania Shilling
| "UAH" // Ukraine Hryvnia
| "UGX" // Uganda Shilling
| "USD" // United States Dollar
| "UYU" // Uruguay Peso
| "UZS" // Uzbekistan Som
| "VEF" // Venezuela Bolivar
| "VND" // Viet Nam Dong
| "VUV" // Vanuatu Vatu
| "WST" // Samoa Tala
| "XAF" // Communauté Financière Africaine (BEAC) CFA Franc BEAC
| "XCD" // East Caribbean Dollar
| "XOF" // Communauté Financière Africaine (BCEAO) Franc
| "XPF" // Comptoirs Français du Pacifique (CFP) Franc
| "YER" // Yemen Rial
| "ZAR" // South Africa Rand
| "ZMW" // Zambia Kwacha
| "ZWD" // Zimbabwe Dollar
;
