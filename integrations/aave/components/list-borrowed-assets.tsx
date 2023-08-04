import { BorrowedAssetsItem } from './borrowed-assets-item'
import { useAave } from '../hooks/use-aave'

export const ListBorrowedAssets = () => {
  const { usdData, totalDebtInUsd, reservesData, averageBorrowApy } = useAave()

  const filteredUserReserves = usdData?.filter((reserve) => (reserve.scaledVariableDebt || reserve.principalStableDebt) !== BigInt(0))

  return (
    <div className="flex-1 rounded border p-3 dark:border-slate-600">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-bold">Your Borrows</h2>
      </div>
      {filteredUserReserves && filteredUserReserves.length > 0 ? (
        <>
          <div className="flex items-center">
            <div className="mr-2 rounded border bg-white py-2 px-4 dark:border-slate-600 dark:bg-gray-800">
              <h3 className="text-xs font-bold">
                <span className="text-slate-500 dark:text-slate-300"> Debt $ </span>
                {totalDebtInUsd.toFixed(2)}
              </h3>
            </div>
            <div className="mr-2 rounded border bg-white py-2 px-4 dark:border-slate-600 dark:bg-gray-800">
              <h3 className="text-xs font-bold">
                <span className="text-slate-500 dark:text-slate-300">APY</span> {averageBorrowApy.toFixed(2)}{' '}
                <span className="text-slate-500 dark:text-slate-300">%</span>
              </h3>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="mt-7 w-full table-auto border-collapse text-left">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-center text-xs text-slate-500 dark:text-slate-300">Asset</th>
                  <th className="px-4 py-2 text-center text-xs text-slate-500 dark:text-slate-300">Debt</th>
                  <th className="px-4 py-2 text-center text-xs text-slate-500 dark:text-slate-300">APY</th>
                  <th className="px-4 py-2 text-center text-xs text-slate-500 dark:text-slate-300">APY Type</th>
                </tr>
              </thead>
              <tbody>
                {filteredUserReserves?.map((userReserve, index) => {
                  const reserve = reservesData?.[0].find((reserve) => reserve.underlyingAsset === userReserve.underlyingAsset)
                  const isVariableRate = userReserve.scaledVariableDebt > BigInt(0)
                  const decimalsAsNumber = Number(reserve?.decimals) ?? 18

                  return (
                    <BorrowedAssetsItem
                      key={index}
                      address={userReserve.underlyingAsset}
                      aTokenBalance={userReserve.scaledATokenBalance}
                      borrowRate={isVariableRate ? Number(reserve?.variableBorrowRate) / 10 ** 25 : Number(reserve?.stableBorrowRate) / 10 ** 25}
                      rateMode={isVariableRate ? BigInt(2) : BigInt(1)}
                      canSwitchRateMode={
                        reserve?.stableBorrowRateEnabled
                          ? isVariableRate
                            ? Number(userReserve.scaledATokenBalance) / 10 ** decimalsAsNumber <
                              ((Number(userReserve.scaledVariableDebt) / 10 ** decimalsAsNumber) *
                                Number(reserve?.variableBorrowIndex ?? BigInt(1))) /
                                10 ** 27
                            : true
                          : false
                      }
                      debt={
                        isVariableRate
                          ? ((Number(userReserve.scaledVariableDebt) / 10 ** decimalsAsNumber) * Number(reserve?.variableBorrowIndex ?? BigInt(1))) /
                            10 ** 27
                          : Number(userReserve.principalStableDebt) / 10 ** decimalsAsNumber
                      }
                    />
                  )
                })}
              </tbody>
            </table>
          </div>{' '}
        </>
      ) : (
        <p className="text-sm text-slate-500 dark:text-slate-300">Nothing borrowed yet</p>
      )}
    </div>
  )
}
