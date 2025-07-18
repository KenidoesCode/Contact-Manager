const asyncHandler=require("express-async-handler");
const Contact=require("../models/contactModel");

//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler(async(req, res)=>{
  const contacts=await Contact.find({user_id:req.user_id});
  res.status(200).json(contacts);
});
    
//@desc Create new contact
//@route POST /api/contacts
//@access private
const createContact = asyncHandler(async(req, res)=>{
    console.log("the request body is :",req.body);
    const{name,email,phone}=req.body;
    if(!name || !email || !phone){
      res.status(400);
      throw new Error("All fields are mandatory!");
    }
    const contact=await Contact.create({
      user_id:req.user.id,
      name,
      email,
      phone,
    });
  res.status(201).json(contact);
}); 

//@desc Get a single contact by ID
//@route GET /api/contacts/:id
//@access private
const getContact = asyncHandler(async(req, res)=>{
  const contact=await Contact.findById(req.params.id);
  if(!contact){
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
});

//@desc Update a contact
//@route PUT /api/contacts/:id  
//@access private
const updateContact = asyncHandler(async(req, res)=>{
   const contact=await Contact.findById(req.params.id);
  if(!contact){
    res.status(404);
    throw new Error("Contact not found");
  }

  if(contact.user_id.toString()!== req.user.id){
    res.status(403);
    throw new Error("User dont have permission to update other users");
  }
  const updatedContact=await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new:true}
  );
  res.status(200).json(updatedContact);
});

//@desc Delete a contact
//@route DELETE /api/contacts/:id
//@access private
const deleteContact = asyncHandler(async (req, res)=>{
  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  if(contact.user_id.toString()!== req.user.id){
    res.status(403);
    throw new Error("User dont have permission to update other users");
  }
  await contact.deleteOne(); // ← remove that specific document

  res.status(200).json(contact); // or you can send a success message
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};