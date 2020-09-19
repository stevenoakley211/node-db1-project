import React from 'react';

function accountsList({accounts}) {
    console.log("hi")
    return (
        <div>
            {accounts.map(account => (
                <div>
                    <h1>name: {account.name}</h1>
                    <p>budget: {account.budget}</p>
                </div>
            ))}
        </div>
    )
}

export default accountsList