import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import { updateAmount } from '../redux/apiCall';
import { publicRequest } from '../requestMethod';
const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;


const Test = () => {
    const [users, setUsers] = useState([]);
    const { isFetching } = useSelector(state => state.user)

    useEffect(() => {
        const getTests = async () => {
            try {
                //const res = await publicRequest.get("/test/create");
                const res = await axios.get("http://localhost:5000/api/test/create")
                setUsers(res.data);
                console.log("users", users)
                console.log("res", res)
            } catch (err) { }
        };
        getTests();
    }, [isFetching]);

    const dispatch = useDispatch();
    const handleButtonClick = (e, id, balance, toDo) => {
        e.preventDefault();
        console.log("Row Id", id, balance);
        let amount = prompt("Set to:", " 500");
        console.log(toDo)
        
        if (amount == null || amount == '' || !Number(amount)) {
            console.log("CHECK")
            alert("Please check input")

        }
        else {
            if (toDo == "Deposit") {
                const payload = { id: id, amount: Number(amount) + Number(balance) }
                const payloadJson = JSON.stringify(payload)
                updateAmount(dispatch, payload)
            }
            else if (toDo == "Withdraw") {
                if(amount>balance){
                    alert("Cannot")
                }
                else{
                    const payload = { id: id, amount: Number(amount)*(-1) + Number(balance)}
                    const payloadJson = JSON.stringify(payload)
                    updateAmount(dispatch, payload)
                }
            }
            else if (toDo == "Set") {
                const payload = { id: id, amount: amount }
                const payloadJson = JSON.stringify(payload)
                updateAmount(dispatch, payload)
            }


        }

    };


    const columns = [
        {
            button: true,

            cell: (row) => (

                <button
                    className="btn btn-outline btn-xs"
                    onClick={(e) => handleButtonClick(e, row._id, row.amount, "Deposit")}
                >
                    Deposit
                </button>
            ),

        },
        {
            //name: "Actions",
            button: true,

            cell: (row) => (

                <button
                    className="btn btn-outline btn-xs"
                    onClick={(e) => handleButtonClick(e, row._id, row.amount, "Set")}
                >
                    Set
                </button>
            ),

        },
        {
            //name: "Actions",
            button: true,

            cell: (row) => (

                <button
                    className="btn btn-outline btn-xs"
                    onClick={(e) => handleButtonClick(e, row._id, row.amount, "Withdraw")}
                >
                    Withdraw
                </button>
            ),

        },
        {
            name: 'user',
            selector: row => row.userId,
            sortable: true,

        },
        {
            name: 'balance',
            selector: row => row.amount,
            sortable: true,

        },
    ];

    const data = [
        {
            id: 1,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
    ]



    return (
        
        <DataTable
            columns={columns}
            data={users}
            expandableRows
            expandableRowsComponent={ExpandedComponent}
        />
    )
}

export default Test