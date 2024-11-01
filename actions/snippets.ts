"use server";

// import { createAdminClient } from "@/appwrite/config";
// import { z } from "zod";

// const createSnippetSchema = z.object({
//   title: z.string().min(3, {
//     message: "title must be at least 3 characters.",
//   }),
//   code: z.string().min(10, {
//     message: "code must be at least 10 characters.",
//   }),
//   type: z.string().min(3, {
//     message: "type must be at least 3 characters.",
//   }),
//   password: z.string().min(3, {
//     message: "password must be at least 3 characters.",
//   }),
// });

// interface CreateSnippetFormState {
//   errors: {
//     title?: string[];
//     code?: string[];
//     type?: string[];
//     password?: string[];
//     _form?: string[];
//   };
// }

async function createSnippet() {
  console.log("first");
  // if (formData.get("password") !== process.env.NEXT_PUBLIC_PASSWORD!) {
  //   return {
  //     errors: {
  //       password: ["Unauthorized: password don't match"],
  //     },
  //   };
  // }

  // const result = createSnippetSchema.safeParse({
  //   title: formData.get("title"),
  //   code: formData.get("code"),
  //   type: formData.get("type"),
  //   password: formData.get("type"),
  // });

  // if (!result.success) {
  //   return {
  //     errors: result.error.flatten().fieldErrors,
  //   };
  // }

  // try {
  //   return {
  //     errors: {
  //       _form: ["Failed to create snippet"],
  //     },
  //   };
  // } catch (error) {
  //   console.log(error);
  //   return {
  //     errors: {
  //       _form: ["Failed to create snippet"],
  //     },
  //   };
  // }
}

export default createSnippet ;
