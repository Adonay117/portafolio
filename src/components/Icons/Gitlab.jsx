const Gitlab = ({ className = '', to ='#'}) => {
    return (
        <a href={to}>
         <svg xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}>
        <path 
        stroke="none" 
        d="M0 0h24v24H0z" 
        fill="none" />
        <path d="M21 14l-9 7l-9 -7l3 -11l3 7h6l3 -7z" />
        </svg>
        </a>
       
    )
}

export default Gitlab
