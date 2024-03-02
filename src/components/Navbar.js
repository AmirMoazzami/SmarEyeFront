'use client';
import { signOut, useSession } from 'next-auth/react';
import React from 'react'
import Link from 'next/link'
export default function Navbar() {
    const session = useSession()
    return (
        <div data-thq="thq-navbar-nav" className="home-desktop-menu">
            <nav className="home-links">
                <span className="bodySmall">Upload</span>
                <span className="home-nav22 bodySmall">Questions</span>
                <span className="home-nav32 bodySmall">Responses</span>
                <span className="home-nav42 bodySmall">Support</span>
            </nav>
            <div className="home-buttons gap-2">
                {session.status === 'authenticated' ?
                    <>
                        <button type="button"
                            onClick={e => {
                                signOut({ callbackUrl: "/" });
                            }}
                            className="bg-blue-500 text-white p-2">Logout</button>
                    </> :
                    <>
                        <Link href="?modal=true">
                            <button type="button" className=" p-2">Login</button>
                        </Link>
                        <Link href="?modal=true">
                            <button type="button" className="bg-blue-500 text-white p-2">Register</button>
                        </Link>
                    </>
                }
            </div>
        </div>
    )
}
