import React from 'react';

export default function Story({ story, trigger, setTrigger }) {
  return trigger ? (
    <div className="story">
      <div className="story-inner">
        <p>Title: {story.title}</p>
        <p>Author: {story.author}</p>
        <p>{story.story}</p>
        <button onClick={() => setTrigger(false)}>Close</button>
      </div>
    </div>
  ) : (
    ''
  );
}
