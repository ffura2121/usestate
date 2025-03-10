import { useState } from "react";
import "./UserForm.css";
import "./App.css";

function UserForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    groupCode: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <form className="user-form">
        <label>
          Ім'я:
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        </label>
        <label>
          Прізвище:
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        </label>
        <label>
          Код групи:
          <input type="text" name="groupCode" value={formData.groupCode} onChange={handleChange} />
        </label>
        <label>
          Електронна пошта:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
      </form>
      <div className="info-table">
        <h2>Введені дані:</h2>
        <table>
          <tbody>
            <tr>
              <td>Ім'я:</td>
              <td>{formData.firstName}</td>
            </tr>
            <tr>
              <td>Прізвище:</td>
              <td>{formData.lastName}</td>
            </tr>
            <tr>
              <td>Код групи:</td>
              <td>{formData.groupCode}</td>
            </tr>
            <tr>
              <td>Електронна пошта:</td>
              <td>{formData.email}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserForm;
