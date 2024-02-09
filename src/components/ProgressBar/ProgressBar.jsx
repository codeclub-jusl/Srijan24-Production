'use client'

import React, { useEffect, useLayoutEffect, useState } from 'react'
import styles from './ProgressBar.module.css'

const ProgressBar = () => {
    const [progress, setProgress] = useState(0)

    useLayoutEffect(() => {
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
