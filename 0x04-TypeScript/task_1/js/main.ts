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
    