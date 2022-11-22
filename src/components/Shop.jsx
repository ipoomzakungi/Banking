import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { updateAmount } from '../redux/apiCall';
import { publicRequest } from '../requestMethod';
const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;


const Button = styled.button`
    padding: 10px;
    font-size: 15px;
    cursor: pointer;
    background-color: #${(props) => props.color}};
    border: none;
    border-radius: ${(props) => props.borderRadius}};
    color: #ffffff;
    
    margin-left:${(props) => props.mgl}};

    transition: all 0.3s ease;
    &:hover{
      background-color: #${(props) => props.hover};
      transform: scale(1.1);
    }
    &:active{
      background-color: #ffffff;
    }
    

`;


const Shop = () => {
    const [users, setUsers] = useState([]);
    const { isFetching } = useSelector(state => state.user)

    useEffect(() => {
        const getTests = async () => {
            try {
                //const res = await axios.get("http://localhost:3004/user-payment/accounts")
                const res = await axios.get("http://localhost:5000/api/test/create");

                setUsers(res.data);
                console.log("users", users)
                console.log("res", res)
            } catch (err) { }
        };
        getTests();
    }, [isFetching]);

    const dispatch = useDispatch();
    const handleButtonClick = (e, acc_id,acc_num, balance,fee, toDo) => {
        e.preventDefault();
        console.log("Row Id", acc_id,acc_num, balance,fee);
        let amount = prompt("Set to:", " 500");
        console.log(toDo)
        
        if (amount == null || amount == '' || !Number(amount)) {
            console.log("CHECK")
            alert("Please check input")

        }
        else {
            if (toDo == "Deposit") {
                const payload = { accountID: acc_id,accountNumber: acc_num, amount: Number(amount),fee: Number(fee)}
                const payloadJson = JSON.stringify(payload)
                updateAmount(dispatch, payload)
            }
            // else if (toDo == "Withdraw") {
            //     if(amount>balance){
            //         alert("Cannot")
            //     }
            //     else{
            //         const payload = { id: acc_id, amount: Number(amount)*(-1) + Number(balance)}
            //         const payloadJson = JSON.stringify(payload)
            //         updateAmount(dispatch, payload)
            //     }
            // }
            // else if (toDo == "Set") {
            //     const payload = { id: acc_id, amount: amount }
            //     const payloadJson = JSON.stringify(payload)
            //     updateAmount(dispatch, payload)
            // }


        }

    };


    const columns = [
        {
            button: true,
      
            cell: (row) => (
              <Button
                color="387766"
                hover="4b9480"
                borderRadius="5px"
                onClick={(e) =>
                  handleButtonClick(
                    e,
                    row.accountID,
                    row.accountNumber,
                    row.balanced,
                    0,
                    "Deposit"
                  )
                }
              >
                Approve
              </Button>
            ),
          },
        {
            name: "accountNumber",
            selector: (row) => row.accountNumber,
            sortable: true,
          },
          {
            name: "balance",
            selector: (row) => row.balanced,
            sortable: true,
          },
          {
            name: "block",
            button: true,
      
            selector: (row) => row.accountNumber,
            sortable: true,
          },
          {
            name: "aprove",
            button: true,
      
            selector: (row) => row.balanced,
            sortable: true,
          },
          {
            name: "remove",
            button: true,
      
            selector: (row) => row.balanced,
            sortable: true,
          },
          {
            name: "Block",
            button: true,
      
            cell: (row) => (
              <Button
                color="cc0000"
                hover="e06666"
                borderRadius="5px"
                mgl="10px"
                onClick={(e) =>
                  handleButtonClick(
                    e,
                    row.accountID,
                    row.accountNumber,
                    row.balanced,
                    0,
                    "Set"
                  )
                }
              >
                Block
              </Button>
            ),
          },
          {
            //name: "un-block",
            button: true,
      
            cell: (row) => (
              <Button
                color="387766"
                hover="4b9480"
                borderRadius="5px"
                mgl="-20px"
                onClick={(e) =>
                  handleButtonClick(
                    e,
                    row.accountID,
                    row.accountNumber,
                    row.balanced,
                    0,
                    "Set"
                  )
                }
              >
                Un-Block
              </Button>
            ),
          },
          {
            name: "Remove",
            button: true,
      
            cell: (row) => (
              <Button
                color="cc0000"
                hover="e06666"
                borderRadius="5px"
                mgl="10px"
                onClick={(e) =>
                  handleButtonClick(
                    e,
                    row.accountID,
                    row.accountNumber,
                    row.balanced,
                    0,
                    "Set"
                  )
                }
              >
                Remove
              </Button>
            ),
          },
          {
            //name: "restore",
            button: true,
      
            cell: (row) => (
              <Button
                color="387766"
                hover="4b9480"
                borderRadius="5px"
                mgl="-20px"
                onClick={(e) =>
                  handleButtonClick(
                    e,
                    row.accountID,
                    row.accountNumber,
                    row.balanced,
                    0,
                    "Set"
                  )
                }
              >
                Restore
              </Button>
            ),
          },
    ];

    


    return (
        
        <DataTable
            columns={columns}
            data={users}
            expandableRows
            expandableRowsComponent={ExpandedComponent}
        />
    )
}

export default Shop