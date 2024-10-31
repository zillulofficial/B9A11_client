import useAuth from "../../Hooks/useAuth";

const Contacts = () => {

    const { user } = useAuth()
    const handleContact = e => {
        e.preventDefault()
        const form = e.target
        const email= form.email.value
        const category= form.category.value
        const check= form.check.value
        const description= form.description.value

        const contactInfo= {
            email, 
            category,
            check,
            description
        }

        console.log(contactInfo);
    }
    return (
        <div>
            <div className="container mx-auto p-5 mt-10 ">
                <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
                <form onSubmit={handleContact} className="mb-16">
                    <p className="mb-2">Email Address</p>
                    <input type="text" name="email" defaultValue={user?.email} placeholder="name@example.com" className="input input-bordered  w-full mb-8" />
                    <p className="mb-2">Select Your Topic</p>
                    <div className="mb-8">
                        <div className="dropdown">
                            <select name="category" className="p-4 shadow menu bg-slate-100 rounded-lg w-full">
                                <option value='Profile Management'>Profile Management</option>
                                <option value='Application Process'>Application Process</option>
                                <option value='Profile Optimization'>Profile Optimization</option>
                                <option value='Technical Support'>Technical Support</option>
                                <option value='Troubleshooting'>Troubleshooting</option>
                                <option value='Privacy'>Privacy</option>
                                <option value='Others'>Others</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-control w-52 mb-8">
                        <label className="label cursor-pointer">
                            <span className="label-text">Are you a member</span>
                            <input type="checkbox" name="check" defaultChecked className="checkbox checkbox-[#13131308]" />
                        </label>
                    </div>
                    <p className="mb-2">Elaborate You Concerns</p>
                    <textarea name="description" className="textarea textarea-bordered w-full" placeholder=""></textarea>
                    <button className="bg-[#ff3811] text-white px-5 py-3 rounded-xl btn">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contacts;