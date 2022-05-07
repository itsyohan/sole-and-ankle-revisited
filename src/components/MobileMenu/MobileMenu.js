/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { QUERIES } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Wrapper>
      <Backdrop />
      <ContentWrapper>
        <CloseButton onClick={onDismiss}>
          <Icon id="close" sizse="large" />
        </CloseButton>
        <Nav>
          <Link href="/sale" style={{ "--color": "hsla(240, 60%, 63%, 1)" }}>
            Sale
          </Link>
          <Link href="/new">New&nbsp;Releases</Link>
          <Link href="/men">Men</Link>
          <Link href="/women">Women</Link>
          <Link href="/kids">Kids</Link>
          <Link href="/collections">Collections</Link>
        </Nav>
        <Footer>
          <Link href="/terms">Terms and Conditions</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/contact">Contact Us</Link>
        </Footer>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    display: unset;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 200;
  }
`

const Backdrop = styled.div`
  position: fixed;
  background-color: hsla(220, 5%, 40%, 0.8);
  opacity: 0.5;
  width: 100%;
  height: 100%;
`;

const ContentWrapper = styled.div`
  background-color: hsl(0deg, 0%, 100%);
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 80%;
  padding: 32px;
`

const Link = styled.a`
  text-decoration: none;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  margin-bottom: auto;
  gap: 22px;

  ${Link} {
    --color: hsla(220, 3%, 20%, 1);
    text-transform: uppercase;
    color: var(--color);
    font-size: ${18/16}rem;
    line-height: 21px;
    font-weight: 600;
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;

  ${Link} {
    font-size: ${14 / 16}rem;
    color: hsla(210, 5%, 40%, 1);
    line-height: 16px;
  }
`;

const CloseButton = styled(UnstyledButton)`
  align-self: end;
`

export default MobileMenu;
