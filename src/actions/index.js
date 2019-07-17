export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const CREATE_MESSAGE = 'CREATE_MESSAGE';

export function fetchMessages(channel) {
    const url = `https://wagon-chat.herokuapp.com/${channel}/messages`;
    const promise = fetch(url).then(response => response.json());
    return {
        type: FETCH_MESSAGES,
        payload: promise
    };
}
export function createMessage(channel, author, content) {
    const message = {author: author, content: content};
    // fetch post with new message
    const url = `https://wagon-chat.herokuapp.com/${channel}/messages`;
    const promise = fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
      }).then(r => r.json());
      return {
        type: CREATE_MESSAGE,
        payload: promise
    };
  }
