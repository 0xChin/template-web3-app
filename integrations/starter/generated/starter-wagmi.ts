// Generated by @wagmi/cli@1.1.0 on 6/19/2023 at 9:30:24 AM
import {
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
// starter
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const starterABI = [
  { constant: true, payable: false, stateMutability: 'view', type: 'function', inputs: [], name: 'name', outputs: [{ name: '', type: 'string' }] },
  {
    constant: false,
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_spender', type: 'address' },
      { name: '_value', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: 'success', type: 'bool' }],
  },
  {
    constant: true,
    payable: false,
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', type: 'uint256' }],
  },
  {
    constant: false,
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_from', type: 'address' },
      { name: '_to', type: 'address' },
      { name: '_value', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: 'success', type: 'bool' }],
  },
  {
    constant: true,
    payable: false,
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', type: 'address' }],
    name: 'balances',
    outputs: [{ name: '', type: 'uint256' }],
  },
  { constant: true, payable: false, stateMutability: 'view', type: 'function', inputs: [], name: 'decimals', outputs: [{ name: '', type: 'uint8' }] },
  {
    constant: true,
    payable: false,
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '', type: 'address' },
      { name: '', type: 'address' },
    ],
    name: 'allowed',
    outputs: [{ name: '', type: 'uint256' }],
  },
  {
    constant: true,
    payable: false,
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '_owner', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', type: 'uint256' }],
  },
  { constant: true, payable: false, stateMutability: 'view', type: 'function', inputs: [], name: 'symbol', outputs: [{ name: '', type: 'string' }] },
  {
    constant: false,
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_to', type: 'address' },
      { name: '_value', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: 'success', type: 'bool' }],
  },
  {
    constant: true,
    payable: false,
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '_owner', type: 'address' },
      { name: '_spender', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: 'remaining', type: 'uint256' }],
  },
  {
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: '_initialAmount', type: 'uint256' },
      { name: '_tokenName', type: 'string' },
      { name: '_decimalUnits', type: 'uint8' },
      { name: '_tokenSymbol', type: 'string' },
    ],
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '_from', type: 'address', indexed: true },
      { name: '_to', type: 'address', indexed: true },
      { name: '_value', type: 'uint256', indexed: false },
    ],
    name: 'Transfer',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '_owner', type: 'address', indexed: true },
      { name: '_spender', type: 'address', indexed: true },
      { name: '_value', type: 'uint256', indexed: false },
    ],
    name: 'Approval',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link starterABI}__.
 */
export function useStarterRead<TFunctionName extends string, TSelectData = ReadContractResult<typeof starterABI, TFunctionName>>(
  config: Omit<UseContractReadConfig<typeof starterABI, TFunctionName, TSelectData>, 'abi'> = {} as any
) {
  return useContractRead({ abi: starterABI, ...config } as UseContractReadConfig<typeof starterABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link starterABI}__ and `functionName` set to `"name"`.
 */
export function useStarterName<TFunctionName extends 'name', TSelectData = ReadContractResult<typeof starterABI, TFunctionName>>(
  config: Omit<UseContractReadConfig<typeof starterABI, TFunctionName, TSelectData>, 'abi' | 'functionName'> = {} as any
) {
  return useContractRead({ abi: starterABI, functionName: 'name', ...config } as UseContractReadConfig<typeof starterABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link starterABI}__ and `functionName` set to `"totalSupply"`.
 */
export function useStarterTotalSupply<TFunctionName extends 'totalSupply', TSelectData = ReadContractResult<typeof starterABI, TFunctionName>>(
  config: Omit<UseContractReadConfig<typeof starterABI, TFunctionName, TSelectData>, 'abi' | 'functionName'> = {} as any
) {
  return useContractRead({ abi: starterABI, functionName: 'totalSupply', ...config } as UseContractReadConfig<
    typeof starterABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link starterABI}__ and `functionName` set to `"balances"`.
 */
export function useStarterBalances<TFunctionName extends 'balances', TSelectData = ReadContractResult<typeof starterABI, TFunctionName>>(
  config: Omit<UseContractReadConfig<typeof starterABI, TFunctionName, TSelectData>, 'abi' | 'functionName'> = {} as any
) {
  return useContractRead({ abi: starterABI, functionName: 'balances', ...config } as UseContractReadConfig<
    typeof starterABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link starterABI}__ and `functionName` set to `"decimals"`.
 */
export function useStarterDecimals<TFunctionName extends 'decimals', TSelectData = ReadContractResult<typeof starterABI, TFunctionName>>(
  config: Omit<UseContractReadConfig<typeof starterABI, TFunctionName, TSelectData>, 'abi' | 'functionName'> = {} as any
) {
  return useContractRead({ abi: starterABI, functionName: 'decimals', ...config } as UseContractReadConfig<
    typeof starterABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link starterABI}__ and `functionName` set to `"allowed"`.
 */
export function useStarterAllowed<TFunctionName extends 'allowed', TSelectData = ReadContractResult<typeof starterABI, TFunctionName>>(
  config: Omit<UseContractReadConfig<typeof starterABI, TFunctionName, TSelectData>, 'abi' | 'functionName'> = {} as any
) {
  return useContractRead({ abi: starterABI, functionName: 'allowed', ...config } as UseContractReadConfig<
    typeof starterABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link starterABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useStarterBalanceOf<TFunctionName extends 'balanceOf', TSelectData = ReadContractResult<typeof starterABI, TFunctionName>>(
  config: Omit<UseContractReadConfig<typeof starterABI, TFunctionName, TSelectData>, 'abi' | 'functionName'> = {} as any
) {
  return useContractRead({ abi: starterABI, functionName: 'balanceOf', ...config } as UseContractReadConfig<
    typeof starterABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link starterABI}__ and `functionName` set to `"symbol"`.
 */
export function useStarterSymbol<TFunctionName extends 'symbol', TSelectData = ReadContractResult<typeof starterABI, TFunctionName>>(
  config: Omit<UseContractReadConfig<typeof starterABI, TFunctionName, TSelectData>, 'abi' | 'functionName'> = {} as any
) {
  return useContractRead({ abi: starterABI, functionName: 'symbol', ...config } as UseContractReadConfig<
    typeof starterABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link starterABI}__ and `functionName` set to `"allowance"`.
 */
export function useStarterAllowance<TFunctionName extends 'allowance', TSelectData = ReadContractResult<typeof starterABI, TFunctionName>>(
  config: Omit<UseContractReadConfig<typeof starterABI, TFunctionName, TSelectData>, 'abi' | 'functionName'> = {} as any
) {
  return useContractRead({ abi: starterABI, functionName: 'allowance', ...config } as UseContractReadConfig<
    typeof starterABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link starterABI}__.
 */
export function useStarterWrite<TFunctionName extends string, TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<PrepareWriteContractResult<typeof starterABI, string>['request']['abi'], TFunctionName, TMode>
    : UseContractWriteConfig<typeof starterABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any
) {
  return useContractWrite<typeof starterABI, TFunctionName, TMode>({ abi: starterABI, ...config } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link starterABI}__ and `functionName` set to `"approve"`.
 */
export function useStarterApprove<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<PrepareWriteContractResult<typeof starterABI, 'approve'>['request']['abi'], 'approve', TMode> & {
        functionName?: 'approve'
      }
    : UseContractWriteConfig<typeof starterABI, 'approve', TMode> & {
        abi?: never
        functionName?: 'approve'
      } = {} as any
) {
  return useContractWrite<typeof starterABI, 'approve', TMode>({ abi: starterABI, functionName: 'approve', ...config } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link starterABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useStarterTransferFrom<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<PrepareWriteContractResult<typeof starterABI, 'transferFrom'>['request']['abi'], 'transferFrom', TMode> & {
        functionName?: 'transferFrom'
      }
    : UseContractWriteConfig<typeof starterABI, 'transferFrom', TMode> & {
        abi?: never
        functionName?: 'transferFrom'
      } = {} as any
) {
  return useContractWrite<typeof starterABI, 'transferFrom', TMode>({ abi: starterABI, functionName: 'transferFrom', ...config } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link starterABI}__ and `functionName` set to `"transfer"`.
 */
export function useStarterTransfer<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<PrepareWriteContractResult<typeof starterABI, 'transfer'>['request']['abi'], 'transfer', TMode> & {
        functionName?: 'transfer'
      }
    : UseContractWriteConfig<typeof starterABI, 'transfer', TMode> & {
        abi?: never
        functionName?: 'transfer'
      } = {} as any
) {
  return useContractWrite<typeof starterABI, 'transfer', TMode>({ abi: starterABI, functionName: 'transfer', ...config } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link starterABI}__.
 */
export function usePrepareStarterWrite<TFunctionName extends string>(
  config: Omit<UsePrepareContractWriteConfig<typeof starterABI, TFunctionName>, 'abi'> = {} as any
) {
  return usePrepareContractWrite({ abi: starterABI, ...config } as UsePrepareContractWriteConfig<typeof starterABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link starterABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareStarterApprove(
  config: Omit<UsePrepareContractWriteConfig<typeof starterABI, 'approve'>, 'abi' | 'functionName'> = {} as any
) {
  return usePrepareContractWrite({ abi: starterABI, functionName: 'approve', ...config } as UsePrepareContractWriteConfig<
    typeof starterABI,
    'approve'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link starterABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareStarterTransferFrom(
  config: Omit<UsePrepareContractWriteConfig<typeof starterABI, 'transferFrom'>, 'abi' | 'functionName'> = {} as any
) {
  return usePrepareContractWrite({ abi: starterABI, functionName: 'transferFrom', ...config } as UsePrepareContractWriteConfig<
    typeof starterABI,
    'transferFrom'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link starterABI}__ and `functionName` set to `"transfer"`.
 */
export function usePrepareStarterTransfer(
  config: Omit<UsePrepareContractWriteConfig<typeof starterABI, 'transfer'>, 'abi' | 'functionName'> = {} as any
) {
  return usePrepareContractWrite({ abi: starterABI, functionName: 'transfer', ...config } as UsePrepareContractWriteConfig<
    typeof starterABI,
    'transfer'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link starterABI}__.
 */
export function useStarterEvent<TEventName extends string>(config: Omit<UseContractEventConfig<typeof starterABI, TEventName>, 'abi'> = {} as any) {
  return useContractEvent({ abi: starterABI, ...config } as UseContractEventConfig<typeof starterABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link starterABI}__ and `eventName` set to `"Transfer"`.
 */
export function useStarterTransferEvent(config: Omit<UseContractEventConfig<typeof starterABI, 'Transfer'>, 'abi' | 'eventName'> = {} as any) {
  return useContractEvent({ abi: starterABI, eventName: 'Transfer', ...config } as UseContractEventConfig<typeof starterABI, 'Transfer'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link starterABI}__ and `eventName` set to `"Approval"`.
 */
export function useStarterApprovalEvent(config: Omit<UseContractEventConfig<typeof starterABI, 'Approval'>, 'abi' | 'eventName'> = {} as any) {
  return useContractEvent({ abi: starterABI, eventName: 'Approval', ...config } as UseContractEventConfig<typeof starterABI, 'Approval'>)
}