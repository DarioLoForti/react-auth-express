export default function(){

    return (
        <div className="register-container">
            <form className="register-form">
                <h2>Register</h2>
                <div className="form-control">
                    <label>Username</label>
                    <input
                        type="text"
                    />
                </div>
                <div className="form-control">
                    <label>Email</label>
                    <input
                        type="email"
                    />
                </div>
                <div className="form-control">
                    <label>Password</label>
                    <input
                        type="password"
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}
