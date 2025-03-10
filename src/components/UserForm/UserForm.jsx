import { useState } from "react";
import "./UserForm.css";

function UserForm() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    groupCode: "",
    email: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Форма відправлена!");
  };

  const handleReset = () => {
    setFormData({
      name: "",
      surname: "",
      groupCode: "",
      email: ""
    });
  };

  return (
    <div className="form-container">
      <h2>Форма користувача</h2>
      <form className="user-form" onSubmit={handleSubmit}>
        <label>
          Ім'я:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
        <label>
          Прізвище:
          <input type="text" name="surname" value={formData.surname} onChange={handleChange} required />
        </label>
        <label>
          Код групи:
          <input type="text" name="groupCode" value={formData.groupCode} onChange={handleChange} required />
        </label>
        <label>
          Електронна пошта:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <div className="form-buttons">
          <button type="submit">Відправити</button>
          <button type="button" onClick={handleReset} className="reset-btn">
            Очистити
          </button>
        </div>
      </form>

      <h3>Введені дані:</h3>
      <table className="data-table">
        <thead>
          <tr>
            <th>Ім'я</th>
            <th>Прізвище</th>
            <th>Код групи</th>
            <th>Електронна пошта</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{formData.name}</td>
            <td>{formData.surname}</td>
            <td>{formData.groupCode}</td>
            <td>{formData.email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UserForm;
