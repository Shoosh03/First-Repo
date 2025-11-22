const ItemList = ({items}) => {
    return (
        <ul>
            {items.map((value, idx) => (
                <li key={idx}>
                    {value}
                    <button>X</button>
                </li>
            ))}
        </ul>
    );
};

export {ItemList};