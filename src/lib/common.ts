import { Student } from "@/interfaces/student";
import { CreateStudentSchemaT } from "@/pages/CreateStudent";

export const transformToStudentObj = (values: CreateStudentSchemaT) => {
    const student: Student = {
        address: values.address,
        average_marks: +values.average_marks,
        contact_no: values.contact_no,
        dob: new Date(
            +values.dob.split("-")[0],
            +values.dob.split("-")[1] - 1,
            +values.dob.split("-")[2]
        ).toISOString().slice(0, 19).replace('T', ' '),
        email: values.email,
        name: values.name,
        no_of_modules_completed: +values.no_of_modules_completed,
    };
    return student;
}
