import * as zod from "zod";

const registerSchema = zod
  .object({
    firstName: zod.string().min(1, { message: "First Name is Required." }),
    lastName: zod.string().min(1, { message: "Last Name is Required." }),
    email: zod
      .string()
      .min(1, { message: "Email Address is Required." })
      .email(),
    password: zod.string().min(1, { message: "Password is required" }),
    confirmPassword: zod
      .string()
      .min(1, { message: "Confirm Password is Required." }),
  })
  .refine((input) => input.password === input.confirmPassword, {
    message: "Password and Confirm Password dont match.",
    path: ["confirmPassword"],
  });

type TRegisterTypes = zod.infer<typeof registerSchema>;

export { registerSchema, type TRegisterTypes };
