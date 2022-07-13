import React, { useState, useEffect } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

import useStyles from './styles';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  let classes = useStyles();

  return (
    <div className={classes.searchBarContainer}>
      <TextField
        onKeyPress={() => {}}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant="standard"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default SearchBar;
