import './index.css'

export default function Card(props) {
    const {data} = props;
    return (
        <div className="container">
     <div className="card">
        <div className="data-info">
        <img src={data.image} alt="" />
            <h2>{data.firstName} {data.lastName}</h2>
            <p>Email: {data.email}</p>
            <p>Phone: {data.phone}</p>
            <p>Address: {data.address.region}, {data.address.zip}</p>
            <h3>Cars:</h3>
            <ul>
            {data.cars.map((car, index) => (
            <li key={index}>{car}</li>
        ))}
            </ul>
        </div>

        </div>
        </div>
    )
}