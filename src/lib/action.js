"use server";

export async function createComment(formData) {
  console.log(formData.get("text"));
}
