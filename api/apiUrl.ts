const API_URL = `https://sms-vv4i.onrender.com/api/v1`
const LOGGEDIN = (uid: string) => `${API_URL}/schools/${uid}`
export const LOGIN = `${API_URL}/login`
export const SIGNUP = `${API_URL}/signup`
// export const STUDENTS = (id: string)=> `${LOGGEDIN (id)}/students`
export const TEACHERS = (schoolId) =>`${LOGGEDIN(schoolId)}/staffs`; //Add and get teachers
export const GETSCHOOL = (school) => `${API_URL}/schools/${school}`
export const LOGIN_URL =(schoolId)=> `${API_URL}/schools/${schoolId}/token`;

export const STUDENTS = (schoolId: any, off: any) => `${LOGGEDIN(schoolId)}/students?limit=10&offset=${off}`; //Add and get students
export const STUDENT = (schoolId, studentId) => `${LOGGEDIN(schoolId)}/students/${studentId}`; // get single student
export const TEACHER = (schoolId, teacherId) => `${TEACHERS(schoolId)}/${teacherId}`; //get singe teacher

export const GET_COURSES = (schoolId) =>`${LOGGEDIN(schoolId)}/courses`; // get and courses
export const HOMEROOMS = (schoolId) =>`${LOGGEDIN(schoolId)}/classes`; // get and classes

export const HOMEROOM = (schoolId, classId) => `${HOMEROOMS(schoolId)}/${classId}`; //get single class
export const CLASSSTUDENTS = (schoolId, classId) => `${HOMEROOM(schoolId, classId)}/students` // get a single course
export const CLASSPIN = (schoolId, classId) =>`${LOGGEDIN(schoolId)}/students/${classId}/result-pin`; // get student result pins

// export const STUDENTS = (schoolId) =>`${LOGGED_IN(schoolId)}/students`; //Add and get students
// export const VERIFY_OTP = (schoolId) => `${API_URL}/schools/${schoolId}/otp`
// export const CHANGE_PASSWORD =(schoolId,uid)=> `${API_URL}/schools/${schoolId}/user-activate/${uid}`
// export const REGISTER_URL = `${API_URL}/register`;
// export const STUDENTSCOUNT = (schoolId) =>`${LOGGED_IN(schoolId)}/metadata`; //Add and get students
// export const SENDMESSAGE = (schoolId) =>`${LOGGED_IN(schoolId)}/send-message`; //Add and get students
// export const BIRTHDAYS = (schoolId) =>`${LOGGED_IN(schoolId)}/birthdays`; //Add and get students
// export const TEACHERBIRTHDAYS = (schoolId) =>`${LOGGED_IN(schoolId)}/birthdays?role=Teacher`; //Add and get students
// export const HOMEROOM = (schoolId, classId) => `${HOMEROOMS(schoolId)}/${classId}`; //get single class
// export const STUDENTPAYMENT = (schoolId, studentId) => `${STUDENT(schoolId, studentId)}/payments`
// // export const TEACHERACCOUNT = `${TEACHER(teacher_id)}`; //get singe teacher
// export const TEACHERCOURSES = (schoolId, teacherId) => `${TEACHERS(schoolId)}/${teacherId}/courses`; //get singe teacher
// // export const TEACHER_COURSES = `${TEACHERCOURSES(teacher_id)}`
// export const STUDENTCOURSES = (schoolId, studentId) => `${STUDENTS(schoolId)}/${studentId}/courses`; //get singe teacher

// export const HOMEROOMCOURSES = (schoolId, classId) => `${HOMEROOMS(schoolId)}/${classId}/courses`; //get singe teacher
// export const PAYMENTS = (schoolId) =>`${LOGGED_IN(schoolId)}/payments`; // get and make payments
// export const PAYMENT = (schoolId, paymentId) => `${PAYMENTS(schoolId)}/${paymentId}`; //get a single payment
// export const COURSE = (schoolId, courseId) => `${GET_COURSES(schoolId)}/${courseId}`;
// export const  COURSESTUDENTS = (schoolId, id) => `${GET_COURSES(schoolId)}/${id}/students`
// export const GRADE = (schoolId, id) => `${STUDENT(schoolId, id)}/grade`
// export const RESULTS = (schoolId, id) => `${STUDENT(schoolId, id)}/result`
// export const VIEW_RESULT = (slug, id) => `${API_URL}/schools/${slug}/students/${id}/result-slug`
// export const SENDRESULTS = (schoolId, classId) => `${API_URL}/schools/${schoolId}/classes/${classId}/send-result`
// export const ADDBILL = (schoolId, classId) => `${API_URL}/schools/${schoolId}/classes/${classId}/bills`
// export const GETBILL = (schoolId) => `${API_URL}/schools/${schoolId}/bills`
// export const GETSTUDENTBILL = (schoolId, studentId) => `${API_URL}/schools/${schoolId}/students/${studentId}/bills`
// export const STUDENTBASIC = (schoolId) => `${API_URL}/schools/${schoolId}/students-basic`
// export const ADDOUTSTANDING = (schoolId, studentId) => `${API_URL}/schools/${schoolId}/custom-fee`
// export const ADDDISCOUNT = (schoolId, studentId) => `${API_URL}/schools/${schoolId}/custom-fee`
// export const GETOUTSTANDING = (schoolId) => `${API_URL}/schools/${schoolId}/debt`
// export const GETDISCOUNT = (schoolId) => `${API_URL}/schools/${schoolId}/school_fee`

