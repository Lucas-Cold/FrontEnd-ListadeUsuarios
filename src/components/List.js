import React from "react";
import Item from "./Item";

const List = ({users}) => {
    return (
        <div>
            {users.map((users, index) => (
                <Item key={index} user={users} />
            ))}
        </div>
    );
};

export default List;