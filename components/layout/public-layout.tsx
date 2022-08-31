import * as React from 'react';
import { Header } from '../header/header';


export const PublicLayout = ({ children } : any) => {

    return (
        <>
            <Header></Header>
            <main>{children}</main>
        </>
    )
}