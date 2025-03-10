import { useState } from "react";
import "./UserForm.css";

const initialFormState = {
  name: "",
  surname: "",
  groupCode: "",
  email: ""
};

function UserForm() {
  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Форма відправлена!");
  };

  const handleReset = () => setFormData(initialFormState);

  return (
    <div className="form-container">
      <h2>Форма користувача</h2>
      <UserFormFields formData={formData} onChange={handleChange} onSubmit={handleSubmit} onReset={handleReset} />
      <UserDataTable formData={formData} />
    </div>
  );
}

function UserFormFields({ formData, onChange, onSubmit, onReset }) {
  return (
    <form className="user-form" onSubmit={onSubmit}>
      {Object.keys(formData).map((key) => (
        <label key={key}>
          {getLabel(key)}:
          <input type={key === "email" ? "email" : "text"} name={key} value={formData[key]} onChange={onChange} required />
        </label>
      ))}
      <div className="form-buttons">
        <button type="submit">Відправити</button>
        <button type="button" onClick={onReset} className="reset-btn">Очистити</button>
      </div>
    </form>
  );
}

function UserDataTable({ formData }) {
  return (
    <>
      <h3>Введені дані:</h3>
      <table className="data-table">
        <thead>
          <tr>
            {Object.keys(formData).map((key) => (
              <th key={key}>{getLabel(key)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {Object.values(formData).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </>
  );
}

const getLabel = (key) => {
  const labels = {
    name: "Ім'я",
    surname: "Прізвище",
    groupCode: "Код групи",
    email: "Електронна пошта"
  };
  return labels[key] || key;
};

export default UserForm;

