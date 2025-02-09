"use client"

import { useState } from "react"

export default function PhysicsSimulations() {
  const [velocity, setVelocity] = useState(0)
  const [time, setTime] = useState(0)

  const calculateDistance = () => {
    return velocity * time
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Physics Simulations</h1>
      <div className="bg-blue-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Distance Calculator</h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="velocity" className="block mb-1">
              Velocity (m/s)
            </label>
            <input
              type="number"
              id="velocity"
              value={velocity}
              onChange={(e) => setVelocity(Number(e.target.value))}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="time" className="block mb-1">
              Time (s)
            </label>
            <input
              type="number"
              id="time"
              value={time}
              onChange={(e) => setTime(Number(e.target.value))}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div>
            <p className="text-xl">Distance: {calculateDistance()} meters</p>
          </div>
        </div>
      </div>
    </div>
  )
}

