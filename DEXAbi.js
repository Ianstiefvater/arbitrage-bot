// DEXAbi.js

// Uniswap V2 ABI
const UniswapV2PairABI = [
  {
    "constant": true,
    "inputs": [],
    "name": "getReserves",
    "outputs": [
      { "internalType": "uint112", "name": "_reserve0", "type": "uint112" },
      { "internalType": "uint112", "name": "_reserve1", "type": "uint112" },
      { "internalType": "uint32", "name": "_blockTimestampLast", "type": "uint32" }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];

// SushiSwap ABI (Same as Uniswap V2, as it is a fork)
const SushiSwapPairABI = UniswapV2PairABI;

// PancakeSwap ABI (for BSC, similar to Uniswap V2)
const PancakeSwapPairABI = [
  {
    "constant": true,
    "inputs": [],
    "name": "getReserves",
    "outputs": [
      { "internalType": "uint112", "name": "_reserve0", "type": "uint112" },
      { "internalType": "uint112", "name": "_reserve1", "type": "uint112" },
      { "internalType": "uint32", "name": "_blockTimestampLast", "type": "uint32" }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];

// KyberSwap ABI (Generic liquidity pool reserves)
const KyberSwapPoolABI = [
  {
    "constant": true,
    "inputs": [],
    "name": "getReserves",
    "outputs": [
      { "internalType": "uint112", "name": "_reserve0", "type": "uint112" },
      { "internalType": "uint112", "name": "_reserve1", "type": "uint112" },
      { "internalType": "uint32", "name": "_blockTimestampLast", "type": "uint32" }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];

// Balancer V2 ABI (For pools with multiple tokens)
const BalancerV2PoolABI = [
  {
    "inputs": [],
    "name": "getPoolId",
    "outputs": [
      { "internalType": "bytes32", "name": "", "type": "bytes32" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getNormalizedWeights",
    "outputs": [
      { "internalType": "uint256[]", "name": "", "type": "uint256[]" }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

// Curve Finance ABI (Stablecoin pools, returns different reserves structure)
const CurvePoolABI = [
  {
    "constant": true,
    "inputs": [],
    "name": "get_balances",
    "outputs": [
      { "internalType": "uint256[2]", "name": "", "type": "uint256[2]" }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];
// 1inch DEX Aggregator ABI
const OneInchSwapABI = [
{
    "constant": false,
    "inputs": [
        {
            "name": "fromToken",
            "type": "address"
        },
        {
            "name": "toToken",
            "type": "address"
        },
        {
            "name": "amount",
            "type": "uint256"
        }
    ],
    "name": "swap",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
}
];

// DODO DEX ABI
const DODOPoolABI = [
{
  "inputs": [],
  "name": "getBaseReserve",
  "outputs": [
    {
      "internalType": "uint256",
      "name": "baseReserve",
      "type": "uint256"
    }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [],
  "name": "getQuoteReserve",
  "outputs": [
    {
      "internalType": "uint256",
      "name": "quoteReserve",
      "type": "uint256"
    }
  ],
  "stateMutability": "view",
  "type": "function"
}
];

const ZeroXABI = [
{
    "constant": false,
    "inputs": [
        { "name": "inputToken", "type": "address" },
        { "name": "outputToken", "type": "address" },
        { "name": "inputAmount", "type": "uint256" },
        { "name": "minOutputAmount", "type": "uint256" },
        { "name": "recipient", "type": "address" }
    ],
    "name": "swap",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}
];
const CowSwapABI = [
{
    "inputs": [
        { "internalType": "address", "name": "sellToken", "type": "address" },
        { "internalType": "address", "name": "buyToken", "type": "address" },
        { "internalType": "uint256", "name": "sellAmount", "type": "uint256" }
    ],
    "name": "swap",
    "outputs": [{ "internalType": "uint256", "name": "buyAmount", "type": "uint256" }],
    "stateMutability": "payable",
    "type": "function"
}
];
const OneInchABI = [
{
    "constant": false,
    "inputs": [
        { "name": "fromToken", "type": "address" },
        { "name": "toToken", "type": "address" },
        { "name": "amount", "type": "uint256" }
    ],
    "name": "swap",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
}
];
const MatchaABI = ZeroXABI;
const CarbonABI = [
{
    "inputs": [
        { "name": "sellToken", "type": "address" },
        { "name": "buyToken", "type": "address" },
        { "name": "sellAmount", "type": "uint256" }
    ],
    "name": "executeStrategy",
    "outputs": [{ "internalType": "uint256", "name": "buyAmount", "type": "uint256" }],
    "stateMutability": "nonpayable",
    "type": "function"
}
];
const dYdXABI = [
{
    "constant": false,
    "inputs": [
        { "name": "asset", "type": "address" },
        { "name": "amount", "type": "uint256" }
    ],
    "name": "trade",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}
];
const SushiSwapABI = UniswapV2PairABI;
const ParaswapABI = [
{
    "constant": false,
    "inputs": [
        { "name": "fromToken", "type": "address" },
        { "name": "toToken", "type": "address" },
        { "name": "amount", "type": "uint256" }
    ],
    "name": "swap",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
}
];
const AgoraABI = [
{
    "inputs": [
        { "name": "inputToken", "type": "address" },
        { "name": "outputToken", "type": "address" },
        { "name": "amount", "type": "uint256" }
    ],
    "name": "swap",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
}
];
const JumperExchangeABI = [
{
    "inputs": [
        { "name": "srcToken", "type": "address" },
        { "name": "dstToken", "type": "address" },
        { "name": "amount", "type": "uint256" }
    ],
    "name": "bridgeSwap",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}
];
const RubicABI = [
{
    "inputs": [
        { "name": "inputToken", "type": "address" },
        { "name": "outputToken", "type": "address" },
        { "name": "amount", "type": "uint256" }
    ],
    "name": "multiChainSwap",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
}
];
const PanopticABI = [
{
    "inputs": [
        { "name": "underlyingAsset", "type": "address" },
        { "name": "optionType", "type": "uint8" },
        { "name": "amount", "type": "uint256" }
    ],
    "name": "createOption",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}
];
const PiperFinanceABI = [
{
    "inputs": [
        { "name": "token", "type": "address" },
        { "name": "amount", "type": "uint256" }
    ],
    "name": "deposit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}
];


// Export all ABIs
module.exports = {
  UniswapV2PairABI,
  SushiSwapPairABI,
  PancakeSwapPairABI,
  KyberSwapPoolABI,
  BalancerV2PoolABI,
  CurvePoolABI,
  OneInchSwapABI,
  DODOPoolABI,
  ZeroXABI,
  CowSwapABI,
  OneInchABI,
  MatchaABI,
  CarbonABI,
  dYdXABI,
  SushiSwapABI,
  ParaswapABI,
  AgoraABI,
  JumperExchangeABI,
  RubicABI,
  PanopticABI,
  PiperFinanceABI,
};
