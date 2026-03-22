import UserCard from "./UserCard"
import "../styles/UserContent.css"

function UserContent({users, onEdit, onDelete}) {
  return (
    <>
        <div className="content">
            {users.map((user) => (
                <UserCard 
                  key={user.id} 
                  user={user}
                  onEdit={onEdit}
                  onDelete={onDelete} 
                />
            ))}
        </div>
    </>
  )
}

export default UserContent