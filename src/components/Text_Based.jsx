import React, { useState, useEffect } from "react";

const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    return { num1, num2, result: num1 + num2 };
};

const MyForm = () => {
    const [captcha, setCaptcha] = useState(generateCaptcha());
    const [userAnswer, setUserAnswer] = useState("");
    const [timeLeft, setTimeLeft] = useState(10);

    useEffect(() => {
        if (timeLeft === 0) {
            alert("Time's up! CAPTCHA reset.");
            setCaptcha(generateCaptcha());
            setUserAnswer("");
            setTimeLeft(10);
        }

        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (parseInt(userAnswer) !== captcha.result) {
            alert("Wrong CAPTCHA! Try again.");
            setCaptcha(generateCaptcha());
            setUserAnswer("");
            setTimeLeft(10);
            return;
        }
        alert("Form submitted successfully!");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <form
                onSubmit={handleSubmit}
                className="bg-gray-800 p-6 rounded-2xl shadow-lg w-96 space-y-4"
            >

                <h2 className="text-2xl font-semibold text-center text-white">CAPTCHA Form</h2>
                <p className="text-center text-red-500 font-bold">
                    Time left: {timeLeft} seconds
                </p>
                <input
                    type="text"
                    placeholder="Enter your name"
                    required
                    className="w-full px-3 py-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <div className="text-lg font-medium text-white text-center">
                    Solve: {captcha.num1} + {captcha.num2} = ?
                </div>



                <input
                    type="number"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-600 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default MyForm;
