'use client'

import React, { useEffect, useState } from 'react'
import styles from './ProgressBar.module.css'

const ProgressBar = () => {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prevProgress => {
                prevProgress >= 100 ? 0 : prevProgress + 5
            })
        }, 500)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.loadingContainer}>
                <div
                    className={styles.loadingBar}
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
            <p className={styles.loadingText}>Loading...</p>
        </div>
    )
}

export default ProgressBar
