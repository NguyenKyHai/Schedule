import React, { useState } from 'react';
import { Container, TextField, FormControl, InputLabel, Select, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const Deparment: React.FC = () => {
  const [query, setQuery] = useState('');
  const [condition, setCondition] = useState('all');
  const [data, setData] = useState([
    { id: 1, name: 'Laptop', category: 'Electronics' },
    { id: 2, name: 'T-shirt', category: 'Clothing' },
    { id: 3, name: 'Book', category: 'Books' },
  ]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleConditionChange = (event: React.ChangeEvent<{ value: any }>) => {
    setCondition(event.target.value as string);
  };

  const filteredData = data.filter(item => {
    if (condition === 'all') {
      return item.name.toLowerCase().includes(query.toLowerCase()) || item.category.toLowerCase().includes(query.toLowerCase());
    }
    return item['category'].toLowerCase().includes(query.toLowerCase());
  });

  return (
    <Container>
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={handleSearch}
      />
      <FormControl variant="outlined" fullWidth margin="normal">
        <InputLabel>Condition</InputLabel>
        <Select value={condition}  label="Condition">
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="name">Name</MenuItem>
          <MenuItem value="category">Category</MenuItem>
        </Select>
      </FormControl>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Category</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.category}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Deparment;
