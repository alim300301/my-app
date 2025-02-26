import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function InputPage() {
    const [studentId, setStudentId] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setStudentId(e.target.value);
        setError('');
    };

    const handleSubmit = () => {
        const isNumeric = /^\d+$/.test(studentId);
        if (!isNumeric) {
            setError('Nomor absen harus berupa angka.');
        } else {
            navigate(`/result/${studentId}`);
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Selamat Datang !</h1>
            <h1 className="text-center mb-4">Silahkan Input Absen Terlebih Dahulu</h1>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <input
                        type="text"
                        className="form-control mb-3"
                        value={studentId}
                        onChange={handleInputChange}
                        placeholder="Masukkan no absen"
                    />
                    <button className="btn btn-primary w-100" onClick={handleSubmit}>Submit</button>
                    {error && <p className="text-danger mt-2">{error}</p>}
                </div>
            </div>
        </div>
    );
}

export default InputPage;
