import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const CreateStudentSchema = z.object({
  name: z.string().min(1, {
    message: "Required",
  }),
  email: z.string().email(),
  contact_no: z.string().min(1, {
    message: "Required",
  }),
  address: z.string().min(1, {
    message: "Required",
  }),
  dob: z.string().min(1, {
    message: "Required",
  }),
  no_of_modules_completed: z.string().min(1, {
    message: "Required",
  }),
  average_marks: z.string().min(1, {
    message: "Required",
  }),
});

export default function CreateStudent() {
  const form = useForm<z.infer<typeof CreateStudentSchema>>({
    resolver: zodResolver(CreateStudentSchema),
    defaultValues: {
      name: "",
      email: "",
      contact_no: "",
      address: "",
      dob: "",
      no_of_modules_completed: "",
      average_marks: "",
    },
  });

  const onSubmit = (values: z.infer<typeof CreateStudentSchema>) => {
    console.log("🚀 ~ onSubmit ~ e:", values);
    //
  };

  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-10 my-20">
      <h1 className="text-2xl font-bold text-center">Create New Student</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contact_no"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dob"
            render={({ field }) => (
              <FormItem>
                <FormLabel>DOB</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="no_of_modules_completed"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Modules Completed</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="average_marks"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Average Marks</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="mx-auto block">
            Create
          </Button>
        </form>
      </Form>
    </div>
  );
}
