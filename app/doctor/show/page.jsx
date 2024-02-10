"use client";
import { useLoginDetails } from "@/store";
import { useEffect, useState } from "react";

function Show() {
    const { username, aadhaar } = useLoginDetails();
    const currentDate = new Date();
    const date = currentDate.getDate();

    const [userData, setUserData] = useState({});
    const [hospitalData, setHospitalData] = useState({});

    useEffect(() => {
        const getData = async () => {
            const userData = JSON.parse(
                (
                    await (
                        await fetch("/api/get-user", {
                            method: "POST",
                            body: JSON.stringify({
                                name: username,
                                aadhaar,
                            }),
                        })
                    ).json()
                ).body
            );
            console.log(userData);
            setUserData(userData);
        };
        username.length && getData();
    }, [username]);

    useEffect(() => {
        const getData = async () => {
            const records = userData?.records?.reverse();
            if (!records || !records.length) return;

            const hospitalId = records[0].hospitalId; // Assuming hospitalId is available in the first record
            const hospitalData = JSON.parse(
                (
                    await (
                        await fetch("/api/get-hospital", {
                            method: "POST",
                            body: JSON.stringify({
                                gstNo: hospitalId,
                            }),
                        })
                    ).json()
                ).body
            );
            console.log(hospitalData);
            setHospitalData(hospitalData);
        };
        userData.records && getData();
    }, [userData]);

    return (
        <>
            <div className="bg-[#edf6f5] py-20">
                <div className="flex flex-col lg:flex-row items-center justify-between lg:items-center ml-4 lg:ml-20 mt-20">
                    <div className="flex flex-col items-center gap-8 ml-10 lg:ml-0 mt-8 lg:mt-0 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-8">
                        <table className="table-auto mt-4 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-4">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2">Prescription</th>
                                    <th className="px-4 py-2">Hospital Name</th>
                                    <th className="px-4 py-2">Created At</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userData.records && userData.records.map(record => (
                                    <tr key={record.id}>
                                        <td className="border px-4 py-2">{record.prescription}</td>
                                        <td className="border px-4 py-2">{hospitalData.name}</td>
                                        <td className="border px-4 py-2">{new Date(record.createdAt).toLocaleString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Show;
