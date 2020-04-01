import { library } from "@fortawesome/fontawesome-svg-core";
import { 
    faTrash,
    faSignOutAlt,
    faEdit, 
    faSpinner,
    faPlusSquare,
    faPhoneVolume,
    faEnvelope,
    faMapMarked,
    faLock,
    faBars,
    faTimes,
    faDatabase,
    faChevronCircleRight,
    faChevronCircleLeft
} from "@fortawesome/free-solid-svg-icons";
import { 
    fab,
    faReact,
    faNode,
    faJs,
    faHtml5,
    faCss3Alt,
    faPython,
    faNpm,
    faGit
} from "@fortawesome/free-brands-svg-icons";

const Icons = () => {
return library.add(
    faDatabase, 
    faGit, 
    faNpm, 
    faCss3Alt, 
    faPython, 
    faNode, 
    faHtml5, 
    faJs, 
    faReact,
    faTimes, 
    faBars, 
    faLock, 
    faMapMarked,
    fab, 
    faEnvelope, 
    faPhoneVolume, 
    faTrash, 
    faSignOutAlt, 
    faEdit, 
    faSpinner, 
    faPlusSquare,
    faChevronCircleRight,
    faChevronCircleLeft
    );
};

export default Icons; 