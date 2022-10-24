module.exports = (mongoose) => {
  let schema = mongoose.Schema(
    {
      email: String,
      password: String,
      phoneNumber: String,
    role:[],
    address: String,
    name: String,
      fcm:String,
       
    
    

      resetPasswordToken: String,
      resetPasswordExpires: Date,
     

    },

    { timestamps: true }
  );
  schema.index({"$**" : "text"})

  const User = mongoose.model("user", schema);
  return User;
};
