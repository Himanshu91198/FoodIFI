import { Outlet } from "react-router-dom";
import homeBackGround from "../assets/images/Group 8484.png";
import { Button } from "../components/Buttons/Button";
import { ButtonType } from "../props/Button/IButtonProps";
import logo from "../assets/images/foodIFI_logo.jpg";
import search from "../assets/images/search.png";
import { useForm } from "react-hook-form";
import Input from "../components/Inputs/Input";
import { ISearchRestaurantsRequest } from "../models/request/ISearchRestaurantsReqeust";

export default function HomeLayout() {
  const form = useForm<ISearchRestaurantsRequest>({
    defaultValues: {
      location: "",
      restaurant: "",
    },
  });

  return (
    <div>
      <div className="relative">
        <img className="w-full" src={homeBackGround} alt="food-home-bg-image" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="flex items-center justify-end my-5 mx-20">
            <p className="text-white mr-8">Login</p>
            <Button
              buttonType={ButtonType.Primary}
              id="create-account"
              onClick={() => console.log("create account")}
              key={"create-account"}
            >
              Create an account
            </Button>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img className="rounded-full md:h-48" src={logo} alt="logo-image" />
            <h2 className="text-white text-3xl !font-poppins-semibold tracking-wider mt-8">
              Find the best restaurants, cafés, and bars
            </h2>
            <div className="grid grid-cols-12 gap-5 mt-10 w-1/2">
              <div className="col-span-4">
                <Input<ISearchRestaurantsRequest>
                  id=""
                  name="location"
                  placeHolder="Please type a location"
                  register={form.register}
                />
              </div>
              <div className="col-span-8">
                <Input<ISearchRestaurantsRequest>
                  id=""
                  name="restaurant"
                  placeHolder="Search for restaurants"
                  img={search}
                  register={form.register}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
