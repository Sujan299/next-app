import React from 'react'
import styled from '../app/style.module.css'
const Form = () => {
    return (
        <div className={styled.formParent}>
            <h1>Add product: </h1>

            <form action="" className={styled.form}>
                <input type="text" className={styled.input}/>
                <input type="submit" value='add' className={styled.add}/>
            </form>
        </div>
    )
}

export default Form