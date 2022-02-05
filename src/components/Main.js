import { useMoralis, useNativeBalance, useERC20Balances } from "react-moralis";

export default function Main() {
    const { user } = useMoralis();
    const address = user.get("ethAddress");
    const { data: nativeBalance } = useNativeBalance();
    const { data: erc20balances } = useERC20Balances();

    function formatERC20balance(erc20balance, decimals) {
        return erc20balance / (10 ** decimals);
    }

    const erc20balanceElements = erc20balances && erc20balances.map(balance => 
        <h3 key={balance.token_address}>{formatERC20balance(balance.balance, balance.decimals)} {balance.symbol}</h3>)

    return (
        <div>
            <h1>Welcome {user.get("username")}</h1>
            <h1>{address}</h1>
            <h3>{nativeBalance.formatted}</h3>
            {erc20balanceElements}
        </div>
    );
}