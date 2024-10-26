import * as zod from "zod";

const loginSchema = zod.object({
  email: zod.string().min(1, { message: "Email Address is Required." }).email(),
  password: zod.string().min(1, { message: "Password is required" }),
});

type TLoginTypes = zod.infer<typeof loginSchema>;

export { loginSchema, type TLoginTypes };
