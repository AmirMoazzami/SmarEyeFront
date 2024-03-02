"use client";
import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import { login } from "@/services/base";
import { signIn } from "next-auth/react";
import { useState } from 'react'

export default function LoginModal() {
    const searchParams = useSearchParams();
    const modal = searchParams.get("modal");
    const pathname = usePathname();
    // const params = useSearchParams();
    const [isLoading, setIsLoading] = useState(false)
    const submitHandler = async e => {
        e.preventDefault()
        var data = {
            "username": e.currentTarget.username.value,
            "password": e.currentTarget.password.value,
        };
        setIsLoading(true)
        const { data: d, error } = await login(data)
        if (d) {
            signIn(
                "loginWithUsername",
                {
                    // callbackUrl: params.get("refer")
                    //     ? params.get("refer") + "?token=" + d.token
                    //     : "/",
                    callbackUrl: '/'
                },
                {
                    user: JSON.stringify(d),
                },
                {
                    ...d
                },

            );
            setIsLoading(false)
        }
    }
    return (
        <>
            {modal &&
                <dialog
                    className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
                    <div className="bg-white m-auto p-8">
                        <div className="flex flex-col items-center">
                            {isLoading ? <>Loading ...</> :
                                <form onSubmit={submitHandler} id='loginWithUsername' className='flex flex-col gap-2'>
                                    <div className='flex flex-col'>
                                        <label>username</label>
                                        <input type='text' name='username' className='border border-blue-100 p-2' value='javmoj' />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label>password</label>
                                        <input type='password' name='password' className='border border-blue-100 p-2' value='1234567890' />
                                    </div>
                                    <button className='bg-slate-400 p-2 text-white' type='submit' >login</button>
                                </form>
                            }
                            <br />
                            <Link href={pathname} className='mt-3' >
                                <button type="button" className="bg-red-500 text-white p-2">Close</button>
                            </Link>
                        </div>
                    </div>
                </dialog>
            }
        </>
    );
}

