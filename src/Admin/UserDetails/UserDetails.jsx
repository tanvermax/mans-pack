import React from 'react';

const UserDetails = () => {
    return (
        <div>
            <ul className="list bg-base-100  shadow-md p-10" >
                <h2 className='text-3xl'> All Users</h2>
                {/* <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Most played songs this week</li> */}

                <li className="list-row">
                    <div className="text-4xl font-thin opacity-30 tabular-nums">01</div>
                    <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp" /></div>
                    <div className="list-col-grow">
                        <div>Dio Lupa</div>
                        <div className="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
                    </div>
                    <button className="btn btn-square btn-ghost">
                    Edit
                        
                    </button>
                </li>

                <li className="list-row">
                    <div className="text-4xl font-thin opacity-30 tabular-nums">02</div>
                    <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/4@94.webp" /></div>
                    <div className="list-col-grow">
                        <div>Ellie Beilish</div>
                        <div className="text-xs uppercase font-semibold opacity-60">Bears of a fever</div>
                    </div>
                    <button className="btn btn-square btn-ghost">
                    Edit
                    </button>
                </li>

                <li className="list-row">
                    <div className="text-4xl font-thin opacity-30 tabular-nums">03</div>
                    <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/3@94.webp" /></div>
                    <div className="list-col-grow">
                        <div>Sabrino Gardener</div>
                        <div className="text-xs uppercase font-semibold opacity-60">Cappuccino</div>
                    </div>
                    <button className="btn btn-square btn-ghost">
                        Edit
                    </button>
                </li>

            </ul>
        </div>
    );
};

export default UserDetails;