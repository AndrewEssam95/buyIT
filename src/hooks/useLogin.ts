import { useNavigate, useSearchParams } from "react-router-dom";
import { loginSchema, TLoginTypes } from "../validations/loginSchema";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actLoginAuth, resetUI } from "@store/auth/authSlice";
import { useEffect } from "react";

const useLogin = () => {
  const dispatch = useAppDispatch();
  const { accessToken } = useAppSelector((state) => state.registerAuth);

  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      dispatch(resetUI());
    };
  }, [dispatch]);

  const [searchParams, setSearchParams] = useSearchParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginTypes>({
    mode: "onSubmit",
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<TLoginTypes> = async (data) => {
    if (searchParams.get("message")) {
      setSearchParams("");
    }

    dispatch(actLoginAuth(data))
      .unwrap()
      .then(() => navigate("/"));
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    searchParams,
    accessToken,
  };
};

export default useLogin;
