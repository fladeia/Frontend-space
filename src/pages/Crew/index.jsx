import * as C from './styles'
import { useParams, Link } from 'react-router-dom'
import { Header } from '../../components/Header'
import douglasPic from '../../assets/crew/image-douglas-hurley.png'
import markPic from '../../assets/crew/image-mark-shuttleworth.png'
import victorPic from '../../assets/crew/image-victor-glover.png'
import anoushehPic from '../../assets/crew/image-anousheh-ansari.png'
import data from '../../data.json'

export const Crew = () => {
    let { id } = useParams()
    let newId
    const newData = data.crew
    let crew = {}
    let src

    switch (id) {
        case 'douglashurley':
            src = douglasPic;
            newId = 'Douglas Hurley';
            break;
        case 'markshuttleworth':
            src = markPic;
            newId = 'Mark Shuttleworth';
            break;
        case 'victorglover':
            src = victorPic;
            newId = 'Victor Glover';
            break;
        case 'anoushehansari':
            src = anoushehPic;
            newId = 'Anousheh Ansari';
            break;
        default:
            return    
    }

    newData.map((item) => newId === item.name ? crew = {...item} : crew)

  return (
    <C.Container>
        <Header />
        <C.Sections>
            <h2><span>02</span>Meet Your Crew</h2>
            <span className="role">{crew.role}</span>
            <strong>{crew.name}</strong>
            <p className="bio">{crew.bio}</p>
            <C.HeaderCrew>
                <ul>
                    {data.crew.map((item, index) => {
                        return <Link key={index} to={`/crew/${item.name.replace(' ', '').toLocaleLowerCase()}`} ><li><span></span></li></Link>
                    })}
                </ul>
            </C.HeaderCrew>
            <img src={src} alt="" />
        </C.Sections>
    </C.Container>
)  
}
