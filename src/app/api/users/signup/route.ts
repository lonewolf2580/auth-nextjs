import { connect } from "@/dbConfig/dbconfig";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import User from "@/models/userModel";


connect()

export async function POST(request:NextRequest) {
    try {
        const reqBody = await request.json()
        const {username, email, password} = reqBody
        console.log(reqBody);

        // Check if User Exist
        const user = await User.findOne({email})

        if (user) {
            return NextResponse.json({error: "User already exist"}, {status: 400})
        }

        // Hash Password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        // Creating User
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        })

        const saveUser = await newUser.save()
        console.log(saveUser);
        return NextResponse.json({
            message: "User created Succesfully",
            success: true,
            saveUser,
        })
        
    } catch (error: any) {
        return NextResponse.json({error: error.message})
    }
}