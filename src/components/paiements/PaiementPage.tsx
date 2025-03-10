import React, { useState } from 'react';

const PaymentPage = ({ userEmail }) => {
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
        setSelectedPaymentMethod(''); // Reset payment method when country changes
    };

    const handlePaymentMethodChange = (event) => {
        setSelectedPaymentMethod(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Implement payment logic here
        alert(`Payment method: ${selectedPaymentMethod}, Country: ${selectedCountry}`);
    };

    const paymentMethods = {
        USA: ['Credit Card', 'PayPal', 'Apple Pay'],
        Canada: ['Credit Card', 'PayPal'],
        UK: ['Credit Card', 'PayPal', 'Google Pay'],
        France: ['Credit Card', 'PayPal', 'Carte Bleue'],
        Germany: ['Credit Card', 'PayPal', 'Sofort'],
        Japan: ['Credit Card', 'PayPal', 'Konbini']
    };

    
    return (
        <div className="max-w-3xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Payment Page</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={userEmail}
                        readOnly
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                    <select
                        id="country"
                        value={selectedCountry}
                        onChange={handleCountryChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        <option value="">Select your country</option>
                        {Object.keys(paymentMethods).map((country) => (
                            <option key={country} value={country}>{country}</option>
                        ))}
                    </select>
                </div>
                {selectedCountry && (
                    <div>
                        <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700">Payment Method</label>
                        <select
                            id="paymentMethod"
                            value={selectedPaymentMethod}
                            onChange={handlePaymentMethodChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="">Select your payment method</option>
                            {paymentMethods[selectedCountry].map((method) => (
                                <option key={method} value={method}>{method}</option>
                            ))}
                        </select>
                    </div>
                )}
                <div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        disabled={!selectedCountry || !selectedPaymentMethod}
                    >
                        Pay Now
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PaymentPage;