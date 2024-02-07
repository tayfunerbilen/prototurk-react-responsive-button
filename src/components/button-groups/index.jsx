import {useState} from "react";
import Button from "../button/index.jsx";
import useMedia from "../../hooks/use-media.jsx";
import {BottomSheet} from 'react-spring-bottom-sheet'
import 'react-spring-bottom-sheet/dist/style.css'

export default function ButtonGroups({buttons, autoClose = false}) {

    const [open, setOpen] = useState(false)
    const isMobile = useMedia(500)

    const prepareButtons = (
        buttons.map((button, index) => {

            const attributes = {...button.attributes}

            if (autoClose) {
                attributes.onClick = (e) => {
                    setOpen(false)
                    button?.attributes?.onClick?.(e)
                }
            }

            return (
                <Button key={index} {...attributes}>
                    {button.title}
                </Button>
            )
        })
    )

    if (isMobile) {
        return (
            <>
                <button
                    onClick={() => setOpen(!open)}
                    className="w-10 h-10 flex items-center justify-center text-zinc-600 -mr-2 rounded-full bg-zinc-100"
                >
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em"
                         width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
                        />
                    </svg>
                </button>
                <BottomSheet
                    onDismiss={() => setOpen(false)}
                    open={open}
                >
                    <nav className="grid p-4 gap-y-2">
                        {prepareButtons}
                    </nav>
                </BottomSheet>
            </>
        )
    }

    return (
        <nav className="flex gap-2.5">
            {prepareButtons}
        </nav>
    )
}