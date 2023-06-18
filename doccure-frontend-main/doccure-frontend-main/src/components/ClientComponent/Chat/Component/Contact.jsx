import React, { useEffect, useState } from "react";
import { getuserList } from "../../../../Api/services/Conversation";
import img from "../../../../Assets/blank-profile-picture-g05926a0d9_640.png"

function Contact({ conversation, currentuser, token }) {
  const [user, setUser] = useState(null);

  const getuser = async (friendId) => {
    try {
      const response = await getuserList(friendId, token);
      if (response.data.success) {
        setUser(response.data.user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentuser);
    getuser(friendId);
    // eslint-disable-next-line 
  }, [conversation, currentuser]);


  return (
    <>
      <div class="flex flex-row py-3 px-2 items-center border-b-2 border-l-2 hover:bg-slate-200 rounded-lg">
        <div class="w-1/4 ">
          <img
            src={user?.photo ? user?.photo :img}
            class="object-cover h-12 w-12 rounded-full"
            alt=""
          />
        </div>
        <div class="w-full">
          <div class="text-lg font-semibold">{user?.name ? user?.name :user?.username}</div>
          <span class="text-gray-500 text-xs">fsf</span>
        </div>
      </div>

      {/* <div class="flex flex-row py-4 px-2 items-center border-b-2 border-l-2">
        <div class="w-1/4">
          <img
            src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
            class="object-cover h-12 w-12 rounded-full"
            alt=""
          />
        </div>
        <div class="w-full">
          <div class="text-lg font-semibold">Jhone doe</div>
          <span class="text-gray-500 text-xs">Start Chat by Taping</span>
        </div>
      </div>

      <div class="flex flex-row py-4 px-2 items-center border-b-2 border-l-2">
        <div class="w-1/4">
          <img
            src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
            class="object-cover h-12 w-12 rounded-full"
            alt=""
          />
        </div>
        <div class="w-full">
          <div class="text-lg font-semibold">MERN Stack</div>
          <span class="text-gray-500">Lusi : Thanks Everyone</span>
        </div>
      </div> */}
    </>
  );
}

export default Contact;
