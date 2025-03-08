function AddNewUser(){
    return(
        <>
        <form>
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
        </form>

        </>
    );
}
export default AddNewUser;
