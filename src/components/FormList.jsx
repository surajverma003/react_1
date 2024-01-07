import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';

function FormList() {

    let [data, setData] = useState({
        mydata: []
    });

    let loadData = () => {
        fetch('http://localhost:3004/contact').then((response) => response.json()).then((data) => {
            setData({
                mydata: data
            })
        });
    }

    useEffect(() => {
        loadData();
    }, []);

    let deleteId = (id) => {
        Swal.fire({
            title: "Do you want to Delete Data",
            // text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Data has been deleted successfully.",
                    icon: "success"
                });
                fetch(`http://localhost:3004/contact/${id}`, {
                    method: 'DELETE'
                }).then(() => loadData());
            }
        });
    }

    let update = async (id) => {

        let record = {
            id:'',
            name :'',
            password:'',
            email:'',
            contact:'',
            course:''
        }

        data.mydata.map((item) => {
            if(item.id === id) {
                record.id = item.id
                record.name = item.name
                record.password = item.password
                record.email = item.email
                record.contact = item.contact
                record.course = item.course
            }
            return 0;
        });
        console.log(record);

        const { value: formValues } = await Swal.fire({
            title: "Update Records",
            html: `
            <input value=${record.id} type='text' name='id' id="id" class="swal2-input" placeholder='ID' readonly>
            <input value=${record.name} type='text' name='name' id="name" class="swal2-input" placeholder='Name'>
            <input value=${record.password} type='password' name='password' id="password" class="swal2-input" placeholder='Password'>
            <input value=${record.email} type='email' name='email' id="email" class="swal2-input" placeholder='Email address'>
            <input value=${record.contact} type='text' name='contact' id="contact" class="swal2-input" placeholder='Contact'>
            <input value=${record.course} type='text' name='course' id="course" class="swal2-input" placeholder='Course'>
            `,
            focusConfirm: false,
            preConfirm: () => {
                return {
                    id: document.getElementById("id").value,
                    name: document.getElementById("name").value,
                    password: document.getElementById("password").value,
                    email: document.getElementById("email").value,
                    contact: document.getElementById("contact").value,
                    course: document.getElementById("course").value
                };
            }
        });
        if (formValues) {
            Swal.fire(JSON.stringify('Record Updated'));
            loadData();

            fetch('http://localhost:3004/contact/' + formValues.id, {
                method: 'PUT',
                body: JSON.stringify({
                    id: formValues.id,
                    name: formValues.name,
                    password: formValues.password,
                    email: formValues.email,
                    contact: formValues.contact,
                    course: formValues.course
                }),
                headers: {
                    "Content-Type": "application/json"
                },
            }).then((response) => {
                console.log('Record Updated');
                console.log(response);
                loadData();
            });
        }
    }
    return (
        <>
            <div className="container pb-5">
                <div className="row">
                    <h1 className='text-center mt-4 text-light'>Contact List</h1>
                    <div className="col-md-12">
                        <table className="table table-dark mt-4">
                            <thead>
                                <tr>
                                    <th className='bg-light text-dark text-center pe-4' scope="col">Register ID</th>
                                    <th className='bg-light text-dark' scope="col">Name</th>
                                    <th className='bg-light text-dark' scope="col">Password</th>
                                    <th className='bg-light text-dark' scope="col">Email</th>
                                    <th className='bg-light text-dark' scope="col">Contact</th>
                                    <th className='bg-light text-dark' scope="col">Course</th>
                                    <th className='bg-light text-dark' scope="col">Edit</th>
                                    <th className='bg-light text-dark' scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.mydata.map((item, index) =>
                                        <tr key={index}>
                                            <th className='text-center pe-4'>{item.id}</th>
                                            <td>{item.name}</td>
                                            <td>{item.password}</td>
                                            <td>{item.email}</td>
                                            <td>{item.contact}</td>
                                            <td>{item.course}</td>
                                            <td><input onClick={() => { update(item.id) }} type="button" className='btn btn-success' value='Edit' /></td>

                                            <td><input type="button" onClick={() => deleteId(item.id)} className='btn btn-danger' value='Delete' /></td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormList
