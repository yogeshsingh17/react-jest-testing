function Button( {onClick, children} ){
    return (
        <button 
            className="border border-gray-500 bg-blue-400 mt-1 px-2 py-1 rounded-md hover:border-gray-700 hover:bg-gray-700" 
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button;