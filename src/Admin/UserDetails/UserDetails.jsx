import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {

    const users = useLoaderData() || [];

    console.log(users);


    return (
        <div>
            <ul className="list bg-base-100  shadow-md p-10" >
                <h2 className='text-3xl'> All Users</h2>
                {/* <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Most played songs this week</li> */}

                {
                    users.map(alluser => <li key={alluser._id} className="list-row">
                        <div className="text-4xl font-thin opacity-30 tabular-nums">1</div>
                        <div>
                            
                            <img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp" />
                            </div>
                        <div className="list-col-grow">
                            <div>{alluser.userName}</div>
                            <div className="text-xs uppercase font-semibold opacity-60">{alluser.email}</div>
                        </div>
                        <div className='text-xs uppercase font-semibold opacity-60'>
                            {alluser.role}
                        </div>
                        <button className="btn btn-square btn-ghost">
                            Edit

                        </button>
                    </li>)
                }





            </ul>
        </div>
    );
};

export default UserDetails;