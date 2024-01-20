import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { deleteStudent, getStudents } from "../lib/data/student";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { StudentResponse } from "@/interfaces/student";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";

export default function Students() {
  const navigate = useNavigate();
  const { toast } = useToast();

  const [students, setStudents] = useState<StudentResponse[]>([]);

  useEffect(() => {
    fetchStudentData();
  }, []);

  const fetchStudentData = async () => {
    const res = await getStudents();
    if (res) setStudents(res);
  };

  const onCreateUserClick = () => {
    navigate("create");
  };

  const onEditClick = (student: StudentResponse) => {
    navigate(`student/edit/${student.id}`);
  };

  const onDeleteClick = async (student: StudentResponse) => {
    const res = await deleteStudent(student.id.toString());
    if (res) {
      fetchStudentData();

      toast({
        title: "Success",
        description: "Student deleted successfully",
        className: cn(
          "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4 bg-green-500 text-white"
        ),
      });
    } else {
      toast({
        title: "Failed",
        description: "Student delete failed",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="max-w-7xl mx-auto my-20 flex flex-col gap-10">
      <div className="flex flex-row justify-between">
        <h1 className="text-2xl font-bold">Students</h1>
        <Button className="mr-2" size="sm" onClick={onCreateUserClick}>
          Create User
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-48">Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Contact No</TableHead>
            <TableHead className="w-32">DOB</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Modules Completed</TableHead>
            <TableHead>Average Marks</TableHead>
            <TableHead className="w-40">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students?.map((student, i) => {
            return (
              <TableRow key={i}>
                <TableCell className="font-medium">{student.name}</TableCell>
                <TableCell>{student.email}</TableCell>
                <TableCell>{student.contact_no}</TableCell>
                <TableCell>{student.dob}</TableCell>
                <TableCell>{student.address}</TableCell>
                <TableCell>{student.no_of_modules_completed}</TableCell>
                <TableCell>{student.average_marks}</TableCell>
                <TableCell>
                  <Button
                    className="mr-2"
                    size="sm"
                    onClick={() => {
                      onEditClick(student);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => {
                      onDeleteClick(student);
                    }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </section>
  );
}
