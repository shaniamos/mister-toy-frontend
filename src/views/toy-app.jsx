import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadToys, removeToy, setFilterBy } from '../store/actions/toy.action.js'
import { ToyList } from '../cmps/toy-list.jsx'
import { Link } from 'react-router-dom'
import { ToyFilter } from '../cmps/toy-filter'
// import { spendBalance } from '../store/actions/user.action'

export const ToyApp = (props) => {
    //isLoading
    const toys = useSelector(state => state.toyModule.toys)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadToys())
    }, [])

    const onRemoveToy = (toyId) => {
        dispatch(removeToy(toyId))
    }

    const onChangeFilter = (filterBy) => {
        dispatch(setFilterBy(filterBy))
        dispatch(loadToys())
    }

    if (!toys) return <div>Loading Toys...</div>
    return (
        <div className='toy-app'>
            <ToyFilter onChangeFilter={onChangeFilter} />
            <Link to="/toy/edit">Add Toy</Link>
            <ToyList history={props.history} toys={toys} onRemoveToy={onRemoveToy} />
        </div>
    )
}
