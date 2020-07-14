import React from 'react';
import { UserContextProvider } from './userContext/userContext';
import UserDashbord from './Dashbord/UserDashbord';


export default function user() {

    return (
        <UserContextProvider>
            <UserDashbord></UserDashbord>
        </UserContextProvider>

    )

}