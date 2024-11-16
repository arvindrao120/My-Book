import User from "../model/user.model.js";

const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const user = await User.findOne({email});
    if(user){
        res.status(200).json({message:"User Is Already Exist"})
    }
    const createUser = new User({
        fullname:fullname,
        email:email,
        password:password
    })
    res.status(201).json({message:"user created successfuly"})
    await createUser.save()
  } catch (error) {
    // console.log("error :" + error);
    res.status(500).json({message:"Internal server Error"})

  }
 
};
export default signup;
