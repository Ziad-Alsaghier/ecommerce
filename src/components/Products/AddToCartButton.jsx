"use client";

import { useState } from "react";
import { FiPlus, FiCheck } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import AuthModal from "@/components/ui/Modals/AuthModal"; // create this

export default function AddToCartButton({ product }) {
    const [added, setAdded] = useState(false);
    const [showModal, setShowModal] = useState(false);

    function addToCart() {
        const token = localStorage.getItem("token"); // or your auth key

        if (!token) {
            setShowModal(true);
            return;
        }

        console.log("Adding to cart:", product);

        setAdded(true);
        setTimeout(() => setAdded(false), 1500);
    }

    return (
        <>
            <Button
                onClick={addToCart}
                className={`flex items-center justify-center gap-2 px-4 py-5 rounded-full w-full transition
                    ${added ? "bg-green-700" : "bg-green-600 hover:bg-green-700"}
                `}
            >
                {added ? <FiCheck size={18} /> : <FiPlus size={18} />}
            </Button>

            {showModal && (
                <AuthModal onClose={() => setShowModal(false)} />
            )}
        </>
    );
}