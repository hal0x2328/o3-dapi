import connect from './modules/connect';
declare class O3dapiCoinbase {
    static blockchain: string;
    connect: typeof connect;
    constructor(sendMessageMethod: any);
}
export default O3dapiCoinbase;
export declare type connect = () => Promise<void>;
//# sourceMappingURL=index.d.ts.map