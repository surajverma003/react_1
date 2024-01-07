import React, { Component } from 'react'
import Swal from 'sweetalert2';

export default class Form extends Component {

    constructor() {
        super();

        this.state = {
            name: '',
            password: '',
            email: '',
            contact: '',
            course: '',
        }
    }

    render() {

        let setName = (event) => {
            this.setState({ name: event.target.value });
        }

        let setPassword = (event) => {
            this.setState({ password: event.target.value });
        }

        let setEmail = (event) => {
            this.setState({ email: event.target.value });
        }

        let setContact = (event) => {
            this.setState({ contact: event.target.value });
        }

        let setCourse = (event) => {
            this.setState({ course: event.target.value });
        }

        let saveData = (event) => {
            event.preventDefault();
            console.log(this.state);

            Swal.fire({
                title: "Record Inserted",
                // text: "You clicked the button!",
                icon: "success"
            });

            fetch('http://localhost:3004/contact', {
                method: 'POST',
                body: JSON.stringify({
                    name: this.state.name,
                    password: this.state.password,
                    email: this.state.email,
                    contact: this.state.contact,
                    course: this.state.course,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            }).then((response) => response.json()).then((json) => console.log(json));
            setTimeout(() => window.location.reload(), 1800);
        }

        return (
            <div>
                <div className="container p-5">
                    <div className="row">
                        <div className="col-md-12">
                            <form method='post' onSubmit={saveData}>
                                <div className="mb-3">
                                    <input name='name' onChange={setName} type="text" className="form-control" placeholder='Full name' />
                                </div>
                                <div className="mb-3">
                                    <input name='password' onChange={setPassword} type="password" className="form-control" placeholder='Password' />
                                </div>
                                <div className="mb-3">
                                    <input name='email' onChange={setEmail} type="email" className="form-control" placeholder='Enter a vaild email address' />
                                </div>
                                <div className="mb-3">
                                    <input name='contact' onChange={setContact} type="text" className="form-control" placeholder='Contact' />
                                </div>
                                <div className="mb-3">
                                    <select class="form-select" onChange={setCourse} aria-label="Default select example">
                                        <option selected>Open this select menu</option>
                                        <option value="Javascript">Javascript</option>
                                        <option value="Java">Java</option>
                                        <option value="Go">Go</option>
                                        <option value="Python">Python</option>
                                        <option value="Kotlin">Kotlin</option>
                                        <option value="PHP">PHP</option>
                                        <option value="Swift">Swift</option>
                                        <option value="Ruby">Ruby</option>
                                        <option value="SQL">SQL</option>
                                        <option value="HTML">HTML</option>
                                        <option value="CSS">CSS</option>
                                        <option value="NOSQL">NOSQL</option>
                                        <option value="Rust">Rust</option>
                                        <option value="Perl">Perl</option>
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-primary w-50 me-3">Submit</button>
                                <button type="reset" className="btn btn-danger w-25">Clear</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
