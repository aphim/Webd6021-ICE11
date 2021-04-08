import express, { Request, Response, NextFunction } from 'express';

// Contact Model
import Contact from "../Models/contact";

//display page
export function DisplayContactListPage(req:Request, res:Response, next:NextFunction):void
{
    // db.contacts.find()
    Contact.find(function(err, contacts){
        if(err)
        {
          return console.error(err);
        }
        res.render('index', { title: 'Contact List', page: 'contact-list', contacts: contacts, displayName: 'temp'  });
      });
}

export function DisplayEditPage(req:Request, res:Response, next:NextFunction):void
{

}

export function DisplayAddPage(req:Request, res:Response, next:NextFunction):void
{

}

//process page

export function ProcessEditPage(req:Request, res:Response, next:NextFunction):void
{

}

export function ProcessAddPage(req:Request, res:Response, next:NextFunction):void
{

}

export function ProcessDeletePage(req:Request, res:Response, next:NextFunction):void
{

}