import { Box, Button } from "@mui/material";

export default function DashboardInfo({
  userInfo: { username, name, email, address, phone },
}) {
  return (
    <>
      <div className="flex flex-col gap-3 justify-center">
        <div className="">
          username: <span className="font-normal">{username}</span>
        </div>
        <div className="">
          firstname: <span className="font-normal">{name.firstname}</span>
        </div>
        <div className="">
          lastname: <span className="font-normal">{name.lastname}</span>
        </div>
        <div className="">
          phone: <span className="font-normal">{phone}</span>
        </div>
        <div className="">
          city: <span className="font-normal">{address.city}</span>
        </div>
        <div className="">
          street: <span className="font-normal">{address.street}</span>
        </div>
        <div className="">
          zipcode: <span className="font-normal">{address.zipcode}</span>
        </div>
        <div className="">
          email: <span className="font-normal">{email}</span>
        </div>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Button variant="contained" color="secondary">
            shop
          </Button>
          <Button variant="contained" color="secondary">
            logout
          </Button>
        </Box>
      </div>
    </>
  );
}
// address
//   geolocation
//        lat	"-37.3159"
//        long	"81.1496"
//   city	"kilcoole"
//   street	"new road"
//   number	7682
//   zipcode	"12926-3874"
// id	1
// email	"john@gmail.com"
// username	"johnd"
// password	"m38rmF$"
// name
//    firstname	"john"
//    lastname	"doe"
// phone	"1-570-236-7033"
