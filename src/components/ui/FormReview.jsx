import axios from "../../api/axios";
import { useParams } from "react-router-dom";
import { useState } from "react";

const initialFormData = {
  name: "",
  text: "",
  vote: 1,
};

export default function FormReview({ onFormSubmitted }) {
  const [formData, setFormData] = useState(initialFormData);
  const { id } = useParams();

  const handleField = (fieldName, fieldValue) => {
    setFormData((currentFormData) => {
      return {
        ...currentFormData,
        [fieldName]: fieldValue,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`/movies/${id}/reviews`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        setFormData(initialFormData);
        onFormSubmitted(); // fetchmovie
      });
  };
  return (
    <form className="space-y-2" onSubmit={handleSubmit}>
      <div>
        <label className="mb-2" htmlFor="name">
          Nome
        </label>
        <input
          className="w-full bg-white p-1"
          id="name"
          name="name"
          type="text"
          placeholder="Il tuo nome"
          value={formData.name}
          onChange={(e) => handleField("name", e.target.value)}
        />
      </div>
      <div>
        <label className="mb-2" htmlFor="vote">
          Voto
        </label>
        <input
          className="w-full bg-white p-1"
          id="vote"
          name="voto"
          type="number"
          min={1}
          max={5}
          placeholder="Metti il voto"
          value={formData.vote}
          onChange={(e) => handleField("vote", e.target.value)}
        />
      </div>
      <div>
        <label className="mb-2" htmlFor="text bg-white p-1">
          Recensione
        </label>
        <textarea
          className="w-full bg-white p-1"
          id="text"
          name="text"
          type="number"
          min={0}
          max={5}
          rows={5}
          placeholder="Inserisci la recensione"
          value={formData.text}
          onChange={(e) => handleField("text", e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="bg-black text-white py-1 px-4 rounded-lg hover:bg-white hover:text-black cursor-pointer w-full"
      >
        Invio
      </button>
    </form>
  );
}
