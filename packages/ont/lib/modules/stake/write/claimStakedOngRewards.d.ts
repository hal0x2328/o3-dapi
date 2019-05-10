interface ClaimStakedOngRewardsInput {
    network: string;
    broadcastOverride?: boolean;
}
interface ClaimStakedOngRewardsOutput {
    txid: string;
    nodeUrl: string;
}
export declare function claimStakedOngRewards(data: ClaimStakedOngRewardsInput): Promise<ClaimStakedOngRewardsOutput>;
export {};
//# sourceMappingURL=claimStakedOngRewards.d.ts.map