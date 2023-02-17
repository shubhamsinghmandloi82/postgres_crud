const nodemailer = require('nodemailer')
const bcrypt = require("bcryptjs");
const { genSalt } = require('bcrypt');
const client = require('../config/db')

module.exports.createSuperAdmin = async (req,res)=>{
    try{
        let {email,name,password,confirmPassword,phone,address} = req.body
        if(password==confirmPassword){
        let UserDetail = await client.query(
            `SELECT * FROM superadmin WHERE email='${email}'`
          );
         
          if(UserDetail.rows.length==0){
              console.log(`INSERT INTO superadmin(email,name,phone,password,address)
              VALUES(${email},${name},${password},${phone},${address})`);
              let data = await client.query(
                  `INSERT INTO superadmin(email,name,phone,password,address)
                  VALUES('${email}','${name}','${password}','${phone}','${address}')`
              )
          }else{
              res.status(400).json({
                  success:false,
                  message:"super admin already exists"
              })
          }
        }else{
            res.status(400).json({
                success:false,
                message:"passwords does not match"
            })
        }
    }catch(err){
        res.status(400).json({
            success:false,
            message:err.message
        })
    }
}