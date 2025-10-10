import { reverseText, changeCase, countCharacters } from './functions/textTools.js';

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const action = url.searchParams.get('action');
    const text = url.searchParams.get('text') || '';

    let result;
    switch (action) {
      case 'reverse':
        result = reverseText(text);
        break;
      case 'upper':
      case 'lower':
      case 'title':
        result = changeCase(text, action);
        break;
      case 'count':
        result = `Character count: ${countCharacters(text)}`;
        break;
      default:
        result = 'Invalid action';
    }

    return new Response(result, { headers: { 'Content-Type': 'text/plain' } });
  },
};
