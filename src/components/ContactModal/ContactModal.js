import React from 'react';
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai';
import { FaLocationArrow } from 'react-icons/fa';

import {
  DropDownContainerWrapper,
  DropDownContainer,
  DropDownIcon,
  DropDownItem,
  DropDownItemDesc,
  DropDownItemTitle,
  DropDownTextContainer,
} from './ContactModalStyles';

const ContactModal = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <DropDownContainerWrapper onClick={() => props.onClose()}>
      <DropDownContainer onClick={(e) => e.stopPropagation()}>
        <DropDownItem
          onClick={() => navigator.clipboard.writeText('+91 89755  17715')}
          title="Click to copy Contact no. to clipboard"
        >
          <DropDownIcon>
            <AiFillPhone color="black" />
          </DropDownIcon>
          <DropDownTextContainer>
            <DropDownItemTitle>Phone: +91-89755-17715 </DropDownItemTitle>
            <DropDownItemDesc>
              Let's get together and have a chat?
            </DropDownItemDesc>
          </DropDownTextContainer>
        </DropDownItem>
        <DropDownItem
          onClick={() =>
            navigator.clipboard.writeText('yashagrawal01meh@gmail.com')
          }
          title="Click to copy E-mail to clipboard"
        >
          <DropDownIcon>
            <AiOutlineMail color="black" />
          </DropDownIcon>
          <DropDownTextContainer>
            <DropDownItemTitle>
              Email: yashagrawal01meh@gmail.com
            </DropDownItemTitle>
            <DropDownItemDesc>
              If you want to talk to me, send a message and I'll get back
            </DropDownItemDesc>
          </DropDownTextContainer>
        </DropDownItem>
        <DropDownItem
          onClick={() =>
            navigator.clipboard.writeText(
              'House No. 401, Ramnagar, Mehkar - 443301'
            )
          }
          title="Click to copy Address to clipboard"
        >
          <DropDownIcon>
            <FaLocationArrow color="black" />
          </DropDownIcon>
          <DropDownTextContainer>
            <DropDownItemTitle>Address</DropDownItemTitle>
            <DropDownItemDesc>
              House No. 401, Ramnagar, Mehkar - 443301
            </DropDownItemDesc>
          </DropDownTextContainer>
        </DropDownItem>
      </DropDownContainer>
    </DropDownContainerWrapper>
  );
};

export default ContactModal;
