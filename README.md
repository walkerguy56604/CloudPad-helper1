# CloudPad-helper1
cloudpad-helper1/
├── functions/
│   └── textTools.js
├── index.js
├── package.json
└── README.md
# CloudPad Helper 1

This is the first helper in the CloudPad suite, providing text transformation utilities via a Cloudflare Worker.

## Available Actions

- `reverse`: Reverses the input text.
- `upper`: Converts the input text to uppercase.
- `lower`: Converts the input text to lowercase.
- `title`: Converts the input text to title case.
- `count`: Returns the character count of the input text.

## Deployment

1. Clone this repository to your local machine.
2. Deploy to Cloudflare Workers using the [Cloudflare Wrangler CLI](https://developers.cloudflare.com/workers/cli-wrangler/).

## Shortcut Integration

Use the following URL format in your Shortcut to call this Worker:
