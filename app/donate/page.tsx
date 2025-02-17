"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Heart, DollarSign, Coffee, Gift } from "lucide-react";
import Image from "next/image";

const presetAmounts = [
  { amount: 1, icon: Coffee, label: "$1" },
  { amount: 5, icon: Gift, label: "$5" },
  { amount: 10, icon: Heart, label: "$10" },
  { amount: 25, icon: DollarSign, label: "$25" },
];

const countries = {
  India: ["Delhi", "Maharashtra", "Karnataka", "Tamil Nadu"],
  USA: ["California", "Texas", "Florida", "New York"],
  Canada: ["Ontario", "Quebec", "British Columbia", "Alberta"],
  Australia: ["New South Wales", "Victoria", "Queensland", "Western Australia"],
  UK: ["England", "Scotland", "Wales", "Northern Ireland"],
};

export default function Donate() {
  const [customAmount, setCustomAmount] = useState<string>("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [customCountry, setCustomCountry] = useState("");
  const [customState, setCustomState] = useState("");
  const router = useRouter();

  const handleAmountClick = (amount: number) => {
    setCustomAmount(amount.toString());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim() || !email.trim() || Number(customAmount) <= 0) {
      alert("Please fill in all required fields.");
      return;
    }

    const selectedCountry = country === "Other" ? customCountry.trim() : country;
    const selectedState = country === "Other" ? customState.trim() : state;

    if (!selectedCountry) {
      alert("Please enter your country.");
      return;
    }

    if (!selectedState) {
      alert("Please enter your state.");
      return;
    }

    console.log("Donation Details:", {
      fullName,
      email,
      country: selectedCountry,
      state: selectedState,
      amount: customAmount,
    });

    router.push("/thank-you");
  };

  return (
    <div className="min-h-screen flex bg-green-200 ">
      <div className="w-1/2 relative hidden md:block">
        <Image
          src="/donation.jpeg"
          alt="Donation Background"
          fill
          className="rounded-r-2xl object-cover"
        />
      </div>

      <div className="w-full md:w-1/2  p-10 shadow-lg flex flex-col justify-center bg-gradient-to-br from-blue-100 to-blue-300 rounded-xl md:rounded-l-2xl">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">
        Donate Today. Inspire Tomorrow’s Innovators.
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Your generosity helps us continue our mission. Make a difference today!
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name *"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full p-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-black"
            required
          />
          <input
            type="email"
            placeholder="Email *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-black"
            required
          />

          {/* Country Selection */}
          <select
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
              setState("");
              setCustomCountry("");
              setCustomState(""); // Reset both state fields when changing country
            }}
            className="w-full p-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-black"
            required
          >
            <option value="" disabled>
              Select Country *
            </option>
            {[...Object.keys(countries), "Other"].map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          {country === "Other" && (
            <input
              type="text"
              placeholder="Enter Country *"
              value={customCountry}
              onChange={(e) => setCustomCountry(e.target.value)}
              className="w-full p-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-black"
              required
            />
          )}

          {/* State Selection */}
          {country && country !== "Other" && (
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full p-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-black"
              required
            >
              <option value="" disabled>
                Select State *
              </option>
              {[...(countries[country] || []), "Other"].map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          )}

          {country === "Other" || state === "Other" ? (
            <input
              type="text"
              placeholder="Enter State *"
              value={customState}
              onChange={(e) => setCustomState(e.target.value)}
              className="w-full p-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-black"
              required
            />
          ) : null}

          {/* Donation Amount Selection */}
          <div className="grid grid-cols-2 gap-4">
            {presetAmounts.map(({ amount, icon: Icon, label }) => (
              <button
                key={amount}
                type="button"
                onClick={() => handleAmountClick(amount)}
                className={`flex flex-col items-center justify-center p-4 rounded-xl border-4 transition-all duration-200 ${
                  customAmount === amount.toString() ? "border-gray-900" : "border-gray-200"
                }`}
              >
                <Icon className="w-6 h-6 mb-2" />
                <span className="font-bold">{label}</span>
              </button>
            ))}
          </div>

          <input
            type="number"
            placeholder="Enter Custom Amount *"
            value={customAmount}
            onChange={(e) => setCustomAmount(e.target.value)}
            className="w-full p-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-black"
            required
          />

          <button
            type="submit"
            className="w-full bg-black text-white font-bold py-4 rounded-xl"
          >
            Complete Your Gift
          </button>
        </form>
      </div>
    </div>
  );
}
