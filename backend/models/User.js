import mongoose from 'mongoose'; import bcrypt from 'bcryptjs'; import validator from 'validator'
const userSchema=new mongoose.Schema({name:{type:String,required:true,trim:true},email:{type:String,required:true,unique:true,lowercase:true,validate:validator.isEmail},phone:{type:String,required:true},password:{type:String,required:true,minlength:8,select:false},role:{type:String,enum:['citizen','admin','department'],default:'citizen'},district:String,city:String,avatar:String,isActive:{type:Boolean,default:true},trustScore:{type:Number,default:70}},{timestamps:true})
userSchema.pre('save',async function(){ if(!this.isModified('password')) return; this.password=await bcrypt.hash(this.password,12) })
userSchema.methods.matchPassword=function(p){ return bcrypt.compare(p,this.password) }
export default mongoose.model('User',userSchema)
