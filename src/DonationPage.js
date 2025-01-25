import React, { useState } from "react";
import { DollarSign, Repeat, Calendar } from "lucide-react";
import { Verified } from "@/components/ui/verified";


const DonationPage = () => {
  const [donationAmount, setDonationAmount] = useState(50);
  const [donationType, setDonationType] = useState("one-time");
  const [donationDate, setDonationDate] = useState("01/24/2025");

  const handleDonationAmountChange = (e) => {
    setDonationAmount(parseInt(e.target.value));
  };

  const handleDonationTypeChange = (type) => {
    setDonationType(type);
  };

  const handleDonationDateChange = (e) => {
    setDonationDate(e.target.value);
  };

  return (
    <div className="container mx-auto py-24 px-6">
      <h1 className="text-5xl font-bold mb-8">
        Invest in the Future of Africa
      </h1>
      <p className="text-xl text-gray-600 mb-12">
        Join us in raising the next generation of creative ethical leaders for
        Africa and the world.
      </p>

      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6">Choose Your Donation</h2>

        <div className="grid grid-cols-3 gap-6 mb-6">
          {[25, 50, 75, 100, 250, 500].map((amount, index) => (
            <button
              key={index}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                donationAmount === amount
                  ? "bg-green-500 text-white hover:bg-green-600"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => setDonationAmount(amount)}
            >
              ${amount}
            </button>
          ))}
          <input
            type="number"
            className="px-4 py-3 rounded-lg bg-gray-200 text-gray-700 focus:bg-gray-300 focus:outline-none"
            placeholder="Enter Other Amount"
            value={donationAmount}
            onChange={handleDonationAmountChange}
          />
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <button
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                donationType === "one-time"
                  ? "bg-green-500 text-white hover:bg-green-600"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => handleDonationTypeChange("one-time")}
            >
              <DollarSign className="w-5 h-5 inline-block mr-2" /> One-Time
            </button>
            <button
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                donationType === "recurring"
                  ? "bg-green-500 text-white hover:bg-green-600"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => handleDonationTypeChange("recurring")}
            >
              <Repeat className="w-5 h-5 inline-block mr-2" /> Recurring
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-gray-500" />
            <input
              type="date"
              className="px-2 py-1 rounded-md bg-gray-200 text-gray-700 focus:bg-gray-300 focus:outline-none"
              value={donationDate}
              onChange={handleDonationDateChange}
            />
          </div>
        </div>

        <button className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors w-full">
          Donate Now
        </button>

        <div className="mt-6 flex items-center justify-between">
          <Verified />
          <p className="text-gray-500">
            Allegro Organizational Solutions is a registered non-profit in the
            USA, only, under 501(c)(3) of the Internal Revenue Code and will
            send a receipt for all donations. Your donations are tax-deductible
            to the full extent allowable by law.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonationPage;
