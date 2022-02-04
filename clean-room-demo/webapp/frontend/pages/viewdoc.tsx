import Docv from '../components/Docv'
import { Breadcrumb } from 'components/breadcrumb'
function viewdoc() {
    return <>
        <Breadcrumb label="Back To Documents" link="/document">
        </Breadcrumb>
        <Docv User='Dennis' ></Docv>
    </>
}
export default viewdoc;