import * as C from './styles'
import { NavLink, useParams, useLocation } from 'react-router-dom'
import logo from '../../assets/shared/logo.svg'
import close from '../../assets/shared/icon-close.svg'
import hamburger from '../../assets/shared/icon-hamburger.svg'
import data from '../../data.json'
import { useState } from 'react'

export const Header = () => {
    let { id } = useParams()
    let teste = useLocation()
    const newData = Object.entries(data) 
    const [ menu, setMenu ] = useState(hamburger)
    const [ menuShow, setMenuShow ] = useState(true)

    function handleClick () {
        if(menu === hamburger) {
            setMenu(close)
            setMenuShow(false)
        } else {
            setMenu(hamburger)
            setMenuShow(true)
        }
    }

    return (
        <C.Container menuHide={menuShow}>
            <C.Logo>
                <img src={logo} alt="Logo" />
            </C.Logo>
            <C.Hr></C.Hr>
            <C.Menu><img src={menu} alt="Menu Hamburger" onClick={handleClick} /></C.Menu>
            <C.Nav menuHide={menuShow}>
                <ul>
                    <NavLink 
                        style={({ isActive }) => {
                            return {
                                borderBottom: isActive ? "2px solid #fff" : "2px solid transparent"
                            };
                            }}
                    to="/"><li><strong>00</strong>Home</li></NavLink>
                    {newData.map((item, index) => {
                        return <NavLink
                        style={({ isActive }) => {
                            return {
                              borderBottom: isActive ? "2px solid #fff" : "2px solid transparent"
                            };
                          }}
                        to={`/${item[0]}/${item[1][0].name.replace(' ', '').toLowerCase()}`} key={index} ><li><strong>{`0${index + 1}`}</strong>{item[0]}</li></NavLink>
                    })}
                </ul>
            </C.Nav>
        </C.Container>
    )
}
