import * as C from './styles'
import { useParams, NavLink } from 'react-router-dom'
import { Header } from '../../components/Header'
import moonPic from '../../assets/destination/image-moon.png'
import marsPic from '../../assets/destination/image-mars.png'
import europaPic from '../../assets/destination/image-europa.png'
import titanPic from '../../assets/destination/image-titan.png'
import data from '../../data.json'

export const Destination = () => {
    let { id } = useParams()
    let newId = id.replace(id.charAt(0), id.charAt(0).toUpperCase()) //turn first character uppercase
    let destination = {}
    let src

    switch (newId) {
        case 'Moon':
            src = moonPic;
            break;
        case 'Mars':
            src = marsPic;
            break;
        case 'Europa':
            src = europaPic;
            break;
        case 'Titan':
            src = titanPic;
            break;
        default:
            return
    }

    data.destinations.map((item) => newId === item.name ? destination = {...item} : destination)    

    return (
        <C.Container>
            <Header />
            <C.Sections>
                <h2><span>01</span>Pick your destination</h2>
                <img src={src} alt="" />
                <C.HeaderDestination>
                    <ul>
                        {data.destinations.map((item, index) => {
                            return <NavLink key={index} 
                            style={({ isActive }) => {
                                return {
                                    borderBottom: isActive ? "2px solid #fff" : "2px solid transparent"
                                };
                                }}
                            to={`/destinations/${item.name.toLowerCase()}`} ><li>{item.name}</li></NavLink>
                        })}
                    </ul>
                </C.HeaderDestination>
                <strong>{destination.name}</strong>
                <p className="description"> {destination.description} </p>
                <C.Info>
                    <C.Distance>
                        <p>Avg. distance</p>
                        <span>{destination.distance}</span>
                    </C.Distance>
                    <C.Time>
                        <p>Est. travel time</p>
                        <span>{destination.travel}</span>
                    </C.Time>
                </C.Info>
            </C.Sections>
        </C.Container>
    )
}
