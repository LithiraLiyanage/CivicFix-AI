import jwt from 'jsonwebtoken'; import User from '../models/User.js'
const sign=id=>jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'7d'})
export async function register(req,res,next){ try{ const user=await User.create(req.body); res.status(201).json({token:sign(user._id),user:{...user.toObject(),password:undefined}})}catch(e){next(e)} }
export async function login(req,res,next){ try{ const {email,password}=req.body; const user=await User.findOne({email}).select('+password'); if(!user || !(await user.matchPassword(password))) return res.status(401).json({message:'Invalid credentials'}); res.json({token:sign(user._id),user:{...user.toObject(),password:undefined}})}catch(e){next(e)} }
export async function me(req,res){ res.json({user:req.user}) }
