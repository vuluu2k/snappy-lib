import React, { useState } from 'react';
import { SnyInputOtp } from 'snappy';
import { colors } from '../options';

function Example(args) {
  const [otpCode, setOtpCode] = useState('');

  return (
    <div>
      <SnyInputOtp
        value={otpCode}
        onChange={(e) => setOtpCode(e.target.value)}
        maxLength={4}
      />
    </div>
  );
}
// Example.args = {
//   children: 'Snappy Express',
//   type: 'primary',
//   style: { width: 120 },
//   size: 'md',
// };

// Example.argTypes = {
//   type: {
//     control: { type: 'select' },
//     options: colors,
//   },
//   size: {
//     control: { type: 'select' },
//     options: ['sm', 'md', 'lg'],
//   },
// };

export default Example;
