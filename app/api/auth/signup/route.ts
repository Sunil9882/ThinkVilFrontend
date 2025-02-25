// import { NextResponse } from "next/server";
// import bcrypt from "bcrypt";
// import { db } from "@/lib/db"; // Make sure this is your SQL database connection file

// export async function POST(req: Request) {
//   try {
//     const { name, email, password } = await req.json();

//     console.log("Received signup request:", { name, email });

//     if (!name || !email || !password) {
//       return NextResponse.json({ message: "All fields are required" }, { status: 400 });
//     }

//     // Check if user already exists
//     const existingUser = await db.query(`SELECT * FROM users WHERE email = ?`, [email]);

//     if (existingUser.length > 0) {
//       console.log("User already exists:", email);
//       return NextResponse.json({ message: "User already exists" }, { status: 400 });
//     }

//     // Hash password before storing
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Insert new user into the database
//     await db.query(
//       `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`,
//       [name, email, hashedPassword]
//     );

//     console.log("User created successfully:", email);
//     return NextResponse.json({ message: "User created successfully" }, { status: 201 });

//   } catch (error) {
//     console.error("Error in signup API:", error);
//     return NextResponse.json({ message: "Server error. Check logs." }, { status: 500 });
//   }
// }
