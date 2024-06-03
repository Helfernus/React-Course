export default function TabButton({ children, onSelect, isSelected}) { //Object Destructuring, pull out children
    return (
        <li>
            <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
        </li>
    );
}

// export default function TabButton(props) {
//     return <li><button>{props.children}</button></li>
// }