import * as C from './styles'
import { useParams, Link } from 'react-router-dom'
import { Header } from '../../components/Header'
import vehiclecPortrait from '../../assets/technology/image-launch-vehicle-portrait.jpg'
import vehicleLandscape from '../../assets/technology/image-launch-vehicle-landscape.jpg'
import spacePortrait from '../../assets/technology/image-space-capsule-portrait.jpg'
import spaceLandscpape from '../../assets/technology/image-space-capsule-landscape.jpg'
import capsulePortrait from '../../assets/technology/image-spaceport-portrait.jpg'
import capsuleLandscape from '../../assets/technology/image-spaceport-landscape.jpg'
import data from '../../data.json'

export const Technology = () => {
    let { id } = useParams()
    let newId
    const newData = data.technology
    let technology = {}
    let srcDesktop
    let srcTablet
    
    switch (id) {
        case 'launchvehicle':
            srcDesktop = vehiclecPortrait;
            srcTablet = vehicleLandscape;
            newId = 'Launch vehicle';
            break;
        case 'spaceport':
            srcDesktop = spacePortrait;
            srcTablet = spaceLandscpape;
            newId = 'Spaceport';
            break;
        case 'spacecapsule':
            srcDesktop = capsulePortrait;
            srcTablet = capsuleLandscape
            newId = 'Space capsule';
            break;
        default:
            return
    }

    newData.map((item) => newId === item.name ? technology = {...item} : technology)    

    return (
        <C.Container>
            <Header />
            <C.Sections>
                <h2><span>03</span>Space Launch 101</h2>
                <C.HeaderTechnology>
                    <ul>
                        {data.technology.map((item, index) => {
                            return <Link key={index} to={`/technology/${item.name.replace(" ", "").toLowerCase()}`} ><li><span>{index + 1}</span></li></Link>
                        })}
                    </ul>
                </C.HeaderTechnology>
                <span className="terminology">The Terminology...</span>
                <strong>{technology.name}</strong>
                <p>{technology.description}</p>
                <C.Section2 srcDesktop={srcDesktop} srcTablet={srcTablet}></C.Section2>
            </C.Sections>
        </C.Container>
    )
}
