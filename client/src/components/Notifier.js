import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Notifier = ({ message }) => {
    const notify = () => {
        toast.success(message);
    };

    if (message) {
        notify(message);
    }

    return (
        <div>
            <ToastContainer />
        </div>
    );
};
