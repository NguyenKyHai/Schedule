import * as React from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import 'dayjs/locale/vi'; // Import ngôn ngữ tiếng Việt cho Dayjs
import { Dayjs } from 'dayjs';
import { Container } from '@mui/material';

const App: React.FC = () => {
  const [value1, setValue1] = React.useState<Dayjs | null>(null);
  const [value2, setValue2] = React.useState<Dayjs | null>(null);
  const [selectValue, setSelectValue] = React.useState<string>('');

  return (
    <Container>
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="vi">
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={3}>
          <Select
            value={selectValue} size='small'
            onChange={(event) => setSelectValue(event.target.value)}
            fullWidth
          >
            <MenuItem value=""><em>None</em></MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} md={3}>
          <DatePicker
            label="Chọn ngày 1"
            value={value1}
            onChange={(newValue: Dayjs | null) => setValue1(newValue)}
            slotProps={{ textField: { size: 'small' } }}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <DatePicker
            label="Chọn ngày 2"
            value={value2}
            onChange={(newValue: Dayjs | null) => setValue2(newValue)}
            slotProps={{ textField: { size: 'small' } }}
          />
        </Grid>
      </Grid>
    </LocalizationProvider>
    </Container>
  );
}

export default App;
