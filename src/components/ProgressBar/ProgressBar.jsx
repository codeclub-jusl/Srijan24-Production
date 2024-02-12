'use client'

import React, { useEffect, useState } from 'react'
import ScaleLoader from "react-spinners/ScaleLoader";
import styles from './ProgressBar.module.css'

const ProgressBar = () => {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prevProgress => {
                return prevProgress >= 100 ? 100 : prevProgress + 10
            })
        }, 100)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div className={styles.container}>
            {/* <div className={styles.loadingContainer}>
                <div
                    className={styles.loadingBar}
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
            <p className={styles.loadingText}>Loading...</p> */}
            <ScaleLoader color='#ffffff' />
        </div>
    )
}

export default ProgressBar
