// userData.js

import { Student, StudentResponse } from "@/interfaces/student";
import { DELETE, GET, POST, PUT } from "../service/api";

export const getStudents = async () => {
    try {
        const response: StudentResponse[] = await GET();
        return response;
    } catch (error) {
        console.log("🚀 ~ getUsers ~ error:", error)
        // Handle error...
    }
};

export const getStudent = async () => {
    try {
        const response: StudentResponse = await GET('1');
        return response;
    } catch (error) {
        console.log("🚀 ~ getUsers ~ error:", error)
        // Handle error...
    }
};

export const storeStudents = async (data: Student) => {
    try {
        const response: any = await POST(data);
        return response;
    } catch (error) {
        console.log("🚀 ~ getUsers ~ error:", error)
        // Handle error...
    }
};

export const editStudents = async (id: string, data: Student) => {
    try {
        const response: any = await PUT(id, data);
        return response;
    } catch (error) {
        console.log("🚀 ~ getUsers ~ error:", error)
        // Handle error...
    }
};

export const deleteStudent = async (id: string) => {
    try {
        const response: any = await DELETE(id);
        console.log("🚀 ~ getUsers ~ response:", response)
        return response;
    } catch (error) {
        console.log("🚀 ~ getUsers ~ error:", error)
        // Handle error...
    }
};