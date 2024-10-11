import { FormControl, InputLabel, TextField } from "@mui/material";

export interface ITextInput {
    label: string,
    size: "small" | "medium"
}
const TextInput = (props: ITextInput) => {
    return (
        <TextField fullWidth label={props.label} variant="outlined" size={props.size} sx={{
            backgroundColor: 'white',
        }} />
    )
};
export default TextInput;