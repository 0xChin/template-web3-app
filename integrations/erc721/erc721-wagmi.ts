// Generated by @wagmi/cli@0.1.11 on 6/1/2023 at 9:56:09 PM
import {
  useContract,
  UseContractConfig,
  useContractRead,
  UseContractReadConfig,
  useContractWrite,
  UseContractWriteConfig,
  usePrepareContractWrite,
  UsePrepareContractWriteConfig,
  useContractEvent,
  UseContractEventConfig,
} from 'wagmi'
import { ReadContractResult, WriteContractMode, PrepareWriteContractResult } from 'wagmi/actions'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// erc721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc721ABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: 'name_', internalType: 'string', type: 'string' },
      { name: 'symbol_', internalType: 'string', type: 'string' },
    ],
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'approved', internalType: 'address', type: 'address', indexed: true },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'operator', internalType: 'address', type: 'address', indexed: true },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '_fromTokenId', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: '_toTokenId', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'BatchMetadataUpdate',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256', indexed: false }],
    name: 'MetadataUpdate',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'previousOwner', internalType: 'address', type: 'address', indexed: true },
      { name: 'newOwner', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  { stateMutability: 'view', type: 'function', inputs: [], name: 'name', outputs: [{ name: '', internalType: 'string', type: 'string' }] },
  { stateMutability: 'view', type: 'function', inputs: [], name: 'owner', outputs: [{ name: '', internalType: 'address', type: 'address' }] },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  { stateMutability: 'nonpayable', type: 'function', inputs: [], name: 'renounceOwnership', outputs: [] },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'uri', internalType: 'string', type: 'string' },
    ],
    name: 'safeMint',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  { stateMutability: 'view', type: 'function', inputs: [], name: 'symbol', outputs: [{ name: '', internalType: 'string', type: 'string' }] },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokenOfOwnerByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  { stateMutability: 'view', type: 'function', inputs: [], name: 'totalSupply', outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }] },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useContract}__ with `abi` set to __{@link erc721ABI}__.
 */
export function useErc721(config: Omit<UseContractConfig, 'abi'> = {} as any) {
  return useContract({ abi: erc721ABI, ...config })
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__.
 */
export function useErc721Read<TFunctionName extends string, TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>>(
  config: Omit<UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>, 'abi'> = {} as any
) {
  return useContractRead({ abi: erc721ABI, ...config } as UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useErc721BalanceOf<TSelectData = ReadContractResult<typeof erc721ABI, 'balanceOf'>>(
  config: Omit<UseContractReadConfig<typeof erc721ABI, 'balanceOf', TSelectData>, 'abi' | 'functionName'> = {} as any
) {
  return useContractRead({ abi: erc721ABI, functionName: 'balanceOf', ...config } as UseContractReadConfig<
    typeof erc721ABI,
    'balanceOf',
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"getApproved"`.
 */
export function useErc721GetApproved<TSelectData = ReadContractResult<typeof erc721ABI, 'getApproved'>>(
  config: Omit<UseContractReadConfig<typeof erc721ABI, 'getApproved', TSelectData>, 'abi' | 'functionName'> = {} as any
) {
  return useContractRead({ abi: erc721ABI, functionName: 'getApproved', ...config } as UseContractReadConfig<
    typeof erc721ABI,
    'getApproved',
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"isApprovedForAll"`.
 */
export function useErc721IsApprovedForAll<TSelectData = ReadContractResult<typeof erc721ABI, 'isApprovedForAll'>>(
  config: Omit<UseContractReadConfig<typeof erc721ABI, 'isApprovedForAll', TSelectData>, 'abi' | 'functionName'> = {} as any
) {
  return useContractRead({ abi: erc721ABI, functionName: 'isApprovedForAll', ...config } as UseContractReadConfig<
    typeof erc721ABI,
    'isApprovedForAll',
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"name"`.
 */
export function useErc721Name<TSelectData = ReadContractResult<typeof erc721ABI, 'name'>>(
  config: Omit<UseContractReadConfig<typeof erc721ABI, 'name', TSelectData>, 'abi' | 'functionName'> = {} as any
) {
  return useContractRead({ abi: erc721ABI, functionName: 'name', ...config } as UseContractReadConfig<typeof erc721ABI, 'name', TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"owner"`.
 */
export function useErc721Owner<TSelectData = ReadContractResult<typeof erc721ABI, 'owner'>>(
  config: Omit<UseContractReadConfig<typeof erc721ABI, 'owner', TSelectData>, 'abi' | 'functionName'> = {} as any
) {
  return useContractRead({ abi: erc721ABI, functionName: 'owner', ...config } as UseContractReadConfig<typeof erc721ABI, 'owner', TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"ownerOf"`.
 */
export function useErc721OwnerOf<TSelectData = ReadContractResult<typeof erc721ABI, 'ownerOf'>>(
  config: Omit<UseContractReadConfig<typeof erc721ABI, 'ownerOf', TSelectData>, 'abi' | 'functionName'> = {} as any
) {
  return useContractRead({ abi: erc721ABI, functionName: 'ownerOf', ...config } as UseContractReadConfig<typeof erc721ABI, 'ownerOf', TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"supportsInterface"`.
 */
export function useErc721SupportsInterface<TSelectData = ReadContractResult<typeof erc721ABI, 'supportsInterface'>>(
  config: Omit<UseContractReadConfig<typeof erc721ABI, 'supportsInterface', TSelectData>, 'abi' | 'functionName'> = {} as any
) {
  return useContractRead({ abi: erc721ABI, functionName: 'supportsInterface', ...config } as UseContractReadConfig<
    typeof erc721ABI,
    'supportsInterface',
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"symbol"`.
 */
export function useErc721Symbol<TSelectData = ReadContractResult<typeof erc721ABI, 'symbol'>>(
  config: Omit<UseContractReadConfig<typeof erc721ABI, 'symbol', TSelectData>, 'abi' | 'functionName'> = {} as any
) {
  return useContractRead({ abi: erc721ABI, functionName: 'symbol', ...config } as UseContractReadConfig<typeof erc721ABI, 'symbol', TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"tokenByIndex"`.
 */
export function useErc721TokenByIndex<TSelectData = ReadContractResult<typeof erc721ABI, 'tokenByIndex'>>(
  config: Omit<UseContractReadConfig<typeof erc721ABI, 'tokenByIndex', TSelectData>, 'abi' | 'functionName'> = {} as any
) {
  return useContractRead({ abi: erc721ABI, functionName: 'tokenByIndex', ...config } as UseContractReadConfig<
    typeof erc721ABI,
    'tokenByIndex',
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"tokenOfOwnerByIndex"`.
 */
export function useErc721TokenOfOwnerByIndex<TSelectData = ReadContractResult<typeof erc721ABI, 'tokenOfOwnerByIndex'>>(
  config: Omit<UseContractReadConfig<typeof erc721ABI, 'tokenOfOwnerByIndex', TSelectData>, 'abi' | 'functionName'> = {} as any
) {
  return useContractRead({ abi: erc721ABI, functionName: 'tokenOfOwnerByIndex', ...config } as UseContractReadConfig<
    typeof erc721ABI,
    'tokenOfOwnerByIndex',
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"tokenURI"`.
 */
export function useErc721TokenUri<TSelectData = ReadContractResult<typeof erc721ABI, 'tokenURI'>>(
  config: Omit<UseContractReadConfig<typeof erc721ABI, 'tokenURI', TSelectData>, 'abi' | 'functionName'> = {} as any
) {
  return useContractRead({ abi: erc721ABI, functionName: 'tokenURI', ...config } as UseContractReadConfig<typeof erc721ABI, 'tokenURI', TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"totalSupply"`.
 */
export function useErc721TotalSupply<TSelectData = ReadContractResult<typeof erc721ABI, 'totalSupply'>>(
  config: Omit<UseContractReadConfig<typeof erc721ABI, 'totalSupply', TSelectData>, 'abi' | 'functionName'> = {} as any
) {
  return useContractRead({ abi: erc721ABI, functionName: 'totalSupply', ...config } as UseContractReadConfig<
    typeof erc721ABI,
    'totalSupply',
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721ABI}__.
 */
export function useErc721Write<TMode extends WriteContractMode, TFunctionName extends string>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<TMode, PrepareWriteContractResult<typeof erc721ABI, string>['abi'], TFunctionName>
    : UseContractWriteConfig<TMode, typeof erc721ABI, TFunctionName> & {
        abi?: never
      } = {} as any
) {
  return useContractWrite<TMode, typeof erc721ABI, TFunctionName>({ abi: erc721ABI, ...config } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"approve"`.
 */
export function useErc721Approve<TMode extends WriteContractMode>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<TMode, PrepareWriteContractResult<typeof erc721ABI, 'approve'>['abi'], 'approve'> & { functionName?: 'approve' }
    : UseContractWriteConfig<TMode, typeof erc721ABI, 'approve'> & {
        abi?: never
        functionName?: 'approve'
      } = {} as any
) {
  return useContractWrite<TMode, typeof erc721ABI, 'approve'>({ abi: erc721ABI, functionName: 'approve', ...config } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"renounceOwnership"`.
 */
export function useErc721RenounceOwnership<TMode extends WriteContractMode>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<TMode, PrepareWriteContractResult<typeof erc721ABI, 'renounceOwnership'>['abi'], 'renounceOwnership'> & {
        functionName?: 'renounceOwnership'
      }
    : UseContractWriteConfig<TMode, typeof erc721ABI, 'renounceOwnership'> & {
        abi?: never
        functionName?: 'renounceOwnership'
      } = {} as any
) {
  return useContractWrite<TMode, typeof erc721ABI, 'renounceOwnership'>({ abi: erc721ABI, functionName: 'renounceOwnership', ...config } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"safeMint"`.
 */
export function useErc721SafeMint<TMode extends WriteContractMode>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<TMode, PrepareWriteContractResult<typeof erc721ABI, 'safeMint'>['abi'], 'safeMint'> & { functionName?: 'safeMint' }
    : UseContractWriteConfig<TMode, typeof erc721ABI, 'safeMint'> & {
        abi?: never
        functionName?: 'safeMint'
      } = {} as any
) {
  return useContractWrite<TMode, typeof erc721ABI, 'safeMint'>({ abi: erc721ABI, functionName: 'safeMint', ...config } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function useErc721SafeTransferFrom<TMode extends WriteContractMode>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<TMode, PrepareWriteContractResult<typeof erc721ABI, 'safeTransferFrom'>['abi'], 'safeTransferFrom'> & {
        functionName?: 'safeTransferFrom'
      }
    : UseContractWriteConfig<TMode, typeof erc721ABI, 'safeTransferFrom'> & {
        abi?: never
        functionName?: 'safeTransferFrom'
      } = {} as any
) {
  return useContractWrite<TMode, typeof erc721ABI, 'safeTransferFrom'>({ abi: erc721ABI, functionName: 'safeTransferFrom', ...config } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function useErc721SetApprovalForAll<TMode extends WriteContractMode>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<TMode, PrepareWriteContractResult<typeof erc721ABI, 'setApprovalForAll'>['abi'], 'setApprovalForAll'> & {
        functionName?: 'setApprovalForAll'
      }
    : UseContractWriteConfig<TMode, typeof erc721ABI, 'setApprovalForAll'> & {
        abi?: never
        functionName?: 'setApprovalForAll'
      } = {} as any
) {
  return useContractWrite<TMode, typeof erc721ABI, 'setApprovalForAll'>({ abi: erc721ABI, functionName: 'setApprovalForAll', ...config } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useErc721TransferFrom<TMode extends WriteContractMode>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<TMode, PrepareWriteContractResult<typeof erc721ABI, 'transferFrom'>['abi'], 'transferFrom'> & {
        functionName?: 'transferFrom'
      }
    : UseContractWriteConfig<TMode, typeof erc721ABI, 'transferFrom'> & {
        abi?: never
        functionName?: 'transferFrom'
      } = {} as any
) {
  return useContractWrite<TMode, typeof erc721ABI, 'transferFrom'>({ abi: erc721ABI, functionName: 'transferFrom', ...config } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"transferOwnership"`.
 */
export function useErc721TransferOwnership<TMode extends WriteContractMode>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<TMode, PrepareWriteContractResult<typeof erc721ABI, 'transferOwnership'>['abi'], 'transferOwnership'> & {
        functionName?: 'transferOwnership'
      }
    : UseContractWriteConfig<TMode, typeof erc721ABI, 'transferOwnership'> & {
        abi?: never
        functionName?: 'transferOwnership'
      } = {} as any
) {
  return useContractWrite<TMode, typeof erc721ABI, 'transferOwnership'>({ abi: erc721ABI, functionName: 'transferOwnership', ...config } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721ABI}__.
 */
export function usePrepareErc721Write<TFunctionName extends string>(
  config: Omit<UsePrepareContractWriteConfig<typeof erc721ABI, TFunctionName>, 'abi'> = {} as any
) {
  return usePrepareContractWrite({ abi: erc721ABI, ...config } as UsePrepareContractWriteConfig<typeof erc721ABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareErc721Approve(
  config: Omit<UsePrepareContractWriteConfig<typeof erc721ABI, 'approve'>, 'abi' | 'functionName'> = {} as any
) {
  return usePrepareContractWrite({ abi: erc721ABI, functionName: 'approve', ...config } as UsePrepareContractWriteConfig<typeof erc721ABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"renounceOwnership"`.
 */
export function usePrepareErc721RenounceOwnership(
  config: Omit<UsePrepareContractWriteConfig<typeof erc721ABI, 'renounceOwnership'>, 'abi' | 'functionName'> = {} as any
) {
  return usePrepareContractWrite({ abi: erc721ABI, functionName: 'renounceOwnership', ...config } as UsePrepareContractWriteConfig<
    typeof erc721ABI,
    'renounceOwnership'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"safeMint"`.
 */
export function usePrepareErc721SafeMint(
  config: Omit<UsePrepareContractWriteConfig<typeof erc721ABI, 'safeMint'>, 'abi' | 'functionName'> = {} as any
) {
  return usePrepareContractWrite({ abi: erc721ABI, functionName: 'safeMint', ...config } as UsePrepareContractWriteConfig<
    typeof erc721ABI,
    'safeMint'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function usePrepareErc721SafeTransferFrom(
  config: Omit<UsePrepareContractWriteConfig<typeof erc721ABI, 'safeTransferFrom'>, 'abi' | 'functionName'> = {} as any
) {
  return usePrepareContractWrite({ abi: erc721ABI, functionName: 'safeTransferFrom', ...config } as UsePrepareContractWriteConfig<
    typeof erc721ABI,
    'safeTransferFrom'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function usePrepareErc721SetApprovalForAll(
  config: Omit<UsePrepareContractWriteConfig<typeof erc721ABI, 'setApprovalForAll'>, 'abi' | 'functionName'> = {} as any
) {
  return usePrepareContractWrite({ abi: erc721ABI, functionName: 'setApprovalForAll', ...config } as UsePrepareContractWriteConfig<
    typeof erc721ABI,
    'setApprovalForAll'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareErc721TransferFrom(
  config: Omit<UsePrepareContractWriteConfig<typeof erc721ABI, 'transferFrom'>, 'abi' | 'functionName'> = {} as any
) {
  return usePrepareContractWrite({ abi: erc721ABI, functionName: 'transferFrom', ...config } as UsePrepareContractWriteConfig<
    typeof erc721ABI,
    'transferFrom'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"transferOwnership"`.
 */
export function usePrepareErc721TransferOwnership(
  config: Omit<UsePrepareContractWriteConfig<typeof erc721ABI, 'transferOwnership'>, 'abi' | 'functionName'> = {} as any
) {
  return usePrepareContractWrite({ abi: erc721ABI, functionName: 'transferOwnership', ...config } as UsePrepareContractWriteConfig<
    typeof erc721ABI,
    'transferOwnership'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721ABI}__.
 */
export function useErc721Event<TEventName extends string>(config: Omit<UseContractEventConfig<typeof erc721ABI, TEventName>, 'abi'> = {} as any) {
  return useContractEvent({ abi: erc721ABI, ...config } as UseContractEventConfig<typeof erc721ABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721ABI}__ and `eventName` set to `"Approval"`.
 */
export function useErc721ApprovalEvent(config: Omit<UseContractEventConfig<typeof erc721ABI, 'Approval'>, 'abi' | 'eventName'> = {} as any) {
  return useContractEvent({ abi: erc721ABI, eventName: 'Approval', ...config } as UseContractEventConfig<typeof erc721ABI, 'Approval'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721ABI}__ and `eventName` set to `"ApprovalForAll"`.
 */
export function useErc721ApprovalForAllEvent(
  config: Omit<UseContractEventConfig<typeof erc721ABI, 'ApprovalForAll'>, 'abi' | 'eventName'> = {} as any
) {
  return useContractEvent({ abi: erc721ABI, eventName: 'ApprovalForAll', ...config } as UseContractEventConfig<typeof erc721ABI, 'ApprovalForAll'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721ABI}__ and `eventName` set to `"BatchMetadataUpdate"`.
 */
export function useErc721BatchMetadataUpdateEvent(
  config: Omit<UseContractEventConfig<typeof erc721ABI, 'BatchMetadataUpdate'>, 'abi' | 'eventName'> = {} as any
) {
  return useContractEvent({ abi: erc721ABI, eventName: 'BatchMetadataUpdate', ...config } as UseContractEventConfig<
    typeof erc721ABI,
    'BatchMetadataUpdate'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721ABI}__ and `eventName` set to `"MetadataUpdate"`.
 */
export function useErc721MetadataUpdateEvent(
  config: Omit<UseContractEventConfig<typeof erc721ABI, 'MetadataUpdate'>, 'abi' | 'eventName'> = {} as any
) {
  return useContractEvent({ abi: erc721ABI, eventName: 'MetadataUpdate', ...config } as UseContractEventConfig<typeof erc721ABI, 'MetadataUpdate'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721ABI}__ and `eventName` set to `"OwnershipTransferred"`.
 */
export function useErc721OwnershipTransferredEvent(
  config: Omit<UseContractEventConfig<typeof erc721ABI, 'OwnershipTransferred'>, 'abi' | 'eventName'> = {} as any
) {
  return useContractEvent({ abi: erc721ABI, eventName: 'OwnershipTransferred', ...config } as UseContractEventConfig<
    typeof erc721ABI,
    'OwnershipTransferred'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721ABI}__ and `eventName` set to `"Transfer"`.
 */
export function useErc721TransferEvent(config: Omit<UseContractEventConfig<typeof erc721ABI, 'Transfer'>, 'abi' | 'eventName'> = {} as any) {
  return useContractEvent({ abi: erc721ABI, eventName: 'Transfer', ...config } as UseContractEventConfig<typeof erc721ABI, 'Transfer'>)
}