import { memo } from 'react';

export const PlainDivs = memo(({ amount }: { amount: number }) =>
  Array.from({ length: amount }, (_, i) => (
    <div
      key={i}
      style={{
        background: 'darkgreen',
        opacity: Math.random(),
        margin: '1px',
        width: '15px',
        height: '15px'
      }}
    />
  ))
);
