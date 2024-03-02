'use client'
import { useSession } from 'next-auth/react';
import React, { useEffect, useRef, useState } from 'react'
import ProgressBar from './ProgressBar';
import { findAnswer, transcribe, transcribeFromUrl } from '@/services/base';
import { toast } from 'react-toastify'

export default function HomePanel() {
    const session = useSession();
    const access_token = session?.data?.user?.access_token

    const [state, setState] = useState("Choose Video")
    const [file, setFile] = useState(null)
    const [url, setUrl] = useState(null)
    const [uploadProgress, setUploadProgress] = useState(null);
    const video = useRef(null)
    const [token, setToken] = useState(null)
    const [question, setQuestion] = useState("")
    const [finalData, setFinalData] = useState(null)

    const answerHandler = async () => {
        if (question === "" || question === null) {
            toast.error('Question no filled');
            return
        }

        toast.info('Please wait until AI complete your request')
        const { data: fd, error } = await findAnswer(access_token, { question, token })
        if (fd)
            setFinalData(fd)
        else {
            if (error?.response?.data?.detail)
                toast.error(error?.response?.data?.detail)
            else
                toast.error('Unknown error!')
        }
    }
    const reset = () => {
        setState('Choose Video')
        setUrl('')
        setFile(null)

    }
    const transcribeHandler = async () => {
        if (file === null && url === null) {
            if (file === null)
                toast.error('No file selected')
            if (url === null)
                toast.error('No url entered')
            return
        }
        if (file) {
            var fd = new FormData();
            fd.append('file', file)
            setState('Processing')
            const { data } = await transcribe(access_token, fd, setUploadProgress)
            console.log('data transcribe', data)
            setUploadProgress(null)
            setToken(data.data.token)
            setState('Ask Question')
        }
        else {
            var d = { url }
            const data = await transcribeFromUrl(access_token, d)

            setToken(data.data.token)

        }
    }
    const handleVideoClick = () => {
        if (video.current.currentTime >= duration.end) {
            video.current.pause()
            video.current?.removeEventListener('timeupdate', handleVideoClick)
        }

    }
    if (session.status === 'authenticated')
        switch (state) {
            case 'Video Selected':
                return <div className="home-hero1 heroContainer">
                    <div className="home-container01 relative">
                        <button className='left-0 top-0 bg-red-300 aspect-square w-12 absolute z-10 text-xl' onClick={reset}>&times;</button>
                        <video className='w-96' ref={video}
                            controls={true}
                            onClick={e => {
                                if (e.currentTarget.paused)
                                    e.currentTarget.play()
                                else
                                    e.currentTarget.pause()
                                //setFinalData(null)
                                video.current?.removeEventListener('timeupdate', handleVideoClick)
                            }}
                        >
                            <source src={file ? URL.createObjectURL(file) : url} />
                        </video>
                        <div className="home-btn-group">
                            <button className="buttonFilled"
                                onClick={e => {
                                    setState('Processing')
                                    transcribeHandler()
                                }}>Next</button>
                        </div>
                    </div>
                </div>

            case 'Processing':
                if (uploadProgress !== null && uploadProgress !== 100)
                    return <div className="home-hero1 heroContainer">
                        <div className="home-container01 w-60 h-8 flex items-center ">
                            <ProgressBar className='w-full h-5 flex items-center' value={uploadProgress} title={`${uploadProgress}%`} />
                        </div>
                    </div>
                else if (uploadProgress !== null && uploadProgress === 100)

                    return <div className="home-hero1 heroContainer" >
                        <div className="home-container01">
                            <span className="visually-hidden">Loading...</span>

                        </div>
                    </div >
            case 'Ask Question':
                return <div className="home-hero1 heroContainer" >
                    <div className="home-container01">
                        <div className="flex flex-col gap-2">
                            <label >Ask your question</label>
                            <input className='border  p-2 ' placeholder='enter your question' onChange={e => setQuestion(e.target.value)} value={question || ""} />
                        </div>
                        <div className='flex flex-row align-items-center justify-content-center  mt-4 w-100 gap-2'>

                            <button className='border home-button button p-4' onClick={() => answerHandler()}>Find Answer</button>
                            <button className='border home-button1 button p-4' onClick={reset}>back</button>
                        </div>
                    </div>
                </div>
            default:
                return (
                    <div className="home-hero1 heroContainer">
                        <div className="home-container01">
                            <h1 className="home-hero-heading heading1">Upload and Ask</h1>
                            <h1 className="home-text">ask about your videos events </h1>
                            <span className="home-hero-sub-heading bodyLarge">
                                <span>
                                    <span>
                                        <span>Get answers to your video and audio questions</span>
                                    </span>
                                </span>
                            </span>
                            <div>
                                <input type='file' accept='.mp4,.mp3'
                                    onChange={e => {
                                        if (e.target.files.length > 0) {
                                            setFile(e.target.files[0])
                                            setState('Video Selected')
                                        }
                                    }} />
                                <div className="w-full flex-row">

                                    <label>https://</label><input className=' border p-2 mt-4' placeholder='enter video url' type='url' onChange={e => {
                                        setUrl(e.target.value)
                                    }} />
                                </div>
                            </div>
                            <div className="home-btn-group">
                                {(file || url != "") && <button onClick={e => {
                                    setState('Processing')
                                    transcribeHandler()

                                }} className="buttonFilled">Next</button>}
                            </div>
                        </div>
                    </div>
                )
        }
    else if (session.status === 'loading')
        return <div className="home-hero1 heroContainer">
            <div className="home-container01">
                <div class="w-96 h-24 rounded-md mx-auto mt-20">
                    <div class="flex animate-pulse flex-row items-center h-full justify-center space-x-5">
                        <div class="flex flex-col space-y-7 w-full">
                            <div class="w-full bg-gray-300 h-14 rounded-md ">
                            </div>
                            <div class="w-full bg-gray-300 h-4 rounded-md">
                            </div>
                            <div class="w-full bg-gray-300 h-6 rounded-md ">
                            </div>
                            <div class="w-full bg-gray-300 h-8 rounded-md ">
                            </div>
                            <div class="w-24 bg-gray-300 h-8 rounded-md mx-auto">
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    else return <></>
}
