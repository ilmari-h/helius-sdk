/// <reference types="node" />
/// <reference types="node" />
import { BlockhashWithExpiryBlockHeight, VersionedTransaction, AddressLookupTableAccount, Transaction, TransactionInstruction, TransactionSignature, Commitment, PublicKey, AccountInfo, GetLatestBlockhashConfig, RpcResponseAndContext, SignatureResult, Blockhash, Connection, ParsedAccountData, SendOptions, Signer, SerializeConfig } from '@solana/web3.js';
import { DAS } from './types/das-types';
import { GetPriorityFeeEstimateRequest, GetPriorityFeeEstimateResponse, JitoRegion, PollTransactionOptions, SmartTransactionContext, HeliusSendOptions } from './types';
export type SendAndConfirmTransactionResponse = {
    signature: TransactionSignature;
    confirmResponse: RpcResponseAndContext<SignatureResult>;
    blockhash: Blockhash;
    lastValidBlockHeight: number;
};
/**
 * The beefed up RPC client from Helius SDK
 */
export declare class RpcClient {
    protected readonly connection: Connection;
    protected readonly id?: string | undefined;
    constructor(connection: Connection, id?: string | undefined);
    /**
     * Request an allocation of lamports to the specified address
     * @returns {Promise<SendAndConfirmTransactionResponse>}
     */
    airdrop(publicKey: PublicKey, lamports: number, commitment?: Commitment): Promise<SendAndConfirmTransactionResponse>;
    /**
     * Fetch the latest blockhash from the cluster
     * @returns {Promise<BlockhashWithExpiryBlockHeight>}
     */
    getLatestBlockhash(commitmentOrConfig?: Commitment | GetLatestBlockhashConfig): Promise<BlockhashWithExpiryBlockHeight>;
    /**
     * Returns the current transactions per second (TPS) rate — including voting transactions.
     *
     * @returns {Promise<number>} A promise that resolves to the current TPS rate.
     * @throws {Error} If there was an error calling the `getRecentPerformanceSamples` method.
     */
    getCurrentTPS(): Promise<number>;
    /**
     * Returns all the stake accounts for a given public key
     *
     * @returns {Promise<number>} A promise that resolves to the current TPS rate.
     * @throws {Error} If there was an error calling the `getStakeAccounts` method.
     */
    getStakeAccounts(wallet: string): Promise<any>;
    /**
     * Returns all the token accounts for a given mint address (ONLY FOR SPL TOKENS)
     *
     * @returns {Promise<{pubkey: PublicKey; account: AccountInfo<ParsedAccountData | Buffer}[]>} A promise that resolves to an array of accountInfo
     * @throws {Error} If there was an error calling the `getTokenHolders` method.
     */
    getTokenHolders(mintAddress: string): Promise<{
        pubkey: PublicKey;
        account: AccountInfo<ParsedAccountData | Buffer>;
    }[]>;
    /**
     * Get a single asset by ID.
     * @param {DAS.GetAssetRequest | string} id - Asset ID
     * @returns {Promise<DAS.GetAssetResponse>}
     * @throws {Error}
     */
    getAsset(params: DAS.GetAssetRequest | string): Promise<DAS.GetAssetResponse>;
    /**
     * Get RWA Asset by mint.
     * @param {DAS.GetRwaAssetRequest} - RWA Asset ID
     * @returns {Promise<DAS.GetRwaAssetResponse>}
     * @throws {Error}
     */
    getRwaAsset(params: DAS.GetRwaAssetRequest): Promise<DAS.GetRwaAssetResponse>;
    /**
     * Get multiple assets.
     * @returns {Promise<DAS.GetAssetResponse[]>}
     * @throws {Error}
     */
    getAssetBatch(params: DAS.GetAssetBatchRequest): Promise<DAS.GetAssetResponse[]>;
    /**
     * Get Asset proof.
     * @returns {Promise<DAS.GetAssetProofResponse>}
     * @throws {Error}
     */
    getAssetProof(params: DAS.GetAssetProofRequest): Promise<DAS.GetAssetProofResponse>;
    /**
     * Get Assets By group.
     * @returns {Promise<DAS.GetAssetResponseList>}
     * @throws { Error }
     */
    getAssetsByGroup(params: DAS.AssetsByGroupRequest): Promise<DAS.GetAssetResponseList>;
    /**
     * Get all assets (compressed and regular) for a public key.
     * @returns {Promise<DAS.GetAssetResponseList>}
     * @throws {Error}
     */
    getAssetsByOwner(params: DAS.AssetsByOwnerRequest): Promise<DAS.GetAssetResponseList>;
    /**
     * Request assets for a given creator.
     * @returns {Promise<DAS.GetAssetResponseList>}
     * @throws {Error}
     */
    getAssetsByCreator(params: DAS.AssetsByCreatorRequest): Promise<DAS.GetAssetResponseList>;
    /**
     * Get assets by authority.
     * @returns {Promise<DAS.GetAssetResponseList>}
     * @throws {Error}
     */
    getAssetsByAuthority(params: DAS.AssetsByAuthorityRequest): Promise<DAS.GetAssetResponseList>;
    /**
     * Search Assets
     * @returns {Promise<DAS.GetAssetResponseList>}
     * @throws {Error}
     */
    searchAssets(params: DAS.SearchAssetsRequest): Promise<DAS.GetAssetResponseList>;
    /**
     * Get transaction history for the asset.
     * @returns {Promise<GetSignatureForAssetResponse>}
     * @throws {Error}
     */
    getSignaturesForAsset(params: DAS.GetSignaturesForAssetRequest): Promise<DAS.GetSignaturesForAssetResponse>;
    /**
     * Get priority fee estimate
     * @returns {Promise<GetPriorityFeeEstimateResponse>}
     * @throws {Error}
     */
    getPriorityFeeEstimate(params: GetPriorityFeeEstimateRequest): Promise<GetPriorityFeeEstimateResponse>;
    /**
     * Simulate a transaction to get the total compute units consumed
     * @param {TransactionInstruction[]} instructions - The transaction instructions
     * @param {PublicKey} payer - The public key of the payer
     * @param {AddressLookupTableAccount[]} lookupTables - The address lookup tables
     * @param {Signer[]} signers - Optional signers for the transaction
     * @returns {Promise<number | null>} - The compute units consumed, or null if unsuccessful
     */
    getComputeUnits(instructions: TransactionInstruction[], payer: PublicKey, lookupTables: AddressLookupTableAccount[], signers?: Signer[]): Promise<number | null>;
    /**
     * Poll a transaction to check whether it has been confirmed
     * @param {TransactionSignature} txtSig - The transaction signature
     * @param {PollTransactionOptions} pollOptions - Optional parameters for polling
     * @returns {Promise<TransactionSignature>} - The confirmed transaction signature or an error if the confirmation times out
     */
    pollTransactionConfirmation(txtSig: TransactionSignature, pollOptions?: PollTransactionOptions): Promise<TransactionSignature>;
    /**
     * Create a smart transaction with the provided configuration
     * @param {TransactionInstruction[]} instructions - The transaction instructions
     * @param {Signer[]} signers - The transaction's signers. The first signer should be the fee payer
     * @param {AddressLookupTableAccount[]} lookupTables - The lookup tables to be included in a versioned transaction. Defaults to `[]`
     * @param {Signer} feePayer - Optional fee payer separate from the signers
     * @param {SerializeConfig} serializeOptions - Options for transaction serialization. This applies only to legacy transactions. Defaults to `{ requireAllSignatures = true, verifySignatures: true }`
     * @returns {Promise<SmartTransactionContext>} - The transaction with blockhash, blockheight and slot
     */
    createSmartTransaction(instructions: TransactionInstruction[], signers: Signer[], lookupTables?: AddressLookupTableAccount[], feePayer?: Signer, serializeOptions?: SerializeConfig): Promise<SmartTransactionContext>;
    /**
     * Build and send an optimized transaction, and handle its confirmation status
     * @param {TransactionInstruction[]} instructions - The transaction instructions
     * @param {Signer[]} signers - The transaction's signers. The first signer should be the fee payer
     * @param {AddressLookupTableAccount[]} lookupTables - The lookup tables to be included in a versioned transaction. Defaults to `[]`
     * @param {SendOptions & { feePayer?: Signer; lastValidBlockHeightOffset?: number }} sendOptions - Options for sending the transaction, including an optional feePayer and lastValidBlockHeightOffset. Defaults to `{ skipPreflight: false; lastValidBlockheightOffset: 150 }`
     * @returns {Promise<TransactionSignature>} - The transaction signature
     */
    sendSmartTransaction(instructions: TransactionInstruction[], signers: Signer[], lookupTables?: AddressLookupTableAccount[], sendOptions?: SendOptions & {
        feePayer?: Signer;
        lastValidBlockHeightOffset?: number;
    }): Promise<TransactionSignature>;
    /**
     * Add a tip instruction to the last instruction in the bundle provided
     * @param {TransactionInstruction[]} instructions - The transaction instructions
     * @param {PublicKey} feePayer - The public key of the fee payer
     * @param {string} tipAccount - The public key of the tip account
     * @param {number} tipAmount - The amount of lamports to tip
     */
    addTipInstruction(instructions: TransactionInstruction[], feePayer: PublicKey, tipAccount: string, tipAmount: number): void;
    /**
     * Create a smart transaction with a Jito tip
     * @param {TransactionInstruction[]} instructions - The transaction instructions
     * @param {Signer[]} signers - The transaction's signers. The first signer should be the fee payer if a separate one isn't provided
     * @param {AddressLookupTableAccount[]} lookupTables - The lookup tables to be included. Defaults to `[]`
     * @param {number} tipAmount - The amount of lamports to tip. Defaults to 1000
     * @param {Signer} feePayer - Optional fee payer separate from the signers
     * @returns {Promise<{ serializedTransaction: string, lastValidBlockHeight: number }>} - The serialized transaction
     */
    createSmartTransactionWithTip(instructions: TransactionInstruction[], signers: Signer[], lookupTables?: AddressLookupTableAccount[], tipAmount?: number, feePayer?: Signer): Promise<SmartTransactionContext>;
    /**
     * Send a bundle of transactions to the Jito Block Engine
     * @param {string[]} serializedTransactions - The serialized transactions in the bundle
     * @param {string} jitoApiUrl - The Jito Block Engine API URL
     * @returns {Promise<string>} - The bundle ID
     */
    sendJitoBundle(serializedTransactions: string[], jitoApiUrl: string): Promise<string>;
    /**
     * Get the status of Jito bundles
     * @param {string[]} bundleIds - An array of bundle IDs to check the status for
     * @param {string} jitoApiUrl - The Jito Block Engine API URL
     * @returns {Promise<any>} - The status of the bundles
     */
    getBundleStatuses(bundleIds: string[], jitoApiUrl: string): Promise<any>;
    /**
     * Send a smart transaction as a Jito bundle with a tip
     * @param {TransactionInstruction[]} instructions - The transaction instructions
     * @param {Signer[]} signers - The transaction's signers. The first signer should be the fee payer if a separate one isn't provided
     * @param {AddressLookupTableAccount[]} lookupTables - The lookup tables to be included. Defaults to `[]`
     * @param {number} tipAmount - The amount of lamports to tip. Defaults to 1000
     * @param {JitoRegion} region - The Jito Block Engine region. Defaults to "Default" (i.e., https://mainnet.block-engine.jito.wtf)
     * @param {Signer} feePayer - Optional fee payer separate from the signers
     * @param {number} lastValidBlockHeightOffset - The offset to add to lastValidBlockHeight. Defaults to 150
     * @returns {Promise<string>} - The bundle ID
     */
    sendSmartTransactionWithTip(instructions: TransactionInstruction[], signers: Signer[], lookupTables?: AddressLookupTableAccount[], tipAmount?: number, region?: JitoRegion, feePayer?: Signer, lastValidBlockHeightOffset?: number): Promise<string>;
    /**
     * Get information about all the edition NFTs for a specific master NFT
     * @returns {Promise<DAS.GetNftEditionsResponse>}
     * @throws {Error}
     */
    getNftEditions(params: DAS.GetNftEditionsRequest): Promise<DAS.GetNftEditionsResponse>;
    /**
     * Get information about all token accounts for a specific mint or a specific owner
     * @returns {Promise<DAS.GetTokenAccountsResponse>}
     * @throws {Error}
     */
    getTokenAccounts(params: DAS.GetTokenAccountsRequest): Promise<DAS.GetTokenAccountsResponse>;
    /**
     * Send a transaction
     * @param {Transaction} transaction - The transaction to send
     * @param {HeliusSendOptions} options - Options for sending the transaction
     * @returns {Promise<TransactionSignature>} - The transaction signature
     */
    sendTransaction(transaction: Transaction | VersionedTransaction, options?: HeliusSendOptions): Promise<TransactionSignature>;
}
