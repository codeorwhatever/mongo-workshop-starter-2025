import { Contact } from "./contact-schema.js";


/**
 * Retrieves all contacts from the database.
 *
 * @returns a list of contacts
 */
export async function retrieveContacts() {
  const contacts = await Contact.find({});
  return contacts;
}

/**
 * Creates a new contact.
 *
 * @param contact the contact to create. Must have a name. optionally a phoneNumber and funFact.
 * @returns the newly created contact, including a uniquely generated _id value.
 * @throws error if the contact has no name, or a non-unique name.
 */
export async function createContact(contactData) {
 const dbContact= new Contact(contactData);
 await dbContact.save();
 return dbContact;
}

/**
 * Updates the contact with the given _id.
 * @param id the id to search
 * @param contact the update info
 * @returns true if a contact was updated, false otherwise.
 * @throws error if trying to update the contact's name to another name that's already taken.
 */
export async function updateContact(id, updateData) {
  const updatedContact = await Contact.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true
  });
  return updatedContact;
}

/**
 * Deletes the contact with the given id, if any.
 *
 * @param id the id to search
 */
export async function deleteContact(id) {
  await Contact.findByIdAndDelete(id);
}
