import React from 'react'

type QuestionMarkProps = React.SVGAttributes<SVGSVGElement>

export default function QuestionMark(props: QuestionMarkProps) {
    const { className } = props

    return (
        <svg className={`${className}`} width="5rem" height="5rem" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.5 5.5C5.5 4.11929 6.61929 3 8 3C9.38071 3 10.5 4.11929 10.5 5.5C10.5 6.88071 9.38071 8 8 8H7V11H8C11.0376 11 13.5 8.53757 13.5 5.5C13.5 2.46243 11.0376 0 8 0C4.96243 0 2.5 2.46243 2.5 5.5H5.5Z" fill="#8A2BE2" />
            <path d="M10 13H7V16H10V13Z" fill="#8A2BE2" />
        </svg>
    )
}
