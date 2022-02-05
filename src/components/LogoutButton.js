import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useMoralis } from "react-moralis";

export default function LogoutButton() {
    const { logout } = useMoralis();

        return (
            <Stack direction="row" spacing={2}>
                <Button onClick={() => logout()}>
                    Logout
                </Button>
            </Stack>
        );
  
}