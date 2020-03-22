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
    faTimes

} from "@fortawesome/free-solid-svg-icons";
import { fab
} from "@fortawesome/free-brands-svg-icons";

const Icons = () => {
return library.add(faTimes, faBars, faLock, faMapMarked,fab, faEnvelope, faPhoneVolume, faTrash, faSignOutAlt, faEdit, faSpinner, faPlusSquare);
};

export default Icons; 