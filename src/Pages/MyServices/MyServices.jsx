import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyServiceCard from "../../Components/myServiceCard/myServiceCard";
import Swal from "sweetalert2";

const MyServices = () => {
  const { user, loading } = useContext(AuthContext);
  const [myServices, setMyServices] = useState([]);

  useEffect(() => {
    if (!loading) {
      axios
        .get(`http://localhost:3000/myServices?email=${user?.email}`)
        .then((res) => setMyServices(res.data))
        .catch((error) => console.log(error));
      // fetch(`http://localhost:3000/myServices?email=${user?.email}`)
      //   .then((res) => res.json())
      //   .then((data) => setMyServices(data))
      //   .catch((error) => console.log(error));
    }
  }, [loading, user]);
  console.log(myServices);

  const handleDelete = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton:
          "rounded-lg py-[9px] bg-red-500 hover:bg-opacity-80 px-[16px] text-white text-[18px] font-semibold normal-case ml-[16px]",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true, // Show the "Cancel" button
        confirmButtonText: "Delete",
        cancelButtonText: "Cancel", // Remove the exclamation mark
        reverseButtons: true, // Swap the positions of the buttons
      })
      .then((result) => {
        if (result.isConfirmed) {
          // User confirmed the deletion, so make the axios delete request.
          axios
            .delete(`http://localhost:3000/myService/${id}`)
            .then((res) => {
              // Handle the success response from the delete request.
              console.log(res.data);
              swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remainingServices = myServices.filter(
                (service) => service._id !== id
              );
              setMyServices(remainingServices);
            })
            .catch((error) => {
              // Handle errors from the delete request.
              console.log(error);
              swalWithBootstrapButtons.fire({
                title: "Error",
                text: "An error occurred while deleting the file.",
                icon: "error",
              });
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your service is not deleted",
            icon: "error",
          });
        }
      });
  };

  return (
    <div>
      <div className="max-w-[1400px] px-2 mx-auto mb-[40px] mt-[40px]">
        <div className="flex flex-col items-center justify-center gap-6">
          {myServices?.map((service, idx) => (
            <MyServiceCard
              key={idx}
              handleDelete={handleDelete}
              service={service}
            ></MyServiceCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyServices;
