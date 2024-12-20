"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface Comment {
  id: string;
  author: string;
  text: string;
}

const CommentSection = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);

  const handleAddComment = () => {
    if (newComment.trim() && authorName.trim()) {
      const newCommentObj: Comment = {
        id: new Date().toISOString(),
        author: authorName,
        text: newComment,
      };
      setComments([...comments, newCommentObj]);
      setNewComment("");
      setAuthorName("");
    }
  };

  const handleEditComment = (commentID: string) => {
    const commentToEdit = comments.find((comment) => comment.id === commentID);
    if (commentToEdit) {
      setNewComment(commentToEdit.text);
      setAuthorName(commentToEdit.author);
      setEditingCommentId(commentID);
    }
  };

  const handleSaveEditedComments = () => {
    if (newComment.trim() && authorName.trim() && editingCommentId) {
      const updatedComments = comments.map((comments) =>
        comments.id === editingCommentId
          ? {
              ...comments,
              text: newComment,
              author: authorName,
            }
          : comments
      );
      setComments(updatedComments);
      setNewComment("");
      setAuthorName("");
      setEditingCommentId(null);
    }
  };
  return (
    <div className="mt-12 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 rounded-lg p-6 shadow-xl">
  <h2 className="text-3xl font-extrabold text-purple-700 mb-6 text-center">
     Comments Section 
  </h2>
  <div className="space-y-6">
    {comments.length > 0 ? (
      comments.map((comment) => (
        <div
          key={comment.id}
          className="bg-white border-l-4 border-purple-400 rounded-lg p-4 shadow-md transform hover:scale-105 transition-transform"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="h-10 w-10 bg-purple-500 text-white flex items-center justify-center rounded-full">
                {comment.author.charAt(0).toUpperCase()}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-purple-800">
                {comment.author}
              </h3>
              <p className="text-gray-700 mt-2">{comment.text}</p>
            </div>
          </div>
          <div className="mt-4 text-right">
            <Button
              onClick={() => handleEditComment(comment.id)}
              className="bg-purple-500 text-white py-1 px-4 rounded-full text-sm shadow-md hover:bg-purple-700 transition-all"
            >
              ✏️ Edit
            </Button>
          </div>
        </div>
      ))
    ) : (
      <p className="text-gray-500 italic text-center">
        No Comments Yet! 📝 Start the conversation below.
      </p>
    )}
  </div>
  <div className="mt-10">
    <h3 className="text-2xl font-bold text-purple-700 mb-4 text-center">
      Add Your Comment 💬
    </h3>
    <Input
      type="text"
      placeholder="Your Name"
      className="w-full mb-4 px-4 py-3 border border-purple-300 rounded-lg shadow-sm text-purple-800 focus:ring-2 focus:ring-purple-400"
      value={authorName}
      onChange={(e) => setAuthorName(e.target.value)}
    />
    <textarea
      placeholder="Your Comment"
      className="w-full mb-4 px-4 py-3 border border-purple-300 rounded-lg shadow-sm text-purple-800 focus:ring-2 focus:ring-purple-400 resize-none"
      rows={3}
      value={newComment}
      onChange={(e) => setNewComment(e.target.value)}
    >
    </textarea>
    <Button
      onClick={
        editingCommentId ? handleSaveEditedComments : handleAddComment
      }
      className="w-full py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-700 transition-transform"
    >
      {editingCommentId ? "✨ Save Changes ✨" : "🚀 Submit Comment"}
    </Button>
  </div>
</div>
  );
};

export default CommentSection;
