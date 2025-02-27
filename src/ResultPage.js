import React from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Confetti from 'react-confetti';

const students = [
    { id: 1, name: "AHMAD JULIAN ROFI", score: 91 },
    { id: 2, name: "AHMAD PRASETYO NUGROHO", score: 80 },
    { id: 3, name: "AHMAD SIVA UL ZANAN", score: 82 },
    { id: 4, name: "ALFI LATIFATUL JANNAH", score: 82 },
    { id: 5, name: "ALVI WAHID NUR", score: 81 },
    { id: 6, name: "ANGGI WULANDARI", score: 85 },
    { id: 7, name: "ANGGY SISCA APRILIA", score: 86 },
    { id: 8, name: "ANISA ANAYLA ISFAHANA", score: 78 },
    { id: 9, name: "ARDINO YNG WIE DA VINCI", score: 89 },
    { id: 10, name: "DENY NURHIDAYAH PUTRA", score: 60 },
    { id: 11, name: "DINA PUTRI ANI", score: 63 },
    { id: 12, name: "DWI ANGGARA PUTRA", score: 89 },
    { id: 13, name: "EGI LESTIANA", score: 86 },
    { id: 14, name: "FITYATA NILNA HUSNA ILA", score: 88 },
    { id: 15, name: "HAWA AZ ZAHRA FIRDAUS", score: 70 },
    { id: 16, name: "IFANK EKA PRASETYO", score: 78 },
    { id: 17, name: "IKFAL APRILIANSYAH", score: 90 },
    { id: 18, name: "INTAN JUWITA", score: 79 },
    { id: 19, name: "AFIF IHSAN BACHTIAR", score: 73 },
    { id: 20, name: "LAILATUL MUKHAROMAH", score: 71 },
    { id: 21, name: "MOH. BAGAS DWI HANDIKA", score: 59 },
    { id: 22, name: "MUHAMAD RIPKI SAPUTRA", score: 64 },
    { id: 23, name: "MUHAMMAD ABDUL HAMID", score: 80 },
    { id: 24, name: "MUHAMMAD FAISOL", score: 95 },
    { id: 25, name: "MUHAMMAD FANI", score: 81 },
    { id: 26, name: "MUHAMMAD FATHKUROHMAN", score: 86 },
    { id: 27, name: "MUHAMMAD RIO DWI PUTRA", score: 67 },
    { id: 28, name: "MUHAMMAD YUSRIL NURULIL ALBAB", score: 73 },
    { id: 29, name: "NUR MUHAMMAD SUKRON MAKMUN", score: 92 },
    { id: 30, name: "PUTRI SUHARTINI", score: 70 },
    { id: 31, name: "REGA ARDA PUTRA", score: 85 },
    { id: 32, name: "REGA CHOKI HARDAYAT PRATAMA", score: 83 },
    { id: 33, name: "RIZMA PUTRI SEPTIAMANDA", score: 86 },
    { id: 34, name: "SELA YUNITA SARI", score: 85 },
    { id: 35, name: "SHERINA PUTRI ANATASYA", score: 75 },
    { id: 36, name: "TIARA", score: 83 },
    { id: 37, name: "YOGI TAMA", score: 69 },
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
