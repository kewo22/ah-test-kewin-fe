export interface Student {
    address: string;
    average_marks: number;
    contact_no: string;
    dob: string;
    email: string;
    name: string;
    no_of_modules_completed: number;
}
export interface StudentResponse extends Student {
    id: number
    created_at: string
    updated_at: number
    deleted_at: string | null
}