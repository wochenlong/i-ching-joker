import { Context, Schema } from "koishi";
export interface Config {
}
export declare const Config: Schema<Config>;
export declare const usage = "\u597D\uFF0C\u5411\u673A\u5668\u4EBA\u8F93\u5982\u5173\u952E\u8BCD\uFF1A\u7B97\u5366 \uFF0C\u6765\u7B97\u4E00\u5366\u5427";
export declare function apply(ctx: Context, config: Config): void;
