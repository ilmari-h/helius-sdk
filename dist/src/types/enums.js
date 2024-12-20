"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JITO_API_URLS = exports.JITO_TIP_ACCOUNTS = exports.UiTransactionEncoding = exports.PriorityLevel = exports.MintApiAuthority = exports.Group = exports.SearchConditionType = exports.AssetSortDirection = exports.AssetSortBy = exports.Context = exports.UseMethods = exports.Scope = exports.RoyaltyModel = exports.OwnershipModel = exports.Interface = exports.TokenStandard = exports.Address = exports.ProgramName = exports.Source = exports.TransactionContext = exports.NftEventTypes = exports.Collections = exports.TransactionType = exports.AccountWebhookEncoding = exports.TxnStatus = exports.WebhookType = void 0;
var WebhookType;
(function (WebhookType) {
    WebhookType["ENHANCED"] = "enhanced";
    WebhookType["RAW"] = "raw";
    WebhookType["DISCORD"] = "discord";
    WebhookType["ENHANCED_DEVNET"] = "enhancedDevnet";
    WebhookType["RAW_DEVNET"] = "rawDevnet";
    WebhookType["DISCORD_DEVNET"] = "discordDevnet";
})(WebhookType = exports.WebhookType || (exports.WebhookType = {}));
var TxnStatus;
(function (TxnStatus) {
    TxnStatus["ALL"] = "all";
    TxnStatus["SUCCESS"] = "success";
    TxnStatus["FAILED"] = "failed";
})(TxnStatus = exports.TxnStatus || (exports.TxnStatus = {}));
var AccountWebhookEncoding;
(function (AccountWebhookEncoding) {
    AccountWebhookEncoding["JSON_PARSED"] = "jsonParsed";
})(AccountWebhookEncoding = exports.AccountWebhookEncoding || (exports.AccountWebhookEncoding = {}));
var TransactionType;
(function (TransactionType) {
    TransactionType["ANY"] = "ANY";
    TransactionType["UNKNOWN"] = "UNKNOWN";
    TransactionType["NFT_BID"] = "NFT_BID";
    TransactionType["NFT_GLOBAL_BID"] = "NFT_GLOBAL_BID";
    TransactionType["NFT_GLOBAL_BID_CANCELLED"] = "NFT_GLOBAL_BID_CANCELLED";
    TransactionType["NFT_BID_CANCELLED"] = "NFT_BID_CANCELLED";
    TransactionType["NFT_LISTING"] = "NFT_LISTING";
    TransactionType["NFT_CANCEL_LISTING"] = "NFT_CANCEL_LISTING";
    TransactionType["NFT_SALE"] = "NFT_SALE";
    TransactionType["NFT_MINT"] = "NFT_MINT";
    TransactionType["NFT_AUCTION_CREATED"] = "NFT_AUCTION_CREATED";
    TransactionType["NFT_AUCTION_UPDATED"] = "NFT_AUCTION_UPDATED";
    TransactionType["NFT_AUCTION_CANCELLED"] = "NFT_AUCTION_CANCELLED";
    TransactionType["NFT_PARTICIPATION_REWARD"] = "NFT_PARTICIPATION_REWARD";
    TransactionType["NFT_MINT_REJECTED"] = "NFT_MINT_REJECTED";
    TransactionType["CREATE_STORE"] = "CREATE_STORE";
    TransactionType["WHITELIST_CREATOR"] = "WHITELIST_CREATOR";
    TransactionType["ADD_TO_WHITELIST"] = "ADD_TO_WHITELIST";
    TransactionType["REMOVE_FROM_WHITELIST"] = "REMOVE_FROM_WHITELIST";
    TransactionType["AUCTION_MANAGER_CLAIM_BID"] = "AUCTION_MANAGER_CLAIM_BID";
    TransactionType["EMPTY_PAYMENT_ACCOUNT"] = "EMPTY_PAYMENT_ACCOUNT";
    TransactionType["UPDATE_PRIMARY_SALE_METADATA"] = "UPDATE_PRIMARY_SALE_METADATA";
    TransactionType["ADD_TOKEN_TO_VAULT"] = "ADD_TOKEN_TO_VAULT";
    TransactionType["ACTIVATE_VAULT"] = "ACTIVATE_VAULT";
    TransactionType["INIT_VAULT"] = "INIT_VAULT";
    TransactionType["INIT_BANK"] = "INIT_BANK";
    TransactionType["INIT_STAKE"] = "INIT_STAKE";
    TransactionType["MERGE_STAKE"] = "MERGE_STAKE";
    TransactionType["SPLIT_STAKE"] = "SPLIT_STAKE";
    TransactionType["SET_BANK_FLAGS"] = "SET_BANK_FLAGS";
    TransactionType["SET_VAULT_LOCK"] = "SET_VAULT_LOCK";
    TransactionType["UPDATE_VAULT_OWNER"] = "UPDATE_VAULT_OWNER";
    TransactionType["UPDATE_BANK_MANAGER"] = "UPDATE_BANK_MANAGER";
    TransactionType["RECORD_RARITY_POINTS"] = "RECORD_RARITY_POINTS";
    TransactionType["ADD_RARITIES_TO_BANK"] = "ADD_RARITIES_TO_BANK";
    TransactionType["INIT_FARM"] = "INIT_FARM";
    TransactionType["INIT_FARMER"] = "INIT_FARMER";
    TransactionType["REFRESH_FARMER"] = "REFRESH_FARMER";
    TransactionType["UPDATE_FARM"] = "UPDATE_FARM";
    TransactionType["AUTHORIZE_FUNDER"] = "AUTHORIZE_FUNDER";
    TransactionType["DEAUTHORIZE_FUNDER"] = "DEAUTHORIZE_FUNDER";
    TransactionType["FUND_REWARD"] = "FUND_REWARD";
    TransactionType["CANCEL_REWARD"] = "CANCEL_REWARD";
    TransactionType["LOCK_REWARD"] = "LOCK_REWARD";
    TransactionType["PAYOUT"] = "PAYOUT";
    TransactionType["VALIDATE_SAFETY_DEPOSIT_BOX_V2"] = "VALIDATE_SAFETY_DEPOSIT_BOX_V2";
    TransactionType["SET_AUTHORITY"] = "SET_AUTHORITY";
    TransactionType["INIT_AUCTION_MANAGER_V2"] = "INIT_AUCTION_MANAGER_V2";
    TransactionType["UPDATE_EXTERNAL_PRICE_ACCOUNT"] = "UPDATE_EXTERNAL_PRICE_ACCOUNT";
    TransactionType["AUCTION_HOUSE_CREATE"] = "AUCTION_HOUSE_CREATE";
    TransactionType["CLOSE_ESCROW_ACCOUNT"] = "CLOSE_ESCROW_ACCOUNT";
    TransactionType["WITHDRAW"] = "WITHDRAW";
    TransactionType["DEPOSIT"] = "DEPOSIT";
    TransactionType["TRANSFER"] = "TRANSFER";
    TransactionType["BURN"] = "BURN";
    TransactionType["BURN_NFT"] = "BURN_NFT";
    TransactionType["PLATFORM_FEE"] = "PLATFORM_FEE";
    TransactionType["LOAN"] = "LOAN";
    TransactionType["RESCIND_LOAN"] = "RESCIND_LOAN";
    TransactionType["OFFER_LOAN"] = "OFFER_LOAN";
    TransactionType["CANCEL_OFFER"] = "CANCEL_OFFER";
    TransactionType["LEND_FOR_NFT"] = "LEND_FOR_NFT";
    TransactionType["REQUEST_LOAN"] = "REQUEST_LOAN";
    TransactionType["CANCEL_LOAN_REQUEST"] = "CANCEL_LOAN_REQUEST";
    TransactionType["BORROW_SOL_FOR_NFT"] = "BORROW_SOL_FOR_NFT";
    TransactionType["CLAIM_NFT"] = "CLAIM_NFT";
    TransactionType["REBORROW_SOL_FOR_NFT"] = "REBORROW_SOL_FOR_NFT";
    TransactionType["REPAY_LOAN"] = "REPAY_LOAN";
    TransactionType["TAKE_LOAN"] = "TAKE_LOAN";
    TransactionType["FORECLOSE_LOAN"] = "FORECLOSE_LOAN";
    TransactionType["UPDATE_OFFER"] = "UPDATE_OFFER";
    TransactionType["ADD_TO_POOL"] = "ADD_TO_POOL";
    TransactionType["REMOVE_FROM_POOL"] = "REMOVE_FROM_POOL";
    TransactionType["CLOSE_POSITION"] = "CLOSE_POSITION";
    TransactionType["UNLABELED"] = "UNLABELED";
    TransactionType["CLOSE_ACCOUNT"] = "CLOSE_ACCOUNT";
    TransactionType["WITHDRAW_GEM"] = "WITHDRAW_GEM";
    TransactionType["DEPOSIT_GEM"] = "DEPOSIT_GEM";
    TransactionType["STAKE_TOKEN"] = "STAKE_TOKEN";
    TransactionType["UNSTAKE_TOKEN"] = "UNSTAKE_TOKEN";
    TransactionType["STAKE_SOL"] = "STAKE_SOL";
    TransactionType["UNSTAKE_SOL"] = "UNSTAKE_SOL";
    TransactionType["CLAIM_REWARDS"] = "CLAIM_REWARDS";
    TransactionType["BUY_SUBSCRIPTION"] = "BUY_SUBSCRIPTION";
    TransactionType["SWAP"] = "SWAP";
    TransactionType["INIT_SWAP"] = "INIT_SWAP";
    TransactionType["CANCEL_SWAP"] = "CANCEL_SWAP";
    TransactionType["REJECT_SWAP"] = "REJECT_SWAP";
    TransactionType["INITIALIZE_ACCOUNT"] = "INITIALIZE_ACCOUNT";
    TransactionType["TOKEN_MINT"] = "TOKEN_MINT";
    TransactionType["CREATE_APPRAISAL"] = "CREATE_APPRAISAL";
    TransactionType["CANDY_MACHINE_WRAP"] = "CANDY_MACHINE_WRAP";
    TransactionType["CANDY_MACHINE_UNWRAP"] = "CANDY_MACHINE_UNWRAP";
    TransactionType["CANDY_MACHINE_UPDATE"] = "CANDY_MACHINE_UPDATE";
    TransactionType["CANDY_MACHINE_ROUTE"] = "CANDY_MACHINE_ROUTE";
    TransactionType["FRACTIONALIZE"] = "FRACTIONALIZE";
    TransactionType["DEPOSIT_FRACTIONAL_POOL"] = "DEPOSIT_FRACTIONAL_POOL";
    TransactionType["FUSE"] = "FUSE";
    TransactionType["CREATE_RAFFLE"] = "CREATE_RAFFLE";
    TransactionType["BUY_TICKETS"] = "BUY_TICKETS";
    TransactionType["UPDATE_ITEM"] = "UPDATE_ITEM";
    TransactionType["LIST_ITEM"] = "LIST_ITEM";
    TransactionType["DELIST_ITEM"] = "DELIST_ITEM";
    TransactionType["ADD_ITEM"] = "ADD_ITEM";
    TransactionType["CLOSE_ITEM"] = "CLOSE_ITEM";
    TransactionType["BUY_ITEM"] = "BUY_ITEM";
    TransactionType["FILL_ORDER"] = "FILL_ORDER";
    TransactionType["UPDATE_ORDER"] = "UPDATE_ORDER";
    TransactionType["CREATE_ORDER"] = "CREATE_ORDER";
    TransactionType["CLOSE_ORDER"] = "CLOSE_ORDER";
    TransactionType["CANCEL_ORDER"] = "CANCEL_ORDER";
    TransactionType["KICK_ITEM"] = "KICK_ITEM";
    TransactionType["UPGRADE_FOX"] = "UPGRADE_FOX";
    TransactionType["UPGRADE_FOX_REQUEST"] = "UPGRADE_FOX_REQUEST";
    TransactionType["LOAN_FOX"] = "LOAN_FOX";
    TransactionType["BORROW_FOX"] = "BORROW_FOX";
    TransactionType["SWITCH_FOX_REQUEST"] = "SWITCH_FOX_REQUEST";
    TransactionType["SWITCH_FOX"] = "SWITCH_FOX";
    TransactionType["CREATE_ESCROW"] = "CREATE_ESCROW";
    TransactionType["ACCEPT_REQUEST_ARTIST"] = "ACCEPT_REQUEST_ARTIST";
    TransactionType["CANCEL_ESCROW"] = "CANCEL_ESCROW";
    TransactionType["ACCEPT_ESCROW_ARTIST"] = "ACCEPT_ESCROW_ARTIST";
    TransactionType["ACCEPT_ESCROW_USER"] = "ACCEPT_ESCROW_USER";
    TransactionType["PLACE_BET"] = "PLACE_BET";
    TransactionType["PLACE_SOL_BET"] = "PLACE_SOL_BET";
    TransactionType["CREATE_BET"] = "CREATE_BET";
    TransactionType["INIT_RENT"] = "INIT_RENT";
    TransactionType["NFT_RENT_LISTING"] = "NFT_RENT_LISTING";
    TransactionType["NFT_RENT_CANCEL_LISTING"] = "NFT_RENT_CANCEL_LISTING";
    TransactionType["NFT_RENT_UPDATE_LISTING"] = "NFT_RENT_UPDATE_LISTING";
    TransactionType["NFT_RENT_ACTIVATE"] = "NFT_RENT_ACTIVATE";
    TransactionType["NFT_RENT_END"] = "NFT_RENT_END";
    TransactionType["UPGRADE_PROGRAM_INSTRUCTION"] = "UPGRADE_PROGRAM_INSTRUCTION";
    TransactionType["FINALIZE_PROGRAM_INSTRUCTION"] = "FINALIZE_PROGRAM_INSTRUCTION";
    TransactionType["EXECUTE_TRANSACTION"] = "EXECUTE_TRANSACTION";
    TransactionType["APPROVE_TRANSACTION"] = "APPROVE_TRANSACTION";
    TransactionType["ACTIVATE_TRANSACTION"] = "ACTIVATE_TRANSACTION";
    TransactionType["CREATE_TRANSACTION"] = "CREATE_TRANSACTION";
    TransactionType["CANCEL_TRANSACTION"] = "CANCEL_TRANSACTION";
    TransactionType["REJECT_TRANSACTION"] = "REJECT_TRANSACTION";
    TransactionType["ADD_INSTRUCTION"] = "ADD_INSTRUCTION";
    TransactionType["CREATE_MASTER_EDITION"] = "CREATE_MASTER_EDITION";
    TransactionType["ATTACH_METADATA"] = "ATTACH_METADATA";
    TransactionType["REQUEST_PNFT_MIGRATION"] = "REQUEST_PNFT_MIGRATION";
    TransactionType["START_PNFT_MIGRATION"] = "START_PNFT_MIGRATION";
    TransactionType["MIGRATE_TO_PNFT"] = "MIGRATE_TO_PNFT";
    TransactionType["UPDATE_RAFFLE"] = "UPDATE_RAFFLE";
    TransactionType["CREATE_MERKLE_TREE"] = "CREATE_MERKLE_TREE";
    TransactionType["DELEGATE_MERKLE_TREE"] = "DELEGATE_MERKLE_TREE";
    TransactionType["COMPRESSED_NFT_MINT"] = "COMPRESSED_NFT_MINT";
    TransactionType["COMPRESSED_NFT_TRANSFER"] = "COMPRESSED_NFT_TRANSFER";
    TransactionType["COMPRESSED_NFT_REDEEM"] = "COMPRESSED_NFT_REDEEM";
    TransactionType["COMPRESSED_NFT_CANCEL_REDEEM"] = "COMPRESSED_NFT_CANCEL_REDEEM";
    TransactionType["COMPRESSED_NFT_BURN"] = "COMPRESSED_NFT_BURN";
    TransactionType["COMPRESSED_NFT_VERIFY_CREATOR"] = "COMPRESSED_NFT_VERIFY_CREATOR";
    TransactionType["COMPRESSED_NFT_UNVERIFY_CREATOR"] = "COMPRESSED_NFT_UNVERIFY_CREATOR";
    TransactionType["COMPRESSED_NFT_VERIFY_COLLECTION"] = "COMPRESSED_NFT_VERIFY_COLLECTION";
    TransactionType["COMPRESSED_NFT_UNVERIFY_COLLECTION"] = "COMPRESSED_NFT_UNVERIFY_COLLECTION";
    TransactionType["COMPRESSED_NFT_SET_VERIFY_COLLECTION"] = "COMPRESSED_NFT_SET_VERIFY_COLLECTION";
    TransactionType["DECOMPRESS_NFT"] = "DECOMPRESS_NFT";
    TransactionType["COMPRESS_NFT"] = "COMPRESS_NFT";
    TransactionType["COMPRESSED_NFT_DELEGATE"] = "COMPRESSED_NFT_DELEGATE";
    TransactionType["CREATE_POOL"] = "CREATE_POOL";
    TransactionType["DISTRIBUTE_COMPRESSION_REWARDS"] = "DISTRIBUTE_COMPRESSION_REWARDS";
    TransactionType["CHANGE_COMIC_STATE"] = "CHANGE_COMIC_STATE";
    TransactionType["UPDATE_RECORD_AUTHORITY_DATA"] = "UPDATE_RECORD_AUTHORITY_DATA";
})(TransactionType = exports.TransactionType || (exports.TransactionType = {}));
// A list of common collections and their collection query
exports.Collections = {
    ABC: {
        firstVerifiedCreators: ['GVkb5GuwGKydA4xXLT9PNpx63h7bhFNrDLQSxi6j5NuF'],
    },
    DEGODS: {
        verifiedCollectionAddresses: [
            '6XxjKYFbcndh2gDcsUrmZgVEsoDxXMnfsaGY6fpTJzNr',
        ],
    },
};
exports.NftEventTypes = [
    TransactionType.NFT_BID,
    TransactionType.NFT_BID_CANCELLED,
    TransactionType.NFT_GLOBAL_BID,
    TransactionType.NFT_GLOBAL_BID_CANCELLED,
    TransactionType.NFT_LISTING,
    TransactionType.NFT_CANCEL_LISTING,
    TransactionType.NFT_SALE,
    TransactionType.NFT_MINT,
    TransactionType.NFT_MINT_REJECTED,
    TransactionType.NFT_AUCTION_CREATED,
    TransactionType.NFT_AUCTION_UPDATED,
    TransactionType.NFT_AUCTION_CANCELLED,
    TransactionType.NFT_PARTICIPATION_REWARD,
    TransactionType.BURN_NFT,
    TransactionType.NFT_RENT_LISTING,
    TransactionType.NFT_RENT_CANCEL_LISTING,
    TransactionType.NFT_RENT_UPDATE_LISTING,
    TransactionType.NFT_RENT_ACTIVATE,
    TransactionType.NFT_RENT_END,
    TransactionType.ATTACH_METADATA,
    TransactionType.MIGRATE_TO_PNFT,
];
var TransactionContext;
(function (TransactionContext) {
    TransactionContext["AUCTION"] = "AUCTION";
    TransactionContext["INSTANT_SALE"] = "INSTANT_SALE";
    TransactionContext["OFFER"] = "OFFER";
    TransactionContext["GLOBAL_OFFER"] = "GLOBAL_OFFER";
    TransactionContext["MINT"] = "MINT";
    TransactionContext["UNKNOWN"] = "UNKNOWN";
})(TransactionContext = exports.TransactionContext || (exports.TransactionContext = {}));
var Source;
(function (Source) {
    Source["FORM_FUNCTION"] = "FORM_FUNCTION";
    Source["EXCHANGE_ART"] = "EXCHANGE_ART";
    Source["CANDY_MACHINE_V3"] = "CANDY_MACHINE_V3";
    Source["CANDY_MACHINE_V2"] = "CANDY_MACHINE_V2";
    Source["CANDY_MACHINE_V1"] = "CANDY_MACHINE_V1";
    Source["UNKNOWN"] = "UNKNOWN";
    Source["SOLANART"] = "SOLANART";
    Source["SOLSEA"] = "SOLSEA";
    Source["MAGIC_EDEN"] = "MAGIC_EDEN";
    Source["HOLAPLEX"] = "HOLAPLEX";
    Source["METAPLEX"] = "METAPLEX";
    Source["OPENSEA"] = "OPENSEA";
    Source["SOLANA_PROGRAM_LIBRARY"] = "SOLANA_PROGRAM_LIBRARY";
    Source["ANCHOR"] = "ANCHOR";
    Source["PHANTOM"] = "PHANTOM";
    Source["SYSTEM_PROGRAM"] = "SYSTEM_PROGRAM";
    Source["STAKE_PROGRAM"] = "STAKE_PROGRAM";
    Source["COINBASE"] = "COINBASE";
    Source["CORAL_CUBE"] = "CORAL_CUBE";
    Source["HEDGE"] = "HEDGE";
    Source["LAUNCH_MY_NFT"] = "LAUNCH_MY_NFT";
    Source["GEM_BANK"] = "GEM_BANK";
    Source["GEM_FARM"] = "GEM_FARM";
    Source["DEGODS"] = "DEGODS";
    Source["BSL"] = "BLOCKSMITH_LABS";
    Source["YAWWW"] = "YAWWW";
    Source["ATADIA"] = "ATADIA";
    Source["DIGITAL_EYES"] = "DIGITAL_EYES";
    Source["HYPERSPACE"] = "HYPERSPACE";
    Source["TENSOR"] = "TENSOR";
    Source["BIFROST"] = "BIFROST";
    Source["JUPITER"] = "JUPITER";
    Source["MERCURIAL"] = "MERCURIAL_STABLE_SWAP";
    Source["SABER"] = "SABER";
    Source["SERUM"] = "SERUM";
    Source["STEP_FINANCE"] = "STEP_FINANCE";
    Source["CROPPER"] = "CROPPER";
    Source["RAYDIUM"] = "RAYDIUM";
    Source["ALDRIN"] = "ALDRIN";
    Source["CREMA"] = "CREMA";
    Source["LIFINITY"] = "LIFINITY";
    Source["CYKURA"] = "CYKURA";
    Source["ORCA"] = "ORCA";
    Source["MARINADE"] = "MARINADE";
    Source["STEPN"] = "STEPN";
    Source["SENCHA"] = "SENCHA_EXCHANGE";
    Source["SAROS"] = "SAROS";
    Source["ENGLISH_AUCTION"] = "ENGLISH_AUCTION";
    Source["FOXY"] = "FOXY";
    Source["HADESWAP"] = "HADESWAP";
    Source["FOXY_STAKING"] = "FOXY_STAKING";
    Source["FOXY_RAFFLE"] = "FOXY_RAFFLE";
    Source["FOXY_TOKEN_MARKET"] = "FOXY_TOKEN_MARKET";
    Source["FOXY_MISSIONS"] = "FOXY_MISSIONS";
    Source["FOXY_MARMALADE"] = "FOXY_MARMALADE";
    Source["FOXY_COINFLIP"] = "FOXY_COINFLIP";
    Source["FOXY_AUCTION"] = "FOXY_AUCTION";
    Source["CITRUS"] = "CITRUS";
    Source["ZETA"] = "ZETA";
    Source["ELIXIR"] = "ELIXIR";
    Source["ELIXIR_LAUNCHPAD"] = "ELIXIR_LAUNCHPAD";
    Source["CARDINAL_RENT"] = "CARDINAL_RENT";
    Source["CARDINAL_STAKING"] = "CARDINAL_STAKING";
    Source["BPF_LOADER"] = "BPF_LOADER";
    Source["BPF_UPGRADEABLE_LOADER"] = "BPF_UPGRADEABLE_LOADER";
    Source["SQUADS"] = "SQUADS";
    Source["SHARKY_FI"] = "SHARKY_FI";
    Source["OPEN_CREATOR_PROTOCOL"] = "OPEN_CREATOR_PROTOCOL";
    Source["BUBBLEGUM"] = "BUBBLEGUM";
    // Mints
    Source["W_SOL"] = "W_SOL";
    Source["DUST"] = "DUST";
    Source["SOLI"] = "SOLI";
    Source["USDC"] = "USDC";
    Source["FLWR"] = "FLWR";
    Source["HDG"] = "HDG";
    Source["MEAN"] = "MEAN";
    Source["UXD"] = "UXD";
    Source["SHDW"] = "SHDW";
    Source["POLIS"] = "POLIS";
    Source["ATLAS"] = "ATLAS";
    Source["USH"] = "USH";
    Source["TRTLS"] = "TRTLS";
    Source["RUNNER"] = "RUNNER";
    Source["INVICTUS"] = "INVICTUS";
})(Source = exports.Source || (exports.Source = {}));
var ProgramName;
(function (ProgramName) {
    ProgramName["UNKNOWN"] = "UNKNOWN";
    ProgramName["JUPITER_V1"] = "JUPITER_V1";
    ProgramName["JUPITER_V2"] = "JUPITER_V2";
    ProgramName["JUPITER_V3"] = "JUPITER_V3";
    ProgramName["JUPITER_V4"] = "JUPITER_V4";
    ProgramName["MERCURIAL_STABLE_SWAP"] = "MERCURIAL_STABLE_SWAP";
    ProgramName["SABER_STABLE_SWAP"] = "SABER_STABLE_SWAP";
    ProgramName["SABER_EXCHANGE"] = "SABER_EXCHANGE";
    ProgramName["SERUM_DEX_V1"] = "SERUM_DEX_V1";
    ProgramName["SERUM_DEX_V2"] = "SERUM_DEX_V2";
    ProgramName["SERUM_DEX_V3"] = "SERUM_DEX_V3";
    ProgramName["SERUM_SWAP"] = "SERUM_SWAP";
    ProgramName["STEP_FINANCE"] = "STEP_FINANCE";
    ProgramName["CROPPER"] = "CROPPER";
    ProgramName["RAYDIUM_LIQUIDITY_POOL_V2"] = "RAYDIUM_LIQUIDITY_POOL_V2";
    ProgramName["RAYDIUM_LIQUIDITY_POOL_V3"] = "RAYDIUM_LIQUIDITY_POOL_V3";
    ProgramName["RAYDIUM_LIQUIDITY_POOL_V4"] = "RAYDIUM_LIQUIDITY_POOL_V4";
    ProgramName["ALDRIN_AMM_V1"] = "ALDRIN_AMM_V1";
    ProgramName["ALDRIN_AMM_V2"] = "ALDRIN_AMM_V2";
    ProgramName["CREMA"] = "CREMA";
    ProgramName["LIFINITY"] = "LIFINITY";
    ProgramName["LIFINITY_V2"] = "LIFINITY_V2";
    ProgramName["CYKURA"] = "CYKURA";
    ProgramName["ORCA_TOKEN_SWAP_V1"] = "ORCA_TOKEN_SWAP_V1";
    ProgramName["ORCA_TOKEN_SWAP_V2"] = "ORCA_TOKEN_SWAP_V2";
    ProgramName["ORCA_WHIRLPOOLS"] = "ORCA_WHIRLPOOLS";
    ProgramName["MARINADE"] = "MARINADE";
    ProgramName["STEPN"] = "STEPN";
    ProgramName["SENCHA_EXCHANGE"] = "SENCHA_EXCHANGE";
    ProgramName["SAROS_AMM"] = "SAROS_AMM";
    ProgramName["FOXY_STAKE"] = "FOXY_STAKE";
    ProgramName["FOXY_SWAP"] = "FOXY_SWAP";
    ProgramName["FOXY_RAFFLE"] = "FOXY_RAFFLE";
    ProgramName["FOXY_TOKEN_MARKET"] = "FOXY_TOKEN_MARKET";
    ProgramName["FOXY_MISSIONS"] = "FOXY_MISSIONS";
    ProgramName["FOXY_MARMALADE"] = "FOXY_MARMALADE";
    ProgramName["FOXY_COINFLIP"] = "FOXY_COINFLIP";
    ProgramName["FOXY_AUCTION"] = "FOXY_AUCTION";
    ProgramName["CITRUS"] = "CITRUS";
    ProgramName["HADE_SWAP"] = "HADE_SWAP";
    ProgramName["ZETA"] = "ZETA";
    ProgramName["CARDINAL_RENT"] = "CARDINAL_RENT";
    ProgramName["CARDINAL_STAKING"] = "CARDINAL_STAKING";
    ProgramName["SHARKY_FI"] = "SHARKY_FI";
    ProgramName["OPEN_CREATOR_PROTOCOL"] = "OPEN_CREATOR_PROTOCOL";
    ProgramName["BUBBLEGUM"] = "BUBBLEGUM";
    ProgramName["CORAL_CUBE"] = "CORAL_CUBE";
})(ProgramName = exports.ProgramName || (exports.ProgramName = {}));
var Address;
(function (Address) {
    Address["NONE"] = "";
    Address["METAPLEX"] = "p1exdMJcjVao65QdewkaZRUnU6VPSXhus9n2GzWfh98";
    Address["METAPLEX_AUCTION_HOUSE"] = "hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk";
    Address["EXCHANGE_ART_AUCTION"] = "exAuvFHqXXbiLrM4ce9m1icwuSyXytRnfBkajukDFuB";
    Address["EXCHANGE_ART_OFFER"] = "exofLDXJoFji4Qyf9jSAH59J4pp82UT5pmGgR6iT24Z";
    Address["EXCHANGE_ART_INSTANT_SALE"] = "AmK5g2XcyptVLCFESBCJqoSfwV3znGoVYQnqEnaAZKWn";
    Address["EXCHANGE_ART_MINT"] = "EXBuYPNgBUXMTsjCbezENRUtFQzjUNZxvPGTd11Pznk5";
    Address["FORM_FUNCTION"] = "formn3hJtt8gvVKxpCfzCJGuoz6CNUFcULFZW18iTpC";
    Address["SOLANART"] = "CJsLwbP1iu5DuUikHEJnLfANgKy6stB2uFgvBBHoyxwz";
    Address["SOLANART_GLOBAL_OFFER"] = "5ZfZAwP2m93waazg8DkrrVmsupeiPEvaEHowiUP7UAbJ";
    Address["SOLSEA_MINT"] = "2669GNmpdcRF2FmpjZmPtnpKD7L9tkFd92XSPEN85i45";
    Address["SOLSEA_V1"] = "617jbWo616ggkDxvW1Le8pV38XLbVSyWY8ae6QUmGBAU";
    Address["SOLSEA_V2"] = "AARTcKUzLYaWmK7D1otgyAoFn5vQqBiTrxjwrvjvsVJa";
    Address["CANDY_MACHINE_V3"] = "Guard1JwRhJkVH6XZhzoYxeBVQe872VH6QggF4BWmS9g";
    Address["CANDY_MACHINE_CORE_V3"] = "CndyV3LdqHUfDLmE5naZjVN8rBZz4tqhdefbAnjHG3JR";
    Address["CANDY_MACHINE_V2"] = "cndy3Z4yapfJBmL3ShUp5exZKqR3z33thTzeNMm2gRZ";
    Address["CANDY_MACHINE_V1"] = "cndyAnrLdpjq1Ssp1z8xxDsB8dxe7u4HL5Nxi2K5WXZ";
    Address["METAPLEX_AUCTION"] = "auctxRXPeJoc4817jDhf4HbjnhEcr1cCXenosMhK5R8";
    Address["TOKEN_METADATA"] = "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s";
    Address["METAPLEX_MIGRATION"] = "migrxZFChTqicHpNa1CAjPcF29Mui2JU2q4Ym7qQUTi";
    Address["TOKEN"] = "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
    Address["TOKEN_VAULT"] = "vau1zxA2LbssAUEF7Gpw91zMM1LvXrvpzJtmZ58rPsn";
    Address["MAGIC_EDEN_V1"] = "MEisE1HzehtrDpAAT8PnLHjpSSkRYakotTuJRPjTpo8";
    Address["MAGIC_EDEN_V2"] = "M2mx93ekt1fmXSVkTrUL9xVFHkmME8HTUi5Cyc5aF7K";
    Address["ENGLISH_AUCTION"] = "EA15T2W45BJFm71XmB5VGcsiWGKZTNfnK6aCmE2Hb5eC";
    Address["PHANTOM"] = "DeJBGdMFa1uynnnKiwrVioatTuHmNLpyFKnmB5kaFdzQ";
    Address["SYSTEM_PROGRAM"] = "11111111111111111111111111111111";
    Address["STAKE_PROGRAM"] = "Stake11111111111111111111111111111111111111";
    Address["COINBASE_SHARED_WALLET"] = "H8sMJSCQxfKiFTCfDR3DUMLPwcRbM61LGFJ8N4dK3WjS";
    Address["MAGIC_EDEN_LAUNCHPAD"] = "CMZYPASGWeTz7RNGHaRJfCq2XQ5pYK6nDvVQxzkH51zb";
    Address["HEDGE"] = "HedgeEohwU6RqokrvPU4Hb6XKPub8NuKbnPmY7FoMMtN";
    Address["LAUNCH_MY_NFT"] = "ArAA6CZC123yMJLUe4uisBEgvfuw2WEvex9iFmFCYiXv";
    Address["GEM_BANK"] = "bankHHdqMuaaST4qQk6mkzxGeKPHWmqdgor6Gs8r88m";
    Address["GEM_FARM"] = "farmL4xeBFVXJqtfxCzU9b28QACM7E2W2ctT6epAjvE";
    Address["DEGODS_GEM_BANK"] = "6VJpeYFy87Wuv4KvwqD5gyFBTkohqZTqs6LgbCJ8tDBA";
    Address["DEGODS_GEM_FARM"] = "FQzYycoqRjmZTgCcTTAkzceH2Ju8nzNLa5d78K3yAhVW";
    Address["BSL_GEM_BANK"] = "BRwUybBWZJEin7HVeWBC7AueG1McDeY6v4esBwgryzKe";
    Address["BSL_GEM_FARM"] = "HUfVysibcL4u6EVoi4GsSDnV993tRX47ntoYH123q9AB";
    Address["YAWWW"] = "5SKmrbAxnHV2sgqyDXkGrLrokZYtWWVEEk5Soed7VLVN";
    Address["ATADIA_TOKEN_MINT_AUTHORITY"] = "PassBQMFvYtDmvo7k5S2GVn6quj6RmnLnVfqEZebVMf";
    Address["DIGITAL_EYES"] = "7t8zVJtPCFAqog1DcnB6Ku1AVKtWfHkCiPi1cAvcJyVF";
    Address["HYPERSPACE"] = "HYPERfwdTjyJ2SCaKHmpF2MtrXqWxrsotYDsTrshHWq8";
    Address["TENSOR"] = "TSWAPaqyCSx2KABk68Shruf4rp7CxcNi8hAsbdwmHbN";
    Address["BIFROST_LAUNCHPAD"] = "BFCMkgg9eFSv54HKJZFD5RMG8kNR5eMAEWnAtfRTPCjU";
    Address["FOXY_STAKE"] = "FoXpJL1exLBJgHVvdSHNKyKu2xX2uatctH9qp6dLmfpP";
    Address["FOXY_SWAP"] = "8guzmt92HbM7yQ69UJg564hRRX6N4nCdxWE5L6ENrA8P";
    Address["FOXY_RAFFLE"] = "9ehXDD5bnhSpFVRf99veikjgq8VajtRH7e3D9aVPLqYd";
    Address["FOXY_TOKEN_MARKET"] = "8BYmYs3zsBhftNELJdiKsCN2WyCBbrTwXd6WG4AFPr6n";
    Address["FOXY_MISSIONS"] = "6NcdQ5WTnrPoMLbP4kvpLYa4YSwKqkNHRRE8XVf5hmv9";
    Address["FOXY_MARMALADE"] = "BbGozDEfDKJbqxkSDjcDLWdQfxeZnnoTgD5VhNXV7epn";
    Address["FOXY_COINFLIP"] = "72D3En8GQycjtunxf9mgyR8onzYdPqYFsKp4myUzhaRZ";
    Address["FOXY_AUCTION"] = "FFAUags5SYJEioBUkPtKuArccNzcNgUubhssCH2jSbeH";
    Address["CITRUS"] = "JCFRaPv7852ESRwJJGRy2mysUMydXZgVVhrMLmExvmVp";
    Address["HADE_SWAP"] = "hadeK9DLv9eA7ya5KCTqSvSvRZeJC3JgD5a9Y3CNbvu";
    Address["ELIXIR"] = "2qGyiNeWyZxNdkvWHc2jT5qkCnYa1j1gDLSSUmyoWMh8";
    Address["ELIXIR_LAUNCHPAD"] = "1NCHWmQ39XfQuRLgGihckNKXcm9LXbq5EnPVwPptLWy";
    Address["ELIXIR_LAUNCHPAD_V2"] = "PADWBS1VeV1LWsY6nciu6dRZjgSmUH2iPsUpHFVz7Wz";
    Address["ELIXIR_V2"] = "E1XRkj9fPF2NQUdoq41AHPqwMDHykYfn5PzBXAyDs7Be";
    Address["CARDINAL_RENT"] = "mgr99QFMYByTqGPWmNqunV7vBLmWWXdSrHUfV8Jf3JM";
    Address["CARDINAL_STAKING"] = "stkBL96RZkjY5ine4TvPihGqW8UHJfch2cokjAPzV8i";
    Address["MAGIC_EDEN_GLOBAL_BID"] = "mmm3XBJg5gk8XJxEKBvdgptZz6SgK4tXvn36sodowMc";
    Address["BPF_UPGRADEABLE_LOADER"] = "BPFLoaderUpgradeab1e11111111111111111111111";
    Address["BPF_LOADER"] = "BPFLoader2111111111111111111111111111111111";
    Address["SQUADS"] = "SMPLecH534NA9acpos4G6x7uf3LWbCAwZQE9e8ZekMu";
    Address["SHARKY_FI"] = "SHARKobtfF1bHhxD2eqftjHBdVSCbKo9JtgK71FhELP";
    Address["OPEN_CREATOR_PROTOCOL"] = "ocp4vWUzA2z2XMYJ3QhM9vWdyoyoQwAFJhRdVTbvo9E";
    Address["BUBBLEGUM"] = "BGUMAp9Gq7iTEuizy4pqaxsTyUCBK68MDfK752saRPUY";
    Address["CORAL_CUBE"] = "6U2LkBQ6Bqd1VFt7H76343vpSwS5Tb1rNyXSNnjkf9VL";
    // Defi programs - most pulled from here - https://dune.com/queries/665628/1240465
    Address["JUPITER_V1"] = "JUP6i4ozu5ydDCnLiMogSckDPpbtr7BJ4FtzYWkb5Rk";
    Address["JUPITER_V2"] = "JUP2jxvXaqu7NQY1GmNF4m1vodw12LVXYxbFL2uJvfo";
    Address["JUPITER_V3"] = "JUP3c2Uh3WA4Ng34tw6kPd2G4C5BB21Xo36Je1s32Ph";
    Address["JUPITER_V4"] = "JUP4Fb2cqiRUcaTHdrPC8h2gNsA2ETXiPDD33WcGuJB";
    Address["JUPITER_LIMIT_ORDER"] = "jupoNjAxXgZ4rjzxzPMP4oxduvQsQtZzyknqvzYNrNu";
    Address["SERUM_DEX_V3"] = "9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin";
    Address["SERUM_DEX_V2"] = "EUqojwWA2rd19FZrzeBncJsm38Jm1hEhE3zsmX3bRc2o";
    Address["SERUM_DEX_V1"] = "BJ3jrUzddfuSrZHXSCxMUUQsjKEyLmuuyZebkcaFp2fg";
    Address["SERUM_DEX_ALT_V1"] = "4ckmDgGdxQoPDLUkDT3vHgSAkzA3QRdNq5ywwY4sUSJn";
    Address["SERUM_SWAP"] = "22Y43yTVxuUkoRKdm9thyRhQ3SdgQS7c7kB6UNCiaczD";
    Address["ALDRIN_AMM_V1"] = "AMM55ShdkoGRB5jVYPjWziwk8m5MpwyDgsMWHaMSQWH6";
    Address["ALDRIN_AMM_V2"] = "CURVGoZn8zycx6FXwwevgBTB2gVvdbGTEpvMJDbgs2t4";
    Address["RAYDIUM_LIQUIDITY_POOL_V2"] = "RVKd61ztZW9GUwhRbbLoYVRE5Xf1B2tVscKqwZqXgEr";
    Address["RAYDIUM_LIQUIDITY_POOL_V3"] = "27haf8L6oxUeXrHrgEgsexjSY5hbVUWEmvv9Nyxg8vQv";
    Address["RAYDIUM_LIQUIDITY_POOL_V4"] = "675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8";
    Address["SABER_STABLE_SWAP"] = "SSwpkEEcbUqx4vtoEByFjSkhKdCT862DNVb52nZg1UZ";
    Address["SABER_EXCHANGE"] = "YAkoNb6HKmSxQN9L8hiBE5tPJRsniSSMzND1boHmZxe";
    Address["MERCURIAL_STABLE_SWAP"] = "MERLuDFBMmsHnsBPZw2sDQZHvXFMwp8EdjudcU2HKky";
    Address["ORCA_TOKEN_SWAP_V1"] = "DjVE6JNiYqPL2QXyCUUh8rNjHrbz9hXHNYt99MQ59qw1";
    Address["ORCA_TOKEN_SWAP_V2"] = "9W959DqEETiGZocYWCQPaJ6sBmUzgfxXfqGeTEdp3aQP";
    Address["ORCA_WHIRLPOOLS"] = "whirLbMiicVdio4qvUfM5KAg6Ct8VwpYzGff3uctyCc";
    Address["STEP_FINANCE_SWAP_PROGRAM"] = "SSwpMgqNDsyV7mAgN9ady4bDVu5ySjmmXejXvy2vLt1";
    Address["CYKURA"] = "cysPXAjehMpVKUapzbMCCnpFxUFFryEWEaLgnb9NrR8";
    Address["CREMA_FINANCE"] = "6MLxLqiXaaSUpkgMnWDTuejNZEz3kE7k2woyHGVFw319";
    Address["LIFINITY"] = "EewxydAPCCVuNEyrVN68PuSYdQ7wKn27V9Gjeoi8dy3S";
    Address["LIFINITY_V2"] = "2wT8Yq49kHgDzXuPxZSaeLaH1qbmGXtEyPy64bL7aD3c";
    Address["STEPN"] = "Dooar9JkhdZ7J3LHN3A7YCuoGRUggXhQaG4kijfLGU2j";
    Address["SENCHA_EXCHANGE"] = "SCHAtsf8mbjyjiv4LkhLKutTf6JnZAbdJKFkXQNMFHZ";
    Address["CROPPER"] = "CTMAxxk34HjKWxQ3QLZK1HpaLXmBveao3ESePXbiyfzh";
    Address["SAROS_AMM"] = "SSwapUtytfBdBn1b9NUGG6foMVPtcWgpRU32HToDUZr";
    Address["ZETA"] = "ZETAx4NhMsyop6gVwH2E2RrAcDiuPs9ABkhLBEvBsb6";
    // Mints
    Address["W_SOL_TOKEN"] = "So11111111111111111111111111111111111111112";
    Address["DUST_TOKEN"] = "DUSTawucrTsGU8hcqRdHDCbuYhCPADMLM2VcCb8VnFnQ";
    Address["SOLI_TOKEN"] = "8JnNWJ46yfdq8sKgT1Lk4G7VWkAA8Rhh7LhqgJ6WY41G";
    Address["USDC_TOKEN"] = "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v";
    Address["FLWR_TOKEN"] = "FLWRna1gxehQ9pSyZMzxfp4UhewvLPwuKfdUTgdZuMBY";
    Address["HDG_TOKEN"] = "5PmpMzWjraf3kSsGEKtqdUsCoLhptg4yriZ17LKKdBBy";
    Address["MEAN_TOKEN"] = "MEANeD3XDdUmNMsRGjASkSWdC8prLYsoRJ61pPeHctD";
    Address["UXD_TOKEN"] = "7kbnvuGBxxj8AG9qp8Scn56muWGaRaFqxg1FsRp3PaFT";
    Address["SHDW_TOKEN"] = "SHDWyBxihqiCj6YekG2GUr7wqKLeLAMK1gHZck9pL6y";
    Address["POLIS_TOKEN"] = "poLisWXnNRwC6oBu1vHiuKQzFjGL4XDSu4g9qjz9qVk";
    Address["ATLAS_TOKEN"] = "ATLASXmbPQxBUYbxPsV97usA3fPQYEqzQBUHgiFCUsXx";
    Address["USH_TOKEN"] = "9iLH8T7zoWhY7sBmj1WK9ENbWdS1nL8n9wAxaeRitTa6";
    Address["TRTLS_TOKEN"] = "q4bpaRKw3fJB1AJBeeBaKv3TjYzWsmntLgnSB275YUb";
    Address["FOXY_TOKEN"] = "FoXyMu5xwXre7zEoSvzViRk3nGawHUp9kUh97y2NDhcq";
    Address["RUNNER_TOKEN"] = "6Rqtt2h8dS6pHPGzqrmGtyhjCk3zpk795QcEwXJLfeLn";
    Address["INVICTUS_TOKEN"] = "inL8PMVd6iiW3RCBJnr5AsrRN6nqr4BTrcNuQWQSkvY";
})(Address = exports.Address || (exports.Address = {}));
var TokenStandard;
(function (TokenStandard) {
    TokenStandard["PROGRAMMABLE_NON_FUNGIBLE"] = "ProgrammableNonFungible";
    TokenStandard["NON_FUNGIBLE"] = "NonFungible";
    TokenStandard["FUNGIBLE"] = "Fungible";
    TokenStandard["FUNGIBLE_ASSET"] = "FungibleAsset";
    TokenStandard["NON_FUNGIBLE_EDITION"] = "NonFungibleEdition";
    TokenStandard["UNKNOWN_STANDARD"] = "UnknownStandard";
})(TokenStandard = exports.TokenStandard || (exports.TokenStandard = {}));
var Interface;
(function (Interface) {
    Interface["V1NFT"] = "V1_NFT";
    Interface["CUSTOM"] = "Custom";
    Interface["V1PRINT"] = "V1_PRINT";
    Interface["LEGACYNFT"] = "Legacy_NFT";
    Interface["V2NFT"] = "V2_NFT";
    Interface["FUNGIBLE_ASSET"] = "FungibleAsset";
    Interface["IDENTITY"] = "Identity";
    Interface["EXECUTABLE"] = "Executable";
    Interface["PROGRAMMABLENFT"] = "ProgrammableNFT";
    Interface["FUNGIBLE_TOKEN"] = "FungibleToken";
    Interface["MPL_CORE_ASSET"] = "MplCoreAsset";
})(Interface = exports.Interface || (exports.Interface = {}));
var OwnershipModel;
(function (OwnershipModel) {
    OwnershipModel["SINGLE"] = "single";
    OwnershipModel["TOKEN"] = "token";
})(OwnershipModel = exports.OwnershipModel || (exports.OwnershipModel = {}));
var RoyaltyModel;
(function (RoyaltyModel) {
    RoyaltyModel["CREATORS"] = "creators";
    RoyaltyModel["FANOUT"] = "fanout";
    RoyaltyModel["SINGLE"] = "single";
})(RoyaltyModel = exports.RoyaltyModel || (exports.RoyaltyModel = {}));
var Scope;
(function (Scope) {
    Scope["FULL"] = "full";
    Scope["ROYALTY"] = "royalty";
    Scope["METADATA"] = "metadata";
    Scope["EXTENSION"] = "extension";
})(Scope = exports.Scope || (exports.Scope = {}));
var UseMethods;
(function (UseMethods) {
    UseMethods["BURN"] = "Burn";
    UseMethods["SINGLE"] = "Single";
    UseMethods["MULTIPLE"] = "Multiple";
})(UseMethods = exports.UseMethods || (exports.UseMethods = {}));
var Context;
(function (Context) {
    Context["WalletDefault"] = "wallet-default";
    Context["WebDesktop"] = "web-desktop";
    Context["WebMobile"] = "web-mobile";
    Context["AppMobile"] = "app-mobile";
    Context["AppDesktop"] = "app-desktop";
    Context["App"] = "app";
    Context["Vr"] = "vr";
})(Context = exports.Context || (exports.Context = {}));
var AssetSortBy;
(function (AssetSortBy) {
    AssetSortBy["Created"] = "created";
    AssetSortBy["Updated"] = "updated";
    AssetSortBy["RecentAction"] = "recent_action";
})(AssetSortBy = exports.AssetSortBy || (exports.AssetSortBy = {}));
var AssetSortDirection;
(function (AssetSortDirection) {
    AssetSortDirection["Asc"] = "asc";
    AssetSortDirection["Desc"] = "desc";
})(AssetSortDirection = exports.AssetSortDirection || (exports.AssetSortDirection = {}));
var SearchConditionType;
(function (SearchConditionType) {
    SearchConditionType["All"] = "all";
    SearchConditionType["Any"] = "any";
})(SearchConditionType = exports.SearchConditionType || (exports.SearchConditionType = {}));
var Group;
(function (Group) {
    Group["COLLECTION"] = "collection";
})(Group = exports.Group || (exports.Group = {}));
var MintApiAuthority;
(function (MintApiAuthority) {
    MintApiAuthority["MAINNET"] = "HnT5KVAywGgQDhmh6Usk4bxRg4RwKxCK4jmECyaDth5R";
    MintApiAuthority["DEVNET"] = "2LbAtCJSaHqTnP9M5QSjvAMXk79RNLusFspFN5Ew67TC";
})(MintApiAuthority = exports.MintApiAuthority || (exports.MintApiAuthority = {}));
var PriorityLevel;
(function (PriorityLevel) {
    PriorityLevel["MIN"] = "Min";
    PriorityLevel["LOW"] = "Low";
    PriorityLevel["MEDIUM"] = "Medium";
    PriorityLevel["HIGH"] = "High";
    PriorityLevel["VERY_HIGH"] = "VeryHigh";
    PriorityLevel["UNSAFE_MAX"] = "UnsafeMax";
    PriorityLevel["DEFAULT"] = "Default";
})(PriorityLevel = exports.PriorityLevel || (exports.PriorityLevel = {}));
var UiTransactionEncoding;
(function (UiTransactionEncoding) {
    UiTransactionEncoding["Binary"] = "binary";
    UiTransactionEncoding["Base64"] = "base64";
    UiTransactionEncoding["Base58"] = "base58";
    UiTransactionEncoding["Json"] = "json";
    UiTransactionEncoding["JsonParsed"] = "jsonParsed";
})(UiTransactionEncoding = exports.UiTransactionEncoding || (exports.UiTransactionEncoding = {}));
// https://jito-foundation.gitbook.io/mev/mev-payment-and-distribution/on-chain-addresses
exports.JITO_TIP_ACCOUNTS = [
    '96gYZGLnJYVFmbjzopPSU6QiEV5fGqZNyN9nmNhvrZU5',
    'HFqU5x63VTqvQss8hp11i4wVV8bD44PvwucfZ2bU7gRe',
    'Cw8CFyM9FkoMi7K7Crf6HNQqf4uEMzpKw6QNghXLvLkY',
    'ADaUMid9yfUytqMBgopwjb2DTLSokTSzL1zt6iGPaS49',
    'DfXygSm4jCyNCybVYYK6DwvWqjKee8pbDmJGcLWNDXjh',
    'ADuUkR4vqLUMWXxW9gh6D6L8pMSawimctcNZ5pGwDcEt',
    'DttWaMuVvTiduZRnguLF7jNxTgiMBZ1hyAumKUiL2KRL',
    '3AVi9Tg9Uo68tJfuvoKvqKNWKkC5wPdSSdeBnizKZ6jT',
];
// https://jito-labs.gitbook.io/mev/searcher-resources/json-rpc-api-reference/url
exports.JITO_API_URLS = {
    Default: 'https://mainnet.block-engine.jito.wtf',
    NY: 'https://ny.mainnet.block-engine.jito.wtf',
    Amsterdam: 'https://amsterdam.mainnet.block-engine.jito.wtf',
    Frankfurt: 'https://frankfurt.mainnet.block-engine.jito.wtf',
    Tokyo: 'https://tokyo.mainnet.block-engine.jito.wtf',
};
