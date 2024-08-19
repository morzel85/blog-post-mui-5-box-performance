import { useState } from 'react';
import {
  Button,
  Box,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  Link
} from '@mui/material';
import { PlainDivs } from './PlainDivs';
import { MuiBoxes } from './MuiBoxes';

type ItemType = 'div' | 'box';

export const App = () => {
  const [nextAmount, setNextAmount] = useState<number | undefined>(500);
  const [currentAmount, setCurrentAmount] = useState(0);
  const [itemType, setItemType] = useState<ItemType>('div');

  const isNextAmountValid = nextAmount !== undefined && nextAmount > 0 && nextAmount < 100000;
  const isNextAmountLarge = nextAmount !== undefined && nextAmount >= 5000;

  return (
    <Box display="grid" gridTemplateRows="auto 1fr auto" gap={1} m={1}>
      <Box display="flex" flexWrap="wrap" gap={3} mb={2}>
        <FormControl>
          <FormLabel id="item-type-group-label">Type</FormLabel>
          <RadioGroup
            value={itemType}
            onChange={event => setItemType(event.target.value as ItemType)}
            row
            aria-labelledby="item-type-group-label"
            name="item-type-group"
          >
            <FormControlLabel value="div" control={<Radio />} label="Plain div" />
            <FormControlLabel value="box" control={<Radio />} label="MUI Box" />
          </RadioGroup>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="amount">Amount</FormLabel>
          <TextField
            type="number"
            id="amount"
            value={nextAmount || ''}
            inputProps={{ min: 1, max: 100000 }}
            size="small"
            sx={{ mr: 2 }}
            color={isNextAmountLarge ? 'warning' : undefined}
            error={!isNextAmountValid}
            InputLabelProps={{ shrink: false }}
            helperText={nextAmount !== undefined && nextAmount > 5000 ? 'Are you sure?' : undefined}
            onChange={event => setNextAmount(event.target.value !== '' ? Number(event.target.value) : undefined)}
          />
        </FormControl>
        <Box display="flex" gap={2}>
          <Button
            variant="outlined"
            disabled={!isNextAmountValid}
            onClick={() => {
              if (nextAmount !== undefined) setCurrentAmount(nextAmount);
            }}
          >
            Make
          </Button>
          <Button variant="outlined" color="warning" onClick={() => setCurrentAmount(0)} disabled={currentAmount < 1}>
            Clear
          </Button>
        </Box>
      </Box>
      <Box display="flex" flexWrap="wrap" alignContent="start" overflow="auto">
        {itemType === 'div' ? <PlainDivs amount={currentAmount} /> : <MuiBoxes amount={currentAmount} />}
      </Box>
      <Box fontSize="0.8rem">
        Example app from{' '}
        <Link href="http://morzel.net" target="_blank" rel="noreferrer">
          morzel.net
        </Link>{' '}
        blog post
      </Box>
    </Box>
  );
};
