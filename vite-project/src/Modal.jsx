import React, { useState, useEffect } from "react";

const UserModal = ({
  open,
  toggle,
  cars,
  setCars,
  editingIndex,
  saveEditedCar,
}) => {
  const [form, setForm] = useState({
    name: "",
    year: "",
    color: "",
    price: "",
    brand: "",
  });

  useEffect(() => {
    if (editingIndex !== null) {
      setForm(cars[editingIndex]);
    }
  }, [editingIndex, cars]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveEditedCar(form);
  };

  return (
    <div className={`modal ${open ? "d-block" : "d-none"}`}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {editingIndex !== null ? "Edit Car" : "Add Car"}
            </h5>
            <button type="button" className="close" onClick={toggle}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                className="form-control my-2"
              />
              <input
                type="text"
                name="year"
                placeholder="Year"
                value={form.year}
                onChange={handleChange}
                className="form-control my-2"
              />
              <input
                type="text"
                name="color"
                placeholder="Color"
                value={form.color}
                onChange={handleChange}
                className="form-control my-2"
              />
              <input
                type="text"
                name="price"
                placeholder="Price"
                value={form.price}
                onChange={handleChange}
                className="form-control my-2"
              />
              <input
                type="text"
                name="brand"
                placeholder="Brand"
                value={form.brand}
                onChange={handleChange}
                className="form-control my-2"
              />
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
