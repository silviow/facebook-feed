import React from "react";
import { PostContainer } from "./styles";

function PostHeader({ author, date }) {
  return (
    <div className="header">
        <img
            className="avatar"
            src={author.avatar}
            alt={`${author.name.split(" ")}'s avatar`}
        />
        <div className="details">
            <h4>{author.name}</h4>
            <span>{date}</span>
        </div>
    </div>
  );
}

function PostContent({ content }) {
    return (
        <p className="post-content">{content}</p>
    );
}

function PostComments({ comments }) {
    return (
        <div className="post-comments">
            <div className="divider" />
            {comments.map(comment => (
                <div key={comment.id} className="comment">
                    <div className="header">
                        <img
                            className="avatar"
                            src={comment.author.avatar}
                            alt={`${comment.author.name.split(" ")}'s avatar`}
                        />
                        <div className="details comment-details">
                            <h4>{comment.author.name}</h4>
                            <p className="comment-content">{comment.content}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default function Post({ author, date, content, comments }) {
    return (
        <PostContainer>
            <PostHeader author={author} date={date} />
            <PostContent content={content} />
            <PostComments comments={comments} />
        </PostContainer>
    );
}
