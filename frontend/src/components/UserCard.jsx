import { formatDate } from "../lib/utils"
import "../styles/UserCard.css"
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { FaGifts } from "react-icons/fa";

function UserCard({user, onEdit, onDelete}) {
  return (
    <div className="card">
      {user.image_url && (
        <img src={user.image_url} alt={user.first_name} width={85} height={85} />
      )}
        <h2>{user.first_name} {user.last_name}</h2>
        <p>{user.email}</p>
        <p> <FaGifts /> {formatDate(user.birthday)}</p>

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