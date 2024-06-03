import './CoreConcepts.css';

// function CoreConcepts(props) { Using Destructuring below to achieve the same
//     return (
//         <li>
//             <img src={props.image} alt={props.title}></img>
//             <h3>{props.title}</h3>
//             <p>{props.description}</p>
//         </li>
//     );
// }

export default function CoreConcepts({ image, title, description }) { //Destructuring
    return (
        <li>
            <img src={image} alt={title}></img>
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
}
