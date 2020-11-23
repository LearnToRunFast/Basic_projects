import React from 'react'
import { useContext } from 'react'
import { RoomContext } from '../context'
import Title from '../components/Title'

//get all unique values
const getUniqueItem = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

const mapToOption = (items) => {
    return items.map((item, index) =>
        <option value={item} key={index}>{item}</option>
    )
}


function RoomFilter({ rooms }) {
    // use react hook
    const context = useContext(RoomContext)
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context

    let types = getUniqueItem(rooms, 'type')

    types = ['all', ...types]

    // map to jsx
    types = mapToOption(types)

    let dropDownList = (type, title, value, content) => {
        return <div className='form-group'>
            <label htmlFor={type}>{title}</label>
            <select name={type}
                id={type}
                value={value}
                className='form-control'
                onChange={handleChange}>
                {content}
            </select>
        </div>
    }

    let checkBox = (type, value) => {
        return <div className='single-extra'>
            <input type='checkbox' name={type}
                id={type}
                checked={value}
                onChange={handleChange} />
            <label htmlFor={type}>{type}</label>
        </div>
    }
    let people = getUniqueItem(rooms, 'capacity')
    people = mapToOption(people)


    return (
        <section className='filter-container'>
            <Title title='search rooms' />
            <form className='filter-form'>
                {dropDownList('type', 'room type', type, types)}
                {dropDownList('capacity', 'guests', capacity, people)}
                {/* price */}
                <div className='form-group'>
                    <label htmlFor="price">room price ${price}</label>
                    <input type="range" name="price"
                        min={minPrice}
                        max={maxPrice}
                        id="price"
                        value={price}
                        onChange={handleChange}
                        className='form-control' />
                </div>
                {/* size */}
                <div className='form-group'>
                    <label htmlFor="size">room size</label>
                    <div className='size-inputs'>
                        <input type="number" name="minSize"
                            id='size'
                            value={minSize}
                            onChange={handleChange}
                            className='size-input' />
                        <input type="number" name="maxSize"
                            id='size'
                            value={maxSize}
                            onChange={handleChange}
                            className='size-input' />
                    </div>
                </div>
                {/* extras */}
                <div className='form-group'>
                    {checkBox('breakfast', breakfast)}
                    {checkBox('pets', pets)}
                </div>
            </form>
        </section >
    )
}

export default RoomFilter
