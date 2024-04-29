import React from "react";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa";

import { contactDetails } from "../../constants/constants";

import {
  DropDownContainerWrapper,
  DropDownContainer,
  DropDownIcon,
  DropDownItem,
  DropDownItemDesc,
  DropDownItemTitle,
  DropDownTextContainer,
} from "./ContactModalStyles";

const ContactModal = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <DropDownContainerWrapper onClick={() => props.onClose()}>
      <DropDownContainer
        initial={{ opacity: 0, y: 30 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.3,
            delay: 0,
            ease: "easeInOut",
          },
        }}
        exit={{ opacity: 0, y: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        <DropDownItem
          onClick={() => navigator.clipboard.writeText(contactDetails.phone)}
          title="Click to copy Contact no. to clipboard"
        >
          <DropDownIcon>
            <AiFillPhone color="black" />
          </DropDownIcon>
          <DropDownTextContainer>
            <DropDownItemTitle
              href={`tel:${contactDetails.phone.substring(1)}`}
            >
              Phone: {contactDetails.phone}{" "}
            </DropDownItemTitle>
            <DropDownItemDesc>
              Let's get together and have a chat?
            </DropDownItemDesc>
          </DropDownTextContainer>
        </DropDownItem>
        <DropDownItem
          onClick={() => navigator.clipboard.writeText(contactDetails.email)}
          title="Click to copy E-mail to clipboard"
        >
          <DropDownIcon>
            <AiOutlineMail color="black" />
          </DropDownIcon>
          <DropDownTextContainer>
            <DropDownItemTitle href={`mailto:${contactDetails.email}`}>
              Email: {contactDetails.email}
            </DropDownItemTitle>
            <DropDownItemDesc>
              If you want to talk to me, send a message and I'll get back
            </DropDownItemDesc>
          </DropDownTextContainer>
        </DropDownItem>
        <DropDownItem
          onClick={() => navigator.clipboard.writeText(contactDetails.address)}
          title="Click to copy Address to clipboard"
        >
          <DropDownIcon>
            <FaLocationArrow color="black" />
          </DropDownIcon>
          <DropDownTextContainer>
            <DropDownItemTitle>Address</DropDownItemTitle>
            <DropDownItemDesc>{contactDetails.address}</DropDownItemDesc>
          </DropDownTextContainer>
        </DropDownItem>
      </DropDownContainer>
    </DropDownContainerWrapper>
  );
};

export default ContactModal;
