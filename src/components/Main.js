import { useMoralis, useNativeBalance, useERC20Balances, useTokenPrice } from "react-moralis";

export default function Main() {
    const { user } = useMoralis();
    const address = user.get("ethAddress");
    const { data: nativeBalanceData } = useNativeBalance();
    const { data: erc20balancesData } = useERC20Balances();
    const { data: tokenPriceData } = useTokenPrice({ address: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619' , chain: 'polygon'});

    function formatERC20balance(erc20balance, decimals) {
        return erc20balance / (10 ** decimals);
    }

    const erc20balanceElements = erc20balancesData && erc20balancesData.map(balance => 
        <h3 key={balance.token_address}>{formatERC20balance(balance.balance, balance.decimals)} {balance.symbol}</h3>)

    return (
        <div>
            <h1>Welcome {user.get("username")}</h1>
            <h1>{address}</h1>
            <h3>{nativeBalanceData.formatted} {tokenPriceData && tokenPriceData.formattedUsd}</h3>
            {erc20balanceElements}
        </div>
    );
}