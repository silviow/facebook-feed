import React, { Component } from "react";
import { Container } from "./styles";
import Post from "../../components/Post";

export default class Feed extends Component {
    constructor() {
        super();

        this.state = {
            posts: [
                {
                    id: 1,
                    author: {
                        name: "Vanessa Romero",
                        avatar: "https://i.pravatar.cc/150?img=1"
                    },
                    date: "04 Jun 2019",
                    content: "Guys, does anyone know if Rocketseat is hiring?",
                    comments: [
                        {
                            id: 2,
                            author: {
                                name: "Diego Fernandes",
                                avatar: "https://avatars2.githubusercontent.com/u/2254731?v=4"
                            },
                            date: "04 Jun 2019",
                            content: "Rocketseat is always looking for new members for the team, and we usually keep an eye on who stands out in the bootcamp, in fact, 80% of our dev team is made up of students from the GoStack bootcamp!"
                        }
                    ]
                },
                {
                    id: 3,
                    author: {
                        name: "Neil Cook",
                        avatar: "https://i.pravatar.cc/150?img=8"
                    },
                    date: "04 Jun 2019",
                    content: "Hey guys. I'm doing GoStack and it's been really cool! Anyone else doing it?",
                    comments: [
                        {
                            id: 4,
                            author: {
                                name: "Clara Lisboa",
                                avatar: "https://i.pravatar.cc/150?img=5"
                            },
                            date: "04 Jun 2019",
                            content: "I'm also doing the bootcamp and I'm loving it! I'm in the third module and I already have my API built!"
                        },
                        {
                            id: 5,
                            author: {
                                name: "Cézar Toledo",
                                avatar: "https://i.pravatar.cc/150?img=11"
                            },
                            date: "04 Jun 2019",
                            content: "I'm thinking of signing up for the next class to see what GoStack is like, they say that devs leave there with super powers!"
                        }
                    ]
                },
            ]
        };
    }

    render() {
        return (
        <Container>
            <section>
                {this.state.posts.map(post => (<Post key={post.id} {...post} />))}
            </section>
        </Container>
        );
    }
}
