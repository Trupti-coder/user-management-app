function AddNewUser(){
    return(
        <>
        <form onSubmit={funSubmit}>
            Id:<input type="text"
            value={id}
            placeholder="Enter Id"
            />

            FirstName:<input type="text"
            value={firstname}
            placeholder="Enter FirstName"
            />

            LastName:<input type="text"
            value={lastname}
            placeholder="Enter LastName"
            />

            Age:<input type="text"
            value={age}
            placeholder="Enter Age"
            />

            Gender:<input type="text"
            value={gender}
            placeholder="Enter Gender"
            />

            BloodGroup:<input type="text"
            value={bloodgroup}
            placeholder="Enter BloodGroup"
            />
            <button type="submit">Add User</button>
        </form>

        </>
    );
}
export default AddNewUser;
