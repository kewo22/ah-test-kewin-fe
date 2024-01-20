import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { storeStudents } from "@/lib/data/student";
import { transformToStudentObj } from "@/lib/common";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import StudentForm from "@/components/shared/StudentForm";

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
  dob: z.string().min(1, { message: "Required" }),
  no_of_modules_completed: z.string().min(1, {
    message: "Required",
  }),
  average_marks: z.string().min(1, {
    message: "Required",
  }),
});

export type CreateStudentSchemaT = z.infer<typeof CreateStudentSchema>;

export default function CreateStudent() {
  const { toast } = useToast();

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

  const onSubmit = async (values: CreateStudentSchemaT) => {
    const transformed = transformToStudentObj(values);
    const res = await storeStudents(transformed);
    if (res) {
      toast({
        title: "Success",
        description: "Student saved successfully",
        className: cn(
          "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4 bg-green-500 text-white"
        ),
      });
    } else {
      toast({
        title: "Failed",
        description: "Student save failed",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-10 my-20">
      <h1 className="text-2xl font-bold text-center">Create New Student</h1>
      <StudentForm form={form} onSubmit={onSubmit} />
    </div>
  );
}
