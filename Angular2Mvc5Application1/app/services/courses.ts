export class CoursesService {
    getCourses(): Course[] {
        return [{ name: "metalogy", likes: 12, month: 10, year: 1982 }, { name: "philosophy", likes: 3, month: 3, year: 1977 }];
    }
}

export class Course {
    month: number;
    year: number;
    name: string;
    likes: number;
}