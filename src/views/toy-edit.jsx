import { useEffect, useState } from 'react'
import { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import { toyService } from '../services/toy.service'

export const ToyEdit = (props) => {
    const labels = toyService.getLabels()
    const params = useParams()
    const navigate = useNavigate()
    
    const [toy, handleChange, setToy] = useForm({
        name: '',
        price: '',
        labels: [],
        inStock: true,
    })
    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.focus()
        const toyId = params.id
        if (!toyId) return
        toyService.getById(toyId)
            .then(toy => {
                setToy(toy)
            })
            .catch(err => {
                console.log('err:', err);
            })
    }, [])

    const onSaveToy = (ev) => {
        ev.preventDefault()
        toyService.save({ ...toy }).then(() => {
            navigate('/')
        })
    }

    return (
        <section className='toy-edit'>
            <h1>{toy._id ? 'Edit' : 'Add'} Toy</h1>
            <form onSubmit={onSaveToy}>
                <label htmlFor="name">Name</label>
                <input ref={inputRef} value={toy.name} onChange={handleChange} type="text" name="name" id="name" />
                
                <label htmlFor="price">Price</label>
                <input value={toy.price} onChange={handleChange} type="number" name="price" id="price" />
                
                <label htmlFor="inStock">Is in stock?</label>
                <input checked={toy.inStock} onChange={handleChange} type="checkbox" name="inStock" id="inStock" />

                <label htmlFor="label">Labels</label>
                <select multiple onChange={handleChange} v-model={toy.labels} type="select" name="label" id="label">
                    <option disabled value="">Choose labels</option>
                    <option value="Onwheels">On wheels</option>
                    <option value="BoxGame">Box game</option>
                    <option value="Art">Art</option>
                    <option value="Baby">Baby</option>
                    <option value="Doll">Doll</option>
                    <option value="Puzzle">Puzzle</option>
                    <option value="Outdoor">Outdoor</option>
                </select>
                
                <button>Save</button>
            </form>
        </section>
    )
}
