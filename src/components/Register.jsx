import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";


const Register = () => {
    const {createUser}=useContext(AuthContext)
    const navigate=useNavigate()
    const handleSubmite=(e)=>{
        e.preventDefault()
        const name=e.target.name.value
        const photo=e.target.photo.value
        const email=e.target.email.value
        const password=e.target.password.value
        console.log(name,photo,email,password)
        if(!/^(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)){
          return alert('password have one uppercase and lower case and 8 character must  ')
        }
        
        createUser(email,password)
        .then(result=>{
          console.log(result.user)
          navigate('/')
          // update 
          updateProfile(result.user,{
            displayName:name,photoURL:photo
            
          })
          .then(()=>console.log('profile updated'))
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Create user",
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch(error=>{
          console.error(error)
        })
    }    
    
    return (
        <div>
               <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-3xl font-bold">Registration Now </h1>
     
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmite}  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text"  name='name' placeholder="Name..." className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoURL</span>
          </label>
          <input type="text" name="photo" placeholder="URL" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className="relative">
          <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
          
          </div>
          
        </div>
        <div>
            <h1>Already Have a Account? <span className="text-xl font-bold text-green-500"><Link to='/login'>Login</Link></span></h1>
        </div>
        <div className="form-control mt-6">
          <button className="btn  bg-[#F5F4ED]">sign up</button>
        </div>
      </form>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Register;