import React, { useEffect, useState } from "react";
import service from "../appwrite/config";
import { Container, PostCard } from "../components/index.js";

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        service.getPosts().then((posts) => {
        if (posts) {
            setPosts(posts.documents);
        }
        });
    }, []);

    if (posts.length === 0) {
        return (
        <div class="flex-col gap-4 w-full h-[100vh] flex items-center justify-center">
        <div class="w-28 h-28 border-8 text-blue-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-blue-400 rounded-full">
            <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1em"
            width="1em"
            class="animate-ping"
        >
            <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"></path>
            </svg>
        </div>
    </div>
        );
    }
    return (
        <div className="w-full min-h-[90vh] py-8">
        <Container>
            <div className="flex flex-col md:flex-row flex-wrap">
            {posts.map((post) => (
                <div key={post.$id} className="p-2 w-1/4">
                <PostCard {...post} />
                </div>
            ))}
            </div>
        </Container>
        </div>
    );
}

export default Home;
