export default interface PostData {
  id?: number;
  firstName: string;
  lastName: string;
  age: number | "";
  email: string;
  phone: number | string;
  category: string;
  message: string;
}
