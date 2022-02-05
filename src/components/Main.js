import { useMoralis, useNativeBalance, useERC20Balances } from "react-moralis";

export default function Main() {
    const { user } = useMoralis();
    const address = user.get("ethAddress");
    const { data: balance } = useNativeBalance();
    const { data: erc20balances } = useERC20Balances();
    const formattedERC20balance = erc20balances[0].balance / 1000000000000000000;

    return (
        <div>
            <h1>Welcome {user.get("username")}</h1>
            <h1>{address}</h1>
            <h3>{balance.formatted}</h3>
            <h3>{formattedERC20balance} {erc20balances[0].symbol}</h3>
        </div>
    );
}