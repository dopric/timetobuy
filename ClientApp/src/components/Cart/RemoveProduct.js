import React from 'react'
import Axios from 'axios'

export default function RemoveProduct(props) {

    async function onSubmit(event){
        event.preventDefault();
     
        Axios.delete(`/api/cart/${localStorage.sessionId}/lines/${props.productId}`)
            .then(() => {
                props.onItemRemoved();
            }).catch(() => {
                alert("Error")
            })
       
        
    }
    return (
        <form onSubmit={onSubmit}>
        <button className="btn btn-danger">
            Remove
        </button>
            </form>
        )
}