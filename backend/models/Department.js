import mongoose from 'mongoose'
const departmentSchema=new mongoose.Schema({name:{type:String,required:true},type:String,email:String,phone:String,district:String,officer:{type:mongoose.Schema.Types.ObjectId,ref:'User'},isActive:{type:Boolean,default:true},transparency:{type:Number,default:80}},{timestamps:true})
export default mongoose.model('Department',departmentSchema)
