import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { client } from "../logic/client";

export default function Client() {
  const params = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit, setValue } = useForm();
  const id = params["*"];

  const submit = (data) => client.handleSubmit(id, data);

  useEffect(() => {
    client.setupNavigate(navigate);
    client.setupSetFormValue(setValue);
    client.setInputFields(id);
  }, []);

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <label htmlFor="name">Vardas </label>
        <input id="name" type="text" {...register("name")} />
      </div>
      <div>
        <label htmlFor="surname">Pavarde </label>
        <input id="surname" type="text" {...register("surname")} />
      </div>
      <div>
        <label htmlFor="age">Amzius </label>
        <input id="age" type="number" {...register("age")} />
      </div>
      <div>
        <label htmlFor="phone">Tel. Nr. </label>
        <input id="phone" type="phone" {...register("phone")} />
      </div>
      <div>
        <label htmlFor="email">El. Pastas </label>
        <input id="email" type="text" {...register("email")} />
      </div>
      <div>
        <label htmlFor="city">Miestas </label>
        <input id="city" type="text" {...register("city")} />
      </div>

      <input type="submit" />
      {id && (
        <button onClick={(e) => client.deleteClient(id, e)}>
          Delete client
        </button>
      )}
    </form>
  );
}
