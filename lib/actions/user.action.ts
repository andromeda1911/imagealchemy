'use server'
import { connectToDb } from "../database/mongoose";
import User from "../models/user.model";

export const createUser = async (user) => {
  try {
    await connectToDb();
    const newUser = await User.create(user);
    return JSON.parse(newUser);
  } catch (error) {
    console.log(error);
  }
};

export const getUserById = async(userId) => {
    try {
        await connectToDb();
        const user = await User.findOne({clerkId: userId});
        if(!user) throw new Error('user not found');
        return JSON.parse(user);
    } catch (error) {
        console.log(error);
    }
}

export const updateUser = async(clerkId, user) => {
    try {
        await connectToDb();
        const updatedUser = await User.findByIdAndUpdate({clerkId}, user, {new: true});
        if(!updatedUser) throw new Error('udpation failed');
        return JSON.parse(updatedUser);
    } catch (error) {
        console.log(error);
    }
}

export const deleteUser = async(clerkId) => {
    try {
        await connectToDb();
        const userToDelete = await User.findOne({clerkId});
        if(!userToDelete) throw new Error('Deletion failed')
        const deleted = await User.findOneAndDelete(userToDelete._id);
    return JSON.parse(deleted);
    } catch (error) {
        console.log(error);
    }
}

export const updateCredits = async(userId, credits) => {
    try {
        await connectToDb();
        const updated = await User.findByIdAndUpdate({_id: userId}, {$inc: {creditBalance: credits}}, {new: true})
        if(!updated) throw new Error('credits updation failed')
        return JSON.parse(updated);
    } catch (error) {
        console.log(error);
    }
}