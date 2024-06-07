import { Button, Input } from "@mui/material";
import "./register.component.styles.css";

export const RegisterComponent = () => {
    return (
        <form className="form-register">
            <label htmlFor="username">UserName
             <Input type="text" name="name" id="username" />
            </label>
            <label htmlFor="email"> Email
                <Input type="email" name="email" id="email" />
            </label>
            <label htmlFor="password">Password
            <Input type="password" name="email" id="password" />
            </label>
            <Button variant="outlined">Registrar</Button>
        </form>
    )
}