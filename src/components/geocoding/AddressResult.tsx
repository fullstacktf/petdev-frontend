import React from 'react';
import { GeocodingResult } from "./GeocodingInput";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }
  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }
  70% {
    transform: translate3d(0, -15px, 0);
  }
  90% {
    transform: translate3d(0,-4px,0);
  }
`;

const Name = styled.h2`
  color: ${props => props.color};
  animation: ${bounce} ${Math.random()}s ease infinite;
`;

const Button = styled.button`
  width:285px ;
  background: white;
  border: 0;
  height: 60px;
  text-align: left;

  z-index: 10;
  &:hover {
    background: rgb(245, 245, 245) ;
  }
`;


interface AddressResultProps {
  address: GeocodingResult,
  key: number,
  onAddressClick: (lat: number, lng: number) => void;
}

const COLOR = ['red', 'green', 'blue'];



export const AddressResult: any = (props: AddressResultProps) => {
  const handleOnClick = () => {
    props.onAddressClick(props.address.location.lat, props.address.location.lng);
    console.log(props.address);

  }
  return <Container onClick={handleOnClick}>

    <li><Button > <i className='map marker alternate icon'></i> {props.address.name}</Button></li>

    {/*  <div>{props.address.location.lat}</div> */}
  </Container>
};