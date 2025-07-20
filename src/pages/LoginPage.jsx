import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, TextField } from "@mui/material";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import useLogin from "../hooks/useLogin";
import { useTokenStore } from "../hooks/useTokenStore";
import { useImmer } from "use-immer";
const schema = yup.object({
  username: yup
    .string()
    .min(4, "you need 4 letters or numbers at least!!")
    .required("you need to enter your username!!"),
  password: yup
    .string()
    .min(5, "password must have at least 5 characters!!")
    .required("you need to enter your password"),
});

export default function LoginPage() {
  const [invalidValues, setInvalidValues] = useImmer("");
  const navigate = useNavigate();
  const { token, setToken } = useTokenStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), mode: "onSubmit" });
  const { mutateAsync } = useLogin();
  async function submit(data) {
    try {
      const result = await mutateAsync({
        username: data.username,
        password: data.password,
      });
      Cookies.set("token", result.token);
      setToken(result.token);
    } catch (error) {
      setInvalidValues(error.response.data);
      setTimeout(() => {
        setInvalidValues("");
      }, 3000);
      console.log("catch", error.response.data);
    }
  }
  return (
    <>
      <div className="flex items-center md2:justify-center max-md2:justify-around max-sm:justify-start md2:gap-52   sm:flex-row flex-col  w-full bg-gray-400 min-h-screen  ">
        <img
          onClick={() => navigate("/")}
          src="/logo.png"
          className="w-[200px] cursor-pointer  mt-32 sm:mt-0"
          alt=""
        />
        <div className="h-96 sm:block hidden   border-2 border-black opacity-40"></div>
        <form
          onSubmit={handleSubmit(submit)}
          className="flex flex-col  gap-6 justify-center items-center w-max "
        >
          username
          <TextField
            {...register("username")}
            placeholder="username"
            type="text"
            helperText={
              !!errors?.username?.message
                ? `${errors?.username?.message}`
                : "" || `${invalidValues}`
            }
          />
          <TextField
            {...register("password")}
            placeholder="password"
            type="password"
            helperText={
              !!errors?.password?.message ? `${errors?.password?.message}` : ""
            }
          />
          <Button variant="contained" type="submit" sx={{ width: "100%" }}>
            Login
          </Button>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              onClick={() => navigate("/")}
              sx={{ width: "max-content" }}
              variant="contained"
              color="secondary"
            >
              back to shop
            </Button>
            <Button
              sx={{ width: "max-content" }}
              variant="contained"
              color="secondary"
            >
              sign up
            </Button>
          </Box>
        </form>
      </div>
    </>
  );
}
