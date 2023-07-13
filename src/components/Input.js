
export default function Input(props) {
    return(
        <div className="container">
            <div className="search">
                <input 
                    type="text"
                    value={props.value}
                    placeholder='Enter location'
                    onChange={props.onChange}
                    onKeyPress={props.searchLocation} 
                />
                {props.message && (
                <p className="error"> {props.message} </p>
            )}
            </div>    
        </div>
    )
}