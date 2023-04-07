import '../Myfolder/Extra.css'
import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";

function FormValidation() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    return (
        <div className='nnnn'>
            <Form>
                <Form.Field>
                    <label className='firstn' >First Name:</label>
                    <input
                        placeholder='First Name'
                        type="text"
                        {...register("firstName")}
                    />
                </Form.Field>
                <Form.Field>
                    <label className='lastn'>Last Name:</label>
                    <input
                        placeholder='Last Name'
                        type="text"
                        {...register("lastName")}
                    />
                </Form.Field>
                <Form.Field>
                    <label className='emailn'>Email:</label>
                    <input
                        placeholder='Email'
                        type="email"
                        {...register("email")}
                    />
                </Form.Field>
                <Form.Field>
                    <label className='passwordn'>Password:</label>
                    <input 
                        placeholder='Password'
                        type="password"
                        {...register("password")}
                    />
                </Form.Field>
                <Button className='buttonn'type='submit'>Submit</Button>
            </Form>
        </div>
    )
}

export default  FormValidation