// reference type : object

const user: {
  readonly organization: string; // access modifier
  // organization: "Programming Hero"; // value type -> literal types
  firstName: string;
  middleName?: string; // optional type
  lastName: string;
  isMarried: boolean;
} = {
  organization: "Programming Hero",
  firstName: "Jhankar",
  lastName: "Mahbub",
  isMarried: true,
};

user.organization = "Programming Hero Fire";

console.log(user);

console.log(user);
