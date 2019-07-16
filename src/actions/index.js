export const FETCH_MESSAGES = 'FETCH_MESSAGES';

export function fetchMessages(channel) {
    const url = `https://wagon-chat.herokuapp.com/${channel}/messages`;
    const promise = fetch(url).then(response => response.json());
    return {
        type: FETCH_MESSAGES,
        payload: promise
    };
}
