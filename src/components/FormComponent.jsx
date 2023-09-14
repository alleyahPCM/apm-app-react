import React from "react";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import signuptxt from '../img/signup.png';

import { userSchema } from "../validations/UserValidation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

function FormComponent() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        } = useForm({
        resolver: yupResolver(userSchema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="d-flex flex-column flex-grow-1 signup-container">
        <div className="signup-text">
            <img src={signuptxt} alt="My Top 10"/>
        </div>
        
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicFirstName">
            <Form.Control type="text" placeholder="First Name" {...register("fname")}/>
            <p className="error">{errors.fname?.message}</p>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLastName">
            <Form.Control type="text" placeholder="Last Name" {...register("lname")}/>
            <p className="error">{errors.lname?.message}</p>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAge">
            <Form.Control type="number" placeholder="Age" {...register("age")}/>
            <p className="error">{errors.age?.message}</p>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicGender">
            <Form.Select aria-label="Default select example" defaultValue={""} {...register("gender")}>
                <option disabled value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
            </Form.Select>
            <p className="error">{errors.gender?.message}</p>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email" {...register("email")}/>
            <p className="error">{errors.email?.message}</p>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" {...register("password")}/>
            <p className="error">{errors.password?.message}</p>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Control type="password" placeholder="Confirm Password" {...register("confirmPassword")}/>
            <p className="error">{errors.confirmPassword?.message}</p>
            </Form.Group>

            {['checkbox'].map((type) => (
            <Form.Group key={`inline-${type}`}  className="mb-3" controlId="formBasicCheckbox" >
            <Form.Check 
                type={type}
                id={`default-${type}`}
                label="I accept the Terms and Conditions"
                {...register("terms")}/>
                <p className="error">{errors.terms?.message}</p>
            </Form.Group>
            ))}
            <Button className="signup-btn" type="submit">
            Submit
            </Button>
        </Form>
        </div>
    );
}

export default FormComponent;






