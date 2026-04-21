import { formatDate } from "../lib/utils"
import "../styles/UserCard.css"
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { FaGifts } from "react-icons/fa";

function UserCard({user, onEdit, onDelete}) {
  // Función para manejar el error de carga de imagen
  const handleImageError = (e) => {
    // Si la imagen principal falla por el DNS, 
    // cargamos una alternativa que sepamos que SÍ funciona.
    // Usaremos UI Avatars que es muy fiable.
    
    e.target.src = `https://ui-avatars.com/api/?name=${user.first_name}+${user.last_name}&background=F43F5E&color=fff&bold=true&size=128`;
  };

  // Estilos para la imagen centralizada
  const imageStyles = {
    borderRadius: '50%', 
    objectFit: 'cover',
    border: '3px solid #00F5FF', // Un pequeño borde para que resalte en tu fondo oscuro
    marginBottom: '15px'
  };

  return (
    <div className="card">

        <img src={user.image_url} alt={`${user.first_name} ${user.last_name}`} width={130} height={130} onError={handleImageError} style={imageStyles}/>

        <div className="user-info-container">
          <h2>{user.first_name} {user.last_name}</h2>
          <p>{user.email}</p>
          <p> <FaGifts /> {formatDate(user.birthday)}</p>
        </div>
      
        <div>
            <button onClick={() => onEdit(user)}>
                Edit <FaEdit />
            </button>

            <button onClick={() => onDelete(user)} style={{marginLeft: 10}}>
                Delete <MdDeleteForever />
            </button>
        </div>
    </div>
  )
}

export default UserCard