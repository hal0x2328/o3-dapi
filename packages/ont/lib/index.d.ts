import { getAccount } from './modules/asset/getAccount';
import { getPublicKey } from './modules/asset/getPublicKey';
import { send } from './modules/asset/send';
import { getIdentity } from './modules/identity/getIdentity';
import { getDDO } from './modules/identity/getDDO';
import { addAttributes } from './modules/identity/addAttributes';
import { removeAttribute } from './modules/identity/removeAttribute';
import { signMessage } from './modules/message/signMessage';
import { signMessageHash } from './modules/message/signMessageHash';
import { verifyMessage } from './modules/message/verifyMessage';
import { verifyMessageHash } from './modules/message/verifyMessageHash';
import { getNodeCount } from './modules/network/getNodeCount';
import { getBlockHeight } from './modules/network/getBlockHeight';
import { getMerkleProof } from './modules/network/getMerkleProof';
import { getStorage } from './modules/network/getStorage';
import { getAllowance } from './modules/network/getAllowance';
import { getBlock } from './modules/network/getBlock';
import { getTransaction } from './modules/network/getTransaction';
import { getNetworks } from './modules/network/getNetworks';
import { getBalance } from './modules/network/getBalance';
import { getUnboundOng } from './modules/network/getUnboundOng';
import { getContract } from './modules/network/getContract';
import { getSmartCodeEvent } from './modules/network/getSmartCodeEvent';
import { getBlockHeightByTxHash } from './modules/network/getBlockHeightByTxHash';
import { getBlockHash } from './modules/network/getBlockHash';
import { getBlockTxsByHeight } from './modules/network/getBlockTxsByHeight';
import { getGasPrice } from './modules/network/getGasPrice';
import { getGrantOng } from './modules/network/getGrantOng';
import { getMempoolTxCount } from './modules/network/getMempoolTxCount';
import { getMempoolTxState } from './modules/network/getMempoolTxState';
import { getVersion } from './modules/network/getVersion';
import { getProvider } from './modules/provider/getProvider';
import { invoke } from './modules/smartContract/invoke';
import { invokeRead } from './modules/smartContract/invokeRead';
import { deploy } from './modules/smartContract/deploy';
import { ParameterType } from './modules/smartContract/common';
import { addEventListener, removeEventListener } from './modules/eventListener';
import { EventName } from './constants';
declare class O3dapiOnt {
    static blockchain: string;
    isAvailable: boolean;
    getAccount: typeof getAccount;
    getPublicKey: typeof getPublicKey;
    send: typeof send;
    getIdentity: typeof getIdentity;
    getDDO: typeof getDDO;
    addAttributes: typeof addAttributes;
    removeAttribute: typeof removeAttribute;
    signMessage: typeof signMessage;
    signMessageHash: typeof signMessageHash;
    verifyMessage: typeof verifyMessage;
    verifyMessageHash: typeof verifyMessageHash;
    getNodeCount: typeof getNodeCount;
    getBlockHeight: typeof getBlockHeight;
    getMerkleProof: typeof getMerkleProof;
    getStorage: typeof getStorage;
    getAllowance: typeof getAllowance;
    getBlock: typeof getBlock;
    getTransaction: typeof getTransaction;
    getNetworks: typeof getNetworks;
    getBalance: typeof getBalance;
    getUnboundOng: typeof getUnboundOng;
    getContract: typeof getContract;
    getSmartCodeEvent: typeof getSmartCodeEvent;
    getBlockHeightByTxHash: typeof getBlockHeightByTxHash;
    getBlockHash: typeof getBlockHash;
    getBlockTxsByHeight: typeof getBlockTxsByHeight;
    getGasPrice: typeof getGasPrice;
    getGrantOng: typeof getGrantOng;
    getMempoolTxCount: typeof getMempoolTxCount;
    getMempoolTxState: typeof getMempoolTxState;
    getVersion: typeof getVersion;
    getProvider: typeof getProvider;
    invoke: typeof invoke;
    invokeRead: typeof invokeRead;
    deploy: typeof deploy;
    addEventListener: typeof addEventListener;
    removeEventListener: typeof removeEventListener;
    Constants: {
        EventName: typeof EventName;
        ParameterType: typeof ParameterType;
    };
    constructor(sendMessageMethod: any, addEventListenerMethod: any);
}
export default O3dapiOnt;
//# sourceMappingURL=index.d.ts.map