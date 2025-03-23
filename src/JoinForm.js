function JoinUsForm() {
    return (
        <section className="join-us-form commonSection">
            <div className="container">
                <div className="formWrap">
                    <form>
                        <div className="innerForm">
                            <h2 className="text-center">LET'S JOIN <span className='red-text'> MEMBERSHIP</span></h2>
                            <div className="inputWrap">
                                <div className="eachInput"><input type="text" placeholder="Full Name" /></div>
                                <div className="eachInput"><input type="email" placeholder="Enter your email" /></div>
                            </div>
                            <div className="eachInput"><input type="text" placeholder="What You’d Like To Discuss?" /></div>
                            <div className="eachInput"><textarea placeholder="Your Message" /></div>

                            <div className="submitBtn"><input type="submit" value="Join Now"/></div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default JoinUsForm;