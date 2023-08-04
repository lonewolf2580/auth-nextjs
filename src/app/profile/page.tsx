"use client";
import Link from 'next/link';
import React, { use } from 'react';
import {useRouter} from 'next/navigation';
import axios from 'axios';




export default function ProfilePage() {

    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr />
            <p>Profile Page</p>
            
        </div>
    )
}