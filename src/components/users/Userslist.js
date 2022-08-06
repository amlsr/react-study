import User from "./User";

function Userslist(props) {
  return (
    <div>
      {props.users.map((user) => {
        return <User key={user.id} user={user} viewUser={props.viewUser} />;
      })}
    </div>
  );
}

export default Userslist;
