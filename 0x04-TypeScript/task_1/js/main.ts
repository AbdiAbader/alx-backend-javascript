interface Teacher {
    firstName: string;
    lastName: string;
    readonly fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; // index signature to allow any additional attribute
  }

  interface Directors extends Teacher {
    numberOfReports: number;
    }

const printTeacher = (firstName: string, lastName: string) => {
    console.log(`${firstName[0]}. ${lastName}`);
  }
  interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
    }
class StudentClass {
    fullName: string;
    constructor(
      public firstName: string,
      public lastName: string
    )
    {}
    workOnHomework() {
        return 'Currently working';
    }
    displayName() {
        return this.fullName;
    }

}