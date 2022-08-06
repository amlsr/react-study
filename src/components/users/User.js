function User(props) {
    function selectHandler() {
        props.viewUser(props.user)
    }
  return (
    <div className="card mb-2 cursor-pointer" onClick={selectHandler}>
      <div className="card-body">
        <table>
          <tbody>
            <tr>
              <td>{props.user.name}</td>
              <td>{props.user.email}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default User;
