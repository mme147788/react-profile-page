import React from 'react'
import styles from './card.module.css'
import Button from './button'

export default function Card(props) {
    return (
        <div className={styles.card}>

            <img
                className={styles.avatar}
                src={props.avatar}
                alt={props.name}
            />

            <h2>{props.name}</h2>

            <p>{props.description}</p>

            <Button
                text="View Profile"
                fn={props.fn}
                personType={props.personType}
            />

        </div>
    )
}

