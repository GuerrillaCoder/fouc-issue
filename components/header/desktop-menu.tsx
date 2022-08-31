import Link from 'next/link';
import { lighten } from 'polished';
import * as React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../contexts/theme-context';
import downIcon from '../../public/images/common/down.svg';
import Image from 'next/image';
import CtaButton from '../common/cta-button';


const DesktopNavList = styled.ul`
        display: none;
        @media ${props => props.theme.breakpoint.medium} {
            display: flex;
        }
        align-items: center;
        justify-content: center;
        color: #fff;
        list-style: none;   
        a{
            color: #fff;
            text-decoration: none;
        }
        > li{
            margin-left: 25px;
            border: 1px solid transparent;
            /* border-bottom-color: ${props => props.theme.darkBg}; */
            padding: 10px;
            position: relative;
            z-index: 20;
            &.has-sub:hover{
                border: 1px solid #fff;
                &:after{
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 2px;
                    width: 100%;
                    background-color: ${props => props.theme.darkBg};
                    z-index: 20;
                }
            }
            
        }
        ul{
            display: none;
            z-index: 10;
            /* display: flex; */
            position: absolute;
            top: 100%;
            transform: translateY(-1px);
            left: -1px;
            flex-direction: column;
            list-style: none;
            margin: 0;
            
            
            padding: 0;
            border: 1px solid #fff;
            background-color: ${props => props.theme.darkBg};
            li{
                padding: 10px 20px;

                white-space: nowrap;
                &:hover{
                    background-color: ${props => lighten(0.2,props.theme.darkBg)};
                }
            }
        }
        .has-sub{
            &:hover{
                border: 1px solid #fff;
                    ul{
                        display: flex;
                }
            }
            
        }
        .expandable{
            display: flex;
            a, span{
                display: block;
            }
        }
    `;

    const ButtonWrapper = styled.div`
        margin-left: 20px;
    `;

export const DesktopMenu = () => {

    const { currentTheme } = useTheme();

    return (
        <>
            <DesktopNavList theme={currentTheme}>
                <li className="has-sub"><a href="#" onClick={e => e.preventDefault()}> 
                <span className='expandable'>Products <Image src={downIcon} alt="down" width={20} height={20} /> </span></a>
                    <ul>
                        <li>
                            <a>product</a>
                        </li>
                        <li><a>product</a></li>
                    </ul>
                </li>
                <li className="has-sub"><a href="#" onClick={e => e.preventDefault()}> 
                <span  className='expandable'>Support <Image src={downIcon} alt="down" width={20} height={20} /> </span> </a>
                    <ul>
                        <li><a>product</a></li>
                        <li><a>product</a></li>
                        <li><a>product</a></li>
                        <li><a>product</a></li>
                    </ul>
                </li>
                <li><a>product</a></li>
                <li><a>product</a></li>
                <ButtonWrapper>
                    <CtaButton className='nav-button' size="small"  text="30 Day Free Trial"  onClick={() => {}}></CtaButton>
                </ButtonWrapper>
                
            </DesktopNavList>
        </>
    )
}
