import { Link } from 'react-router-dom'

export function ToyPreview({ toy, onRemoveToy }) {

    const toyStyle = { backgroundImage: `url(https://robohash.org/${toy._id})` }
    const date = new Date(toy.createdAt)
    const dateStr = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
    return (
        <div style={toyStyle} className='toy-preview'>
            <Link to={`/toy/${toy._id}`} className='info'>
                <h2>{toy.name}</h2>
                <h4>{toy.price}$</h4>
                <h4 className={toy.inStock? 'in-stock' : 'out-of-stock'}>{toy.inStock? 'In Stock!' : 'Out Of Stock'}</h4>
                <h4>{dateStr}</h4>
                <p>{toy.labels}</p>

            </Link>
            <section className='actions'>
                <button onClick={() => onRemoveToy(toy._id)}>Delete Toy</button>
                <Link to={`/toy/edit/${toy._id}`} >Edit Toy</Link>
            </section>
        </div>
    )
}
