"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Country, State } from "country-state-city";
import { Heart, DollarSign, Coffee, Gift } from "lucide-react";
import Image from "next/image";

const presetAmounts = [
  { amount: 1, icon: Coffee, label: "$1" },
  { amount: 5, icon: Gift, label: "$5" },
  { amount: 10, icon: Heart, label: "$10" },
  { amount: 25, icon: DollarSign, label: "$25" },
];

export default function Donate() {
  const [customAmount, setCustomAmount] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [customCountry, setCustomCountry] = useState("");
  const [customState, setCustomState] = useState("");
  const [countries, setCountries] = useState<Country[]>([]);
  const [states, setStates] = useState<IState[]>([]);

  const router = useRouter();

  useEffect(() => {
    setCountries(Country.getAllCountries());
  }, []);

  useEffect(() => {
    if (country) {
      const selectedCountry = countries.find((c) => c.isoCode === country);
      setStates(selectedCountry ? State.getStatesOfCountry(selectedCountry.isoCode) : []);
    }
  }, [country, countries]);

  const handleAmountClick = (amount) => setCustomAmount(amount.toString());

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || Number(customAmount) < 1) {
      alert("Please fill in all required fields and ensure the donation amount is at least $1.");
      return;
    }
    const selectedCountry = country === "Other" ? customCountry.trim() : country;
    const selectedState = country === "Other" ? customState.trim() : state;
    if (!selectedCountry || !selectedState) {
      alert("Please enter a valid country and state.");
      return;
    }
    console.log("Donation Details:", { fullName, email, country: selectedCountry, state: selectedState, amount: customAmount });
    router.push("/thank-you");
  };

  return (
    <div className="flex items-center justify-center min-h-screen py-10 bg-gray-100">
      <div className="flex w-full max-w-5xl mt-6">
        <div className="w-1/2 hidden md:block h-[1000px] relative rounded-xl">
          <Image src="/All_Images/DonatePage/donation2.png" alt="Donation" fill className="rounded-r-xl object-cover" />
        </div>

        <div className="w-full md:w-1/2 p-10 shadow-lg bg-white flex flex-col justify-center rounded-xl md:rounded-l-2xl min-h-[900px]">
          <h1 className="text-3xl font-bold text-black text-center mb-6">Donate Today. Inspire Tomorrow’s Innovators.</h1>
          <p className="text-blue-600 text-center mb-6">Your generosity helps us continue our mission. Make a difference today!</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" placeholder="Full Name *" value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full p-3 border-2 border-gray-400 rounded-xl" required />
            <input type="email" placeholder="Email *" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 border-2 border-gray-400 rounded-xl" required />
            <select value={country} onChange={(e) => { setCountry(e.target.value); setState(""); setCustomCountry(""); setCustomState(""); }} className="w-full p-3 border-2 border-gray-400 rounded-xl" required>
              <option value="" disabled>Select Country *</option>
              {countries.map((c) => (<option key={c.isoCode} value={c.isoCode}>{c.name}</option>))}
              <option value="Other">Other</option>
            </select>
            {country === "Other" && <input type="text" placeholder="Enter Country *" value={customCountry} onChange={(e) => setCustomCountry(e.target.value)} className="w-full p-3 border-2 border-gray-400 rounded-xl" required />}
            {country && country !== "Other" && states.length > 0 && <select value={state} onChange={(e) => setState(e.target.value)} className="w-full p-3 border-2 border-gray-400 rounded-xl" required>
              <option value="" disabled>Select State *</option>
              {states.map((s) => (<option key={s.isoCode} value={s.isoCode}>{s.name}</option>))}
              <option value="Other">Other</option>
            </select>}
            {(country === "Other" || state === "Other") && <input type="text" placeholder="Enter State *" value={customState} onChange={(e) => setCustomState(e.target.value)} className="w-full p-3 border-2 border-gray-400 rounded-xl" required />}
            <div className="grid grid-cols-2 gap-4">
              {presetAmounts.map(({ amount, icon: Icon, label }) => (
                <button key={amount} type="button" onClick={() => handleAmountClick(amount)} className={`flex flex-col items-center justify-center p-4 rounded-xl border-4 ${customAmount === amount.toString() ? "border-gray-900" : "border-gray-400"}`}>
                  <Icon className="w-6 h-6 mb-2" />
                  <span className="font-bold">{label}</span>
                </button>
              ))}
            </div>
            <input type="number" placeholder="Enter Custom Amount *" value={customAmount} onChange={(e) => setCustomAmount(Math.max(1, Number(e.target.value)).toString())} className="w-full p-3 border-2 border-gray-300 rounded-xl" required />
            <button type="submit" className="w-full bg-black text-white font-bold py-4 rounded-xl">Complete Your Gift</button>
          </form>
        </div>
      </div>
    </div>
  );
}
