import React from 'react'
import {BoorStoreServiceConsumer} from '../bookstore-service-context'

const withBookstoreService = () => (Wrapped) => {
    return (props) => {
        return (
            <BoorStoreServiceConsumer>
                {
                    (bookstoreService) => {
                        return (<Wrapped {...props}
                                         bookstoreService={bookstoreService}/>)
                    }
                }
            </BoorStoreServiceConsumer>
        )
    }
}
export default withBookstoreService;