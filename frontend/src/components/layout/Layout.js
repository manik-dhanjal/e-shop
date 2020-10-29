import React from 'react'
import Footer from "./Footer"
import Header from "./Header"
import {Container } from "react-bootstrap"
import styled from "styled-components"

const Main = styled.div`
main{
    min-height:80vh;
}
`


const Layout = ({children}) => {
    return (
        <Main>
            <Header/>
                <main className="py-5">
                    <Container >
                        {children}
                    </Container>
                </main>
            <Footer/>
        </Main>
    )
}

export default Layout
