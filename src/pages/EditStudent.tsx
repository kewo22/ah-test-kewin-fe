import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import StudentForm from "@/components/shared/StudentForm";
import { transformToStudentObj } from "@/lib/common";
import { editStudents, getStudent } from "@/lib/data/student";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

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

export default function EditStudent() {
  const { id } = useParams();
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

  useEffect(() => {
    const fetchStudentData = async () => {
      const res = await getStudent();
      if (res) {
        form.setValue("name", res.name);
        form.setValue("address", res.address);
        form.setValue("contact_no", res.contact_no);
        form.setValue("dob", res.dob);
        form.setValue("email", res.email);
        form.setValue("average_marks", res.average_marks.toString());
        form.setValue(
          "no_of_modules_completed",
          res.no_of_modules_completed.toString()
        );
      }
    };

    fetchStudentData();
  }, []);

  const onSubmit = async (values: CreateStudentSchemaT) => {
    const transformed = transformToStudentObj(values);
    console.log("🚀 ~ onSubmit ~ transformed:", transformed);
    const res = await editStudents(id!, transformed);
    if (res) {
      toast({
        title: "Success",
        description: "Student edited successfully",
        className: cn(
          "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4 bg-green-500 text-white"
        ),
      });
    } else {
      toast({
        title: "Failed",
        description: "Student edit failed",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-10 my-20">
      <h1 className="text-2xl font-bold text-center">Edit Student</h1>
      <StudentForm form={form} onSubmit={onSubmit} submitBtnText="Edit" />
    </div>
  );
}
