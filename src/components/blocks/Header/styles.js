import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors, metrics } from '../../../theme'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${colors.gray1000};
  align-items: center;
  position: ${props => (props.position ? props.position : 'relative')};
  ${props => props.position === 'fixed' && `top: 0`};
  ${props => props.position === 'fixed' && `right: 0`};
  ${props => props.position === 'fixed' && `left: 0`};
  ${props => props.position === 'fixed' && `z-index: 9999`};
  height: 80px;
  @media only screen and (max-width: ${metrics.smallScreen}px) {
    justify-content: flex-start;
  }
`

export const GoTo = styled(Link)`
  position: relative;
  display: inline-block;
  font-family: 'avenir-regular';
  color: ${colors.white};
  font-size: 17px;
  ${props => props.padding && `padding: ${props.padding}`};
  cursor: pointer;
  text-decoration: none;
  padding: 10px;
  &:after {
    display: block;
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    border-top: 1px solid ${colors.green};
    transform: scaleX(0);
    width: 100%;
    transition: transform 250ms;
  }

  &:hover {
    &:after {
      transform: scaleX(1);
    }
  }
`

export const CatButton = styled.text`
  position: relative;
  display: inline-block;
  font-family: 'avenir-regular';
  color: ${colors.white};
  font-size: 17px;
  ${props => props.padding && `padding: ${props.padding}`};
  cursor: pointer;
  text-decoration: none;
  padding: 10px;
  &:after {
    display: block;
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    border-top: 1px solid ${colors.green};
    transform: scaleX(0);
    width: 100%;
    transition: transform 250ms;
  }

  &:hover {
    &:after {
      transform: scaleX(1);
    }
  }
`

export const Head = styled(Link)`
  position: relative;
  display: inline-block;
  font-family: 'avenir-regular';
  color: ${colors.green};
  font-size: 25px;
  ${props => props.padding && `padding: ${props.padding}`};
  cursor: pointer;
  text-decoration: none;
  padding: 10px;

  &:hover {
    color: ${colors.red};
  }

  @media only screen and (max-width: ${metrics.smallScreen}px) {
    font-size: 23px;
    padding: 25px;
  }
` 

export const Block = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
`

export const sideBarStyle = {
  bmBurgerButton: {
    position: 'fixed',
    width: '30px',
    height: '25px',
    right: '26px',
    top: '25px'
  },
  bmBurgerBars: {
    background: colors.green
  },
  bmCrossButton: {
    top: '20px',
    right: '28px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: colors.gray800,
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
    overflow: 'hidden'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  },
  bmMenuWrap: {
    width: '100%'
  }
}