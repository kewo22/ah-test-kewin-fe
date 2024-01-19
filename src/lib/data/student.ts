// userData.js

import { GET } from "../service/api";

export const getStudents = async () => {
    try {
        const response: any = await GET();
        console.log("🚀 ~ getUsers ~ response:", response)
        return response;
    } catch (error) {
        console.log("🚀 ~ getUsers ~ error:", error)
        // Handle error...
    }
};