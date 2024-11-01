"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import createSnippet  from "@/actions/snippets";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const createSnippetSchema = z.object({
  title: z.string().min(3, {
    message: "title must be at least 3 characters.",
  }),
  code: z.string().min(10, {
    message: "code must be at least 10 characters.",
  }),
  type: z.string().min(3, {
    message: "type must be at least 3 characters.",
  }),
  password: z.string().min(3, {
    message: "password must be at least 3 characters.",
  }),
});
const CreateSnippetForm = () => {
  const form = useForm<z.infer<typeof createSnippetSchema>>({
    resolver: zodResolver(createSnippetSchema),
    defaultValues: {
      title: "",
      code: "",
      type: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof createSnippetSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    createSnippet()
  }

  return (
    <section className="bg-gray-100 dark:bg-black-800 flex justify-center items-center flex-1">
      <Form {...form} >
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="min-w-[700px] bg-white dark:bg-black shadow sm:rounded-lg p-6 space-y-3"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter a title for your snippet"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Code</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Paste your code here"
                    className="font-mono"
                    rows={10}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type</FormLabel>
                <FormControl>
                  <Input  placeholder="Enter a type for your snippet" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Enter password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </section>
  );
};

export default CreateSnippetForm;
// "use client";

// import { Input } from "@/components/ui/input";
// // import { Label } from "@/components/ui/label";
// import { Button } from "@/components/ui/button";
// // import { Textarea } from "@/components/ui/textarea";
// import { useActionState } from "react";
// import { createSnippet, createSnippetSchema } from "@/actions/snippets";
// // import { ReloadIcon } from "@radix-ui/react-icons";
// import { useForm } from "react-hook-form";
// import * as z from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import {
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";

// const Form = () => {
//   const [state,action]=useActionState(createSnippet,{errors:{}})
//   const form = useForm<z.infer<typeof createSnippetSchema>>({
//     resolver: zodResolver(createSnippetSchema),
//     defaultValues: {
//       title: "",
//       code:"",
//       type:"",
//     },
//   })
//   console.log(state)

//   return (
//     <section className="bg-gray-100 dark:bg-black-800 flex justify-center items-center flex-1">
//     <Form {...form}>
//       <form action={action} className="w-2/3 space-y-6">
//         <FormField
//           control={form.control}
//           name="title"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Username</FormLabel>
//               <FormControl>
//                 <Input placeholder="shadcn" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="code"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Username</FormLabel>
//               <FormControl>
//                 <Input placeholder="shadcn" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="type"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Username</FormLabel>
//               <FormControl>
//                 <Input placeholder="shadcn" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <Button type="submit">Submit</Button>
//       </form>
//     </Form>
//       {/* <form
//         action={action}
//         className="min-w-[700px] bg-white dark:bg-black shadow sm:rounded-lg p-6"
//       >
//         <div className="space-y-6">
//           Title Field
//           <div>
//             <Label htmlFor="title">Title</Label>
//             <Input
//               id="title"
//               name="title"
//               placeholder="Enter a title for your snippet"
//               required
//               className={`${
//                 errors?.title ? "border-red-500 focus:ring-red-500" : ""
//               }`} // Apply error styles if title has error
//             />
//             {errors?.title && (
//               <p className="text-sm text-red-600 mt-1">{errors.title}</p>
//             )}
//           </div>

//           Code Field
//           <div>
//             <Label htmlFor="code">Code</Label>
//             <Textarea
//               id="code"
//               name="code"
//               placeholder="Paste your code here"
//               className={`font-mono ${
//                 errors?.code ? "border-red-500 focus:ring-red-500" : ""
//               }`} // Apply error styles if code has error
//               rows={10}
//               required
//             />
//             {errors?.code && (
//               <p className="text-sm text-red-600 mt-1">{errors.code}</p>
//             )}
//           </div>

//           Type Field
//           <div>
//             <Label htmlFor="type">Type</Label>
//             <Input
//               id="type"
//               name="type"
//               placeholder="Enter a type for your snippet"
//               required
//               className={`${
//                 errors?.type ? "border-red-500 focus:ring-red-500" : ""
//               }`} // Apply error styles if type has error
//             />
//             {errors?.type && (
//               <p className="text-sm text-red-600 mt-1">{errors.type}</p>
//             )}
//           </div>

//           Password Field
//           <div>
//             <Label htmlFor="password">Password</Label>
//             <Input
//               id="password"
//               name="password"
//               placeholder="Enter password"
//               required
//               className={`${
//                 errors?.password ? "border-red-500 focus:ring-red-500" : ""
//               }`} // Apply error styles if password has error
//             />
//             {errors?.password && (
//               <p className="text-sm text-red-600 mt-1">{errors.password}</p>
//             )}
//           </div>

//           Submit Button
//           <Button type="submit" className="w-full" disabled={isPending}>
//             {isPending && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
//             Create Snippet
//           </Button>
//         </div>
//       </form> */}
//     </section>
//   );
// };

// export default Form;
