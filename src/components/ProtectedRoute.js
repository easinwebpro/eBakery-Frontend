import React from 'react';
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { PageLoader } from './Loader';

export const IsAuthenticated = ({ children }) => {
    const router = useRouter();
    const { data: session, status } = useSession();
    console.log('I am From IsAuthenticated', session)

    if (session?.user && status === "authenticated" && session?.jwt) {
        return (children);
    } else {
        router.push("/auth/login");
    }
};

export const UnAuthenticated = ({ children }) => {
    const router = useRouter();
    const { data: session, status } = useSession();
    if ( !session?.user && status === "unauthenticated" && !session?.jwt) {
        return (children);
    } else {
        router.push("/");
        return <PageLoader/>
    }
};