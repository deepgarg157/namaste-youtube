function Button({name}){
    return(
        <div className="px-3">
            <button className="bg-gray-200 px-4 py-1 my-4 rounded-lg font-medium">{name}</button>
        </div>
    )
}

export default Button;