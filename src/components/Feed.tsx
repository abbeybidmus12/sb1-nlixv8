import React from 'react';
import { MessageCircle } from 'lucide-react';

const Feed = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Feed</h2>
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4">Welcome to the NewUK community</h3>
        <p className="text-gray-700 mb-4">
          Inside NewUK's community, newcomers to the UK come together to meet and support
          one another, get answers to burning questions, and build thriving connections.
          You'll also have access to exclusive resources, help from the NewUK team, and
          weekly events from other community members.
        </p>
        <h4 className="text-lg font-semibold mb-2">How do I join?</h4>
        <p className="text-gray-700 mb-4">
          To join the NewUK community, you need to create an account. Once you
          sign up, you will automatically receive an invite to the community and unlock all spaces.
        </p>
        <h4 className="text-lg font-semibold mb-2">Where can I learn more?</h4>
        <p className="text-gray-700 mb-4">
          We'd be happy to give you a personal tour of NewUK. Find a spot <a href="#" className="text-blue-600 hover:underline">here</a> to chat with
          a member of our team. You can also browse our <a href="#" className="text-blue-600 hover:underline">knowledge base</a> and all our
          latest <a href="#" className="text-blue-600 hover:underline">community updates</a>.
        </p>
      </div>
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4">Latest Community Posts</h3>
        <ul className="space-y-4">
          <li className="border-b border-gray-200 pb-4">
            <h4 className="font-semibold">Tips for opening a UK bank account</h4>
            <p className="text-gray-600 text-sm">Posted by Sarah M. • 2 hours ago</p>
            <div className="flex items-center mt-2 text-gray-500">
              <MessageCircle size={16} className="mr-1" />
              <span className="text-sm">12 comments</span>
            </div>
          </li>
          <li className="border-b border-gray-200 pb-4">
            <h4 className="font-semibold">Understanding the NHS: A guide for newcomers</h4>
            <p className="text-gray-600 text-sm">Posted by Dr. James • 1 day ago</p>
            <div className="flex items-center mt-2 text-gray-500">
              <MessageCircle size={16} className="mr-1" />
              <span className="text-sm">28 comments</span>
            </div>
          </li>
          <li>
            <h4 className="font-semibold">Upcoming event: Job fair for international professionals</h4>
            <p className="text-gray-600 text-sm">Posted by NewUK Team • 3 days ago</p>
            <div className="flex items-center mt-2 text-gray-500">
              <MessageCircle size={16} className="mr-1" />
              <span className="text-sm">5 comments</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Feed;