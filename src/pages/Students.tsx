import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { getStudents } from "../lib/data/student";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";

export default function Students() {
  const [students, setStudents] = useState<any[]>([]);

  useEffect(() => {
    const fetchStudentData = async () => {
      const usersData = await getStudents();
      console.log("🚀 ~ fetchStudentData ~ usersData:", usersData);
      setStudents(usersData);
    };

    fetchStudentData();
  }, []);

  return (
    <>
      <div className="flex flex-row justify-between">
        <h1 className="text-2xl font-bold">Students</h1>
        <Button className="mr-2" size="sm">
          Create User
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Contact No</TableHead>
            <TableHead>DOB</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Modules Completed</TableHead>
            <TableHead>Average Marks</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students?.map((student) => {
            return (
              <TableRow>
                <TableCell className="font-medium">{student.name}</TableCell>
                <TableCell>{student.email}</TableCell>
                <TableCell>{student.contact_no}</TableCell>
                <TableCell>{student.dob}</TableCell>
                <TableCell>{student.address}</TableCell>
                <TableCell>{student.no_of_modules_completed}</TableCell>
                <TableCell>{student.average_marks}</TableCell>
                <TableCell>
                  <Button className="mr-2" size="sm">
                    Edit
                  </Button>
                  <Button size="sm" variant="destructive">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}
