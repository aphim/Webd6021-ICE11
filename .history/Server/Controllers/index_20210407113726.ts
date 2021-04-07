import express, { Request, Response, NextFunction } from 'express';
const router = express.Router();

import mongoose from 'mongoose';
import passport from 'passport';

//create user model
import User from '../Models/user';

//Display Page Functions
export function DisplayHomePage(req:Request, res:Response, next:NextFunction) :void
{

}

//Process Page Functions