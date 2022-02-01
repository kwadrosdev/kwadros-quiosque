import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { WhatsApp as WhatsAppIcon } from '@material-ui/icons';
import { WppBtn } from './styles';

import { whatsapp } from 'src/utils/constants';

function WhatsAppBtn() {
  const router = useRouter();
  const [bottom, setBottom] = useState(0);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    switch (router.route) {
      case '/':
        return setBottom(48);
      case '/review':
        return setHide(true);
      default:
        return setBottom(0);
    }
  }, [router.route]);

  return (
    <WppBtn
      bottom={bottom}
      hide={hide}
      target="_blank"
      rel="noopener noreferrer"
      href={`https://api.whatsapp.com/send?phone=${encodeURIComponent(whatsapp.number)}&text=${encodeURIComponent(whatsapp.msg)}`}>
      <WhatsAppIcon />
    </WppBtn>
  );
}

export default WhatsAppBtn;
