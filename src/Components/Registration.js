import React , {useState} from "react";
import axios from "axios";
function Registration() {

    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [phoneNumber , setPhoneNumber] = useState('');

    const SubmitEvent = (e) => {
        e.preventDefault();
        const data = JSON.stringify({
            id: "",
            name : name,
            email : email,
            password : password,
            phoneNumber : phoneNumber,
            isActive: 0,
            isApproved: 0
        });
        axios.post(`https://localhost:44380/api/Registration/create`, data,
        {
            headers:{
                'Content-Type':'application/json'
        }})
        .then(result => {
            alert(result.data.message);
        })
        .catch((error) => {
            alert(error);
        })
        // fetch("https://localhost:44380/api/Registration/create",{
        //     method: "POST",
        //     body: data,
        //     headers: {
        //         'Accept': "application/json",
        //         'Content-Type': "application/json"
        //     }
        // })
        // .then(res => res.json())
        // .then(res => {
        //     var temp = res.json();
        //     alert(response.json().message);
        // })
        // .catch(err => console.log(err));
    }

    const ResetButtonEvent = (e) => {
        e.preventDefault();
        const allInput = document.querySelectorAll("input");
        allInput.forEach((item,index) =>{
            item.value = "";
        })
    }

    return (
        <section className="h-100 bg-dark">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col">
                        <div className="card card-registration my-4">
                            <div className="row g-0">
                                <div className="col-xl-6 d-none d-xl-block">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                                        alt="Sample photo" className="img-fluid"
                                        style={{borderTopLeftRadius: ".25rem", borderBottomLeftRadius: ".25rem" }} />
                                </div>
                                <div className="col-xl-6">
                                    <div className="card-body p-md-5 text-black">
                                        <h3 className="mb-5 text-uppercase">Student registration form</h3>

                                        <div className="row">
                                                <div className="form-outline mb-4">
                                                    <input type="text" id="form3Example1m" className="form-control form-control-lg"
                                                    onChange={(e) => setName(e.target.value)} />
                                                    <label className="form-label" htmlFor="form3Example1m">Name</label>
                                                </div>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="text" id="form3Example1n1" className="form-control form-control-lg"
                                            onChange={(e) => setEmail(e.target.value)} />
                                            <label className="form-label" htmlFor="form3Example1n1">Email</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="text" id="form3Example9" className="form-control form-control-lg" 
                                            onChange={(e) => setPassword(e.target.value)}/>
                                            <label className="form-label" htmlFor="form3Example9">Password</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="text" id="form3Example90" className="form-control form-control-lg" 
                                            onChange={(e) => setPhoneNumber(e.target.value)}/>
                                            <label className="form-label" htmlFor="form3Example90">Phone Number</label>
                                        </div>

                                        <div className="d-flex justify-content-end pt-3">
                                            <button type="button" className="btn btn-light btn-lg"
                                            onClick={(e) => ResetButtonEvent(e)}>Reset all</button>
                                            <button type="button" className="btn btn-warning btn-lg ms-2"
                                            onClick={(e) => SubmitEvent(e)}>Submit form</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Registration;