import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        _id :{ type: String , requierd: true},
        name :{ type: String , requierd: true},
        email:{ type: String , requierd: true},
        imageUrl: {type: String , requierd: true},
        enrolledCourses:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Course'
            }
        ],
    },
    {timestamps: true});

    const User = mongoose.model('User', userSchema);

export default User