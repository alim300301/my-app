import React from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Confetti from 'react-confetti';

const students = [
    { id: 1, name: "Alice", score: 85 },
    { id: 2, name: "Bob", score: 70 },
    { id: 3, name: "Charlie", score: 90 },
];

function ResultPage() {
    const { studentId } = useParams();
    const student = students.find(s => s.id.toString() === studentId);
    const result = student
        ? `${student.name} ${student.score > 75 ? "Lulus" : "Tidak Lulus"}`
        : 'Nomor absen tidak ditemukan.';
    const isPassed = student && student.score > 75;

    return (
        <div className="container mt-5">
            {isPassed && <Confetti />}
            <h1 className="text-center mb-4">Hasil Pengumuman</h1>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className={`alert ${isPassed ? 'alert-info' : 'alert-danger'}`}>
                        <p className="text-center">{result}</p>
                        {student && (
                            <div className="mt-3">
                                {isPassed ? (
                                    <div className="text-center">
                                        <h2>Selamat {student.name}!</h2>
                                        <p>Anda berhasil lulus dengan nilai yang sangat baik.</p>
                                    </div>
                                ) : (
                                    <div className="text-center">
                                        <h2>Tetap Semangat {student.name}!</h2>
                                        <p>Jangan berkecil hati, teruslah berusaha dan jangan pernah menyerah.</p>
                                    </div>
                                )}
                                <h5>Detail Nilai:</h5>
                                <p>Nama: {student.name}</p>
                                <p>No Absen: {student.id}</p>
                                <p>Nilai: {student.score}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResultPage;
