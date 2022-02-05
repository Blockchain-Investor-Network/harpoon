import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useMoralis } from "react-moralis";

export default function LoginButton() {
    const { authenticate } = useMoralis();

        return (
            <Stack direction="row" spacing={2}>
                <Button onClick={authenticate}>
                    Login With MetaMask
                </Button>
            </Stack>
        );
  
}