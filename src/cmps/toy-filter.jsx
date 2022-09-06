import { useEffect, useState } from 'react'
import { useForm } from '../hooks/useForm'
import { useFormRegister } from '../hooks/useFormRegister'
import { useFormRegisterBase } from '../hooks/useFormRegisterBase'

export const ToyFilter = (props) => {

    const [register, handleChange] = useFormRegister({
        name: '',
        inStock: undefined,
        labels: [],
    }, props.onChangeFilter)


    // const { model, type, minBatteryStatus, maxBatteryStatus } = filterBy
    const classObj = { className: 'toy-filter' }
    return (
        <form {...classObj} >
            <section>
                <label htmlFor="name">Name</label>
                <input {...register('name', 'text')} />
            </section>
            <section>
                <label htmlFor="inStock">In Stock</label>
                <input {...register('inStock', 'checkbox')} />
            </section>
            <section>
                <label htmlFor="label">Labels</label>
                <select multiple onChange={handleChange} name="label" id="label">
                    <option disabled value="">Choose labels</option>
                    <option value="Onwheels">On wheels</option>
                    <option value="BoxGame">Box game</option>
                    <option value="Art">Art</option>
                    <option value="Baby">Baby</option>
                    <option value="Doll">Doll</option>
                    <option value="Puzzle">Puzzle</option>
                    <option value="Outdoor">Outdoor</option>
                </select>
            </section>
        </form>
    )
}
