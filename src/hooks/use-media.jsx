import {useEffect, useState} from "react";

export default function useMedia(width = 1024 ) {

    const [status, setStatus] = useState(window.matchMedia(`(max-width: ${width}px)`).matches)

    useEffect(() => {
        const matchMedia = window.matchMedia(`(max-width: ${width}px)`)

        const onChangeHandle = e => {
            setStatus(e.matches)
        }

        matchMedia.addEventListener('change', onChangeHandle)

        // cleanup
        return () => {
            matchMedia.removeEventListener('changge', onChangeHandle)
        }

    })

    return status

}