"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Heart, DollarSign, Coffee, Gift } from "lucide-react"
import { cn } from "@/lib/utils"

const presetAmounts = [
  { amount: 5, icon: Coffee, label: "Buy us a coffee" },
  { amount: 10, icon: Gift, label: "Small gift" },
  { amount: 25, icon: Heart, label: "Show some love" },
  { amount: 50, icon: DollarSign, label: "Make an impact" },
]

export default function Donate() {
  const [selectedAmount, setSelectedAmount] = useState<number | "">("")
  const [customAmount, setCustomAmount] = useState<string>("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const finalAmount = selectedAmount === "" ? Number(customAmount) : selectedAmount
    console.log("Donation amount:", finalAmount)
    router.push("/thank-you")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <Heart className="w-12 h-12 mx-auto mb-4 text-pink-500 animate-pulse" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Make a Donation
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Your generosity helps us continue our mission
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            {presetAmounts.map(({ amount, icon: Icon, label }) => (
              <button
                key={amount}
                type="button"
                onClick={() => {
                  setSelectedAmount(amount)
                  setCustomAmount("")
                }}
                className={cn(
                  "flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all duration-200",
                  selectedAmount === amount
                    ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                    : "border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700"
                )}
              >
                <Icon className="w-6 h-6 mb-2" />
                <span className="font-bold">${amount}</span>
                <span className="text-xs text-gray-600 dark:text-gray-400">{label}</span>
              </button>
            ))}
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <DollarSign className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="number"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value)
                setSelectedAmount("")
              }}
              placeholder="Enter custom amount"
              className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
              min="1"
              step="0.01"
            />
          </div>

          <button
            type="submit"
            disabled={!selectedAmount && !customAmount}
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Donate ${selectedAmount || customAmount || "0"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
          Your donation helps support our cause. Thank you for your generosity!
        </p>
      </div>
    </div>
  );
}