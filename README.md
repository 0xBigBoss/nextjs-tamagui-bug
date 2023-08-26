
# Next.js 13.4.10 breaks useSyncExerternalStore

See <https://github.com/vercel/next.js/issues/52707>

## How to reproduce

1. Clone this repo
2. Run `yarn install`
3. Run `yarn web:prod && yarn web:prod:serve`
4. Open <http://localhost:8151> in a mobile browser or small device.
5. See client side exception error `Cannot read properties of undefined (reading 'length')`
