import Link from 'next/link';
import { prependOnceListener } from 'process';
import * as React from 'react';
import styled from 'styled-components';
import { ThemeSettings, ThemePropsOptional, useTheme } from '../../contexts/theme-context';

interface ButtonProps extends ThemePropsOptional {
    text: string,
    subText?: string,
    underText?: string,
    onClick?(): void,
    size?: "small" | "medium" | "large",
    // size?: string,
    className?: string,
    style?: string

}

const CtaButtonStyled = styled.div<ButtonProps>`
    
    text-align: center;
    .cta-button{
        background-color: ${(props: ButtonProps) => props.theme?.ctaButton};
        display: inline-block;
        border-bottom: 4px solid ${(props: ButtonProps) => props.theme?.ctaHighlight};
        
        text-align: center;
        &:hover{
            cursor: pointer;
            background-color: ${(props: ButtonProps) => props.theme?.ctaButtonHover};
            border-bottom: 4px solid ${(props: ButtonProps) => props.theme?.ctaHighlightHover};
        }
    }

    a{
        padding: 12px 25px;
        display: block;
    }

    .label{
        font-size: ${(props) => {
        // console.log(props, "props");
        switch (props.size) {
            case "small":
                return "0.9rem";
            case "medium":
                return "1.3rem";
            case "large":
                return "1.8rem";
            default:
                return "1.4rem"
        }
    }} ;
        font-weight: 700;
        color: #000;
    }

    .sub-label{
        margin-top: 4px;
        color: #000;
        font-size: ${(props) => {
        // console.log(props, "props");
            switch (props.size) {
                case "small":
                    return "0.7rem";
                case "medium":
                    return "0.8rem";
                case "large":
                    return "0.9rem";
                default:
                    return "0.9rem"
            }
        }} ;
    }

    .undertext{
        font-size: ${(props) => {
        // console.log(props, "props");
            switch (props.size) {
                case "small":
                    return "0.7rem";
                case "medium":
                    return "0.8rem";
                case "large":
                    return "0.9rem";
                default:
                    return "0.9rem"
            }
        }} ;
        margin-top: 8px;
    }
`;

// const ButtonLabel = styled.div`
//     font-size: 24px;
//     font-weight: 700;
//     color: #000;

// `;
// const ButtonSubLabel = styled.div`
//     margin-top: 4px;
//     color: #000;
// `;
export const CtaButton = (props: ButtonProps) => {

    const { currentTheme } = useTheme();
    return (
        <CtaButtonStyled size={props?.size} theme={props?.theme ?? currentTheme} text={props.text} className={props?.className}>
            <div >
                <a className='cta-button' onClick={props.onClick} >
                    <div className="label">{props.text}</div>
                    {props.subText &&
                        <div className="sub-label">{props.subText}</div>
                    }
                </a>



                {props.underText &&
                    <div className='undertext'>
                        {props.underText}
                    </div>
                }
            </div>
        </CtaButtonStyled>

    )
}

export default CtaButton;