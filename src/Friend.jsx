export default function Friend ({friend}){
    console.log(friend);
    const {name, username, email} = friend;
    return(
        <div className="cards">
            <h4>Name: {name}</h4>
            <h4>UserName: {username}</h4>
            <p>Email: {email}</p>
        </div>
    )
}