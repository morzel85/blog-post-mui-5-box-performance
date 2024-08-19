import { memo } from 'react';
import { Box } from '@mui/material';

export const MuiBoxes = memo(({ amount }: { amount: number }) =>
  Array.from({ length: amount }, (_, i) => (
    <Box
      key={i}
      sx={{
        background: 'purple',
        opacity: Math.random(),
        margin: '1px',
        width: '15px',
        height: '15px'
      }}
    />
  ))
);
