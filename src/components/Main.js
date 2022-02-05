import { useMoralis, useNativeBalance } from "react-moralis";

export default function Main() {
    const { user } = useMoralis();
    const address = user.get("ethAddress");
    const { getBalances, data: balance, nativeToken, error, isLoading } = useNativeBalance();
 

    return (
        <div>
            <h1>Welcome {user.get("username")}</h1>
            <h1>{address}</h1>
            <h3>{balance.formatted}</h3>
        </div>
    );
}